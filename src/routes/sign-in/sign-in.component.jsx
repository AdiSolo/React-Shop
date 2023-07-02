import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumenFromAuth,
  auth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumenFromAuth(user);
  };

  return (
    <>
      <div>You are signed in.</div>
      <button onClick={logGoogleUser}>Sign In with Google</button>
      <SignUpForm />
    </>
  );
};
export default SignIn;
