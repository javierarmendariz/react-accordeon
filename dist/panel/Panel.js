(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-inline-transition-group', './PanelStyles.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-inline-transition-group'), require('./PanelStyles.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactInlineTransitionGroup, global.PanelStyles);
    global.Panel = mod.exports;
  }
})(this, function (exports, _react, _reactInlineTransitionGroup, _PanelStyles) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactInlineTransitionGroup2 = _interopRequireDefault(_reactInlineTransitionGroup);

  var _PanelStyles2 = _interopRequireDefault(_PanelStyles);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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

  var Panel = function (_Component) {
    _inherits(Panel, _Component);

    function Panel(props) {
      _classCallCheck(this, Panel);

      var _this = _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).call(this, props));

      _this.state = {
        expanded: props.expanded,
        onChildLeft: !props.expanded
      };
      _this.onChildLeft = _this.onChildLeft.bind(_this);
      _this.onChildStartEnter = _this.onChildStartEnter.bind(_this);
      _this.onChildEntered = _this.onChildEntered.bind(_this);
      return _this;
    }

    _createClass(Panel, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        this.setState({
          expanded: nextProps.expanded
        });
      }
    }, {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps, nextState) {
        var _state = this.state;
        var expanded = _state.expanded;
        var onChildLeft = _state.onChildLeft;

        var shouldUpdate = false;

        // Do not collapse/expand until the animation is complete
        if (nextProps.expanded && onChildLeft || !nextProps.expanded && !onChildLeft) {
          shouldUpdate = nextProps.expanded !== expanded;
        }

        return shouldUpdate;
      }
    }, {
      key: 'onChildLeft',
      value: function onChildLeft(id) {
        this.setState({
          onChildLeft: true,
          expanded: false
        });
      }
    }, {
      key: 'onChildStartEnter',
      value: function onChildStartEnter(id) {
        this.setState({
          onChildLeft: false
        });
      }
    }, {
      key: 'onChildEntered',
      value: function onChildEntered(id) {
        this.setState({
          expanded: true
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props;
        var _props$expanded = _props.expanded;
        var expanded = _props$expanded === undefined ? false : _props$expanded;
        var internalKey = _props.internalKey;
        var toggleItem = _props.toggleItem;
        var children = _props.children;

        var toggle = function toggle() {
          toggleItem({ internalKey: internalKey, expanded: expanded });
        };

        return _react2.default.createElement(
          'li',
          { key: internalKey },
          _react2.default.createElement(
            'nav',
            {
              id: 'panel' + internalKey + '-heading',
              'aria-controls': 'panel' + internalKey
            },
            _react2.default.createElement(
              'div',
              { className: 'row expanded' },
              _react2.default.createElement(
                'div',
                { className: 'small-12 columns' },
                _react2.default.createElement(
                  'div',
                  null,
                  children[0] && (0, _react.cloneElement)(children[0], {
                    toggle: toggle,
                    expanded: expanded
                  })
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactInlineTransitionGroup2.default,
            {
              childrenBaseStyle: _PanelStyles2.default.base,
              childrenAppearStyle: _PanelStyles2.default.appear,
              childrenEnterStyle: _PanelStyles2.default.appear,
              childrenLeaveStyle: _PanelStyles2.default.leave,
              onChildLeft: this.onChildLeft,
              onChildStartEnter: this.onChildStartEnter,
              onChildEntered: this.onChildEntered
            },
            expanded ? _react2.default.createElement(
              'article',
              {
                style: _PanelStyles2.default.content,
                id: 'panel' + internalKey,
                role: 'tabpanel',
                'aria-labelledby': 'panel' + internalKey + '-heading',
                key: 'article' + internalKey
              },
              _react2.default.createElement(
                'div',
                { className: 'row expanded' },
                _react2.default.createElement(
                  'div',
                  { className: 'small-12 columns' },
                  _react2.default.createElement(
                    'div',
                    null,
                    children[1] && (0, _react.cloneElement)(children[1], {
                      toggle: toggle,
                      expanded: expanded
                    })
                  )
                )
              )
            ) : []
          )
        );
      }
    }]);

    return Panel;
  }(_react.Component);

  Panel.propTypes = {
    /*
    internalKey: PropTypes.string,
    expanded: PropTypes.bool,
    toggleItem: PropTypes.func,
    children: PropTypes.node,
    */
  };
  exports.default = Panel;
});