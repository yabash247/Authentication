import { Card, CardBody, Col } from 'reactstrap'
import GridCommonCardFooter from '../Common/GridCommonCardFooter'
import StaticHorizontalAlignment from './StaticHorizontalAlignment'
import DynamicHorizontalAlignment from './DynamicHorizontalAlignment'
import { alignmentData } from '../../../../Data/Ui-Kits/Grid/GridData'
import { HorizontalAlignment, HorizontalAlignmentClass, HorizontalAlignmentValueClass } from '../../../../utils/Constant'
import CardHeaderCommon from '../../CardHeaderCommon'

const HorizontalAlignmentCart = () => {
  return (
    <Col xl="12">
      <Card>
        <CardHeaderCommon title={HorizontalAlignment} span={alignmentData} headClass='pb-0' />
        <CardBody className="grid-showcase mb-0">
          <div className="grid-align">
            <StaticHorizontalAlignment />
            <DynamicHorizontalAlignment />
          </div>
        </CardBody>
        <GridCommonCardFooter className={HorizontalAlignmentClass} valueClass={HorizontalAlignmentValueClass} />
      </Card>
    </Col>
  )
}

export default HorizontalAlignmentCart