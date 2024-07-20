import React from 'react'
import { Col, FormGroup, Input, Label, Row } from 'reactstrap'
import { Btn, P } from '../../../../../AbstractElements';
import { ProceedNext } from '../../../../../utils/Constant';
import { shippingMethodData } from '../../../../../Data/Forms/FormsLayout/FormWizardOne/FormWizardOne';
import { ShippingInformationCommonProps } from '../../../../../Type/Forms/FormsLayout/FormWizardOne';

const ShippingMethods:React.FC<ShippingInformationCommonProps> = ({radioBoxValues,getUserData,handleNextButton,}) => {
  const { shippingMethod } = radioBoxValues;
  return (
    <Row className="shipping-method g-3">
      {shippingMethodData.map((data, index) => (
        <Col sm="6" key={index}>
          <div className="card-wrapper solid-border rounded-3 h-100 light-card">
            <FormGroup check className="radio">
              <Label className="form-check-label mb-0" for={data.value}>
                <Input id={data.value} color='primary' type="radio" name="shippingMethod" value={data.value} checked={shippingMethod === data.value} onChange={getUserData}/>
                {data.label}
              </Label>
            </FormGroup>
            <P>{data.details}</P>
          </div>
        </Col>
      ))}
      <Col xs="12" className="text-end">
        <Btn onClick={handleNextButton} color="primary">{ProceedNext}<i className="fa fa-truck proceed-next pe-2" /></Btn>
      </Col>
    </Row>
  )
}

export default ShippingMethods