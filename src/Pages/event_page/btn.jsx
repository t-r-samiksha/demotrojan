import "./btn_module.css";

function Button({ text, href,onClick, disabled}) {
  return (

    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn ${disabled ? "bg-gray-400" : "bg-blue-500 text-white"}`}
    >
      {text}
    </button>
  );
}

export default Button;
