import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import NavBar from './component/nav.jsx';
import Carousel from './component/carousel.jsx';
import Benefits from './component/benefits.jsx';
import styled from 'styled-components';


const Container = styled.div`

  padding-left: 5%;
  padding-right: 5%;npm
  width: 80%;
`
const ItemContainer = styled.div`
  width: 320px;
  height: 320px;
`
const ItemDetail = styled.div`

`
const Table = styled.table`

  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
`


class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      benefits: ['Anti-inflammatory', 'Beautifying', 'Cleansing', 'Digestive Support'],
      images: ['https://s3.amazonaws.com/dailyharvest.images/images/image-1ncreased-1Shk_PkNkNw.jpg',
        'https://s3.amazonaws.com/dailyharvest.images/images/image-alexischloe-tDcOX3rOC_M.jpg',
        'https://s3.amazonaws.com/dailyharvest.images/images/image-christine_siracusa-bypcCMcIoVE.jpg']
    }
  }

  getImage() {
    fetch('/images')
    .then(data => data.json())
    .then(items => console.log("data form database", items));
  }

  componentDidMount() {
    this.getImage()

  }
  render() {
    this.getImage();
    return (
      <div>
        <div className="position-relative"><NavBar /></div>
        <Container>
          <div className="container">
            <h6>home / smoothie / ginger+greens</h6>
            <Table>
                <tbody>
                  <tr>
                    <td>
                      <ItemContainer style = {{marginLeft: '10%', marginRight: '10%'}}>
                        <div className="itemContainer"><Carousel images={this.state.images} /></div>
                      </ItemContainer>
                    </td>
                    <td>
                      <ItemDetail>
                        <div id="itemDetail"></div>
                      </ItemDetail>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td><Benefits benefits={this.state.benefits} /></td>
                  </tr>
                </tbody>
            </Table>
          </div>
        </Container>
      </div>
    )
  }
}

export default ImageCarousel;
window.ImageCarousel = ImageCarousel;