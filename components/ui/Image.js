import { classnames } from "../../utils/helpers";

function Image({ src, size, height, width, rounded, centered, alt }) {
  return (
    <img
      className={classnames({
        image: true,
        [size]: size && true,
        centered: centered && true,
        rounded: rounded && true
      })}
      src={src}
      height={height}
      width={width}
      alt={alt}
    />
  );
}

export default Image;
