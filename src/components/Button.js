import PropTypes from "prop-types";

function Button({ text, color, onClick }) {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  backgroundColor: "steelBlue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
