import React from 'react'
import './App.css'
import NewComment from './NewComment'
import Comments from './Comments'
import { AuthProvider} from './auth'
import CreateUser from './CreateUser'
import UserInfo from './UserInfo'
import SingInUser from './SignInUser'

function App() {

  return (
    <AuthProvider>
    <div className='col-3'>
      <NewComment />
      <Comments />
      <CreateUser />
      <SingInUser/>
      <UserInfo />
    </div>
    </AuthProvider>
  )
}

export default App
