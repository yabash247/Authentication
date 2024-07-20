import { useState } from 'react'
import { defaultTouchSpinData, touchSpinData } from '../../../../../Data/Forms/FormsWidgets/Touchspin/Touchspin';
import { Card, CardBody, Col } from 'reactstrap';
import { OutlinedTouchspins } from '../../../../../utils/Constant';
import CommonTouchspin from '../Common/CommonTouchspin';
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader';

const OutlinedTouchspin = () => {
    const initialValues = defaultTouchSpinData.map((data) => data.value);
    const [values, setValues] = useState(initialValues);
    
    const handleIncrement = (index:number) => {
      setValues((prevValues) => {
        return prevValues.map((value, i) => (i === index ? value + 1 : value));
      });
    };
    const handleDecrement = (index:number) => {
      setValues((prevValues) => {
        return prevValues.map((value, i) => (i === index && value > 0 ? value - 1 : value));
      });
    };
    return (
      <Col xl="6">
        <Card>
          <CommonCardHeader title={OutlinedTouchspins} span={touchSpinData} headClass='pb-0' />
          <CardBody className="common-flex">
            {defaultTouchSpinData.map((data) => (
              <CommonTouchspin key={data.id} outline color={data.color} value={values[data.id - 1]} onIncrement={() => handleIncrement(data.id - 1)} 
                onDecrement={() => handleDecrement(data.id - 1)} btnClass={`spin-border-${data.color}`}/>
            ))}
          </CardBody>
        </Card>
      </Col>
    )
}

export default OutlinedTouchspin