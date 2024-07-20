//@ts-nocheck
import { useState } from 'react'
import { Accordion, Card, CardBody, Col } from 'reactstrap';
import { SimpleAccordions } from '../../../../utils/Constant';
import { accordionData, accordionList } from '../../../../Data/Ui-Kits/Accordion/Accordion';
import StaticAccordion from './StaticAccordion';
import CommonAccordionItem from '../Common/CommonAccordionItem';
import CardHeaderCommon from '../../CardHeaderCommon';

const SimpleAccordion = () => {
  const [open, setOpen] = useState<string>("1");
  const toggle = (id) => (open === id ? setOpen() : setOpen(id));
  return (
    <Col md="6">
      <Card>
        <CardHeaderCommon title={SimpleAccordions} span={accordionData} headClass='pb-0' />
        <CardBody>
          <Accordion open={open} toggle={toggle}>  
            <StaticAccordion />
            {accordionList.map((data, index) => (
              <CommonAccordionItem item={data} key={index} />
            ))}
          </Accordion>
        </CardBody>
      </Card>
    </Col>
  )
}

export default SimpleAccordion