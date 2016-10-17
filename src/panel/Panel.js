import React, { PropTypes, cloneElement, Component } from 'react';
import Transition from 'react-inline-transition-group';
import styles from './PanelStyles.js';

class Panel extends Component {
  static propTypes = {
    /*
    internalKey: PropTypes.string,
    expanded: PropTypes.bool,
    toggleItem: PropTypes.func,
    children: PropTypes.node,
    */
  }

  constructor(props) {
    super(props);
    this.state = {
      expanded: props.expanded,
      onChildLeft: !props.expanded
    };
    this.onChildLeft = this.onChildLeft.bind(this);
    this.onChildStartEnter = this.onChildStartEnter.bind(this);
    this.onChildEntered = this.onChildEntered.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      expanded: nextProps.expanded
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { expanded, onChildLeft } = this.state;
    let shouldUpdate = false;

    // Do not collapse/expand until the animation is complete
    if (nextProps.expanded && onChildLeft || !nextProps.expanded && !onChildLeft) {
      shouldUpdate = nextProps.expanded !== expanded;
    }

    return shouldUpdate;
  }

  onChildLeft(id) {
    this.setState({
      onChildLeft: true,
      expanded: false,
    });
  }

  onChildStartEnter(id) {
    this.setState({
      onChildLeft: false,
    });
  }

  onChildEntered(id) {
    this.setState({
      expanded: true,
    });
  }

  render() {
    const { expanded = false, internalKey, toggleItem, children } = this.props;
    const toggle = () => {
      toggleItem({ internalKey, expanded });
    };

    return (
      <li key={internalKey}>
        <nav
          id={`panel${internalKey}-heading`}
          aria-controls={`panel${internalKey}`}
        >
          <div className="row expanded">
            <div className="small-12 columns">
              <div>
                {children[0] && cloneElement(children[0], {
                  toggle,
                  expanded
                })}
              </div>
            </div>
          </div>
        </nav>
        <Transition
          childrenBaseStyle={styles.base}
          childrenAppearStyle={styles.appear}
          childrenEnterStyle={styles.appear}
          childrenLeaveStyle={styles.leave}
          onChildLeft={this.onChildLeft}
          onChildStartEnter={this.onChildStartEnter}
          onChildEntered={this.onChildEntered}
        >
          {
            expanded ? <article
              style={styles.content}
              id={`panel${internalKey}`}
              role="tabpanel"
              aria-labelledby={`panel${internalKey}-heading`}
              key={`article${internalKey}`}
            >
              <div className="row expanded">
                <div className="small-12 columns">
                  <div>
                    {children[1] && cloneElement(children[1], {
                      toggle,
                      expanded
                    })}
                  </div>
                </div>
              </div>
            </article>
            : []
          }
        </Transition>
      </li>
    );
  }
}

export default Panel;
