import React,{useContext} from 'react'
import {AuthContext} from './auth'

function CreateUser() {
  const auth = useContext(AuthContext)
  console.log(auth)
  return (
    <div>
    {JSON.stringify(auth.createUser)}
      <button onClick={() => { auth.createUser.createUser('andreb@andrebomalves.xyz','123456')}}> botão</button>
    </div>
  )
}

export default CreateUser
