import { useState } from "react";
import { H5, Image, LI } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import UserProfileIcons from "./UserProfileIcons";

const UserProfile = () => {
  const [show,setShow] =  useState(false)
  return (
    <LI className="profile-dropdown custom-dropdown">
      <div className="d-flex align-items-center" onClick={()=>setShow(!show)}>
        <Image src={dynamicImage("profile.png")} alt="avatar" />
        <div className="flex-grow-1">
          <H5>Wade Warren</H5>
          <span>UI Designer</span>
        </div>
      </div>
      <div className={`custom-menu overflow-hidden ${show? "show" : ""}`}>
        <UserProfileIcons />
      </div>
    </LI>
  );
};

export default UserProfile;
