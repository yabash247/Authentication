import { Card, Col, Container, Row } from 'reactstrap'
import { Gallery, MasonryGalleryCap } from '../../../../utils/Constant'
import MasonryGalleryBody from './MasonryGalleryBody'
import CommonCardHeader from '../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'

const MasonryGalleryContainer = () => {
  return (
    <>
    <Breadcrumbs mainTitle={MasonryGalleryCap} parent={Gallery} />
    <Container fluid>
      <Row>
        <Col sm="12" className="box-col-12">
          <Card className="gallery-grid">
            <CommonCardHeader title={MasonryGalleryCap} headClass='pb-0' />
            <MasonryGalleryBody />
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default MasonryGalleryContainer