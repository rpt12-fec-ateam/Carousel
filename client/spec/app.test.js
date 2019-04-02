import React from 'react';
import App from '../app.jsx';
import {shallow, mount} from 'enzyme';
import Carousel from '../component/carousel.jsx';
import Benefits from '../component/benefits.jsx';

describe('Test for App class component', () => {
  let wrapper = shallow(<App/>);

  it('It should have Carousel component', () => {
    expect(wrapper.find(Carousel)).toHaveLength(1);
  });

  it('It should have Benefits component', () => {
    expect(wrapper.find(Benefits)).toHaveLength(1);
  });
})