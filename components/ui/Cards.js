function Cards({ items }) {
  return (
    <div className="container cards grid-row">
      {items.map((product, i) => (
        <a
          key={product.childKey}
          href={product.href}
          className="card rounded grid-4"
        >
          <img src={product.image} alt={product.header} />

          <div className="card-meta">
            <h3>{product.header}</h3>
            <p>Price: {product.meta}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Cards;
