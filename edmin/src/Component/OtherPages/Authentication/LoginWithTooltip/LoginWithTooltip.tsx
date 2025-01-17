import { Col, Container, Row } from 'reactstrap'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import LoginForm from '../Common/LoginForm'

const LoginWithTooltipContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl="5" className="login_two_image" >
          <Image className="bg-img-cover bg-center w-100 vh-100" src={dynamicImage("login/3.jpg")} alt="loginpage" />
        </Col>
        <Col xl="7" className="p-0">
          <LoginForm alignLogo="text-center" />
        </Col>
      </Row>
    </Container>
  )
}

export default LoginWithTooltipContainer