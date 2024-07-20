import { Fragment } from 'react'
import { Card, Col, Form, Input, Label, Row } from 'reactstrap'
import { Badges, P } from '../../../../../AbstractElements'
import { verticalStyleDataList } from '../../../../../Data/Forms/FormsControl/MegaOption/MegaOption'
import { VerticalStyleFormProp } from '../../../../../Type/Forms/FormControls/FormsControls'

const VerticalStyleForm = () => {
  return (
    <Form className="mega-vertical">
      <Row>
        {verticalStyleDataList.map(({ megaTitle, child }, index) => (
          <Fragment key={index}>
            <Col sm="12">
              <P className="mega-title m-b-5">{megaTitle}</P>
            </Col>
            {child.map(({ id, color, cardClass, name, badgeTitle, mediaBodyClass, digits, spanText, check, spanClass, star }: VerticalStyleFormProp) => (
              <Col sm="6" key={id}>
                <Card className={cardClass}>
                  <div className="d-flex p-20 pb-0">
                    <Label for={`radios${id}`} className="d-block" check>
                      <Input id={`radios${id}`} type="radio" name={name} value="option1" defaultChecked={check} className={`radio-border-${color} radio-${color}`} />
                      {badgeTitle}
                    </Label>
                    <div className={`flex-grow-1`}>
                      <Badges color={color} className="pull-right digits">{digits}</Badges>
                    </div>
                  </div>
                  <span className={spanClass}>
                    {star && star.map(({ id, starClass }) => <i key={id} className={`icofont icofont-star ${starClass}`}></i>)}
                    {spanText}
                  </span>
                </Card>
              </Col>
            ))}
          </Fragment>
        ))}
      </Row>
    </Form>
  )
}

export default VerticalStyleForm