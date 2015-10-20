import React from 'react';
import ReactDOM from 'react-dom';
import KendoRadialGauge from './components/KendoRadialGauge.jsx';
import KendoSlider from './components/KendoSlider.jsx';



class App extends React.Component {
  render() {
    return(
    	<div>
      	<KendoRadialGauge />
      	<KendoSlider value={88} />
      </div>
    );
  }
}


ReactDOM.render(<App  />, document.getElementById('main'));

