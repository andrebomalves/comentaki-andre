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
    <div className='form-inline'>
      <div>    
        <p>Olá {displayName} !</p>
        <input type='text' className="form-control form-control-sm mb-2 mr-sm-2" defaultValue={newDisplayName || displayName} onChange={(evt) => setNewDisplayName(evt.target.value)} />
        <button className='btn btn-primary btn-sm mb-2' onClick={save} >Save Display Name</button>
        <button className='btn btn-secondy btn-sm mb-2' onClick={auth.signOut} >Sair</button>
      </div>
    </div>
  )
}

export default UserInfo
