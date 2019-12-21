function Cards({ items }) {
  return (
    <div className="container cards grid-row">
      {items.map((product, i) => (
        <a key={product.childKey} href={product.href} className="card grid-4">
          <img src={product.image} alt={product.header} />
          <h3>{product.header}</h3>
          <span className="card-meta">{product.meta}</span>
        </a>
      ))}
    </div>
  );
}

export default Cards;
