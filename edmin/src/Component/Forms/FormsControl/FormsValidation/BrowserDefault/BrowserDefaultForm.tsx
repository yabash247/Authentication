import { Form, FormGroup, Input, Label } from 'reactstrap'
import { AgreeToThePolicies, ChooseFile, Description, EmailAddress, EmailPlaceholder, FirstName, MasterCard, Password, Paypal, SelectYourPaymentMethod, State, SubmitButton, SureInformation, Visa } from '../../../../../utils/Constant'
import { Btn, H6 } from '../../../../../AbstractElements'

const BrowserDefaultForm = () => {
  return (
    <Form onSubmit={(event) => event.preventDefault()} className='theme-form'>
        <FormGroup>
            <Label> {FirstName}</Label>
            <Input type="text" placeholder={FirstName} required />
        </FormGroup>
        <FormGroup>
            <Label>{EmailAddress}</Label>
            <Input type="email" placeholder={EmailPlaceholder} required />
        </FormGroup>
        <FormGroup>
            <Label className="col-form-label">{Password}</Label>
            <Input type="password" required />
        </FormGroup>
        <FormGroup>
            <Label>{State}</Label>
            <Input id="exampleSelect" name="select" type="select" required>
                <option>Choose...</option>
                <option>U.K </option>
                <option>Thailand</option>
                <option>India </option>
                <option>U.S</option>
            </Input>
        </FormGroup>
        <FormGroup>
            <Label>{ChooseFile}</Label>
            <Input type="file" required />
        </FormGroup>
        <FormGroup>
            <div className="card-wrapper solid-border rounded-3 checkbox-checked">
                <H6 className="sub-title fw-bold">{SelectYourPaymentMethod}</H6>
                <div className="radio-form">
                    <FormGroup check>
                        <Input type="radio" id="flexRadioDefault1" name="flexRadioDefault" required/>
                        <Label for='flexRadioDefault1' check>{Visa}</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input type="radio" id="flexRadioDefault2" name="flexRadioDefault" required/>
                        <Label for='flexRadioDefault2' check >{MasterCard}</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input type="radio" id="flexRadioDefault3" name="flexRadioDefault" defaultChecked required />
                        <Label for='flexRadioDefault3' check >{Paypal}</Label>
                    </FormGroup>
                </div>
            </div>
        </FormGroup>
        <FormGroup>
            <Label>{Description}</Label>
            <Input type="textarea" id="exampleFormControlTextarea1" rows={3} />
        </FormGroup>
        <FormGroup className="checkbox-checked">
            <Input id="flexCheckDefault" type="checkbox" required />
            <Label for='flexCheckDefault' check>{AgreeToThePolicies}</Label>
        </FormGroup>
        <FormGroup>
            <div className="form-check form-switch">
                <Input id="flexSwitchCheckDefault" type="checkbox" role="switch" required/>
                <Label for='flexSwitchCheckDefault' check>{SureInformation}</Label>
            </div>
        </FormGroup>
        <FormGroup>
            <Btn color="primary">{SubmitButton}</Btn>
        </FormGroup>
    </Form>
  )
}

export default BrowserDefaultForm