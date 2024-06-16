import { useState } from "react";

const countries = ["India", "United States", "Canada", "United Kingdom", "Australia"];

const BasicForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    profession: "",
    state:"",
    country: "",
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
    console.log(formData);
    // try {
    //   const response = await fetch("YOUR_BACKEND_ENDPOINT_BASIC", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   if (response.ok) {
    //     alert("Data saved successfully!");
    //   } else {
    //     alert("Failed to save data.");
    //   }
    // } catch (error) {
    //   alert("Error:", error);
    // }
  };

  return (
    <form className="setting-form" onSubmit={handleSubmit}>
      <div className="basic-form-group">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="basic-form-group">
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="basic-form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="basic-form-group">
        <label>Contact</label>
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />
      </div>
      <div className="basic-form-group">
        <label>Profession</label>
        <input
          type="text"
          name="profession"
          value={formData.profession}
          onChange={handleChange}
        />
      </div>
      <div className="basic-form-group">
        <label>State</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
      </div>
      <div className="basic-form-group">
        <label>Country</label>
        <select name="country" value={formData.country} onChange={handleChange}>
        <option value="" disabled>Select your country</option>
        {countries.map((country) => (
          <option key={country} value={country}>{country}</option>
        ))}
      </select>
      </div>
      <div className="basic-form-group">
      <button className="setting-btn"  type="submit">Save</button>
      </div>
    </form>
  );
};

export default BasicForm;
