import chinesCities from '../fixtures/cities-of-china.json';

const initialState = {
  cities: chinesCities.cities.map(city => ({ ...city, isSelected: false })),
  searching: '',
  isAllChecked: false,
};


const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CITIES':
      return {
        ...state,
        cities: action.newValue,
      };
    case 'SET_SEARCH':
      return {
        ...state,
        searching: action.newValue,
      };
    case 'SET_IS_ALL_CHECKED':
      return {
        ...state,
        isAllChecked: action.newValue,
      };
    default:
      return state;
  }
};

export { initialState, reducer };

