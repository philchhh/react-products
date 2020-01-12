function List({ onClick, children }) {
  return <div className="listing">{children}</div>;
}

List.Item = ({ onClick, active, children }) => {
  return <div className="listing-item">{children}</div>;
};

List.Button = ({ onClick, active, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default List;
