import { Link } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username && password) {
      console.log('Form Submitted:', { username, password });
      // Perform login API call
    } else {
      alert('Please fill in both fields.');
    }
  };

  return (
    <>
      <div className="lo-container">
        <div className="lo-header">
          <img src="./images/title/6-removebg-preview (1).png" alt="Logo" />
          <h1>WELCOME TO YOUTHSPIRE</h1>
        </div>
        <div className="lo-form-container">
          <div className="login-box">
            <form id="login-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Phone number, username or email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button id="login-btn" type="submit">Log in</button>
            </form>
            <div className="button-group">
              <Link className="Google" to="#">
                Log in with Google
              </Link>
              <Link className="x" to="#">
                Log in with X
              </Link>
              <Link className="Facebook" to="#">
                Log in with Facebook
              </Link>
            </div>
          </div>
          <div className="links">
            <Link href="#">Forgot password?</Link>
            <Link to="/signup">Don&apos;t have an account? Sign up</Link>
          </div>
        </div>
        <div className="footer">
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

export default Login;
