import React, { Component } from 'react';
// import postStatusFilter from '../post-status-filter/post-status-filter';
import './post-add-form.css';
export default class PostAddForm extends Component {
  constructor(props) {
    super(props);
    //для записи
    this.state = {
      text: '',
    };
  }
  //после события onChange мы меняем значение state на вводимый текст
  onValueChange = (e) =>
    this.setState({
      text: e.target.value,
    });
  //создаем пост при помощи функции onAdd
  //которая примет на вхож вводимый текст
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.text);
    //очищаем инпут
    this.setState({
      text: '',
    });
  };

  render() {
    return (
      <form
        className="bottom-panel d-flex"
        //отслеживаем когда пользователь отправляем форму
        onSubmit={this.onSubmit}
      >
        <input
          tepe="text"
          placeholder="О чем вы думаете сейчас?"
          className="form-control new-post-label"
          //все время отслеживаем действие пользователя что он вводит
          onChange={this.onValueChange}
          //контролируем элемент
          //при повторном рендиренге в наш input попадет то значение
          //которое есть в state
          value={this.state.text}
        />
        <button type="submit" className="btn btn-outline-secondary">
          Добавить
        </button>
      </form>
    );
  }
}
