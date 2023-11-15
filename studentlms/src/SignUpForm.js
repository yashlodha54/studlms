import React, { useState } from 'react';
import './SignUpForm.css';
const SignUpForm = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const previewImage = (event) => {
    const fileInput = event.target;
    const file = fileInput.files[0];

    const reader = new FileReader();
    reader.onload = function (e) {
      setImagePreview(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="signup-form">
      <div className="form-header">
        <h2>Sign Up</h2>
      </div>
      <div className="form-body">
        <div className="form-group">
          <label htmlFor="profile-photo">Profile Photo:</label>
          <input type="file" id="profile-photo" name="profile-photo" onChange={previewImage} />
        </div>
        <div className="preview-container">
          {imagePreview && <img id="preview" src={imagePreview} alt="Profile Preview" />}
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" name="dob" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" name="confirm-password" required />
        </div>
        {/* Add other form fields as needed */}
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
