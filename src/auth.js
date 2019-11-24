import React, {useState,useEffect} from 'react'
import firebase from './firebase'

export const AuthContext = React.createContext()

const useCreateUser = () =>{
  const [state, setState] = useState({error:'',success:''});

  const createUser = (email, password) =>{
    firebase
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .then((user) =>{
      if(user){
        setState({...state,success:'OK'})
      }
    }).catch( e =>{
      setState({
        ...state,
        error: e.message
      })
    })
  }  
  return [state, createUser]
}

const useGetUser = () =>{
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged( (currentUser) =>{
      if(currentUser){
        setUser(currentUser)
      }else{
        setUser(null)
      }
    })
    return undefined
  })
}

export const AuthProvider = (props) =>{
  const user = useGetUser()
  const [createUserState,createUser] = useCreateUser()
  return(
    <AuthContext.Provider value={{user, createUser:{createUserState,createUser}}}>
      {props.children}
    </AuthContext.Provider>
  )
}
