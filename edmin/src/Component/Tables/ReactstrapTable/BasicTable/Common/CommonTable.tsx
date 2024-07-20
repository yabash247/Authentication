import { Table } from 'reactstrap'
import { CommonTableProp } from '../../../../../Type/Tables/ReactstrapTable/BasicTable/BasicTable'

const CommonTable :React.FC<CommonTableProp>= ({ tableClass, strip, caption, size, hover, headClass, headRowClass, headData, children ,Class}) => {
  return (
    <div className={`theme-scrollbar ${tableClass ? tableClass : ""}`}>
      <Table striped={strip} hover={hover} size={size} responsive={"sm"} className={Class}>
        {caption && <caption>{caption}</caption>}
        <thead className={headClass}>
          <tr className={headRowClass}>
            {headData.map((head) => (
              <th key={head.id} scope="col">
                {head.head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </Table>
     </div>
  )
}

export default CommonTable