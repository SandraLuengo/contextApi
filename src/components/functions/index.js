const mapCities = (city, searching) =>
  city.name.toLowerCase().includes(searching.toLowerCase());

const selector = (cityId, cities, dispatch) => {
  const citiesUpdated = cities.map(cityMap =>
    (cityMap.id === cityId
      ? { ...cityMap, isSelected: !cityMap.isSelected }
      : cityMap));
  dispatch({ type: 'SET_CITIES', newValue: citiesUpdated });
};

const citiesNumber = (searching, cities) =>
  (searching === ''
    ? cities.length
    : cities.filter(city => mapCities(city, searching)).length);

const changeAll = (cities, searching, dispatch, value) => {
  if (searching !== '') {
    const citiesUpdated = cities.map(city => {
      if (mapCities(city, searching)) {
        return { ...city, isSelected: value };
      }

      return { ...city };
    });
    dispatch({ type: 'SET_CITIES', newValue: citiesUpdated });
  } else {
    const citiesUpdated = cities.map(city => ({ ...city, isSelected: value }));
    dispatch({ type: 'SET_CITIES', newValue: citiesUpdated });
  }
};

const clearAll = (cities, dispatch) => {
  const citiesUpdated = cities.map(city => ({ ...city, isSelected: false }));
  dispatch({ type: 'SET_CITIES', newValue: citiesUpdated });
};

const setCheckAll = (citiesChecked, citiesSearching, dispatch) =>
  (citiesSearching > 0 && citiesChecked === citiesSearching
    ? dispatch({ type: 'SET_IS_ALL_CHECKED', newValue: true })
    : dispatch({ type: 'SET_IS_ALL_CHECKED', newValue: false }));

const citiesAreChecked = (cities, searching, dispatch) => {
  const citiesChecked = cities.filter(city => mapCities(city, searching) && city.isSelected).length;

  const citiesSearching = cities.filter(city => mapCities(city, searching))
    .length;

  setCheckAll(citiesChecked, citiesSearching, dispatch);
};

export {
  selector,
  citiesNumber,
  changeAll,
  clearAll,
  mapCities,
  citiesAreChecked,
};
