import React from 'react';
import renderer from 'react-test-renderer';
import ItemsListContainer from './ItemsListContainer.styled';
import { Provider } from '../../state/useGlobalState';
import { initialState, reducer } from '../../state/reducer';

const props = { className: 'test' };

it('ItemsListContainer component renders correctly', () => {
  const tree = renderer
    .create(<Provider reducer={reducer} initialState={initialState}>
      <ItemsListContainer {...props} />
    </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
