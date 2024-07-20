import { Card, CardBody, Col, Label } from 'reactstrap'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { uncheckedSwitchData, uncheckedSwitchDataList } from '../../../../../Data/Forms/FormsWidgets/Switch/Switch'
import { UncheckedSwitchHeading } from '../../../../../utils/Constant'
import CommonSwitchSpan from '../Common/CommonSwitchSpan'

const UnCheckedSwitch = () => {
  return (
    <Col xl="4" sm="6">
      <Card className="height-equal">
        <CommonCardHeader title={UncheckedSwitchHeading} span={uncheckedSwitchData} headClass='pb-0' />
        <CardBody className="common-flex flex-column switch-wrapper">
          {uncheckedSwitchDataList.map(({ color, text }, index) => (
            <div className="align-items-center d-flex" key={index}>
              <div className="flex-grow-1 text-end">
                <CommonSwitchSpan color={color} defaultChecked />
              </div>
              <Label className="m-l-10" check>{text}</Label>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  )
}

export default UnCheckedSwitch