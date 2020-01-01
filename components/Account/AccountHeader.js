import Segment from "../ui/Segment";
import formatDate from "../../utils/formatDate";

function AccountHeader({ role, email, name, createdAt }) {
  return (
    <Segment>
      <h2>{name}</h2>
      <h3>{email}</h3>
      <p>Joined: {formatDate(createdAt)}</p>
    </Segment>
  );
}

export default AccountHeader;
