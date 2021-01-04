import React from "react";
import "../Contact/contact.component.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contactForm: {
        firstname: "",
        lastname: "",
        email: "",
        comment: "",
      },
    };
  }

  onChangeHandler(e) {
    const updatedContactForm = { ...this.state.contactForm };
    updatedContactForm[e.target.name] = e.target.value;
    this.setState({ contactForm: updatedContactForm });
  }

  render() {
    return (
      <>
        <h1 className="contact">Sing Up Multi-step form</h1>
        <h2 className="info">Basic info</h2>
        <br />
        <form className="form-css">
          <div>
            <label>
              First Name
              <input
                type="text"
                name="firstName"
                value={this.state.contactForm.name}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </label>
            <br />
          </div>
          <div>
            <label>
              Last Name
              <input
                type="text"
                name="lastName"
                value={this.state.contactForm.surname}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </label>
            <br />
          </div>
          <div>
            <label>
              E-mail
              <input
                type="email"
                name="E-mail"
                value={this.state.contactForm.email}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </label>
            <br />
          </div>
          <div>
            <label>
              Comment
              <br />
              <textarea
                comment="comment"
                value={this.state.contactForm.comment}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </label>
          </div>
        </form>
      </>
    );
  }
}

export default Contact;
