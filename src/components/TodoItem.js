import React, { Component } from 'react';
import PropTypes from 'prop-types';

import "./css/TodoItem.css";
import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/check-complete.svg';

class TodoItem extends Component {
  render() {
    const {item, onClick} = this.props;
    let url = checkImg;
    let className = 'TodoItem';
    if (item.isComplete) {
      className += ' TodoItem-complete'
      url = checkCompleteImg;
    }

    return (
      <div className={className}>
        <img 
          onClick={onClick}
          src={url} width={32}
        />
        <p>{ item.title }</p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    isComplete: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
  }),
  onClick: PropTypes.func
};

export default TodoItem;