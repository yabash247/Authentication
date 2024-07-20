import { Link } from "react-router-dom";
import { Image } from "../../AbstractElements";
import { dynamicImage } from "../../Service";
import CloseButton from "./CloseButton/CloseButton";
import MainHeader from "./MainHeader/MainHeader";

const Header = () => {
  return (
    <header className="page-header row">
      <div className="logo-wrapper d-flex align-items-center col-auto">
        <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
          <Image className="for-light" src={dynamicImage("logo/logo.png")} alt="logo"/>
          <Image className="for-dark" src={dynamicImage("logo/dark-logo.png")} alt="logo"/>
        </Link> 
        <CloseButton />
      </div>
      <MainHeader />
    </header>
  );
};

export default Header;
