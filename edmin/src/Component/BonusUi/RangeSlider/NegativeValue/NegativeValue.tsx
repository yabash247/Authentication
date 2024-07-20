import { Card, CardBody, Col } from 'reactstrap'
import { NegativeValues } from '../../../../utils/Constant'
import NegativeValueForm from './NegativeValueForm'
import { defaultRangeData } from '../../../../Data/BonusUi/RangeSlider/RangeSlider'
import CardHeaderCommon from '../../../Ui-Kits/CardHeaderCommon'

const NegativeValue = () => {
  return (
    <Col lg="6">
      <Card>
        <CardHeaderCommon title={NegativeValues} span={defaultRangeData} headClass='pb-0'/>
        <CardBody>
          <NegativeValueForm />
        </CardBody>
      </Card>
    </Col>
  )
}

export default NegativeValue