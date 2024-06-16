import { useState } from "react";
import SocialLinks from "./social/SocialLinks";

const AccountForm = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("YOUR_BACKEND_ENDPOINT_ACCOUNT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Data saved successfully!");
      } else {
        alert("Failed to save data.");
      }
    } catch (error) {
      alert("Error:", error);
    }
  };

  return (
    <>
      <form className="setting-form" onSubmit={handleSubmit}>
        <div className="basic-form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="basic-form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="basic-form-group">
          <button className="setting-btn" type="submit">
            Save
          </button>
        </div>
      </form>
      <SocialLinks/>
    </>
  );
};

export default AccountForm;
