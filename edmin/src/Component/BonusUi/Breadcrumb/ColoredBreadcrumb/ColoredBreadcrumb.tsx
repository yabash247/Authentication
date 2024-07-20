import { Card, CardBody, Col } from 'reactstrap'
import { ColoredBreadcrumbs } from '../../../../utils/Constant'
import StaticColoredBreadcrumb from './StaticColoredBreadcrumb'
import DynamicColoredBreadcrumb from './DynamicColoredBreadcrumb'
import { coloredBreadcrumbData } from '../../../../Data/BonusUi/Breadcrumb/Breadcrumb'
import CardHeaderCommon from '../../../Ui-Kits/CardHeaderCommon'

const ColoredBreadcrumb = () => {
  return (
    <Col sm="6">
      <Card>
        <CardHeaderCommon title={ColoredBreadcrumbs} span={coloredBreadcrumbData} headClass='pb-0' />
        <CardBody>
          <StaticColoredBreadcrumb />
          <DynamicColoredBreadcrumb />
        </CardBody>
      </Card>
    </Col>
  )
}

export default ColoredBreadcrumb