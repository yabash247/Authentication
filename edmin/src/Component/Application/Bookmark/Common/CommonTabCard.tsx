import { Card, CardBody, CardHeader, TabPane } from 'reactstrap'
import { H4 } from '../../../../AbstractElements'
import ViewBookmark from '../BookmarksTabs/ViewBookmark'
import { NoBookmarksFound } from '../../../../utils/Constant'
import { CommonTabCardProp } from '../../../../Type/Application/Bookmark/Bookmark'

const CommonTabCard = ({ tabId, title }: CommonTabCardProp) => {
  return (
    <TabPane tabId={tabId}>
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <H4 className="mb-0">{title}</H4>
          <ViewBookmark />
        </CardHeader>
        <CardBody>
          <div className="details-bookmark text-center">
            <div className="no-favourite">
              <span>{NoBookmarksFound}</span>
            </div>
          </div>
        </CardBody>
      </Card>
    </TabPane>
  )
}

export default CommonTabCard