import React from 'react';
import ReactDOM from 'react-dom';

class KendoSlider extends React.Component{ 
  componentDidMount() {
    var props = this.props;
    $(ReactDOM.findDOMNode(this)).kendoSlider({
      min: props.min,
      max: props.max,
      showButtons: props.showButtons,
      value: this.props.value,
      change: this.handleChange
    });
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.value !== this.props.value) {
      $(this.getDOMNode()).data("kendoRadialGauge").value(nextProps.value);
    }
  }

  componentWillUnmount() {
    $(ReactDOM.findDOMNode(this)).data("kendoSlider").destroy();
  }

  handleChange(e) {
    // this.publish("change.speed", { speed: e.value });
    console.log("handleChange()");
  }

  render() {
    return <div />;
  }
}


KendoSlider.defaultProps = {
  min: 0,
  max: 180,
  showButtons: false
};

export default KendoSlider;