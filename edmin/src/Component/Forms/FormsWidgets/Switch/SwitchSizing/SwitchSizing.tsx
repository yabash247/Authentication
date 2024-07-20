import { Card, CardBody, Col, Input, Label } from 'reactstrap'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { switchSizingData, switchSizingDataList } from '../../../../../Data/Forms/FormsWidgets/Switch/Switch'
import { SwitchSizingHeading } from '../../../../../utils/Constant'

const SwitchSizing = () => {
  return (
    <Col md="12">
      <Card>
        <CommonCardHeader title={SwitchSizingHeading} span={switchSizingData} headClass='pb-0' />
        <CardBody className="common-flex switch-wrapper">
          {switchSizingDataList.map(({ label, flexClass, defaultChecked, disabled }, index) => (
            <div className='d-flex' key={index}>
              <Label className="col-form-label m-r-10" check>{label}</Label>
              <div className={`flex-grow-1 text-end ${flexClass}`}>
                <Label className="switch">
                  <Input type="checkbox" defaultChecked={defaultChecked} disabled={disabled} />
                  <span className="switch-state"></span>
                </Label>
              </div>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  )
}

export default SwitchSizing