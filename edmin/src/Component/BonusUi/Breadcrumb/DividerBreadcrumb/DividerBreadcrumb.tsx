import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from 'reactstrap'
import { BreadcrumbHome, BreadcrumbProgress, BreadcrumbUiKits, DividerBreadcrumbs, Href } from '../../../../utils/Constant'
import { Link } from 'react-router-dom'
import { dividerBreadcrumbData } from '../../../../Data/BonusUi/Breadcrumb/Breadcrumb'
import CardHeaderCommon from '../../../Ui-Kits/CardHeaderCommon'

const DividerBreadcrumb = () => {
  return (
    <Col sm="6">
      <Card>
        <CardHeaderCommon title={DividerBreadcrumbs} span={dividerBreadcrumbData} headClass='pb-0' />
        <CardBody>
          <Breadcrumb className="breadcrumb-icon mb-3">
            <BreadcrumbItem>
              <Link to={Href}>{BreadcrumbHome}</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{BreadcrumbUiKits}</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb className="m-0 breadcrumb-icon" >
            <BreadcrumbItem>
              <Link to={Href}>{BreadcrumbHome}</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to={Href}>{BreadcrumbUiKits}</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{BreadcrumbProgress}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  )
}

export default DividerBreadcrumb