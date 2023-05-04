class FluidInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      value: "" };

  }
  focusField() {
    const { focused } = this.state;
    this.setState({
      focused: !focused });

  }
  handleChange(event) {
    const { target } = event;
    const { value } = target;
    this.setState({
      value: value });

  }
  render() {
    const { type, label, style, id } = this.props;
    const { focused, value } = this.state;

    let inputClass = "fluid-input";
    if (focused) {
      inputClass += " fluid-input--focus";
    } else if (value != "") {
      inputClass += " fluid-input--open";
    }

    return /*#__PURE__*/(
      React.createElement("div", { className: inputClass, style: style }, /*#__PURE__*/
      React.createElement("div", { className: "fluid-input-holder" }, /*#__PURE__*/

      React.createElement("input", {
        className: "fluid-input-input",
        type: type,
        id: id,
        onFocus: this.focusField.bind(this),
        onBlur: this.focusField.bind(this),
        onChange: this.handleChange.bind(this),
        autocomplete: "off" }), /*#__PURE__*/

      React.createElement("label", { className: "fluid-input-label", forHtml: id }, label))));




  }}


class Button extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: `button ${this.props.buttonClass}`, onClick: this.props.onClick },
      this.props.buttonText));


  }}


class LoginContainer extends React.Component {
  render() {

    const style = {
      margin: "15px 0" };

    return /*#__PURE__*/(
      React.createElement("div", { className: "login-container" }, /*#__PURE__*/
      React.createElement("div", { className: "title" }, "Login"), /*#__PURE__*/


      React.createElement(FluidInput, { type: "text", label: "name", id: "name", style: style }), /*#__PURE__*/
      React.createElement(FluidInput, { type: "password", label: "password", id: "password", style: style }), /*#__PURE__*/
      React.createElement(Button, { buttonText: "log in", buttonClass: "login-button" })));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(LoginContainer, null), document.getElementById("root"));