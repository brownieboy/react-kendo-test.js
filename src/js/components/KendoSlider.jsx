import React from 'react';
import ReactDOM from 'react-dom';
import {es6BindAll} from 'es6bindall';

class KendoSlider extends React.Component{
  constructor(props) {
    super(props);
    es6BindAll(this, ["handleChange"]);
  }

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
    // Doesn't appear to be necessary?!!
    // if(nextProps.value !== this.props.value) {
    //   var $theDOMNode = $(ReactDOM.findDOMNode(this));
    //  $(ReactDOM.findDOMNode(this)).attr("data-kendoRadialGauge").value(nextProps.value);
    // }
  }

  componentWillUnmount() {
    $(ReactDOM.findDOMNode(this)).data("kendoSlider").destroy();
  }

  handleChange(e) {
    this.props.handleChange(e.value);
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