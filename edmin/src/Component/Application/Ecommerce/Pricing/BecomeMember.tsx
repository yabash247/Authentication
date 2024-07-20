import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { Btn, H3, LI, UL } from '../../../../AbstractElements'
import { BecomeMembers, BecomeSignUpeMembers } from '../../../../utils/Constant'
import { becomeMemberData } from '../../../../Data/Application/Ecommerce/Pricing'

const BecomeMember = () => {
  return (
    <Card>
      <CommonCardHeader title={BecomeMembers} />
      <CardBody className="pricing-block">
        <Row>
          {becomeMemberData.map((item, index) => (
            <Col lg="3" md="6" key={index}>
              <div className="pricingtable">
                <div className="pricingtable-header">
                  <H3 className="title">{item.type}</H3>
                </div>
                <div className="price-value">
                  <span className="currency">$</span>
                  <span className="amount">{item.price}</span>
                  <span className="duration">/mo</span>
                </div>
                <UL className="pricing-content">
                  {item.benefit.map((data, index) => (
                    <LI key={index}>{data}</LI>
                  ))}
                </UL>
                <div className="pricingtable-signup">
                  <Btn size="lg" color="primary">{BecomeSignUpeMembers}</Btn>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </CardBody>
    </Card>
  )
}

export default BecomeMember