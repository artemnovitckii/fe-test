import React, { useState } from "react";
import TextInput from "../Input/TextInput";
import "./Form.scss";

interface FormProps {
  onSubmit: (formData: FormData) => void;
  formTitle: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
}

//change to nz cities
const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

const Form: React.FC<FormProps> = ({ onSubmit, formTitle }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
  });
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* title */}
      <div className="form__title">{formTitle}</div>
      {/* Left Hand Side */}
      <div className="form__group-container">
        {/* First Name  */}
        <div className="form__group">
          <TextInput
            id="firstName"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            className="form__input"
            required={true}
          />
        </div>
        {/* Last Name  */}
        <div className="form__group">
          <TextInput
            id="lastName"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            className="form__input"
            required={true}
          />
        </div>
      </div>

      {/* Right Hand side */}
      <div className="form__group-container">
        {/* Email Address  */}
        <div className="form__group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="form__input"
            required
          />
        </div>
        {/* Cities dropdown  */}
        <div className="form__group">
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          >
            <option disabled selected hidden value="">
              City
            </option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button type="submit" className="form__button">
        Submit
      </button>
    </form>
  );
};

export default Form;
