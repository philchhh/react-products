function Container({ center, children }) {
  return (
    <div className={`container ${center ? "ta_center" : ""}`}>{children}</div>
  );
}

export default Container;
