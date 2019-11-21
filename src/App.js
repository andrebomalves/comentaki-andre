import React, {useState, useEffect} from 'react'
import './App.css'
import firebase from './firebase'

const useDataBase = endpoint => {
  const [data, setData] = useState({})

  useEffect(() => {
    const ref = firebase.database().ref(endpoint)
    ref.on( 'value',snapshot => {
    setData(snapshot.val())
    })
    return () => {
      console.log('clear')
      ref.off()
    }
  }, [endpoint])

  return data
}

const A = () =>{
  const data = useDataBase('test/a')
  return(
    <pre>{JSON.stringify(data)}</pre>
  )
}

const Comments = () => {
  const data = useDataBase('test')
  return(
    <pre>{JSON.stringify(data)}</pre>
  )
}

function App() {
  //Hooks
  return (
    <div>
      <Comments />
      <A />
    </div>
  );
}

export default App
