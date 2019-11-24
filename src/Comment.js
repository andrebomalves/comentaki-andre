import React,{useContext} from 'react';
import {AuthContext} from './auth'

const Time = ({TIMESTAMP}) => {
  const date = new Date(TIMESTAMP).toLocaleString('pt-BR')
  return <span>{date}</span>
}

function Comment({ comment }) {
  //const auth = useContext(AuthContext)
  return (
    <div>{comment.content} por: {comment.user.name} em: <Time TIMESTAMP={comment.createdAt} /></div>
  )
}

export default Comment
