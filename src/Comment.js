import React,{useContext} from 'react';
import {AuthContext} from './auth'

const Time = ({TIMESTAMP}) => {
  const date = new Date(TIMESTAMP).toLocaleString('pt-BR')
  return <span>{date}</span>
}

function Comment({ comment }) {
  //const auth = useContext(AuthContext)
  return (
    <li class="list-group-item align-items-start">
      <p class="mb-1"> {comment.content} </p>
      <small>por: {comment.user.name} em: <Time TIMESTAMP={comment.createdAt} /> </small>
  </li>
  )
}

export default Comment
