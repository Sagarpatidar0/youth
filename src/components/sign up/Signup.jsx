
import "./Signup.css";
function Signup() {
  const inlinestyle = {
    height: "18px",
    Width: "18px",
  };

  return (
    <>
      <div className="lo-container">
        <div className="lo-header">
          <img src="./images/title/6-removebg-preview (1).png" />
          <h1>WELCOME TO YOUTHSPIRE</h1>
        </div>
        <div className="lo-form-container">
          <div className="box">
            <form action="#">
              <div className="wrapper">
                <div className="first-2">
                  <div className="input-group">
                    <label>Name</label>
                    <input
                      type="text"
                      id="username"
                      name="Name"
                      placeholder=""
                      required
                    />
                  </div>

                  <div className="input-group">
                    <label>Email</label>
                    <input
                      type="text"
                      id="Email"
                      name="Name"
                      placeholder=""
                      required
                    />
                  </div>
                </div>

                <div className="last-2">
                  <div className="input-group">
                    <label>Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder=""
                      required
                    />
                  </div>

                  <div className="input-group">
                    <label>Create password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder=""
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
                    style={inlinestyle}
                    name=""
                  />
                  <label htmlFor="terms">Accept terms and conditions</label>
                </div>
                <button type="submit">SIGN UP</button>
              </div>
            </form>
          </div>
          <div className="links">
            <a href="#">Already have an account? log in</a>
          </div>
        </div>
        <div className="footer">
          <img src="./images/title/6-removebg-preview (1).png" />
          <img src="./images/title/7-removebg-preview (1).png" />
          <img src="./images/title/8-removebg-preview (1).png" />
          <img src="./images/title/9-removebg-preview (1).png" />
          <img src="./images/title/10-removebg-preview (1).png" />
          <img src="./images/title/11-removebg-preview (1).png" />
          <img src="./images/title/12-removebg-preview (1).png" />
          <img src="./images/title/13-removebg-preview (1).png" />
          <img src="./images/title/14-removebg-preview (1).png" />
          <img src="./images/title/15-removebg-preview (1).png" />
        </div>
      </div>
    </>
  );
}

export default Signup;
