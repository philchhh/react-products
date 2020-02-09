import { classnames } from "../../utils/helpers";
import Image from "../ui/Image";

Item.Group = ({ children }) => {
  return (
    <div
      className={classnames({
        "item-group": true
      })}
    >
      {children}
    </div>
  );
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
  return (
    <div className="item-image">
      <Image size={size} src={src} />
    </div>
  );
};

function Item({ items, children, flex, grouped }) {
  return (
    <div
      className={classnames({
        item: !grouped,
        "grid-flex": flex,
        "item-group": grouped
      })}
    >
      {children}

      {items && (
        <>
          {items.map((item, i) => (
            <div className="item-single" key={item.childKey}>
              {item.header}
              <div className="grid-flex">
                <div className="item-image">
                  <Image
                    className="image thumb"
                    size="medium"
                    src={item.image}
                    alt={item.alt}
                  />
                </div>
                <div className="item-content">
                  <p>Price: {item.meta}</p>
                  {item.extra}
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Item;
