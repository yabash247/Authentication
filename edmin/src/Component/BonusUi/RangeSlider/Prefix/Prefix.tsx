import { Card, CardBody, Col } from 'reactstrap'
import { Prefixs } from '../../../../utils/Constant'
import PrefixForm from './PrefixForm'
import { defaultRangeData } from '../../../../Data/BonusUi/RangeSlider/RangeSlider'
import CardHeaderCommon from '../../../Ui-Kits/CardHeaderCommon'

const Prefix = () => {
  return (
    <Col lg="6">
      <Card>
        <CardHeaderCommon title={Prefixs} span={defaultRangeData} headClass='pb-0'/>
        <CardBody className="mt-3 mb-3">
          <PrefixForm />
        </CardBody>
      </Card>
    </Col>
  )
}

export default Prefix