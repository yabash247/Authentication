import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../CardHeaderCommon";
import { TouchspinBadgesHeading } from "../../../../utils/Constant";
import { touchspinBadgesData } from "../../../../Data/Ui-Kits/TagAndPills/TagAndPills";
import { Badges, Btn, SVG } from "../../../../AbstractElements";
import { useState } from "react";

const TouchspinBadges = () => {
  const [value , setValue] = useState<number>(3)
  return (
    <Col lg="4" md="6">
      <Card className="touchspin-badge">
        <CardHeaderCommon headClass="pb-0" title={TouchspinBadgesHeading} span={touchspinBadgesData} />
        <CardBody>
          <div className="touchspin-wrapper">
            <div className="menu-icon">
              <SVG iconId="Bell" className="svg-w-20 stroke-dark" />
            </div>
            <Badges color="primary" className="main-touchspin">{value}</Badges>
            <Btn outline color="primary" className="decrement-touchspin btn-touchspin me-3" onClick={()=>setValue(value - 1)}>
              <SVG iconId="minus" className="svg-w-16 stroke-dark" />
            </Btn>
            <Btn color="primary" outline className="increment-touchspin btn-touchspin" onClick={()=>setValue(value + 1)}>
              <SVG className="svg-w-16 stroke-dark" iconId="plus" />
            </Btn>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TouchspinBadges;
