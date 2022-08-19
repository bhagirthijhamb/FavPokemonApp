import React from "react";
import classes from "./Filters.module.css";

const Filters = ({
  types,
  pokemonType,
  onTypeChange,
  searchValue,
  onSearch,
}) => {
  return (
    <>
      <div className={classes.filterContainer}>
        <div className={classes.filterItems}>
          <div className={classes.filterLabel}>Type</div>
          <select
            className={classes.filterInput}
            value={pokemonType}
            onChange={onTypeChange}
          >
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="filter__items">
          <label className={classes.filterLabel}>Search</label>
          <input
            className={classes.filterInput}
            type="text"
            value={searchValue}
            onChange={onSearch}
          />
        </div>
      </div>
    </>
  );
};

export default Filters;