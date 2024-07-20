import { Card, CardBody, Col, Row } from 'reactstrap'
import { BasicRadioAndCheckboxHeading } from '../../../../../utils/Constant'
import SimpleCheckbox from './SimpleCheckbox'
import SimpleRadio from './SimpleRadio'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { basicRadioCheckboxData } from '../../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'

const BasicRadioAndCheckbox = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={BasicRadioAndCheckboxHeading} span={basicRadioCheckboxData} headClass='pb-0' />
        <CardBody>
          <Row className="g-3">
            <SimpleCheckbox />
            <SimpleRadio />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BasicRadioAndCheckbox