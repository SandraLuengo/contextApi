import React from 'react';
import renderer from 'react-test-renderer';
import CityItem from './CityItem';
import { Provider } from '../../state/useGlobalState';
import { initialState, reducer } from '../../state/reducer';

const props = { className: 'test' };

it('CityItem component renders correctly', () => {
  const tree = renderer
    .create(<Provider reducer={reducer} initialState={initialState}>
      <CityItem {...props} />
    </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
