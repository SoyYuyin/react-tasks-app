import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = (e) => {
    console.log("clicked");
  };

  return (
    <>
      <header className="header">
        <h1>{title}</h1>
       <Button text="Add" onClick={onClick} />
      </header>
      <p>Double click to add reminder</p>
    </>
  );
};

Header.defaultProps = {
  title: "React Task App",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
