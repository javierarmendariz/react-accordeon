import React, { PropTypes, cloneElement } from 'react';

const Nav = (props) => {
  const { expanded, toggle, children } = props;

  const childrenWithProps = (typeof children === 'object') ?
    <div>
      {cloneElement(children, {
        toggle,
        expanded
      })}
    </div>
    : <button onClick={toggle}>{children}</button>;

  return childrenWithProps;
};

Nav.propTypes = {
  /*
  toggle: PropTypes.func,
  expanded: PropTypes.bool,
  children: PropTypes.node,
  */
};

export default Nav;
