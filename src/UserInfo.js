import React,{useContext,useState} from 'react';
import {AuthContext} from './auth'

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
    if(newDisplayName !== ''){
      auth.user.updateProfile({displayName: newDisplayName})
    }
  }

  return (
    <>
    <p>Olá {displayName} !</p>
    <input type='text' defaultValue={newDisplayName || displayName} onChange={(evt) => setNewDisplayName(evt.target.value) } />
    <button onClick={save} >Save Display Name</button>
    <button onClick={auth.signOut} >Sair</button>
    </>
  )
}

export default UserInfo
