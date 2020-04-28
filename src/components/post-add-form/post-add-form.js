import React from 'react';
// import postStatusFilter from '../post-status-filter/post-status-filter';
import './post-add-form.css'
const PostAddForm = () => {
  return (
<form className = "bottom-panel d-flex">
  <input
  tepe = "text"
  placeholder = "О чем вы думаете сейчас?"
  className = "form-control new-post-label"
  />
  <button
    type = "submit"
    className = "btn btn-outline-secondary">
      Добавить
  </button>
</form>
  )
}

export default PostAddForm;