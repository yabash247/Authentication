import { CardBody, Col, Form, Input, InputGroup, InputGroupText, Label, Row } from 'reactstrap'
import { H6, P } from '../../../../../AbstractElements'
import { BasicInputGroupBasic, RecipientPlaceholder, ServerPlaceholder, UsernamePlaceholder, WithTextarea, Wrapping, YourVanityUrl } from '../../../../../utils/Constant'

const BasicInputGroupsCardBody = () => {
  const wrappingParagraph = "Input groups wrap by default via flex-wrap: wrap in order to accommodate custom form field validation within an input group. You may disable this with ";
  return (
    <CardBody className='card-wrapper input-group-wrapper'>
      <Row className="g-5">
        <Col md="12">
          <div className="card-wrapper solid-border rounded-3 main-custom-form input-group-wrapper">
            <H6 className="sub-title fw-bold">{BasicInputGroupBasic}</H6>
            <Form className="theme-form row g-3">
              <InputGroup>
                <InputGroupText id="basic-addon1">{"@"}</InputGroupText>
                <Input type="text" placeholder={UsernamePlaceholder} />
              </InputGroup>
              <InputGroup>
                <Input type="text" placeholder={RecipientPlaceholder} />
                <InputGroupText id="basic-addon2">{"@example.com"}</InputGroupText>
              </InputGroup>
              <Label>{YourVanityUrl}</Label>
              <InputGroup>
                <InputGroupText id="basic-addon3">{"https://example.com/"}</InputGroupText>
                <Input type="text" />
              </InputGroup>
              <InputGroup>
                <InputGroupText>{"$"}</InputGroupText>
                <Input type="text" />
                <InputGroupText>{".00"}</InputGroupText>
              </InputGroup>
              <InputGroup>
                <Input type="text" placeholder={UsernamePlaceholder} />
                <InputGroupText>{"@"}</InputGroupText>
                <Input type="text" placeholder={ServerPlaceholder} />
              </InputGroup>
              <InputGroup>
                <InputGroupText>{WithTextarea}</InputGroupText>
                <Input type="textarea" />
              </InputGroup>
            </Form>
          </div>
        </Col>
        <Col xs="12">
          <div className="card-wrapper solid-border rounded-3 input-radius">
            <H6 className="sub-title fw-bold">{Wrapping} </H6>
            <P className="f-m-light mb-1">{wrappingParagraph} <code>{".flex-nowrap"}</code>.</P>
            <Form className="theme-form row g-3"> 
              <InputGroup className="flex-nowrap">
                <InputGroupText id="addon-wrapping">{"@"}</InputGroupText>
                <Input type="text" placeholder={UsernamePlaceholder} />
              </InputGroup>
            </Form>
          </div>
        </Col>
      </Row>
    </CardBody>
  )
}

export default BasicInputGroupsCardBody