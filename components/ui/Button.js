function Button({ label, onClick, inline, disabled }) {
  return (
    <button className="common-btn" onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

export default Button;
