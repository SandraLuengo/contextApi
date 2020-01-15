import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';
import Search from './Search';
import { Provider } from '../../state/useGlobalState';
import { initialState, reducer } from '../../state/reducer';

Enzyme.configure({ adapter: new Adapter() });

const props = { className: 'test' };

it('Search component renders correctly', () => {
  const tree = renderer
    .create(<Provider reducer={reducer} initialState={initialState}>
      <Search {...props} />
    </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('<Search/>', () => {
  it('should exist search input', () => {
    const wrapper = mount(<Provider reducer={reducer} initialState={initialState}>
      <Search />
    </Provider>);
    expect(wrapper.find('.search__input').length).toBe(1);
  });

  it('should change search value', () => {
    const wrapper = mount(<Provider reducer={reducer} initialState={initialState}>
      <Search />
    </Provider>);
    wrapper
      .find('.search__input')
      .simulate('change', { target: { value: 'hong kong' } });
  });
});
