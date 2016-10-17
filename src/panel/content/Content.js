import React, { PropTypes, cloneElement } from 'react';

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
  /*
  toggle: PropTypes.func,
  expanded: PropTypes.bool,
  children: PropTypes.node,
  */
};

export default Content;
