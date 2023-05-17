"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInput = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
require("./Textinput.css");
var _excluded = ["type", "disabled", "helpText", "leadIcon", "trailingIcon", "error"];
/**
 * Primary UI component for user interaction
 */
var TextInput = function TextInput(_ref) {
  var type = _ref.type,
    disabled = _ref.disabled,
    helpText = _ref.helpText,
    leadIcon = _ref.leadIcon,
    trailingIcon = _ref.trailingIcon,
    error = _ref.error,
    props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var mode;
  if (type === "outlined") {
    mode = "storybook-textinput-outlined";
  } else if (type === "lined") {
    mode = "storybook-textinput-lined";
  } else {
    mode = "storybook-textinput-filled";
  }

  // add class if error
  var changeClass;
  if (error) {
    changeClass = "error-class";
  } else if (disabled) {
    changeClass = "disabled-class";
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: ["storybook-textinput", mode, changeClass].join(' ')
  }, leadIcon ? /*#__PURE__*/_react.default.createElement("div", {
    className: "userIcon"
  }, /*#__PURE__*/_react.default.createElement(_fa.FaUser, null)) : null, /*#__PURE__*/_react.default.createElement("div", {
    class: "form-group"
  }, /*#__PURE__*/_react.default.createElement("input", Object.assign({
    type: "text",
    id: "entered-text",
    className: "form-input",
    placeholder: "Label"
  }, props)), /*#__PURE__*/_react.default.createElement("label", {
    for: "entered-text",
    className: "form-label"
  }, "Label")), trailingIcon ? /*#__PURE__*/_react.default.createElement("div", {
    className: "crossIcon"
  }, /*#__PURE__*/_react.default.createElement(_fa.FaTimes, null)) : null), helpText ? /*#__PURE__*/_react.default.createElement("div", {
    className: "text-below"
  }, "Supporting text / Error message") : null);
};
exports.TextInput = TextInput;
TextInput.defaultProps = {
  type: 'outlined',
  disabled: false,
  helpText: false,
  leadIcon: false,
  trailingIcon: false,
  error: false
};