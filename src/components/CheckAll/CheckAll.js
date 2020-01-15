import React, { useRef, useEffect } from 'react';
import { useGlobalState } from '../../state/useGlobalState';
import { citiesNumber, changeAll } from '../functions';

const CheckAll = ({ className }) => {
  const [{ cities, searching, isAllChecked }, dispatch] = useGlobalState();
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.checked = isAllChecked;
  }, [isAllChecked]);
  return (
    <div className={className}>
      <input
        className="checkBox"
        type="checkbox"
        ref={inputRef}
        onClick={() => {
          dispatch({ type: 'SET_IS_ALL_CHECKED', newValue: !isAllChecked });
          changeAll(cities, searching, dispatch, !isAllChecked);
        }}
      />
      <p className="numberItems">{citiesNumber(searching, cities)} items</p>
    </div>
  );
};

export default CheckAll;
