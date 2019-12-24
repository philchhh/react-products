function Menu({ onClick, stackable, children }) {
  return (
    <nav className="component-menu">
      <ul>{children}</ul>
    </nav>
  );
}

Menu.Item = ({ onClick, active, children }) => {
  return <li className={active ? "active" : ""}>{children}</li>;
};

Menu.Button = ({ onClick, active, children }) => {
  return (
    <li className={active ? "active" : ""}>
      <button onClick={onClick}>{children}</button>
    </li>
  );
};

export default Menu;
