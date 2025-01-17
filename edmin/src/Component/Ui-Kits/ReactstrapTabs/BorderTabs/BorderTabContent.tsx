import React from "react";
import { CardBody, Form, FormGroup, Input, Label, TabContent, TabPane } from "reactstrap";
import { H6, Image, LI, P, SVG, UL } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { DalbultCaslin, EmailAddress, ExampleTextarea } from "../../../../utils/Constant";
import { TabContentProp } from "../../../../Type/Ui-Kits/UiKitsTypes";
import SvgIcon from "../../../../CommonElements/SVG/SvgIcon";

const BorderTabContent: React.FC<TabContentProp> = ({ basicTab }) => {
  return (
    <TabContent activeTab={basicTab}>
      <TabPane tabId="1">
        <P className="pt-3">
          A navigation bar is a particularly important feature because it allows
          visitors to quickly and easily find
          <em className="font-danger"> important pages on your website,</em> like
          your blog, product pages, pricing, contact info, and documentation.
          This improves the chances of visitors browsing your site longer, which
          can boost your page views and reduce your bounce rate.Create product
          Builder tool is also pre-bundled in this template so that you can let
          the audience configure the product by themselves before placing the
          order.
        </P>
      </TabPane>
      <TabPane tabId="2">
        <CardBody className="pt-3 p-0">
          <div className="main-inbox">
            <div className="header-inbox">
              <div className="header-left-inbox">
                <div className="inbox-img">
                  <Image src={dynamicImage(`avatar/6.jpg`)} alt="profile" />
                </div>
                <div className="inbox-content">
                  <H6>{DalbultCaslin}</H6>
                  <P className="text-muted">stroman.rogers@gmail.com</P>
                </div>
              </div>
              <UL className="header-right-inbox simple-list flex-row">
                <LI>
                  <P>8 JAN 11:30PM</P>
                </LI>
                <LI>
                  <SVG className="svg-w-16 stroke-danger" iconId="Trash" />
                </LI>
                <LI>
                  <SVG className="svg-w-16 stroke-info" iconId="Send" />
                </LI>
              </UL>
            </div>
            <div className="body-inbox mt-2">
              <div className="body-h-wrapper">
                <SvgIcon className="feather me-2" iconId="star" />
                <em>
                  Compare Prices Find the Best Computer Assessors Fronted Issue.
                </em>
              </div>
              <P className="pt-2">
                Site speed and design are two of the most important ranking
                factors Google takes into consideration, as they have the
                biggest effect of customer staying on site as the website
                respond faster.
              </P>
            </div>
          </div>
        </CardBody>
      </TabPane>
      <TabPane tabId="3">
        <CardBody className="px-0 pb-0">
          <Form>
            <FormGroup>
              <Label check for="exampleFormControltwo">{EmailAddress}</Label>
              <Input id="exampleFormControltwo" type="email" placeholder="youremail@gmail.com" />
            </FormGroup>
            <div className="mb-0">
              <Label check for="exampleFormControlTextarea1">{ExampleTextarea}</Label>
              <Input type="textarea" id="exampleFormControlTextarea1" rows={3} defaultValue={""}/>
            </div>
          </Form>
        </CardBody>
      </TabPane>
    </TabContent>
  );
};

export default BorderTabContent;
