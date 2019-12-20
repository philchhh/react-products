function Cards({ items }) {
  return (
    <div className="container grid-row">
      {items.map((product, i) => (
        <div key={product.childKey} className="card grid-4">
          {product.header}
        </div>
      ))}
    </div>
  );
}

export default Cards;
