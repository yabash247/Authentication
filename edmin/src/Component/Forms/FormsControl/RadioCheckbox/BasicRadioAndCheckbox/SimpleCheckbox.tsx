import { Col, Input, Label } from 'reactstrap'
import { H6 } from '../../../../../AbstractElements'
import { BasicRadioAndCheckboxBlog, SimpleCheckboxHeading } from '../../../../../utils/Constant'
import { basicRadioCheckboxDataList } from '../../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'

const SimpleCheckbox = () => {
  return (
    <Col md="12">
      <div className="card-wrapper solid-border rounded-3">
        <H6 className="sub-title f-w-500">{SimpleCheckboxHeading}</H6>
        <div className="form-check-size">
          <Label check for='inline-1' className="d-block">
            <Input id="inline-1" className='checkbox-primary' type="checkbox" />
            {BasicRadioAndCheckboxBlog}
          </Label>
          {basicRadioCheckboxDataList.map(({ id, text, defaultChecked }, i) => (
            <Label check for={id} className="d-block" key={i}>
              <Input id={id} type="checkbox" className='checkbox-primary' defaultChecked={defaultChecked} />
              {text}
            </Label>
          ))}
        </div>
      </div>
    </Col>
  )
}

export default SimpleCheckbox