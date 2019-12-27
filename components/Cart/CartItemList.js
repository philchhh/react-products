import { Header, Icon, Item, Message } from "semantic-ui-react";
import Button from "../ui/Button";
import Segment from "../ui/Segment";
import { useRouter } from "next/router";

function CartItemList({ products, user, handleRemoveFromCart, success }) {
  const router = useRouter();

  function mapCartProductsToItems(products) {
    return products.map(p => ({
      childKey: p.product._id,
      header: (
        <Item.Header
          as="a"
          onClick={() => router.push(`/product?_id=${p.product._id}`)}
        >
          {p.product.name}
        </Item.Header>
      ),
      image: p.product.mediaUrl,
      meta: `${p.quantity} x $${p.product.price}`,
      fluid: "true",
      extra: (
        <Button
          label="Remove"
          onClick={() => handleRemoveFromCart(p.product._id)}
        />
      )
    }));
  }

  if (success) {
    return (
      <Message
        success
        header="Success!"
        content="Your order and payment has been accepted"
        icon="star outline"
      />
    );
  }

  if (!products || products.length === 0) {
    return (
      <Segment secondary color="teal" inverted placeholder>
        <Header icon>
          <Icon name="shopping basket" />
          No products in your cart! Add some yo!
        </Header>
        <div>
          {user ? (
            <Button label="View Products" onClick={() => router.push("/")} />
          ) : (
            <Button
              label="Login to add products"
              onClick={() => router.push("/login")}
            />
          )}
        </div>
      </Segment>
    );
  }

  return <Item.Group divided items={mapCartProductsToItems(products)} />;
}

export default CartItemList;
