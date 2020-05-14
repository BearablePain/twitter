import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

// import './app.css';
// импортирование style components
import styled from 'styled-components';
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
        { label: '1 post', important: false, like: false, id: 1 },
        { label: '2 post', important: false, like: false, id: 2 },
        { label: '3 post', important: false, like: false, id: 3 },
      ],
      //для поиска создаем свойство
      term: '',
      //по умолчанию ставим кнопку все
      filter: 'all',
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
    //[...data] помогает включить в newArr все те данные кторые у нас уже есть
    //newItem] и добавляем новый итем

    // функция для импортанта

    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  onToggleLike = (id) => {
    this.setState(({ data }) => {
      //ищем кликнутый пост
      const index = data.findIndex((elem) => id === elem.id);
      //записываем его в отдельную переменную
      const likePost = data[index];
      //создаем новый итем с измененным значением like
      //с помощью spread operatora '...' записываем в новый итем все что было
      //в найденном объекте но инвертируем свойство like
      const newItem = { ...likePost, like: !likePost.like };
      //  формируем новый массив
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];
      //возвращаем массив в data
      return {
        data: newArr,
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => id === elem.id);
      const importantPost = data[index];
      const newItem = { ...importantPost, important: !importantPost.important };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];
      return {
        data: newArr,
      };
    });
  };

  //меняем term
  onUpdateSearch = (term) => this.setState({ term });

  // функция поиска поста принимает данные-items, строка поиска
  searchPost(items, term) {
    if (term === 0) {
      return items;
    }
    //в каждом элементе находим свойство label
    //и внутри каждого элемента будем находить то что ввел пользователь 'term'
    //если не нашли то получаем -1/
    //таким образом возвращаем массив который искал пользователь
    return items.filter((item) => {
      return item.label.indexOf(term) > -1;
    });
  }
  //функция фильтрации постов
  //если filter равен лайку получаем все элементы которые имеют лайк
  filterPost(items, filter) {
    switch (filter) {
      case 'like':
        return items.filter((item) => item.like);
      default:
        return items;
    }
  }
  //состояние будет менять состояние на фильтер
  onFilterSelect = (filter) => this.setState({ filter });

  render() {
    const { data, term, filter } = this.state;
    const liked = data.filter((item) => item.like).length;
    const allPosts = data.length;
    //формируем видимые посты на оссновании того  что ввел пользователь
    // и обворачиваем результат в фильтр
    const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
    return (
      <AppBlock>
        {/* передаем в хедер счетчики */}
        <AppHeader liked={liked} allPosts={allPosts} />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter
            //передаем в виде пропса фильтр
            filter={filter}
            //
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        {/* передаем данные полученные с сервера в постлист */}
        <PostList
          //передаем видимые посты
          posts={visiblePosts}
          //здесь она выполняется и выводит в консоль
          onDelete={this.deleteItem}
          // принимаем обработчики событий

          // обработчик на important
          onToggleImportant={this.onToggleImportant}
          // обработчик на like
          onToggleLike={this.onToggleLike}
        />
        {/* Передаем функцию добавление listIte, */}
        <PostAddForm onAdd={this.addItem} />
      </AppBlock>
    );
  }
}
