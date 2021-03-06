import React from "react";
import { Button, Form, Icon, Segment, Message } from "semantic-ui-react";
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
      console.log(payload, { ...user });
      const response = await axios.post(url, payload);
      handelLogin(response.data);
    } catch (error) {
      console.error("I think this is the error");
      catchErrors(error, setError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            type="email"
            icon="envelope"
            iconPosition="left"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <Form.Input
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
            icon="signup"
            type="submit"
            color="orange"
            content="Sign up"
          />
        </Segment>
      </Form>
      <Message attached="bottom" warning>
        <Icon name="help" />
        Existing user?{" "}
        <Link href="/login">
          <a>Log in here</a>
        </Link>{" "}
        instaed
      </Message>
    </>
  );
}

export default Signup;
