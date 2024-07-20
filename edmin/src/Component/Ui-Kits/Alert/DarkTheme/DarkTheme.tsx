import { Card, CardBody, Col, Row } from 'reactstrap'
import { LinkColorDarkTheme } from '../../../../utils/Constant'
import { linkColorData } from '../../../../Data/Ui-Kits/Alert/AlertData'
import DarkThemeLeftSection from './DarkThemeLeftSection'
import DarkThemeRightSection from './DarkThemeRightSection'
import CardHeaderCommon from '../../CardHeaderCommon'

const DarkTheme = () => {
  return (
    <Col xl="12">
      <Card>
        <CardHeaderCommon title={LinkColorDarkTheme} span={linkColorData} headClass='pb-0'  />
        <CardBody>
          <Row>
            <DarkThemeLeftSection />
            <DarkThemeRightSection />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default DarkTheme