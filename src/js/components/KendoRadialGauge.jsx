import React from 'react';
import ReactDOM from 'react-dom';

class KendoRadialGauge extends React.Component{ 
  componentDidMount() {
    var props = this.props;
    $(ReactDOM.findDOMNode(this)).kendoRadialGauge({
      theme: props.theme,
      pointer: {
        value: props.value
      },    
      scale: {
        minorUnit: props.minorUnit,
        startAngle: props.startAngle,
        endAngle: props.endAngle,
        max: props.max
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.value !== this.props.value) {
      $(ReactDOM.findDOMNode(this)).data("kendoRadialGauge").value(nextProps.value);
    }
  }

  render() {
    return <div className="gauge" />;
  }
}


KendoRadialGauge.defaultProps = {
    theme: "silver",
    minorUnit: 5,
    startAngle: -30,
    endAngle: 210,
    max: 180
}

export default KendoRadialGauge;