import React from "react";
import PostListItem from "../post-list-item/post-list-item";
import { ListGroup, ListGroupItem } from 'reactstrap';

import "./post-list.css";
//передаем пропсы. получает их с самого верхнего уровня
// app.js который будет получать данные  c сервера и записывать их в переменную
const PostList = ({ posts }) => {
  //перебираем  и формируем каждый элемент из входящего массива
  //переменная элементс формируется путем перебора постов
// 


  const elements = posts.map((item) => {
    //вовзвращаем часть верстки
    //так как будет помещенно в ul создаем тег li
    //во внутрь помещаем постлиститем
    // раскладываем объект итем на несколько переменных с помощью декструлизации
    const {id, ...itemProps} = item
    return ( 
    <ListGroupItem key = {id} className="list-groop-item ">
     <PostListItem {...itemProps} />
     {/* тоже саое что и снизу }
      {/* <PostListItem label={item.label} important={item.important} /> */}
    </ListGroupItem> 
    )
});

  return (
    <ListGroup className="app-list">
      {/* Добавляем пропсы содержимое поста - label(текст) 
    импорт (важное) */}
      {elements}
    </ListGroup>
  );
};

export default PostList;
