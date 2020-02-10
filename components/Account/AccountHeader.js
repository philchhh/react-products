import Segment from "../ui/Segment";
import formatDate from "../../utils/formatDate";

function AccountHeader({ role, email, name, createdAt }) {
  return (
    <>
      <h2>Information</h2>
      <Segment>
        <h3>Username: {name}</h3>
        <h3>Email: {email}</h3>
        <p>Joined: {formatDate(createdAt)}</p>
      </Segment>
    </>
  );
}

export default AccountHeader;
