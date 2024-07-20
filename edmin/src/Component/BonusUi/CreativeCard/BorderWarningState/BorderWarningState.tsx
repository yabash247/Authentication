import { Card, CardBody, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { WarningBorderState } from '../../../../utils/Constant'
import { borderWarningData } from '../../../../Data/BonusUi/CreativeCard/CreativeCard'
import CardHeaderCommon from '../../../Ui-Kits/CardHeaderCommon'

const BorderWarningState = () => {
  return (
    <Col xl="4">
      <Card>
        <CardHeaderCommon headClass="b-t-warning b-w-3" title={WarningBorderState} span={borderWarningData} />
        <CardBody>
          <ListGroup numbered>
            <ListGroupItem className="font-primary fw-bold" >known for delivery of useful and usable solutions</ListGroupItem>
            <ListGroupItem className="font-danger fw-bold" >Solve your problem with us</ListGroupItem>
            <ListGroupItem className="font-success fw-bold" >Certified Professionals</ListGroupItem>
            <ListGroupItem className="font-warning fw-bold" >Growth-Driven</ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BorderWarningState