import React, { PropTypes, Component, cloneElement } from 'react';
import AccordionStyles from './AccordionStyles';

class Accordion extends Component {
  propTypes = {
    // children: PropTypes.node,
  }

  constructor(props) {
    super(props);
    this.state = ({
      items: this.getInitialItemsState(props),
      initialRender: true,
    });

    this.toggleItem = this.toggleItem.bind(this);
  }

  getInitialItemsState(props) {
    let { children } = props;
    const initialState = {};

    // children validation
    if (typeof children === 'object') {
      if (!children.forEach) {
        children = [children];
      }
      children.forEach((item, index) => {
        const internalKey = `accordionPanel${index}`;
        initialState[internalKey] = {};
        initialState[internalKey].expanded = item.props.expanded;
      });
    }

    return initialState;
  }

  getChildrenWithData(children) {
    if (!children.map) {
      children = [children];
    }

    const childrenWithData = children.map((item, index) => {
      const { initialRender } = this.state;
      const { expanded = false } = item.props;
      const internalKey = `accordionPanel${index}`;

      return cloneElement(item, {
        internalKey,
        expanded: (initialRender) ? expanded : this.isLIExpanded(internalKey),
        toggleItem: this.toggleItem,
      });
    });

    return childrenWithData;
  }

  toggleItem({ internalKey, expanded }) {
    const items = Object.assign({}, this.state.items);

    const workoutExist = items.hasOwnProperty(internalKey);
    if (!workoutExist) {
      items[internalKey] = {};
    }
    items[internalKey].expanded = !expanded;

    this.setState({
      items,
      initialRender: false,
    });
  }

  isLIExpanded(internalKey) {
    const { items } = this.state;
    const isLIExpanded = items.hasOwnProperty(internalKey) && items[internalKey].expanded;
    return isLIExpanded;
  }

  render() {
    const { children } = this.props;

    if (typeof children === 'string') {
      console.error('Accordion: At least one Panel component needs to be configured');
      return null;
    }

    const childrenWithData = this.getChildrenWithData(children);

    return (
      <section>
        <div className="row expanded">
          <div className="small-12 columns">
            <div className="row expanded">
              <div className="small-12 columns">
                <ul
                  style={AccordionStyles.list}
                  data-accordion
                  role="tablist"
                  aria-multiselectable
                >
                  {childrenWithData}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Accordion;
