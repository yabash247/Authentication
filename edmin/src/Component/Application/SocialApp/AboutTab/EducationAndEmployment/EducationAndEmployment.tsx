import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { H5, P } from '../../../../../AbstractElements'
import { EducationAndEmploymentHeading } from '../../../../../utils/Constant'
import { educationAndEmploymentData } from '../../../../../Data/Application/SocialApp/SocialApp'
import SvgIcon from '../../../../../CommonElements/SVG/SvgIcon'

const EducationAndEmployment = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeader className="social-header">
          <H5>
            <span>{EducationAndEmploymentHeading}</span>
            <span className="pull-right">
              <SvgIcon iconId='more-vertical' className='feather' /> 
            </span>
          </H5>
        </CardHeader>
        <CardBody>
          {educationAndEmploymentData.map((data, index) => (
            <Row className="details-about" key={index}>
              <Col sm="6">
                <div className="your-details">
                  <span className="f-w-600">{data.heading1}</span>
                  <P>{data.date1}</P>
                  <P>{data.paragraph2}</P>
                </div>
              </Col>
              <Col sm="6">
                <div className="your-details your-details-xs">
                  <span className="f-w-600">{data.heading2}</span>
                  <P>{data.date2}</P>
                  <P>{data.paragraph2}</P>
                </div>
              </Col>
            </Row>
          ))}
        </CardBody>
      </Card>
    </Col>
  )
}

export default EducationAndEmployment