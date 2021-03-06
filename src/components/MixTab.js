import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import cx from 'classnames';

module.exports = React.createClass({
  displayName: 'MixTab',

  propTypes: {
    className: PropTypes.string,
    id: PropTypes.string,
    focus: PropTypes.bool,
    closable: PropTypes.bool,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    activeTabClassName: PropTypes.string,
    disabledTabClassName: PropTypes.string,
    panelId: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.string,
    ]),
  },

  getDefaultProps() {
    return {
      focus: false,
      selected: false,
      id: null,
      panelId: null,
      activeTabClassName: 'ReactTabs__Tab--selected',
      disabledTabClassName: 'ReactTabs__Tab--disabled',
      closable: false,
    };
  },

  componentDidMount() {
    this.checkFocus();
  },

  componentDidUpdate() {
    this.checkFocus();
  },

  checkFocus() {
    if (this.props.selected && this.props.focus) {
      findDOMNode(this).focus();
    }
  },

  closeTab(){
      //debugger
      this.props.close()
  },

  render() {
    const {
      selected,
      disabled,
      panelId,
      activeTabClassName,
      disabledTabClassName,
      className,
      children,
      id,
      invisible,
      closable,
      ...attributes } = this.props;

    delete attributes.focus;

    //debugger

    return (

      <li
        {...attributes}
        className={cx(
          'ReactTabs__Tab',
          className,
          {
            [activeTabClassName]: selected,
            [disabledTabClassName]: disabled,
          }
        )}
        role="tab"
        id={id}
        aria-selected={selected ? 'true' : 'false'}
        aria-disabled={disabled ? 'true' : 'false'}
        aria-controls={panelId}
        tabIndex={selected ? '0' : null}
      >
        {children}
        {invisible ? ' ' : false}
        {closable ? <span onClick={this.closeTab}>X</span> : false}
      </li>
    );
  },
});
