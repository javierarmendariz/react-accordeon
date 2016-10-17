
React Accordeon
===================
React Accordeon component with expand/collapse CSS animation. The event trigger can be configured to any component, such in the Navigation and Content

- [Components](#components)
  - [`<Accordeon>`](#Accordeon)
  - [`<Panel>`](#panel)
  - [`<Nav>`](#nav)
  - [`<Content>`](#content)
- [Examples](#examples)
- [Todo](#todo)

  ## Components

  ### `<Accordeon>`
  Primary component of React Accordeon. It keeps and handles the state of all the elements.

  #### Props
  This does not required any property at this moment.

  ### `<Panel>`
  The Panel component is the container for each element in the accordeon. This will create the collapse/expand animation for the Content component.

  #### Props
  ##### `expanded`
  Boolean value to configure an initial state for the Panel. If true, the Panel is expanded. If false, the Panel is collapsed.

  #### Examples
  #####Item expanded
  ```js
  <Panel key="panel1" extended>
  ```
  #####Item collapsed
  ```js
  <Panel key="panel1" extended={false}>
  ```
  or the extended property can also be omitted
  ```js
  <Panel key="panel1">
  ```

  ### `<Nav>`
  This component accepts any string or any valid React component to render the Panel Header.

  #### Props
  This does not required any property at this moment.

  ### `<Content>`
  Any string, html tag, or a valid React component

  #### Props
  This does not required any property at this moment.

  ## Examples
  Accordeon with plain strings in the Nav and Content
  ```js
  import React, { PropTypes } from 'react';
  import { Accordeon, Panel, Nav, Content } from 'react-accordeon';
  function ExampleOne(props) {
    return (
      <Accordeon>
        <Panel key="panel1">
          <Nav>Question 1</Nav>
          <Content>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Content>
        </Panel>
        <Panel key="panel2">
          <Nav>Question 2</Nav>
          <Content>
            And more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Content>
        </Panel>
      </Accordeon>    
      );
  }
  ```

  Given valid React Components
  ```js
  import React, { PropTypes } from 'react';
  import { Accordeon, Panel, Nav, Content } from 'react-accordeon';
  import AnotherReactComponentNav from './Another-react-component-nav.js';
  import AnotherReactComponentContent from './Another-react-component-content.js';
  function ExampleOne(props) {
    return (
      <Accordeon>
        <Panel key="panel1">
          <Nav><AnotherReactComponent /></Nav>
          <Content>
            <AnotherReactComponentContent />
          </Content>
        </Panel>
      </Accordeon>    
      );
  }

  // A valid React stateless Component (AnotherReactComponentNav.js)
  // We can configure the 'toggle' trigger in any React supported event (onClick={toggle})
  import React, { PropTypes } from 'react';
  const AnotherReactComponentNav = (props) => {
    const { expanded, toggle } = props;
    return (
      <h2>
        {expanded ? '-' : '+'}
        <button
          onClick={toggle}
          aria-expanded={expanded}
          role="tab"
        >
          Question 1
        </button>
      </h2>
    );
  };

  AnotherReactComponentNav.propTypes = {
    toggle: PropTypes.func,
    expanded: PropTypes.bool,
  };

  export default Nav;

  // A valid React stateless Component (AnotherReactComponentContent.js)
  import React, { PropTypes } from 'react';
  const Content = (props) => {
    const { expanded, toggle } = props;
    return (
      <div>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
      </div>
    );
  };

  Content.propTypes = {
    toggle: PropTypes.func,
    expanded: PropTypes.bool,
  };

  export default Content;
  ```

  With some valid HTML
  ```js
  import React, { PropTypes } from 'react';
  import { Accordeon, Panel, Nav, Content } from 'react-accordeon';
  function ExampleOne(props) {
    return (
      <Accordeon>
        <Panel key="panel1">
          <Nav>Item 1</Nav>
          <Content>
            <img src="https://placekitten.com/g/500/500" alt="kitten" />
          </Content>
        </Panel>
      </Accordeon>    
      );
  }
  ```
  ## Todo
  > - https://facebook.github.io/react/warnings/dont-call-proptypes.html
  > - Expand All/Collapse All
