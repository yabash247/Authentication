import { Card, CardBody, Col } from 'reactstrap'
import { Disable } from '../../../../utils/Constant'
import DisabledForm from './DisabledForm'
import { defaultRangeData } from '../../../../Data/BonusUi/RangeSlider/RangeSlider'
import CardHeaderCommon from '../../../Ui-Kits/CardHeaderCommon'

const Disabled = () => {
  return (
    <Col lg="6">
      <Card>
        <CardHeaderCommon title={Disable} span={defaultRangeData} headClass='pb-0'/>
        <CardBody>
          <DisabledForm />
        </CardBody>
      </Card>
    </Col>
  )
}

export default Disabled