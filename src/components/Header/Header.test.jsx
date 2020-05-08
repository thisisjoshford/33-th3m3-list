import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { ThemeProvider } from '../../hooks/ThemeProvider';

describe('Header component', () => {

  it('renders Header', () => {
    const wrapper = shallow(
      <ThemeProvider>
        <Header/>
      </ThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
