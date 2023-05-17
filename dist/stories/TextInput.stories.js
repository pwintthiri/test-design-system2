"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Outlined = exports.Lined = exports.Filled = void 0;
var _TextInput = require("./TextInput");
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
var _default = {
  // arrangement in left panel
  title: 'Example/TextInput',
  component: _TextInput.TextInput,
  tags: ['autodocs'],
  // this story is generated automatically by Storybook's Docs addon.
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['Outlined', 'Lined', 'Filled']
      }
    }
  }
}; // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
exports.default = _default;
var Outlined = {
  args: {
    type: 'outlined',
    helpText: false,
    leadIcon: false,
    trailingIcon: false,
    error: false
  }
};
exports.Outlined = Outlined;
var Lined = {
  args: {
    type: 'lined',
    helpText: false,
    leadIcon: false,
    trailingIcon: false,
    error: false
  }
};
exports.Lined = Lined;
var Filled = {
  args: {
    type: 'filled',
    helpText: false,
    leadIcon: false,
    trailingIcon: false,
    error: false
  }
};
exports.Filled = Filled;