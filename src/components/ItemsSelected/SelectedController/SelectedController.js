import React from 'react';
import { useGlobalState } from '../../../state/useGlobalState';
import { clearAll } from '../../functions';

const SelectedController = ({ className }) => {
  const [{ cities }, dispatch] = useGlobalState();

  const selected = () => cities.filter(city => city.isSelected).length;

  return (
    <div className={className}>
      <p className="itemsNumber">{selected()} items</p>
      <p
        className="clear"
        onClick={() => {
          clearAll(cities, dispatch);
          dispatch({ type: 'SET_IS_ALL_CHECKED', newValue: false });
        }}
      >
        CLEAR
      </p>
    </div>
  );
};

export default SelectedController;
