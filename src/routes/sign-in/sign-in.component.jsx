import {
  signInWithGooglePopup,
  createUserDocumenFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumenFromAuth(user);
  };
  return (
    <>
      <div>You are signed in.</div>
      <button onClick={logGoogleUser}>Sign In with Google</button>
    </>
  );
};
export default SignIn;
