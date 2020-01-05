import { List } from "semantic-ui-react";
import Segment from "../ui/Segment";
import Button from "../ui/Button";
import Image from "../ui/Image";
import Label from "../ui/Label";
import { useRouter } from "next/router";
import formatDate from "../../utils/formatDate";

function AccountOrders({ orders }) {
  const router = useRouter();

  function MapOrdersToPanels() {
    return orders.map(order => (
      <Segment>
        <Label content={formatDate(order.createdAt)} />
        <List.Header as="h3">
          Total: ${order.total}
          <Label>{order.email}</Label>
        </List.Header>
        <List>
          <>
            {order.products.map((p, i) => (
              <List.Item key={i}>
                <Image size="thumb" src={p.product.mediaUrl} />
                <List.Content>
                  <List.Header>{p.product.name}</List.Header>
                  <List.Description>
                    <p>Quantity: {p.quantity}</p>
                    <p>Price: ${p.product.price}</p>
                  </List.Description>
                </List.Content>
                <List.Content>
                  <Label>{p.product.sku}</Label>
                </List.Content>
              </List.Item>
            ))}
          </>
        </List>
      </Segment>
    ));
  }

  return (
    <>
      <h2>Order History</h2>

      {orders.length === 0 ? (
        <Segment inverted tertiary>
          <h3>No past orders.</h3>
          <div>
            <Button
              onClick={() => {
                router.push("/");
              }}
              label="View Products"
            />
          </div>
        </Segment>
      ) : (
        <MapOrdersToPanels />
      )}
    </>
  );
}

export default AccountOrders;
