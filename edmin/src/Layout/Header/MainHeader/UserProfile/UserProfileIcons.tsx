import { Link, useNavigate } from "react-router-dom";
import { LI, SVG, UL } from "../../../../AbstractElements";
import { userProfilesData } from "../../../../Data/Layout/HeaderData";

const UserProfileIcons = () => {
  const navigate = useNavigate()
  const handleClick = (name: string) => {
    if (name === "Log Out") {
      localStorage.removeItem("login");
      navigate(`${process.env.PUBLIC_URL}/login`)
    }
  };
  return (
    <UL>
      {userProfilesData.map((item, i) => (
        <LI className="d-flex" key={i}>
          <SVG className="svg-color" iconId={item.icon} />
          <Link className="ms-2" to={item.link} onClick={() => handleClick(item.title)} >
            {item.title}
          </Link>
        </LI>
      ))}
    </UL>
  );
};

export default UserProfileIcons;
