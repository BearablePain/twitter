import React, { Component } from 'react';
import './search-panel.css';
// import { Component } from 'react';

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }

  onUpdateSearch = (e) => {
    //записываем в term то что ввел пользователь
    const term = e.target.value;
    this.setState({ term });
    //передаем функцию в appDaty
    //чтобы сеарч передавал свое состояние
    //эта функцию объявляется в app.js
    // чобы обновить state в компоненте property там
    this.props.onUpdateSearch(term);
  };
  render() {
    return (
      <input
        className="form-control search-input"
        type="text"
        placeholder="Поиск по записям"
        //об события на ввод в поиск
        onChange={this.onUpdateSearch}
        // value = {this.state.term}
      />
    );
  }
}
