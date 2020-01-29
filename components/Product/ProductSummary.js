import Item from "../ui/Item";
import Label from "../ui/Label";
import AddProductToCart from "./AddProductToCart";

function ProductSummary({ user, name, mediaUrl, _id, price, sku }) {
  return (
    <Item.Group>
      <Item>
        <Item.Image size="medium" src={mediaUrl} />

        <Item.Content>
          <h3>{name}</h3>
          <Item.Description>
            <p>Price: ${price}</p>
            <Label>SKU: {sku}</Label>
          </Item.Description>
          <Item.Extra>
            <AddProductToCart user={user} productId={_id} />
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  );
}

export default ProductSummary;
