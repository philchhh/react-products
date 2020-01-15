import React from "react";
import Segment from "../components/ui/Segment";
import Message from "../components/ui/Messages";
import Button from "../components/ui/Button";
import Form from "../components/ui/form-elements/Form";
import Input from "../components/ui/form-elements/Input";
import Link from "next/link";
import axios from "axios";
import catchErrors from "../utils/catchErrors";
import baseUrl from "../utils/baseUrl";
//import { useRouter } from "next/router";
import { handelLogin } from "../utils/auth";

const INITIAL_USER = {
  email: "",
  password: ""
};

function Login() {
  const [user, setUser] = React.useState(INITIAL_USER);
  const [disabled, setDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  // const router = useRouter();

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
      const url = `${baseUrl}/api/login`;
      const payload = { ...user };
      const response = await axios.post(url, payload);
      handelLogin(response.data);
    } catch (error) {
      catchErrors(error, setError);
      setLoading(false);
    } finally {
      //setLoading(false);
    }
  };

  return (
    <div className="content-main">
      <Message
        header="Welcom Back!"
        content="Log in with email and password"
        notification
        rounded
      />

      <Form error={Boolean(error)} onSubmit={handleSubmit}>
        <Message error header="Oops!" content={error} />

        <Segment loading={loading}>
          <Input
            type="email"
            icon="envelope"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <Input
            fluid
            type="password"
            icon="lock"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <Button
            disabled={disabled || loading}
            icon="sign in"
            type="submit"
            label="Login"
            commonBtn
          />
        </Segment>
      </Form>
      <Message warning>
        New user?{" "}
        <Link href="/signup">
          <a>Sign up here</a>
        </Link>{" "}
        instaed
      </Message>
    </div>
  );
}

export default Login;
