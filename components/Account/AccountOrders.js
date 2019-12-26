import {
  Header,
  Accordion,
  Button,
  List,
  Image,
  Icon,
  Segment,
  Label
} from "semantic-ui-react";
import { useRouter } from "next/router";

function AccountOrders({ orders }) {
  const router = useRouter();

  function mapOrdersToPanels(orders) {
    return orders.map(order => ({
      key: order._id,
      title: {
        content: <Label color="blue" content={order.createdAt} />
      },
      content: {
        content: (
          <>
            <List.Header as="h3">
              Total: ${order.total}
              <Label content={order.email} icon="mail" basic horizontal />
            </List.Header>
            <List>
              <>
                {order.products.map((p, i) => (
                  <List.Item key={i}>
                    <Image avatar src={p.product.mediaUrl} />
                    <List.Content>
                      <List.Header>{p.product.name}</List.Header>
                      <List.Description>
                        <p>Quantity: {p.quantity}</p>
                        <p>Price: ${p.product.price}</p>
                      </List.Description>
                    </List.Content>
                    <List.Content floated="right">
                      <Label tag color="red" size="tiny">
                        {p.product.sku}
                      </Label>
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
      <Header>
        <Icon name="folder open" />
        Order History
      </Header>

      {orders.length === 0 ? (
        <Segment inverted tertiary>
          <Header icon>
            <Icon name="copy outline" />
            No past orders.
          </Header>
          <div>
            <Button
              onClick={() => {
                router.push("/");
              }}
            >
              View Products
            </Button>
          </div>
        </Segment>
      ) : (
        <Accordion
          fluid
          styled
          exclusive={false}
          panels={mapOrdersToPanels(orders)}
        />
      )}
    </>
  );
}

export default AccountOrders;
