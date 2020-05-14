import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import { ListGroup, ListGroupItem } from 'reactstrap';

import './post-list.css';
//передаем пропсы. получает их с самого верхнего уровня
// app.js который будет получать данные  c сервера и записывать их в переменную
const PostList = ({ posts, onDelete, onToggleImportant, onToggleLike }) => {
  //перебираем  и формируем каждый элемент из входящего массива
  //переменная элементс формируется путем перебора постов
  //

  const elements = posts.map((item) => {
    //вовзвращаем часть верстки
    //так как будет помещенно в ul создаем тег li
    //во внутрь помещаем постлиститем
    // раскладываем объект итем на несколько переменных с помощью декструлизации
    /* тоже саое что и снизу }
      {/* <PostListItem label={item.label} important={item.important} /> */

      // Простой способ проверки на объект + содержится ли в нем информация
       if ( typeof item === 'object' && isEmpty(item) ) { 
    const { id, ...itemProps } = item;
    return (
      <ListGroupItem key={id} className="list-groo p-item ">
        <PostListItem
          {...itemProps}
          //добавляем об. события и запускаем их с определенным id
          //функции идут от app
          //где захватывают id который получался при создание и предают его в app.js
          //потом они передаются на уровень ниже в post-list-item
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLike={() => onToggleLike(id)}
          
        />
      </ListGroupItem>
    );
       }
  });

  function isEmpty(obj) {
    for(let key in obj)
    {
        return true;
    }
    return false;
}
  return (
    <ListGroup className="app-list">
      {/* Добавляем пропсы содержимое поста - label(текст) 
    импорт (важное) */}
      {elements}
    </ListGroup>
  );
};

export default PostList;
