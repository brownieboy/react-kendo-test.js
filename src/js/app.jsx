import React from 'react';
import ReactDOM from 'react-dom';
import KendoRadialGauge from './components/KendoRadialGauge.jsx';
import KendoSlider from './components/KendoSlider.jsx';
import {es6BindAll} from 'es6bindall';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {speed: 90};
		es6BindAll(this, ["handleSpeedChange"]);
	}

	handleSpeedChange(newSpeed) {
		this.setState({speed: newSpeed});
	}

  render() {
    return(
    	<div>
      	<KendoRadialGauge value={this.state.speed} />
      	<KendoSlider
      		value={this.state.speed}
      		handleChange={this.handleSpeedChange} />
      </div>
    );
  }
}


ReactDOM.render(<App  />, document.getElementById('main'));
