import { useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink } from "reactstrap";
import {Description,Href,MaterialStyleTab,Review,User} from "../../../../utils/Constant";
import MaterialTabContent from "./MaterialTabContent";
import { materialStyleData } from "../../../../Data/Ui-Kits/BootstrapTabs/BootstrapTabs";
import CardHeaderCommon from "../../CardHeaderCommon";
import { SVG } from "../../../../AbstractElements";

const MaterialStyleTabs = () => {
  const [basicTab, setBasicTab] = useState<string>("1");
  return (
    <Col lg="6">
      <Card>
        <CardHeaderCommon title={MaterialStyleTab} span={materialStyleData} headClass="pb-0" />
        <CardBody>
          <Nav tabs className="border-tab border-0 mb-0 nav-danger" >
            <NavItem>
              <NavLink
                href={Href}
                className={`nav-border pt-0 font-danger nav-danger ${
                  basicTab === "1" ? "active" : ""
                }`}
                onClick={() => setBasicTab("1")}
              >
                <SVG className="svg-color" iconId="Profile" />
                {User}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href={Href}
                className={`nav-border font-danger nav-danger ${
                  basicTab === "2" ? "active" : ""
                }`}
                onClick={() => setBasicTab("2")}
              >
                <SVG className="svg-color" iconId="Document" />
                {Description}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href={Href}
                className={`nav-border font-danger nav-danger ${
                  basicTab === "3" ? "active" : ""
                }`}
                onClick={() => setBasicTab("3")}
              >
                <SVG className="svg-color" iconId="Star" />
                {Review}
              </NavLink>
            </NavItem>
          </Nav>
          <MaterialTabContent basicTab={basicTab} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default MaterialStyleTabs;