import { Card, CardBody, Col } from 'reactstrap'
import { MinMaxValues } from '../../../../utils/Constant'
import MinMaxValueForm from './MinMaxValueForm'
import { defaultRangeData } from '../../../../Data/BonusUi/RangeSlider/RangeSlider'
import CardHeaderCommon from '../../../Ui-Kits/CardHeaderCommon'

const MinMaxValue = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={MinMaxValues} span={defaultRangeData} headClass='pb-0'/>
        <CardBody>
          <MinMaxValueForm />
        </CardBody>
      </Card>
    </Col>
  )
}

export default MinMaxValue