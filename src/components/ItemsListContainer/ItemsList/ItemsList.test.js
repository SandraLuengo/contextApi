import React from 'react';
import renderer from 'react-test-renderer';
import ItemsList from './ItemsList.styled';
import { Provider } from '../../../state/useGlobalState';
import { initialState, reducer } from '../../../state/reducer';

const props = { className: 'test' };

it('ItemsList component renders correctly', () => {
  const tree = renderer
    .create(<Provider reducer={reducer} initialState={initialState}>
      <ItemsList {...props} />
    </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
