import React, { useState } from 'react'
import { useDataBasePush } from './database'
import firebase from './firebase'

function NewComment() {
  //Hooks
  const [, save] = useDataBasePush('comments')
  const [comment, setComment] = useState('');
  const createComment = () => {
    if (comment !== '') {
      save({
        content: comment,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        user: { id: 1, name: 'Andre' }
      })
      setComment('')
    }
  }
  return (
    <div>
      <textarea value={comment} onChange={evt => { setComment(evt.target.value) }} />
      <button onClick={createComment}>Comentar</button> <br />
    </div>
  )
}
export default NewComment