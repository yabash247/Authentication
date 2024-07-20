import { Card, CardBody, Col } from 'reactstrap'
import { DefaultRangeSliders } from '../../../../utils/Constant'
import DefaultRangeSliderForm from './DefaultRangeSliderForm'
import { defaultRangeData } from '../../../../Data/BonusUi/RangeSlider/RangeSlider'
import CardHeaderCommon from '../../../Ui-Kits/CardHeaderCommon'

const DefaultRangeSlider = () => {
  return (
    <Col xl="6">
      <Card className='range_4 height_equal'>
        <CardHeaderCommon title={DefaultRangeSliders} span={defaultRangeData} headClass='pb-0'/>
        <CardBody>
          <DefaultRangeSliderForm />
        </CardBody>
      </Card>
    </Col>
  )
}

export default DefaultRangeSlider