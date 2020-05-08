import React from 'react';
import { shallow } from 'enzyme';
import Toggle from './Toggle';
import { ThemeProvider } from '../../hooks/ThemeProvider';
import { ContentProvider } from '../../hooks/ContentProvider';

describe('Toggle component', () => {


  it('renders Toggle', () => {
    const wrapper = shallow(
      <ContentProvider>
        <Toggle value={true} toggle={()=>{}}/>
      </ContentProvider>
   
    );
    expect(wrapper).toMatchSnapshot();
  });
});
