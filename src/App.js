import React, {useState, useEffect} from 'react'
import './App.css'
import firebase from './firebase'



function App() {
  //Hooks
  const [data, setData] = useState({})

  useEffect(() => {
    const ref = firebase.database().ref('test')
    ref.on( 'value',snapshot => {
    setData(snapshot.val())
    })
    return () => {
      console.log('clear')
      ref.off()
    }
  }, [])
  

  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}

export default App
