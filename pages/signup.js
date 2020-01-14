import React from "react";
//import { Form } from "semantic-ui-react";
import Segment from "../components/ui/Segment";
import Message from "../components/ui/Messages";
import Form from "../components/ui/form-elements/Form";
import Input from "../components/ui/form-elements/Input";
import Button from "../components/ui/Button";
import Link from "next/link";
import catchErrors from "../utils/catchErrors";
import baseUrl from "../utils/baseUrl";
import axios from "axios";
import { handelLogin } from "../utils/auth";

const INITIAL_USER = {
  name: "",
  email: "",
  password: ""
};

function Signup() {
  const [user, setUser] = React.useState(INITIAL_USER);
  const [disabled, setDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    const isUser = Object.values(user).every(el => Boolean(el));

    isUser ? setDisabled(false) : setDisabled(true);
  }, [user]);

  const handleChange = event => {
    const { name, value } = event.target;
    setUser(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      setLoading(true);
      setError("");
      const url = `${baseUrl}/api/signup`;
      const payload = { ...user };
      const response = await axios.post(url, payload);
      handelLogin(response.data);
    } catch (error) {
      catchErrors(error, setError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="content-main">
      <Message
        attached
        icon="settings"
        header="Get Started"
        content="Create a new account"
        color="teal"
      />

      <Form error={Boolean(error)} loading={loading} onSubmit={handleSubmit}>
        <Message error header="Oops!" content={error} />
        <Segment>
          <Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
          <Input
            fluid
            type="email"
            icon="envelope"
            iconPosition="left"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <Input
            fluid
            type="password"
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <Button
            disabled={disabled || loading}
            type="submit"
            commonBtn
            label="Sign up"
          />
        </Segment>
      </Form>
      <Message warning>
        Existing user?{" "}
        <Link href="/login">
          <a>Log in here</a>
        </Link>{" "}
        instaed
      </Message>
    </div>
  );
}

export default Signup;
