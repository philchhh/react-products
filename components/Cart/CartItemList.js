import Button from "../ui/Button";
import Segment from "../ui/Segment";
import Message from "../ui/Messages";
import Item from "../ui/Item";
import { useRouter } from "next/router";

function CartItemList({ products, user, handleRemoveFromCart, success }) {
  const router = useRouter();

  console.log(products);

  function mapCartProductsToItems(products) {
    return products.map(p => ({
      childKey: p.product._id,
      header: (
        <h2>
          <a
            href="!#"
            onClick={e => {
              e.preventDefault(), router.push(`/product?_id=${p.product._id}`);
            }}
          >
            {p.product.name}
          </a>
        </h2>
      ),
      image: p.product.mediaUrl,
      alt: p.product.name,
      meta: `${p.quantity} x $${p.product.price}`,
      extra: (
        <Button
          commonBtn
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
      />
    );
  }

  if (!products || products.length === 0) {
    return (
      <Segment secondary color="teal" inverted placeholder>
        <h2>No products in your cart! Add some yo!</h2>
        <div>
          {user ? (
            <Button label="View Products" onClick={() => router.push("/")} />
          ) : (
            <Button
              commonBtn
              label="Login to add products"
              onClick={() => router.push("/login")}
            />
          )}
        </div>
      </Segment>
    );
  }

  return <Item items={mapCartProductsToItems(products)} />;
}

export default CartItemList;
