import "./btn_module.css";

function Button({ text, href }) {
  return (
    <a href={href} className="btn" target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
}

export default Button;
