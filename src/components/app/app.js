import React, { Component } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

// import './app.css';
// импортирование style components
import styled from "styled-components";
//создание стиля через styled-component
const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;
//наследовадать стили от апп блока
// const StyledAppBlock = styled(AppBlock) `
// background-color: grey;
// `

//приложение апп получает на самом верхнем уровне данные
//передает их в компонент PostList
//компонент PostList формирует из этих данных посты на основании постлистИтем

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //типо получаемый массив данных из сервера
      data: [
        { label: "1 post", important: false, id: 1 },
        { label: "2 post", important: false, id: 2 },
        { label: "3 post", important: false, id: 3 },
      ],
    };
//Генератор id
    this.maxId = 4;
  }
  // метод для удаления label, который принимает id удаляемого элемента

  deleteItem = (id) => {
    this.setState(({ data }) => {
      //находим индекс удаляемого элемента
      const index = data.findIndex((elem) => elem.id === id);
      console.log(index, id);
      //формируем массив до! нужного элемента
      const before = data.slice(0, index);
      ////формируем массив после! нужного элемента
      const after = data.slice(index + 1);
      //соединяем массивы и возвращаем в дату новый
      //(сделал так потому то напрямую state менять(мутировать) нельзя)
      //так же код можно было сделать чище используя слайсы
      //без формирования в новые массивы after and before
      // переменных сразу формирую newArr
      const newArr = [...before, ...after];
      return {
        data: newArr,
      };
    });
  };
  // создаем функцию добавления постлистИтема

  addItem = (body) => {
    //создаем новый элемент
    //присваиваем все нужные свойства
    //и генерируем id
    
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++,
    };
    //декструлизируем дату; тк мутировать нельзя то используем промежуточную переменную
    //[...data] погает включить в newArr все те данные кторые у нас уже есть 
    //newItem] и добавляем новый итем 


  this.setState(({data}) => {
    const newArr = [...data, newItem]
    return {
      data: newArr
    }
  })
  };

  render() {
    return (
      <AppBlock>
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        {/* передаем данные полученные с сервера в постлист */}
        <PostList
          posts={this.state.data}
          //здесь она выполняется и выводит в консоль
          onDelete={this.deleteItem}
        />
        {/* Передаем функцию добавление listIte, */}
        <PostAddForm onAdd={this.addItem} />
      </AppBlock>
    );
  }
}
