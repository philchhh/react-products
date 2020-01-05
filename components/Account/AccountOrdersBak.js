import { Header, List, Icon } from "semantic-ui-react";
import Segment from "../ui/Segment";
import Button from "../ui/Button";
import Image from "../ui/Image";
import Label from "../ui/Label";
import { useRouter } from "next/router";
import formatDate from "../../utils/formatDate";

function AccountOrders({ orders }) {
  const router = useRouter();

  function MapOrdersToPanels() {
    return orders.map(order => ({
      key: order._id,
      title: {
        content: <Label content={formatDate(order.createdAt)} />
      },
      content: {
        content: (
          <>
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
                    <List.Content floated="right">
                      <Label>{p.product.sku}</Label>
                    </List.Content>
                  </List.Item>
                ))}
              </>
            </List>
          </>
        )
      }
    }));
  }

  return (
    <>
      <h2>Order History</h2>

      {orders.length === 0 ? (
        <Segment inverted tertiary>
          <Header>
            <Icon name="copy outline" />
            No past orders.
          </Header>
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
        // <Accordion
        //   fluid
        //   styled
        //   exclusive={false}
        //   panels={mapOrdersToPanels(orders)}
        //   />
      )}
    </>
  );
}

//export default AccountOrders;
