import React, { useContext, useState } from 'react'
import { AuthContext } from './auth'

function SingInUser() {
  const auth = useContext(AuthContext)
  const [form, setForm] = useState({ email: '', passwd: '' });
  const onChange = campo => evt => {
    setForm({
      ...form,
      [campo]: evt.target.value
    })
  }

  if (auth.user !== null) {
    return null
  }

  return (
    <div className="input-group">
      {auth.signInUser.signInUserState.error !== '' &&
        <p>{auth.signInUser.signInUserState.error}</p>
      }
      <input type='text' className="form-control form-control-sm mb-2" placeholder='Seu e-mail' value={form.email} onChange={onChange('email')} />
      <input type='password' className="form-control form-control-sm mb-2" placeholder='Sua senha' value={form.passwd} onChange={onChange('passwd')} />
      <div className='input-group-append'>
        <button className='btn btn-sm btn-primary mb-2' onClick={() => { auth.signInUser.signInUser(form.email, form.passwd) }}>Entrar</button>
      </div>
    </div>
  )
}

export default SingInUser
