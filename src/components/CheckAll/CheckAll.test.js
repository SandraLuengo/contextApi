import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';
import CheckAll from './CheckAll';
import { Provider } from '../../state/useGlobalState';
import { initialState, reducer } from '../../state/reducer';

Enzyme.configure({ adapter: new Adapter() });

const props = { className: 'test' };

it('CheckAll component renders correctly', () => {
  const tree = renderer
    .create(<Provider reducer={reducer} initialState={initialState}>
      <CheckAll {...props} />
    </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('<CheckAll/>', () => {
  it('should exist checkbox input', () => {
    const wrapper = mount(<Provider reducer={reducer} initialState={initialState}>
      <CheckAll />
    </Provider>);
    expect(wrapper.find('.checkBox').length).toBe(1);
  });

  it('should change search value', () => {
    const wrapper = mount(<Provider reducer={reducer} initialState={initialState}>
      <CheckAll />
    </Provider>);
    wrapper.find('.checkBox').simulate('click', { target: { checked: true } });
  });
});
