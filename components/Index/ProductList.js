import Cards from "../ui/Cards";

function ProductList({ products }) {
  function mapProductsToItems(products) {
    return products.map(product => ({
      header: product.name,
      image: product.mediaUrl,
      meta: `$${product.price}`,
      childKey: product._id,
      href: `/product?_id=${product._id}`
    }));
  }

  return <Cards items={mapProductsToItems(products)} />;
}

export default ProductList;
