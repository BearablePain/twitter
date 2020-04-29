import React from 'react';
// import postStatusFilter from '../post-status-filter/post-status-filter';
import './post-add-form.css'
const PostAddForm = ({onAdd}) => {
  return (
<div className = "bottom-panel d-flex">
  <input
  tepe = "text"
  placeholder = "О чем вы думаете сейчас?"
  className = "form-control new-post-label"
  />
  <button
    type = "submit"
    className = "btn btn-outline-secondary"
    //используем об события на кнопку
    onClick = {() => onAdd('heloo')}>
      Добавить
  </button>
</div>
  )
}

export default PostAddForm;