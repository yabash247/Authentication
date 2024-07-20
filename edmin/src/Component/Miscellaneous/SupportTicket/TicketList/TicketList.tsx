import { Card, CardBody, Col, Row } from 'reactstrap'
import CountUp from "react-countup";
import ProfitAndLoss from './ProfitAndLoss';
import { H3, Progressbar } from '../../../../AbstractElements';
import { ticketData } from '../../../../Data/Miscellaneous/SupportTicket/SupportTicket';

const TicketList = () => {
  return (
    <Row>
      {ticketData.map((item, index) => (
        <Col xl="4" md="6" className="box-col-6" key={index}>
          <Card className="ecommerce-widget">
            <CardBody className="support-ticket-font">
              <Row>
                <Col xs="5">
                  <span className="font-light">{item.title}</span>
                  <H3 className="total-num counter">
                    <CountUp end={item.num} className="text-dark mb-1" />
                  </H3>
                </Col>
                <ProfitAndLoss />
              </Row>
              <div className="progress-showcase">
                <Progressbar color={item.class} value={70} style={{ height: '6px' }}></Progressbar>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default TicketList