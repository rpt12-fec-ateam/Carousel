import React from 'react';
import { shallow, mount } from 'enzyme';
import Benefits from '../component/benefits.jsx'

describe('Test for benefits component', () => {
  let wrapper, benefits
  beforeEach(() => {
    benefits = ['Anti-inflammatory', 'Beautifying', 'Cleansing', 'Digestive Support'];
    wrapper = shallow(<Benefits benefits={benefits} />);
  });

  it('Benefits component should have a class name called "benefitType"', () => {
    expect(wrapper.find('.benefitType')).toHaveLength(4);
  });

  it('Each div of a className "benefitType" contains a data from props', () => {
    wrapper.find('.benefitType').forEach((node, index) => {
      expect(node.text()).toEqual(benefits[index]);
    });
  });


});