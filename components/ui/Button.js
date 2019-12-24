function Button({ label, onClick, inline }) {
  return (
    <button className="common-btn" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
