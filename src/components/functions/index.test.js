import { citiesNumber, mapCities } from '.';

import { cities } from '../../fixtures/cities-of-china.json';

const city = {
  id: 'hong-kong',
  name: 'hong kong',
  chineseName: '香港特别行政区',
};

it('should retrieve array of 18 cities when we write hong ', () => {
  expect(citiesNumber('hong', cities)).toBe(18);
});

it('should retrieve array of cities than includes hong', () => {
  expect(mapCities(city, 'hong')).toBe(true);
});
