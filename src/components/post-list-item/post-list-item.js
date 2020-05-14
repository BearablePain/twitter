import React from 'react';
import './post-list-item.css';

//Состояние компонента можем использовать
//только внутри класса поэтому их нужно отрефакторить внутри класса
//используем метод у наших классов виде компонентов render (когда он срабатывает то отрисовывает наши жлементы на странице)
const PostlistItem = ({
  label,
  onDelete,
  onToggleImportant,
  onToggleLike,
  important,
  like,
}) => {
  //используем пропсы которые приходят из классов
  // this.props это свойство которое будет приходить в
  //каждый новосозданный компонент postlistitems
  //импортент получаем из state

  // динамически изменяем классы

  let classNames = 'app-list-item d-flex justify-content-between';

  // если нажимаем на важное то добавляем класс important
  if (important) {
    classNames += ' important';
  }

  if (like) {
    classNames += ' like';
  }

  return (
    <div className={classNames}>
      <span className="app-list-item-label" onClick={onToggleLike}>
        {label}
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-star btn-sm"
          //создаем об. события для "звездочки"
          onClick={onToggleImportant}
        >
          <i className="fa fa-star"></i>
        </button>
        <button
          type="submit"
          className="btn-trash btn-sm"
          //  Ставим обработчик для удаление постлиститем
          // Будет приходить из пропсов постлиститема
          //когда кликаем вызывается функция onDelete
          //  котоаря заканчивается на методе делеититем в app
          onClick={onDelete}
        >
          <i className="fa fa-trash-o"></i>
        </button>
        <i className="fa fa-heart"></i>
      </div>
    </div>
  );
};

export default PostlistItem;
