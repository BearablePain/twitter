import React, { Component } from 'react';
// import { Button } from 'reactstrap';
import './post-status-filter.css';

export default class postStatusFilter extends Component {
  constructor(props) {
    super(props);
    //формируем массив объектов  с ключом name
    this.buttons = [
      { name: 'all', label: 'Все' },
      { name: 'like', label: 'Понравилось' },
    ];
  }

  render() {
    //формируем массив кнопок. через мап вытаскивые переменные мап и label
    const buttons = this.buttons.map(({ name, label }) => {
      const { filter, onFilterSelect } = this.props;

      //сравниваем значение которое пришло из app.js с name
      // сравнивается с перебираемыми кнопками
      const active = filter === name;
      //если наша кнопку trгу то присваиваем класс активной кнопке
      const clazz = active ? 'btn-info' : 'btn-outline-secondary';
      return (
        //
        <button
          key={name}
          type="button"
          className={`btn ${clazz}`}
          //обработчик события которая запуск
          onClick={() => onFilterSelect(name)}
        >
          {label}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}
