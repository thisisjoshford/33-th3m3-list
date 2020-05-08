import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';
import { ThemeProvider } from '../../hooks/ThemeProvider';

describe('Main component', () => {

  it('renders Main', () => {
    const wrapper = shallow(
      <ThemeProvider>
        <Main/>
      </ThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
