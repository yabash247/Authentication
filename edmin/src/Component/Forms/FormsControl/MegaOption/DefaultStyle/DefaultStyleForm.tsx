import { Card, Col, Form, Input, Label, Row } from 'reactstrap'
import { Badges } from '../../../../../AbstractElements'
import { defaultFormData } from '../../../../../Data/Forms/FormsControl/MegaOption/MegaOption'

const DefaultStyleForm = () => {
  return (
    <Form className="mega-inline">
      <Row>
        {defaultFormData.map(({ id, color, badgeTitle, digits, shippingText },index) => (
          <Col sm="6" key={index}>
            <Card>
              <div className="p-20 pb-0 d-flex">
                <Label for={`radio${id}`} className='d-block' check>
                  <Input id={`radio${id}`} type="radio" name="radio1" value="option1" className={`radio radio-border-${color} radio-${color}`} />{badgeTitle}
                </Label>
                <div className="flex-grow-1">
                  <Badges color={color} className="pull-right digits">{digits}</Badges>
                </div>
              </div>
              <span className="p-20 pt-0">{shippingText}</span>
            </Card>
          </Col>
        ))}
      </Row>
    </Form>
  )
}

export default DefaultStyleForm