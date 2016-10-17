(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Accordion', './panel/Panel', './panel/nav/Nav', './panel/content/Content'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Accordion'), require('./panel/Panel'), require('./panel/nav/Nav'), require('./panel/content/Content'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Accordion, global.Panel, global.Nav, global.Content);
    global.index_a = mod.exports;
  }
})(this, function (exports, _Accordion, _Panel, _Nav, _Content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Content = exports.Nav = exports.Panel = exports.Accordion = undefined;

  var _Accordion2 = _interopRequireDefault(_Accordion);

  var _Panel2 = _interopRequireDefault(_Panel);

  var _Nav2 = _interopRequireDefault(_Nav);

  var _Content2 = _interopRequireDefault(_Content);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.Accordion = _Accordion2.default;
  exports.Panel = _Panel2.default;
  exports.Nav = _Nav2.default;
  exports.Content = _Content2.default;
});