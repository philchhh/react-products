function Loader({ overlay }) {
  return (
    <>
      <div className="loading">
        <div className="loader" />
      </div>
      {overlay && <div className="overlay" />}
    </>
  );
}

export default Loader;
