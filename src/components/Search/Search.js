import React from 'react';
import { useGlobalState } from '../../state/useGlobalState';
import { citiesAreChecked } from '../functions';

const Search = ({ className }) => {
  const [{ cities }, dispatch] = useGlobalState();

  const handleChange = ({ target: { value } }) => {
    dispatch({ type: 'SET_IS_ALL_CHECKED', newValue: false });
    dispatch({ type: 'SET_SEARCH', newValue: value });
    citiesAreChecked(cities, value, dispatch);
  };

  return (
    <div className={className}>
      <div className="search">
        <i className="fas fa-search search__icon" />
        <input
          className="search__input"
          placeholder="Search by name"
          onChange={e => handleChange(e)}
        />
      </div>
    </div>
  );
};

export default Search;
