import React from "react";
import "../Contact/contact.component.css";
import Input from "../../UI/Input/input.component";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contactForm: {
        firstname: {
          label: "First Name",
          element: "input",
          type: "text",
          name: "firstname",
          value: "",
          valid: false,
          validation: {
            required: true,
            minChars: 2,
          },
        },
        lastname: {
          label: "Last Name",
          element: "input",
          type: "text",
          name: "lastname",
          value: "",
        },
        email: {
          label: "E-mail",
          element: "input",
          type: "text",
          name: "email",
          value: "",
        },
        comment: {
          label: "Comment",
          element: "textarea",
          name: "comment",
          value: "",
        },
      },
    };
  }

  checkValidity(value, rules) {
    let isValid = true;

    if (!rules) {
      return isValid;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minChars) {
      isValid = value.trim().length > 1 && isValid;
    }

    return isValid;
  }

  onChangeHandler(e, name) {
    //Deconstruction of the contactForm
    // const updatedContactForm ={firstName: firstName, lastname: lastname, email: email, comment: comment};
    const updatedContactForm = { ...this.state.contactForm };

    const updatedContactFormElement = { ...updatedContactForm[name] };

    updatedContactFormElement.value = e.target.value;

    updatedContactFormElement.valid = this.checkValidity(
      updatedContactFormElement.value,
      updatedContactFormElement.validation
    );

    updatedContactForm[name] = updatedContactFormElement;

    this.setState({ contactForm: updatedContactForm });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    let formElements = Object.entries(this.state.contactForm).map(
      ([key, value]) => {
        return {
          key: key,
          config: value,
        };
      }
    );
    return (
      <>
        <h1 className="contact">Sing Up Multi-step form</h1>
        <h2 className="info">Basic info</h2>
        <br />
        <form className="form-css" onSubmit={this.onSubmit}>
          {formElements.map((el) => {
            return (
              <Input
                key={el.key}
                label={el.config.label}
                element={el.config.element}
                type={el.config.type}
                name={el.config.name}
                value={el.value}
                valid={el.config.valid}
                onChangeHandler={(e, name) => this.onChangeHandler(e, name)}
              />
            );
          })}

          <button>continue</button>
        </form>
      </>
    );
  }
}

export default Contact;
