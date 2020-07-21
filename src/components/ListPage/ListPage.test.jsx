import React from 'react';
import { shallow } from 'enzyme';
import ListPage from '../ListPage/ListPage';
import { ThemeProvider } from '../../hooks/ThemeProvider';

describe('ListPage component', () => {

  it('renders ListPage', () => {
    const wrapper = shallow(
      <ThemeProvider>
        <ListPage/>
      </ThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
