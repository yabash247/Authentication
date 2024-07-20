import { Card, CardBody, Col, Row } from 'reactstrap'
import { H5, P } from '../../../../AbstractElements'
import SvgIcon from '../../../../CommonElements/SVG/SvgIcon'
import { articleDataOne } from '../../../../Data/Miscellaneous/Faq/Faq'

const ArticleVideo1 = () => {
  return (
    <Col xl="4" md="6">
      <Row>
        {articleDataOne.map((item, i) => (
          <Col sm="12" key={i}>
            <Card>
              <CardBody>
                <div className="d-flex">
                  <SvgIcon iconId='codepen' className='feather m-r-30' />
                  <div className="flex-grow-1">
                    <H5 className="f-w-500">{item.title}</H5>
                    <P>{item.description}</P>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  )
}

export default ArticleVideo1