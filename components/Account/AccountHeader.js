import { Header, Icon, Label } from "semantic-ui-react";
import Segment from "../ui/segment";

function AccountHeader({ role, email, name, createdAt }) {
  return (
    <Segment>
      <Header>
        <Icon name="user" />
        {name}
        <h3>{email}</h3>
        <h3>Joined {createdAt}</h3>
      </Header>
    </Segment>
  );
}

export default AccountHeader;
