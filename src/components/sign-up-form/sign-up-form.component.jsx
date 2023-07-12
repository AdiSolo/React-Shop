import { useState } from "react";
import {
  createUserDocumenFromAuth,
  createUserWithEmailAndPasswords,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-up-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [FormFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = FormFields;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...FormFields, [name]: value });
    console.log(FormFields);
  };
  const resetFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password doesnt match");
      return;
    }
    try {
      const { user } = await createUserWithEmailAndPasswords(email, password);

      await createUserDocumenFromAuth(user, { displayName });
      resetFields();
    } catch (error) {
      console.log("user creation encounteret an error", error);
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with you email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display name"
          type="text"
          placeholder=" "
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="Email"
          type="email"
          placeholder=" "
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          placeholder=" "
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FormInput
          label="Confirma Password"
          type="password"
          placeholder=" "
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
