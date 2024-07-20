import { Card, CardBody, Col, Row } from 'reactstrap'
import DescriptionMyGallery from './DescriptionMyGallery'

const PhotosTab = () => {
  return (
    <Row>
      <Col sm="12">
        <Card className='gallery-grid'>
          <CardBody className="my-gallery gallery-with-description row mb-0">
            <DescriptionMyGallery />
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default PhotosTab