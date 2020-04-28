import React from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form'

import './app.css'; 

//приложение апп получает на самом верхнем уровне данные
//передает их в компонент PostList
//компонент PostList формирует из этих данных посты на основании постлистИтем


 
const App = () => {
//типо получаемый массив данных из сервера
  const data = [
    
      {label: '1 post', important: true, id: 'sfsf'},
      {label: '2 post', important: false, id: 'lknkl'},
      {label: '3 post', important: false, id: 'sjhhnnk'}
    
  ]

  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter/>
      </div>
      {/* передаем данные полученные с сервера в постлист */}
      <PostList posts = {data}/>
      <PostAddForm/>
    </div>
  )
}

export default App;
