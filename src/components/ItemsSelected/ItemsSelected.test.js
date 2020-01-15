import React from 'react';
import renderer from 'react-test-renderer';
import ItemsSelected from './ItemsSelected.styled';
import { Provider } from '../../state/useGlobalState';
import { initialState, reducer } from '../../state/reducer';

const props = { className: 'test' };

it('ItemsSelected component renders correctly', () => {
  const tree = renderer
    .create(<Provider reducer={reducer} initialState={initialState}>
      <ItemsSelected {...props} />
    </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
