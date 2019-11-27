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

const useSignInUser = () =>{
  const [state, setState] = useState({error:'',success:''});

  const signInUser = (email, password) =>{
    firebase
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch( e =>{
      setState({
        ...state,
        error: e.message
      })
    })
  }  
  return [state, signInUser]
}

const useGetUser = () =>{
  const [user, setUser] = useState(undefined);
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

  return user
}

const signOut = () => {
  firebase.auth().signOut().then( () => {
    console.log('singOut')
  })
}

export const AuthProvider = (props) =>{
  const user = useGetUser()
  const [createUserState,createUser] = useCreateUser()
  const [signInUserState,signInUser] = useSignInUser()

  return(
    <AuthContext.Provider value={{user, signOut, 
        createUser:{createUserState,createUser},
        signInUser:{signInUserState,signInUser}
      }}>
      {props.children}
    </AuthContext.Provider>
  )
}
