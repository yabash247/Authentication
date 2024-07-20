import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { Href, Next, Previous } from '../../../../../../utils/Constant'

const CardsPagination = () => {
  return (
    <div className="job-pagination">
      <Pagination className="pagination-primary pagination-border-primary">
        <PaginationItem disabled>
          <PaginationLink href={Href}>{Previous}</PaginationLink>
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink href={Href}>{"1"}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={Href}>{"2"}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={Href}>{"3"}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={Href}>{Next}</PaginationLink>
        </PaginationItem>
      </Pagination>
    </div>
  )
}

export default CardsPagination