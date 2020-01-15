import React from 'react';
import renderer from 'react-test-renderer';
import ItemsContainer from './ItemsContainer.styled';
import { Provider } from '../../state/useGlobalState';
import { initialState, reducer } from '../../state/reducer';

const props = { className: 'test' };

it('ItemsContainer component renders correctly', () => {
  const tree = renderer
    .create(<Provider reducer={reducer} initialState={initialState}>
      <ItemsContainer {...props} />
    </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
