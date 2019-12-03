import React from 'react'
import {useDataBase} from './database'
import Comment from './Comment'

function Comments() {

  const data = useDataBase('comments')
  if (!data) {
    return 'Não há dados a serem exibidos.'
  }

  const ids = Object.keys(data)
  if (ids.length === 0) {
    return 'Carregando!!!'
  }

  return ( 
    <div>
    <ul className='list-group' style={{ height: 300, overflowY:'scroll' }} >{
    ids.map((id) => {
      return <Comment key={id} comment={data[id]} />
    }) }
    </ul>
    <br />
    </div>
  )
}

export default Comments
