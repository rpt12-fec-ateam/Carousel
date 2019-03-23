import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <div>Hello from React</div>
      </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)