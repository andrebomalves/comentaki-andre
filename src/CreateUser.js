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
    <div className='form-inline'>
      {auth.createUser.createUserState.error !== '' &&
        <p>{auth.createUser.createUserState.error}</p>
      }
      <div>
        <input type='text' className="form-control form-control-sm mb-2 mr-sm-2"  placeholder='Seu e-mail' value={form.email} onChange={onChange('email')} />
        <input type='password' className="form-control form-control-sm mb-2 mr-sm-2"  placeholder='Sua senha' value={form.passwd} onChange={onChange('passwd')} />
        <button className='btn btn-sm btn-success mb-2' onClick={() => { auth.createUser.createUser(form.email, form.passwd) }}>Criar</button>
      </div>
    </div>
  )
}

export default CreateUser
