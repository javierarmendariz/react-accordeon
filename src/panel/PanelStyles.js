const PanelStyles = {
  base: {
    maxHeight: '0px',
    transition: 'max-height 1s',
  },
  appear: {
    maxHeight: '780px',
    transition: 'max-height 1s',
  },
  leave: {
    maxHeight: '0px',
    transition: 'max-height 1s',
  },
  content: {
    overflow: 'hidden',
  }
};

export default PanelStyles;
