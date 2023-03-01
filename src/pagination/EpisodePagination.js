import React from 'react'
import ReactPaginate from 'react-paginate'

import './CutuwayPagination.css'

function EpisodePagination({ size, onChangePage }) {
  return (
    <ReactPaginate
      className="Cutaway_pagination"
      breakLabel=""
      nextLabel=""
      previousLabel=""
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={3}
      pageCount={size}
      renderOnZeroPageCount={null}
      marginPagesDisplayed={0}
      previousClassName="previous"
      previousLinkClassName="link_previous"
      nextClassName="next"
      nextLinkClassName="link_next"
      activeClassName="active"
    />
  )
}

export default EpisodePagination
