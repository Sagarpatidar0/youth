import "./Signup.css"

function Signup() {
  return (
    <div id="form-img">
      <div className="form-container">
        <div className="form-main-text">
          <h2>WELCOME TO YOUTSPHIRE</h2>
          <p>sign up here</p>
        </div>
        <form id="signup-form">
          <div className="form-group">
            <label htmlFor="name">NAME</label>
            <input type="text" required aria-label="First name" />
          </div>
          <div className="form-group">
            <label htmlFor="emali">Email</label>
            <input type="email" required aria-label="emali" />
          </div>
          <div className="form-group">
            <label htmlFor="name">USERNAME</label>
            <input type="text" required aria-label="user name" />
          </div>
          <div className="form-group">
            <label htmlFor="name">Create Password</label>
            <input type="password" required aria-label="create password" />
          </div>
          <div className="form-group">
            <div id="checkbox">
              <input
                className="form-check-input"
                type="checkbox"
                id="FieldsetCheck"
                required
              />
              <label className="form-check-label" htmlFor="disabledFieldsetCheck">
                Accept terms and condition*
              </label>
            </div>
            <button type="submit" id="form-btn" className="btn btn-primary">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup