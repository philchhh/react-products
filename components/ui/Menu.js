function Menu({ inverted, stackable, children }) {
  return (
    <nav className="menu">
      <ul>{children}</ul>
    </nav>
  );
}

export default Menu;
