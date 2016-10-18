import React, { cloneElement } from 'react';

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
  toggle: React.PropTypes.func,
  expanded: React.PropTypes.bool,
  children: React.PropTypes.node,
};

export default Nav;
