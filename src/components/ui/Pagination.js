import React from "react";
import PropTypes from "prop-types";
import classes from "./Pagination.module.css";
import { usePagination, DOTS } from "./../../hooks/usePagination";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  function onNext() {
    onPageChange(currentPage + 1);
  }

  function onPrevious() {
    onPageChange(currentPage - 1);
  }

  let lastPage = paginationRange[paginationRange.length - 1];

  const leftArrowClasses =
    currentPage === 1
      ? classes.paginationItem + " " + classes.disabled
      : classes.paginationItem;

  const rightArrowClasses =
    currentPage === lastPage
      ? classes.paginationItem + " " + classes.disabled
      : classes.paginationItem;

  function pillClassesHnadler(pageNumber) {
    return pageNumber === currentPage
      ? classes.paginationItem + " " + classes.selected
      : classes.paginationItem;
  }
  const leftArrow = classes.arrow + " " + classes.left;
  const rightArrow = classes.arrow + " " + classes.right;

  return (
    <>
      <ul className={classes.paginationContainer + " " + className}>
        {/* Left navigation arrow */}
        <li key="leftArrow" className={leftArrowClasses} onClick={onPrevious}>
          <div className={leftArrow} />
        </li>
        {paginationRange.map((pageNumber) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return (
              <li key={Math.random()} className={classes.paginationItem}>
                &#8230;
              </li>
            );
          }

          // Render our Page Pills
          return (
            <li
              key={pageNumber}
              className={pillClassesHnadler(pageNumber)}
              aria-current={pageNumber === currentPage ? "page" : "false"}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
        {/*  Right Navigation arrow */}
        <li key="rightArrow" className={rightArrowClasses} onClick={onNext}>
          <div className={rightArrow} />
        </li>
      </ul>
    </>
  );
};

Pagination.propTypes = {
  onPageChange: PropTypes.func,
  totalCount: PropTypes.number,
  siblingCount: PropTypes.number,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  className: PropTypes.string,
};

export default Pagination;
