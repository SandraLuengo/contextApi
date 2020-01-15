import React from 'react';
import { useGlobalState } from '../../state/useGlobalState';
import { selector } from '../functions';
import { SelectedController, CityItem } from '../../components';

const ItemsSelected = ({ className }) => {
  const [{ cities }] = useGlobalState();

  return (
    <div className={className}>
      <SelectedController />
      <div className="itemsSelected">
        {cities.map(city =>
            city.isSelected && (
              <CityItem
                city={city}
                selectorSide
                selector={selector}
                key={city.id}
              />
            ))}
      </div>
    </div>
  );
};

export default ItemsSelected;
