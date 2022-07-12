import React, { useState } from "react";
import Button from "../atoms/Button";
import Form from "../molecules/Form";

const SignUp = ({ date, time, job }) => {
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      await fetch(" ", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch (error) {
      console.log("Error", error);
      setError(error);
    }
  };

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleLogin = async (event) => {};

  return (
    <div className="sign-up">
      <div>
        <h3>Sign Me Up For</h3>
        <p>date:{date}</p> <p>time:{time}</p>
        <p>{job}</p>
      </div>
      <div>
        <h3>My Contact Info</h3>
        {/*<Form formData={form} setFormData={setForm} />*/}
        <Form onSubmit={handleSubmit} onChange={handleChange} />
        <div className="have-account-login">
          <p>Already have an account?</p>
          <Button handleClick={handleLogin} text="Login" />
        </div>
        <Button handleClick={handleSubmit} text="Sign Up Now!" />
        {error ? <p>{error}</p> : null}
      </div>
    </div>
  );
};

export default SignUp;
