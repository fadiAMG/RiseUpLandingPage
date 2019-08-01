import React, { Component } from "react";

class ContactForm extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="speaker-heading">Contact Us</h1>
        <div className="contact-form-wrapper" id="contactUS">
          <div className="contact-form">
            <div className="input-field">
              <input type="text" className="input" placeholder="Name" />
              <input
                type="text"
                className="input"
                placeholder="Email Address"
              />
              <input type="text" className="input" placeholder="Phone" />
              <input type="text" className="input" placeholder="Subject" />
            </div>
            <div className="msg">
              <textarea placeholder="Message" />
              <div className="form-btn">Send</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactForm;
