"use strict";

var _interopRequireDefault = require("/mnt/c/Users/valen/Projects/cra-ssr/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _react = require("@testing-library/react");

var _App = _interopRequireDefault(require("./App"));

test('renders learn react link', function () {
  (0, _react.render)( /*#__PURE__*/React.createElement(_App.default, null));

  var linkElement = _react.screen.getByText(/learn react/i);

  expect(linkElement).toBeInTheDocument();
});