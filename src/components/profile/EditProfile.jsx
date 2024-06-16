function EditProfile() {
  return (
    <div className="edit-profile">
      <div className="edit-head">Edit Profile</div>
      <form action="#">
        <div className="input-section">
            <label htmlFor="">FIRST NAME</label>
            <input type="text" />
        </div>
        <div className="input-section">
            <label htmlFor="">LAST NAME</label>
            <input type="text" />
        </div>
        <div className="input-section">
            <label htmlFor="">EMAIL</label>
            <input type="email" />
        </div>
        <div className="input-section">
            <label htmlFor="">CONTACT</label>
            <input type="number" />
        </div>
        <div className="input-section">
            <label htmlFor="">COUNTERY</label>
            <input type="text" />
        </div>
        <div className="input-section">
            <label htmlFor="">PROFESSION</label>
            <input type="text" />
        </div>
        <button type="submit">UPDATE PROFILE</button>
      </form>
    </div>
  );
}

export default EditProfile;
