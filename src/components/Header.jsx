import Logo from "../assets/jrazap.svg";

const Header = () => {
  return (
    <div>
      <a href={import.meta.env.VITE_DEV_WEBSITE}>
        <img className="logo" src={Logo} alt="jrazap" />
      </a>
      <h1>{import.meta.env.VITE_DEV_NAME}</h1>
    </div>
  );
};

export default Header;
