import AccountHeader from "../components/account/AccountHeader";
import AccountOrders from "../components/account/AccountOrders";
import AccountPermissions from "../components/account/AccountPermissions";
import { parseCookies } from "nookies";
import baseUrl from "../utils/baseUrl";
import axios from "axios";
import Container from "../components/ui/Container";

function Account({ user, orders }) {
  return (
    <Container primary>
      <AccountHeader {...user} />
      <AccountOrders orders={orders} />
      {user.role === "root" && <AccountPermissions currentUserId={user._id} />}
    </Container>
  );
}

Account.getInitialProps = async ctx => {
  const { token } = parseCookies(ctx);

  if (!token) {
    return { orders: [] };
  }
  const payload = { headers: { Authorization: token } };
  const url = `${baseUrl}/api/orders`;
  const response = await axios.get(url, payload);
  return response.data;
};

export default Account;
