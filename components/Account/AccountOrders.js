import List from "../ui/List";
import Segment from "../ui/Segment";
import Button from "../ui/Button";
import Image from "../ui/Image";
import Label from "../ui/Label";
import { useRouter } from "next/router";
import formatDate from "../../utils/formatDate";

function AccountOrders({ orders }) {
  const router = useRouter();

  function MapOrdersToPanels() {
    return orders.map((order, i) => (
      <Segment key={i}>
        <Label content={formatDate(order.createdAt)} />
        <h3>
          Total: ${order.total}
          <Label>{order.email}</Label>
        </h3>
        <List>
          <>
            {order.products.map((p, i) => (
              <List.Item key={i}>
                <div className="grid-row">
                  <div className="grid-3">
                    <Image size="thumb" src={p.product.mediaUrl} />
                  </div>

                  <div className="grid-8">
                    <h3>{p.product.name}</h3>
                    <p>Quantity: {p.quantity}</p>
                    <p>Price: ${p.product.price}</p>
                    <Label>{p.product.sku}</Label>
                  </div>
                </div>
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
