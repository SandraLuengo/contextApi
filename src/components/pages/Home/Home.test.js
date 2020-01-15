import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home.styled';
import { Provider } from '../../../state/useGlobalState';
import { initialState, reducer } from '../../../state/reducer';

const props = { className: 'test' };

it('Home component renders correctly', () => {
  const tree = renderer
    .create(<Provider reducer={reducer} initialState={initialState}>
      <Home {...props} />
    </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
