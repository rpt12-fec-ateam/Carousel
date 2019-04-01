// import Enzyme from 'enzyme';
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Carousel from '../component/carousel.jsx';
import Images from '../component/images.jsx';

describe('Test for Carousel', () => {
  let wrapper, images;
  beforeEach(() => {
    images = ['https://s3.amazonaws.com/dailyharvest.images/images/image-1ncreased-1Shk_PkNkNw.jpg',
      'https://s3.amazonaws.com/dailyharvest.images/images/image-alexischloe-tDcOX3rOC_M.jpg',
      'https://s3.amazonaws.com/dailyharvest.images/images/image-christine_siracusa-bypcCMcIoVE.jpg'];
    wrapper = mount(<Carousel images={images} />);
  })

  it('Carousel component should has a child component called "<Images/>"', () => {
    expect(wrapper.find(Images)).toHaveLength(1);
  });

  it('Carousel component should render 3 images in a child component "<Images/>".', () => {
    expect(wrapper.find('img')).toHaveLength(3);
    // console.log(wrapper.debug());
    wrapper.find('img').forEach((node, index) => {
      expect(node.prop('src')).toEqual(images[index]);
    })
  });

});