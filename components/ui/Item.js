import { classnames } from "../../utils/helpers";

function Item({ items, children }) {
  return (
    <div
      className={classnames({
        item: true
      })}
    >
      {children}

      {items && (
        <>
          {items.map((product, i) => (
            <div key={product.childKey}>
              {product.header}

              <img
                className="image thumb"
                src={product.image}
                alt={product.alt}
              />

              <p>Price: {product.meta}</p>
              {product.extra}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Item;
