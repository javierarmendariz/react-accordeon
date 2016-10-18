(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.AccordeonStyles = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var AccordeonStyles = {
    list: {
      padding: '0px',
      border: '0px',
      margin: '0px',
      overflow: 'hidden',
      listStyle: 'none'
    }
  };

  exports.default = AccordeonStyles;
});