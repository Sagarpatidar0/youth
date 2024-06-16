import { useState } from 'react';

const EmailForm = () => {
  const [formData, setFormData] = useState({
    general: false,
    productUpdates: false,
    newsletter: false
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('YOUR_BACKEND_ENDPOINT_EMAIL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Data saved successfully!');
      } else {
        alert('Failed to save data.');
      }
    } catch (error) {
      alert('Error:', error);
    }
  };

  return (
    <form id='email-form' className="setting-form"  onSubmit={handleSubmit}>
      <label>
        <input type="checkbox" name="general" checked={formData.general} onChange={handleChange} />
        General
      </label>
      <label>
        <input type="checkbox" name="productUpdates" checked={formData.productUpdates} onChange={handleChange} />
        Product updates and community announcements
      </label>
      <label>
        <input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleChange} />
        Member newsletter
      </label>
      <button className="setting-btn" type="submit">Save</button>
    </form>
  );
};

export default EmailForm;
