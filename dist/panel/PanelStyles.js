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
    global.PanelStyles = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var PanelStyles = {
    base: {
      maxHeight: '0px',
      transition: 'max-height 1s'
    },
    appear: {
      maxHeight: '780px',
      transition: 'max-height 1s'
    },
    leave: {
      maxHeight: '0px',
      transition: 'max-height 1s'
    },
    content: {
      overflow: 'hidden'
    }
  };

  exports.default = PanelStyles;
});