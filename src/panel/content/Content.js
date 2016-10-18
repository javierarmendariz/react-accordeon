import React, { cloneElement } from 'react';

const Content = (props) => {
  const { expanded, toggle, children } = props;

  const childrenWithProps = (typeof children === 'object') ?
    cloneElement(children, {
      toggle,
      expanded
    })
    : children;

  return (
    <div>
      {childrenWithProps}
    </div>
  );
};

Content.propTypes = {
  toggle: React.PropTypes.func,
  expanded: React.PropTypes.bool,
  children: React.PropTypes.node,
};

export default Content;
