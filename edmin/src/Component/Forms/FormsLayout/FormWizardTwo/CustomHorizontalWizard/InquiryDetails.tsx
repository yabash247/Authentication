import React from 'react';
import { Col, Input, Label, Row } from 'reactstrap';
import { P } from '../../../../../AbstractElements';
import { useAppSelector } from '../../../../../ReduxToolkit/Hooks';
import { BankLogoListProp } from '../../../../../Type/Forms/FormsLayout/FormsWizardTwo';
import { ContactNumber, Email, EnterNumber, InqMail } from '../../../../../utils/Constant';

const InquiryDetails:React.FC<BankLogoListProp> = ({ getUserData,differentId }) => {
    const { inquiresForm } = useAppSelector((state) => state.formWizardTwo);
    const { notifications, email, contactNumber } = inquiresForm;
    const itemsName: string[] = ["Featured Items", "Newsletters", "Notifications", "Blogs"];
  
    return (
      <Col xs="12" className="inquiries-form">
        <Row>
          <Col md="6">
            <P className="f-w-500 mb-3">Select the option how you want to receive important notifications.</P>
            <div className="choose-option">
              {itemsName.map((data, index) => (
                <div key={index} className="form-check form-check-inline radio">
                  <Label check for={differentId ? data: `${data+index}`} className='d-block'>
                    <Input className="radio-primary" id={differentId ? data: `${data+index}`} type="radio" name="notifications" onChange={getUserData} checked={notifications === data} value={data} />{data}
                  </Label>
                </div>
              ))}
            </div>
          </Col>
          <Col md="6">
            <Row className="g-3">
              <Col xs="12">
                <Label check>{Email}<span className="font-danger">*</span></Label>
                <Input type="text" placeholder={InqMail} value={email} name="email" onChange={getUserData} />
              </Col>
              <Col xs="12">
                <Label for='customContact2' check>{ContactNumber}</Label>
                <Input id="customContact2" type="number" placeholder={EnterNumber} value={contactNumber} name="contactNumber" onChange={getUserData} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    );
  };

export default InquiryDetails