import { TextField } from "@mui/material";
import { ChangeEvent, Component } from "react";

type ContactFormProps = {};

type ContactFormState = {
  email: string;
  message: string;
  isValidEmail: boolean;
};

export default class ContactForm extends Component<
  ContactFormProps,
  ContactFormState
> {
  constructor(props: ContactFormProps) {
    super(props);
    this.state = {
      email: "",
      message: "",
      isValidEmail: false,
    };
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (name === "email") {
      if (emailRegex.test(value)) {
        this.setState((prevState) => ({
          ...prevState,
          isValidEmail: true,
        }));
      } else {
        this.setState((prevState) => ({
          ...prevState,
          isValidEmail: false,
        }));
      }
    }

    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  render() {
    return (
      <form className="w-full py-8 px-32 flex flex-col space-y-3">
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          value={this.state.email}
          name="email"
          onChange={this.handleInputChange}
          placeholder="Enter your valid Email here"
          fullWidth={true}
          required
        />
        {!this.state.isValidEmail && this.state.email.length > 0 ? (
          <span className="text-red-700">
            <h6 className="font-Ubuntu">Please enter a valid email</h6>
          </span>
        ) : null}

        <TextField
          label="Message"
          type="textl"
          variant="outlined"
          name="message"
          placeholder="Enter your Message here"
          fullWidth={true}
          value={this.state.message}
          onChange={this.handleInputChange}
          multiline
          minRows={5}
          maxRows={Infinity}
          required
        />
        <button className="w-full bg-accent-navy-200 text-white py-2 rounded-2xl">
          <h6 className="font-Ubuntu">Submit</h6>
        </button>
      </form>
    );
  }
}