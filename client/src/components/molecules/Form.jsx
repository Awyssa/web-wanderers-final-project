import React from "react";
//import Input from "../atoms/Input";

const Form = ({ onSubmit, onChange }) => {
  return (
    <div className="sign-up-from">
      <form onSubmit={onsubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          onChange={(e) => onChange("firstName", e.target.value)}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          onChange={(e) => onChange("lastName", e.target.value)}
        />

        <label htmlFor="email">Email Address</label>
        <input
          name="email"
          onChange={(e) => onChange("email", e.target.value)}
        />

        <label>Choose a Password </label>
        <input
          name="password"
          onChange={(e) => onChange("password", e.target.value)}
        />

        <label>Phone Number </label>
        <input
          name="phone"
          onChange={(e) => onChange("phone", e.target.value)}
        />
      </form>
      {/*{Object.entries(formData).map((formField, index) => (
        <Input
          key={index}
          placeholder={formField[0]}
          value={formField[1]}
          type={
            formField[0].includes("email")
              ? "email"
              : formField[0].includes("phone")
              ? "tel"
              : "text"
          }
          handleChange={(event) =>
            handleChange(formField[0], event.target.value)
          }
        />
        ))}*/}
    </div>
  );
};

export default Form;
