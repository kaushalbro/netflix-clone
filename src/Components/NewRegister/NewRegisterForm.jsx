import React from "react";
import "./NewRegisterForm.scss";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function NewRegisterForm() {
  return (
    <div className="register_input1">
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      <div className="input_field_container">
        <input type="email" placeholder="Email address" />
        <button>Get Started <KeyboardArrowRightIcon className="arrow_right"/></button>
      </div>
    </div>
  );
}

export default NewRegisterForm;
