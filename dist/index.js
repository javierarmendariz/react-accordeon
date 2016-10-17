(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Accordeon', './panel/Panel', './panel/nav/Nav', './panel/content/Content'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Accordeon'), require('./panel/Panel'), require('./panel/nav/Nav'), require('./panel/content/Content'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Accordeon, global.Panel, global.Nav, global.Content);
    global.index = mod.exports;
  }
})(this, function (exports, _Accordeon, _Panel, _Nav, _Content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Content = exports.Nav = exports.Panel = exports.Accordeon = undefined;

  var _Accordeon2 = _interopRequireDefault(_Accordeon);

  var _Panel2 = _interopRequireDefault(_Panel);

  var _Nav2 = _interopRequireDefault(_Nav);

  var _Content2 = _interopRequireDefault(_Content);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.Accordeon = _Accordeon2.default;
  exports.Panel = _Panel2.default;
  exports.Nav = _Nav2.default;
  exports.Content = _Content2.default;
});