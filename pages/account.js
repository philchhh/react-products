import AccountHeader from "../components/account/AccountHeader";
import AccountOrders from "../components/account/AccountOrders";
import { parseCookies } from "nookies";
import baseUrl from "../utils/baseUrl";
import axios from "axios";
import Container from "../components/ui/Container";

function Account({ user, orders }) {
  console.log(orders);

  return (
    <Container>
      <AccountHeader {...user} />
      <AccountOrders orders={orders} />
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
