import React from "react";
import { Col, TabContent, TabContentProps, TabPane } from "reactstrap";
import { Image, LI, P, UL } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";

const JavaScriptBehaviorTabContent: React.FC<TabContentProps> = ({ basicTab}) => {
  return (
    <Col sm="8">
      <TabContent activeTab={basicTab} id="nav-tabContent">
        <TabPane tabId="1" className="list-behaviors">
          <div className="d-flex mb-xl-4 list-behavior-1 mb-2">
            <div className="flex-shrink-0">
              <Image className="tab-img img-fluid" src={dynamicImage(`blog/img.png`)} alt="home"/>
            </div>
            <div className="flex-grow-1">
              <P className="mb-xl-0"> We provide end to end digital solutions, right from designing your website/application development: Domain, Web Hosting, Email Hosting Registration, Search Engine Optimization and other Internet Marketing, Renewal of Services timely and effectively.</P>
            </div>
          </div>
          <div className="d-flex list-behavior-1 mb-xl-4">
            <div className="flex-shrink-0">
              <Image className="tab-img img-fluid" src={dynamicImage(`blog/blog.jpg`)} alt="home"/>
            </div>
            <div className="flex-grow-1">
              <P className="mb-0"> When someone visits your homepage, your design should inspire them to stay. Therefore, your value proposition should be established on the homepage for visitors to select to stay on your website.Building trust, expressing value, and guiding visitors to the next step all depend on a page's design.</P>
            </div>
          </div>
        </TabPane>
        <TabPane tabId="2" className="dark-list">
          <div className="flex-space align-items-center list-light-dark contact-profile">
            <Image className="tab-img" src={dynamicImage(`avatar/5.jpg`)} alt="profile"/>
            <UL className="d-flex flex-column gap-2 simple-list">
              <LI className="border-0 p-0">
                <strong>Visit Us: </strong> 2600 Hollywood Blvd,Florida, United
                States- 33020
              </LI>
              <LI className="border-0 p-0">
                <strong>Mail Us:</strong>contact@us@gmail.com
              </LI>
              <LI className="border-0 p-0">
                <strong>Contact Number: </strong>(954) 357-7760
              </LI>
            </UL>
          </div>
        </TabPane>
        <TabPane tabId="3">
          <UL className="d-flex flex-column gap-1 simple-list">
            <LI className="border-0 p-0"> Us Technology offers web &amp; mobile development solutions for all industry verticals.Include a short form using fields that'll help your business understand who's contacting them.</LI>
            <LI className="border-0 p-0">
              <strong>Visit Us: </strong> 2600 Hollywood Blvd,Florida, United
              States- 33020
            </LI>
            <LI className="border-0 p-0">
              <strong>Mail Us:</strong>contact@us@gmail.com
            </LI>
            <LI className="border-0 p-0">
              <strong>Contact Number: </strong>(954) 357-7760
            </LI>
          </UL>
        </TabPane>
        <TabPane tabId="4">
          <UL className="d-flex flex-column gap-2 simple-list">
            <LI className="border-0 p-0">
              <strong>Available pages in Template: </strong>
            </LI>
            <LI className="border-0 p-0">
              {`-->`} Typography: Typography is the art of arranging letters and
              text in a way that makes the copy legible, clear, and visually
              appealing to the reader.
            </LI>
            <LI className="border-0 p-0">
              {`-->`} Tooltip: A tooltip is a brief, informative message that
              appears when a user interacts with an element in a graphical user
              interface (GUI).
            </LI>
          </UL>
        </TabPane>
      </TabContent>
    </Col>
  );
};

export default JavaScriptBehaviorTabContent;
