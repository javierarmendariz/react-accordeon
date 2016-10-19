import React, { Component, cloneElement, isValidElement } from 'react';
import AccordeonStyles from './AccordeonStyles';

class Accordeon extends Component {
  static propTypes = {
    children: React.PropTypes.node,
    header: React.PropTypes.element,
    footer: React.PropTypes.element,
  }

  constructor(props) {
    super(props);
    this.state = ({
      items: this.getInitialItemsState(props),
      initialRender: true,
      areAllExpanded: null,
    });

    this.toggleItem = this.toggleItem.bind(this);
    this.expandAll = this.expandAll.bind(this);
    this.collapseAll = this.collapseAll.bind(this);
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

    const itemExist = items.hasOwnProperty(internalKey);
    if (!itemExist) {
      items[internalKey] = {};
    }
    items[internalKey].expanded = !expanded;

    this.setState({
      items,
      initialRender: false,
      areAllExpanded: null,
    });
  }

  toggleAll(expandCollapse) {
    const items = Object.assign({}, this.state.items);
    const itemsKeys = Object.keys(items);

    itemsKeys.forEach((key) => {
      items[key].expanded = expandCollapse;
    });

    this.setState({
      items,
      initialRender: false,
      areAllExpanded: expandCollapse,
    });
  }

  expandAll() {
    const { areAllExpanded } = this.state;
    if (!areAllExpanded) {
      this.toggleAll(true);
    }
  }

  collapseAll() {
    const { areAllExpanded } = this.state;
    if (areAllExpanded === null || areAllExpanded) {
      this.toggleAll(false);
    }
  }

  createHeaderFooter(component, componentName) {
    component = isValidElement(component) && cloneElement(component, {
      expandAll: this.expandAll,
      collapseAll: this.collapseAll
    });
    if (component !== null && !component) {
      console
      .error(`React Accordeon: The ${componentName} property must be a valid React component.`);
    }
    return component;
  }

  isLIExpanded(internalKey) {
    const { items } = this.state;
    const isLIExpanded = items.hasOwnProperty(internalKey) && items[internalKey].expanded;
    return isLIExpanded;
  }

  render() {
    const { children, header = null, footer = null } = this.props;
    const headerComponent = this.createHeaderFooter(header, 'Header');
    const footerComponent = this.createHeaderFooter(footer, 'Footer');

    if (typeof children === 'string') {
      console.error('React Accordeon: At least one Panel component needs to be configured.');
      return null;
    }

    const childrenWithData = this.getChildrenWithData(children);

    return (
      <article>
        {headerComponent && <header>{headerComponent}</header>}
        <section>
          <ul
            style={AccordeonStyles.list}
            data-accordion
            role="tablist"
            aria-multiselectable
          >
            {childrenWithData}
          </ul>
        </section>
        {footerComponent && <footer>{footerComponent}</footer>}
      </article>
    );
  }
}

export default Accordeon;
