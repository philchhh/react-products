import { Header, Icon, Segment, Label } from "semantic-ui-react";

function AccountHeader({ role, email, name, createdAt }) {
  return (
    <Segment inverted secondary>
      <Label color="teal" size="large" ribbon icon="privacy" content={role} />

      <Header inverted icon>
        <Icon name="user" />
        {name}
        <h3>{email}</h3>
        <h3>Joined {createdAt}</h3>
      </Header>
    </Segment>
  );
}

export default AccountHeader;
