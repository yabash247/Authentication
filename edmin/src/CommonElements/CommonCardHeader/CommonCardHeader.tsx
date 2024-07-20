import React, { Fragment } from 'react'
import { CardHeader } from 'reactstrap'
import H4 from '../Headings/H4Element'
import P from '../Paragraph'
import { CommonCardHeaderProp } from '../../Type/Layout/CommonElements/CommonCardHeader'

const CommonCardHeader: React.FC<CommonCardHeaderProp> = ({ title, span, headClass, icon, tagClass }) => {
  return (
    <CardHeader className={headClass ? headClass : ""}>
      <H4 className={tagClass ? tagClass : ""}>{icon && icon}{title}</H4>
      {span && (
        <P className="desc mb-0 mt-1">
          {span.map((data, index) => (
            <Fragment key={index}>
              {data?.text} {data.code && <code>{data.code}</code>} {data.mark && <mark>{data.mark}</mark>}
            </Fragment>
          ))}
        </P>
      )}
    </CardHeader>
  )
}

export default CommonCardHeader;
