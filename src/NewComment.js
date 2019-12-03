import React, { useState, useContext } from 'react'
import { useDataBasePush } from './database'
import firebase from './firebase'

import { AuthContext } from './auth'

function NewComment() {
  //Hooks
  const [, save] = useDataBasePush('comments')
  const [comment, setComment] = useState('')
  const auth = useContext(AuthContext)

  if (auth.user === null) {
    return null
  }
  let displayName
  if (auth.user) {
    displayName = auth.user.displayName ? auth.user.displayName : auth.user.email.split('@')[0]

  }
  const createComment = () => {
    if (comment !== '') {
      save({
        content: comment,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        user: { id: auth.user.uid, name: displayName }
      })
      setComment('')
    }
  }
  return (
    <div class="input-group mb-3">
      <textarea type="text" value={comment} onChange={evt => { setComment(evt.target.value) }} class="form-control" placeholder="Escreva aqui seu comentário" />
      <div class="input-group-append">
        <button class="btn btn-primary" onClick={createComment} type="button" >Comentar</button>
      </div>
    </div>
  )
}
export default NewComment