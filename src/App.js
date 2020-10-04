import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem'
import Header from './components/Header'
import Content from './components/Content'
import tick from './img/tick.svg'

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      currentFilter: 'all', //'active', 'complete',
      todoItems: [
        { title: 'mua bim bim', isComplete: true },
        { title: 'đi đá bóng', isComplete: false },
        { title: 'đi đổ xăng', isComplete: false }
      ]
    }

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onItemClicked(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index+1)
        ]
      });
    }
  }

  onKeyUp(event) {
    // enter key === 13
    if (event.keyCode === 13) { 
      let text = event.target.value;
      if(!text) {
        return;
      }

      text = text.trim();
      if (!text) { return; }

      this.setState({
        newItem: '',
        todoItems: [
          { title: text, isComplete: false },
          ...this.state.todoItems
        ]
      })
    }
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value
    })
  }

  render() {
    const {todoItems, newItem } = this.state
    // to do: filter todo Item
    return (
      <div className="App">
        <div className="Main">
          <div className="Header">
            <Header />
          </div>
          <div className="Content">
            <Content />
          </div>
        </div>

        <div className="InputForm">
          <img src= {tick} width="32"/>
          <input 
            type="text"
            placeholder="Add a new item"
            value={newItem}
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}/>
        </div>
        {
          todoItems.length > 0 && todoItems.map((item, index) =>
            <TodoItem 
              key={index} 
              item={item}
              onClick={this.onItemClicked(item)}/>
          )
        }
        { todoItems.length === 0 && 'nothing here'}
      </div>
    );
  }
}

export default App;
