import * as React from 'react'
import ReactPaginate from 'react-paginate'

import style from './Pagination.module.scss'

interface IPaginationProps {
  setCurrentPage: (page: number) => void
  currentPage: number
}

const Pagination: React.FunctionComponent<IPaginationProps> = ({
  setCurrentPage,
  currentPage,
}) => {
  return (
    <>
      <ReactPaginate
        className={style.pagination}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => setCurrentPage(e.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
      />
    </>
  )
}

export default Pagination
