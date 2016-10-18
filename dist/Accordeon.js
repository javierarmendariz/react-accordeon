(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', './AccordeonStyles'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('./AccordeonStyles'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.AccordeonStyles);
    global.Accordeon = mod.exports;
  }
})(this, function (exports, _react, _AccordeonStyles) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _AccordeonStyles2 = _interopRequireDefault(_AccordeonStyles);

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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var Accordeon = function (_Component) {
    _inherits(Accordeon, _Component);

    function Accordeon(props) {
      _classCallCheck(this, Accordeon);

      var _this = _possibleConstructorReturn(this, (Accordeon.__proto__ || Object.getPrototypeOf(Accordeon)).call(this, props));

      _this.state = {
        items: _this.getInitialItemsState(props),
        initialRender: true
      };

      _this.toggleItem = _this.toggleItem.bind(_this);
      return _this;
    }

    _createClass(Accordeon, [{
      key: 'getInitialItemsState',
      value: function getInitialItemsState(props) {
        var children = props.children;

        var initialState = {};

        // children validation
        if ((typeof children === 'undefined' ? 'undefined' : _typeof(children)) === 'object') {
          if (!children.forEach) {
            children = [children];
          }
          children.forEach(function (item, index) {
            var internalKey = 'accordionPanel' + index;
            initialState[internalKey] = {};
            initialState[internalKey].expanded = item.props.expanded;
          });
        }

        return initialState;
      }
    }, {
      key: 'getChildrenWithData',
      value: function getChildrenWithData(children) {
        var _this2 = this;

        if (!children.map) {
          children = [children];
        }

        var childrenWithData = children.map(function (item, index) {
          var initialRender = _this2.state.initialRender;
          var _item$props$expanded = item.props.expanded;
          var expanded = _item$props$expanded === undefined ? false : _item$props$expanded;

          var internalKey = 'accordionPanel' + index;

          return (0, _react.cloneElement)(item, {
            internalKey: internalKey,
            expanded: initialRender ? expanded : _this2.isLIExpanded(internalKey),
            toggleItem: _this2.toggleItem
          });
        });

        return childrenWithData;
      }
    }, {
      key: 'toggleItem',
      value: function toggleItem(_ref) {
        var internalKey = _ref.internalKey;
        var expanded = _ref.expanded;

        var items = Object.assign({}, this.state.items);

        var workoutExist = items.hasOwnProperty(internalKey);
        if (!workoutExist) {
          items[internalKey] = {};
        }
        items[internalKey].expanded = !expanded;

        this.setState({
          items: items,
          initialRender: false
        });
      }
    }, {
      key: 'isLIExpanded',
      value: function isLIExpanded(internalKey) {
        var items = this.state.items;

        var isLIExpanded = items.hasOwnProperty(internalKey) && items[internalKey].expanded;
        return isLIExpanded;
      }
    }, {
      key: 'render',
      value: function render() {
        var children = this.props.children;


        if (typeof children === 'string') {
          console.error('React Accordeon: At least one Panel component needs to be configured');
          return null;
        }

        var childrenWithData = this.getChildrenWithData(children);

        return _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'ul',
            {
              style: _AccordeonStyles2.default.list,
              'data-accordion': true,
              role: 'tablist',
              'aria-multiselectable': true
            },
            childrenWithData
          )
        );
      }
    }]);

    return Accordeon;
  }(_react.Component);

  Accordeon.propTypes = {
    children: _react2.default.PropTypes.node
  };
  exports.default = Accordeon;
});