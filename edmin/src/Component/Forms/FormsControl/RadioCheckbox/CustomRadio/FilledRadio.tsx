import { Col, Form, Input, Label } from 'reactstrap'
import { FilledRadios, ProductRadio } from '../../../../../utils/Constant'
import { H6 } from '../../../../../AbstractElements'
import { fillRadioList } from '../../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'

const FilledRadio = () => {
  return (
    <Col xxl="4" sm="6">
      <div className="card-wrapper solid-border rounded-3 fill-radio">
        <H6 className="sub-title fw-bold">{FilledRadios}</H6>
        <Form>
          <Label for='radio111' className="d-block" check>
            <Input id="radio111" type="radio" name="radio3" className="radio radio-border-primary radio-primary" defaultChecked />
            {ProductRadio}
          </Label>
          {fillRadioList.map(({ id, text, color }, i) => (
            <Label for={`radios-${id}`} className="d-block" check key={i}>
              <Input id={`radios-${id}`} type="radio" className={`radio radio-${color} radio-border-${color}`} name="radio3" />
              {text}
            </Label>
          ))}
        </Form>
      </div>
    </Col>
  )
}

export default FilledRadio