import { Fragment } from 'react'
import { Col, Input, Label } from 'reactstrap'
import { H6 } from '../../../../../AbstractElements'
import { SelectYourPaymentMethods, VisaAnimated } from '../../../../../utils/Constant'
import { animatedPaymentData } from '../../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'

const AnimatedRadio = () => {
  return (
    <Col sm="6">
      <div className="card-wrapper solid-border rounded-3">
        <H6 className="sub-title f-w-500">{SelectYourPaymentMethods}</H6>
        <Label className="d-block" for='edo-ani' check>
          <Input className="radio-primary" id="edo-ani" type="radio" name="rdo-ani" />
          {VisaAnimated}
        </Label>
        {animatedPaymentData.map(({ id, text, defaultChecked ,color}, index) => (
          <Fragment key={index}>
            <Label className="d-block" check for={id}>
              <Input className={`radio-${color}`} id={id} type="radio" name="rdo-ani" defaultChecked={defaultChecked} />{text}
            </Label>
          </Fragment>
        ))}
      </div>
    </Col>
  )
}

export default AnimatedRadio