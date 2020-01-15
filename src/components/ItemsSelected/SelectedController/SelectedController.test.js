import React from 'react';
import renderer from 'react-test-renderer';
import SelectedController from './SelectedController';
import { Provider } from '../../../state/useGlobalState';
import { initialState, reducer } from '../../../state/reducer';

const props = { className: 'test' };

it('SelectedController component renders correctly', () => {
  const tree = renderer
    .create(<Provider reducer={reducer} initialState={initialState}>
      <SelectedController {...props} />
    </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
