import { classnames } from "../../utils/helpers";
import Image from "../ui/Image";

Item.Group = ({ children }) => {
  return <div className="item-group">{children}</div>;
};

Item.Content = ({ children }) => {
  return <div className="item-content">{children}</div>;
};

Item.Description = ({ children }) => {
  return <div className="item-description">{children}</div>;
};

Item.Extra = ({ children }) => {
  return <div className="item-extra">{children}</div>;
};

Item.Image = ({ src, size }) => {
  return <Image size={size} src={src} />;
};

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
          {items.map((item, i) => (
            <div key={item.childKey}>
              {item.header}

              <img className="image thumb" src={item.image} alt={item.alt} />

              <p>Price: {item.meta}</p>
              {item.extra}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Item;
