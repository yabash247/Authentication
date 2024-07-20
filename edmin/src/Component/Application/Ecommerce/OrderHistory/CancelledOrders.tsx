import { useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import CommonCardHeader from "../../../../CommonElements/CommonCardHeader/CommonCardHeader";
import { Cancelled, CancelledOrder, Href, Price} from "../../../../utils/Constant";
import { dynamicImage } from "../../../../Service";
import { Btn, H6, Image } from "../../../../AbstractElements";
import { Link } from "react-router-dom";
import CommonRating from "../CommonRating/CommonRating";
import { orderData } from "../../../../Data/Application/Ecommerce/OrderHistory";
import SvgIcon from "../../../../CommonElements/SVG/SvgIcon";

const CancelledOrders = () => {
  const [cancelledOrder, setCancelledOrder] = useState(orderData);
  const deleteHandler = (id: number) => {
    const newData = cancelledOrder.filter((item) => item.id !== id);
    setCancelledOrder([...newData]);
  };

  return (
    <Card>
      <CommonCardHeader title={CancelledOrder} />
      <CardBody>
        <Row className="g-sm-4 g-3">
          {cancelledOrder.map((item, index) => (
            <Col xxl="4" md="6" key={index}>
              <div className="prooduct-details-box">
                <div className="d-flex gap-3">
                  <Image className="align-self-center img-fluid img-60" src={dynamicImage(`ecommerce/${item.image}`)} alt={item.name} />
                  <div className="flex-grow-1">
                    <div className="product-name">
                      <H6>
                        <Link to={Href}>{item.name}</Link>
                      </H6>
                    </div>
                    <CommonRating />
                    <div className="price">
                      <div className="text-muted me-2">{Price}</div>: 210$
                    </div>
                    <div className="avaiabilty">
                      <div className="text-success">In stock</div>
                    </div>
                    <Btn color="danger" size="xs">{Cancelled}</Btn>
                    <SvgIcon className="feather close" onClick={() => deleteHandler(item.id)} iconId='x' />
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </CardBody>
    </Card>
  );
};

export default CancelledOrders;