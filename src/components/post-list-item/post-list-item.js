import React, { Component } from "react";
import "./post-list-item.css";

//Состояние компонента можем использовать
//только внутри класса поэтому их нужно отрефакторить внутри класса
//используем метод у наших классов виде компонентов render (когда он срабатывает то отрисовывает наши жлементы на странице)

export default class PostlistItem extends Component {
  constructor(props) {
    super(props);
    //создаем состояние что он пока еще не "важный"
    this.state = {
important: false,
like: false
    }
  }
//создаем метод для импортанта (только с помощью setState можно менять состояние)
//rкогда кликаем на кнопку вызывается этот метод он работает с состоянием объекта
//внутри он принимает функцию стрелку которая в качестве в  аргументе принимает импортант в виде структализации
//дальше используем функцию и оборачиваем в круглые скобки для того чтобы вернуть 
//то что нравится JSX и меняем импортант на противоположное значение
//
  onImportant = () => {
  this.setState(({important}) => ({
  important: !important
}))
  }
//тоже самое делаем с лайками
  onLike = () => {
    this.setState(({like}) => ({
    like: !like
  }))
    }

  render() {
    //используем пропсы которые приходят из классов
    // this.props это свойство которое будет приходить в
    //каждый новосозданный компонент postlistitems
    //импортент получаем из state
    const { label } = this.props;
    const {important} = this.state;
    const {like} = this.state;
    // динамически изменяем классы
    let classNames = "app-list-item d-flex justify-content-between";
    // если нажимаем на важное то добавляем класс important
    if (important) {
      classNames += " important";
    }

    if (like) {
      classNames += ' like'
    }

    return (
      <div className={classNames}>
        <span className="app-list-item-label"
        onClick={this.onLike}>
        {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button 
          type="button" 
          className="btn-star btn-sm"
          //создаем об события для "звездочки"
           onClick={this.onImportant}>
            <i className="fa fa-star"></i>
          </button>
          <button type="submit" className="btn-trash btn-sm">
            <i className="fa fa-trash-o"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </div>
    );
  }
}
