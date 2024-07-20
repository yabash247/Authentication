import { Card, CardBody, Col } from 'reactstrap'
import { OfferStyleBorders } from '../../../../../utils/Constant'
import CommonCardFooter from '../Common/CommonCardFooter'
import OfferStyleBorderForm from './OfferStyleBorderForm'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { offerBorderStyleData } from '../../../../../Data/Forms/FormsControl/MegaOption/MegaOption'

const OfferStyleBorder = () => {
  return (
    <Col sm="12" xxl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={OfferStyleBorders} span={offerBorderStyleData} headClass='pb-0'/>
        <CardBody className="megaoptions-border-space-sm checkbox-checked">
          <OfferStyleBorderForm />
        </CardBody>
        <CommonCardFooter footerClass="text-end" color1="success" color2="light-success"/>
      </Card>
    </Col>
  )
}

export default OfferStyleBorder