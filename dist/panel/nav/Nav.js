(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.Nav = mod.exports;
  }
})(this, function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var Nav = function Nav(props) {
    var expanded = props.expanded;
    var toggle = props.toggle;
    var children = props.children;


    var childrenWithProps = (typeof children === 'undefined' ? 'undefined' : _typeof(children)) === 'object' ? _react2.default.createElement(
      'div',
      null,
      (0, _react.cloneElement)(children, {
        toggle: toggle,
        expanded: expanded
      })
    ) : _react2.default.createElement(
      'button',
      { onClick: toggle },
      children
    );

    return childrenWithProps;
  };

  Nav.propTypes = {
    toggle: _react2.default.PropTypes.func,
    expanded: _react2.default.PropTypes.bool,
    children: _react2.default.PropTypes.node
  };

  exports.default = Nav;
});