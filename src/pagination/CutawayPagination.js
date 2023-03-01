import React from 'react'
import ReactPaginate from 'react-paginate'

import RightArrow from '../assets/image/right_arrow.svg'

import './CutuwayPagination.css'

function CutawayPagination({ size, onChangePage }) {
  return (
    <ReactPaginate
      className="Cutaway_pagination"
      breakLabel=""
      nextLabel=""
      previousLabel=""
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={5}
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

export default CutawayPagination
