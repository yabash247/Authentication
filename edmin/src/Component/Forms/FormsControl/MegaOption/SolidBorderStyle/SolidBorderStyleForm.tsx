import { Card, Col, Form, Input, Label, Media, Row } from 'reactstrap'
import { Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { solidBorderStyleDataList } from '../../../../../Data/Forms/FormsControl/MegaOption/MegaOption'

const SolidBorderStyleForm = () => {
  return (
    <Form className="mega-inline default-border-style">
      <Row className="flex-column">
        {solidBorderStyleDataList.map(({ id, image, spanText },index) => (
          <Col xs="12" key={index}>
            <Card>
              <div className="p-20">
                <div className="form-check">
                  <Input id={`radio-${id}`} type="radio" name="radio1" value="option1" />
                  <Label for={`radio-${id}`} className="my-0" check>
                    <Media body>
                      <span className="d-flex list-behavior-1">
                        <span className="flex-shrink-0 ms-2">
                          <Image className="tab-img b-r-0 img-fluid" src={dynamicImage(`${image}`)} alt="home" />
                        </span>
                        <span className="flex-grow-1">
                          <span className="mb-0">{spanText}</span>
                        </span>
                      </span>
                    </Media>
                  </Label>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Form>

  )
}

export default SolidBorderStyleForm