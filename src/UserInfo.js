import React, { useContext, useState } from 'react';
import { AuthContext } from './auth'

function UserInfo() {
  const auth = useContext(AuthContext)

  let displayName = ''
  if (auth.user) {
    displayName = auth.user.displayName ? auth.user.displayName : auth.user.email.split('@')[0]
  }

  const [newDisplayName, setNewDisplayName] = useState(displayName)

  if (auth.user === null) {
    return null
  }

  const save = () => {
    if (newDisplayName !== '') {
      auth.user.updateProfile({ displayName: newDisplayName })
    }
  }

  return (

    <div className="input-group mb-3">
    <input type="text" className="form-control" placeholder="" defaultValue={newDisplayName || displayName} onChange={(evt) => setNewDisplayName(evt.target.value)} />
      <div className="input-group-append">
        <button className="btn btn-outline-primary" onClick={save} type="button">Alterar Nome</button>
        <button className="btn btn-outline-primary" onClick={auth.signOut} type="button">Sair</button>
      </div>
      </div>
  )
}

export default UserInfo
