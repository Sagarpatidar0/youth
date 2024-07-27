import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.termsAccepted) {
      console.log('Form Submitted:', formData);
      // Perform signup API call
    } else {
      alert('Please accept the terms and conditions.');
    }
  };

  const inlinestyle = {
    height: "18px",
    width: "18px",
  };

  return (
    <>
      <div className="lo-container">
        <div className="lo-header">
          <img src="./images/title/6-removebg-preview (1).png" alt="Logo" />
          <h1>WELCOME TO YOUTHSPIRE</h1>
        </div>
        <div className="lo-form-container">
          <div className="box">
            <form onSubmit={handleSubmit}>
              <div className="wrapper">
                <div className="first-2">
                  <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="last-2">
                  <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="password">Create password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="checkbox">
                <div className="check">
                  <input
                    type="checkbox"
                    id="terms"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                    style={inlinestyle}
                  />
                  <label htmlFor="terms">Accept terms and conditions</label>
                </div>
                <button type="submit">SIGN UP</button>
              </div>
            </form>
          </div>
          <div className="links">
            <Link to="/login">Already have an account? Log in</Link>
          </div>
        </div>
        <div className="footer" id="youthlogo-footer-login">
          <img src="./images/title/6-removebg-preview (1).png" alt="Logo 1" />
          <img src="./images/title/7-removebg-preview (1).png" alt="Logo 2" />
          <img src="./images/title/8-removebg-preview (1).png" alt="Logo 3" />
          <img src="./images/title/9-removebg-preview (1).png" alt="Logo 4" />
          <img src="./images/title/10-removebg-preview (1).png" alt="Logo 5" />
          <img src="./images/title/11-removebg-preview (1).png" alt="Logo 6" />
          <img src="./images/title/12-removebg-preview (1).png" alt="Logo 7" />
          <img src="./images/title/13-removebg-preview (1).png" alt="Logo 8" />
          <img src="./images/title/14-removebg-preview (1).png" alt="Logo 9" />
          <img src="./images/title/15-removebg-preview (1).png" alt="Logo 10" />
        </div>
      </div>
    </>
  );
}

export default Signup;
