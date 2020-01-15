import React from 'react';
import { useGlobalState } from '../../../state/useGlobalState';
import { selector } from '../../functions';
import { CityItem } from '../../../components';

const ItemsList = ({ className }) => {
  const [{ cities, searching }] = useGlobalState();

  return (
    <div className={className}>
      {cities.map(city => {
        if (searching === '') {
          return <CityItem city={city} selector={selector} key={city.id} />;
        }
        return (
          city.name.toLowerCase().includes(searching.toLowerCase()) && (
            <CityItem city={city} selector={selector} key={city.id} />
          )
        );
      })}
    </div>
  );
};

export default ItemsList;
