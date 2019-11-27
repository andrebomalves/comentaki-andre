import React, { useContext, useState } from 'react'
import { AuthContext } from './auth'

function CreateUser() {
  const auth = useContext(AuthContext)
  const [form, setForm] = useState({email:'', passwd:''});
  const onChange = campo => evt => {
    setForm({
      ...form,
      [campo]:evt.target.value
    })
  }

  if(auth.user !== null){
    return null
  }

  return (
    <>
      <h3>Criar uma conta: </h3>
      {auth.createUser.createUserState.error !== '' &&
        <p>{auth.createUser.createUserState.error}</p>
      }
      <div>
        <input type='text' placeholder='Seu e-mail' value={form.email} onChange={onChange('email')} />
        <input type='password' placeholder='Sua senha' value={form.passwd} onChange={onChange('passwd')} />
        <button onClick={() => { auth.createUser.createUser(form.email, form.passwd) }}>Criar</button>
      </div>
    </>
  )
}

export default CreateUser
