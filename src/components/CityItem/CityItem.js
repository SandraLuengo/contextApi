import React, { useEffect } from 'react';
import { useGlobalState } from '../../state/useGlobalState';
import cityImg from '../../static/images/city.png';
import { citiesAreChecked } from '../functions';

const CityItem = ({ className,
  city: { chineseName, id, name, isSelected },
  selector }) => {
  const [{ cities, searching }, dispatch] = useGlobalState();
  useEffect(() => {
    citiesAreChecked(cities, searching, dispatch);
  }, [cities, dispatch, searching]);
  return (
    <div className={className}>
      <input
        className="checkBox checkCity"
        type="checkbox"
        checked={isSelected}
        onChange={() => {
          selector(id, cities, dispatch);
        }}
      />
      <img className="cityImg" src={cityImg} alt="cityImage" />
      <div className="cityInfo">
        <p className="cityInfo__name">{name}</p>
        <p className="cityInfo__chinese">{chineseName}</p>
      </div>
      <p
        className="fas fa-times deleteItem"
        onClick={() => {
          selector(id, cities, dispatch);
        }}
      />
    </div>
  );
};

export default CityItem;
