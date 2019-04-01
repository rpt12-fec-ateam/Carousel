import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import NavBar from './component/nav.jsx';
import Carousel from './component/carousel.jsx';
import Benefits from './component/benefits.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      benefits: ['Anti-inflammatory', 'Beautifying', 'Cleansing', 'Digestive Support'],
      images: ['https://s3.amazonaws.com/dailyharvest.images/images/image-1ncreased-1Shk_PkNkNw.jpg',
        'https://s3.amazonaws.com/dailyharvest.images/images/image-alexischloe-tDcOX3rOC_M.jpg',
        'https://s3.amazonaws.com/dailyharvest.images/images/image-christine_siracusa-bypcCMcIoVE.jpg']
    }
  }
  render() {
    // console.log(window.location);
    return (
      <div>
        <div className="position-relative"><NavBar /></div>
        <div className="container">
          <h6>home / smoothie / ginger+greens</h6>
          <table>
            <tbody>
              <tr>
                <td><div className="itemContainer"><Carousel images={this.state.images} /></div></td>
                <td><div className="itemDetail">Hellooooooooooooo</div></td>
              </tr>
              <tr>
                <td>blank</td>
                <td><Benefits benefits={this.state.benefits} /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    )
  }
}

export default App;
