import React from 'react';
import style from './Button.css';
import classnames from 'classnames';

class Button extends React.Component {
  render() {
    return (
      <button {...this.props} className={classnames(style.button, this.props.className)} >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
