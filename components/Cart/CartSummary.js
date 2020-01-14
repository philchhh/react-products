import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Segment from "../ui/Segment";
import Button from "../ui/Button";
import calculateCartTotal from "../../utils/calculateCartTotal";

function CartSummary({ products, handelCheckout, success }) {
  const [cartAmount, setCartAmount] = React.useState(0);
  const [stripeAmount, setStripeAmount] = React.useState(0);
  const [isCartEmpty, setCartEmpty] = React.useState(false);

  React.useEffect(() => {
    const { cartTotal, stripeTotal } = calculateCartTotal(products);
    setCartAmount(cartTotal);
    setStripeAmount(stripeTotal);
    setCartEmpty(products.length === 0);
  });

  return (
    <>
      <Segment>
        <strong>Sub total:</strong> ${cartAmount}
        <StripeCheckout
          name="React Reserve"
          amount={stripeAmount}
          image={products.length > 0 ? products[0].product.mediaUrl : ""}
          currency="USD"
          shippingAddress={true}
          billingAddress={true}
          zipCode={true}
          stripeKey="pk_test_pLzEvF9p3FTs8pZ7wjDcnR9I00rxnllWSV"
          token={handelCheckout}
          triggerEvent="onClick"
        >
          <Button
            disabled={isCartEmpty || success}
            floatRight
            label="Checkout"
            commonBtn
          />
        </StripeCheckout>
      </Segment>
    </>
  );
}

export default CartSummary;
