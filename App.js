import './App.css';
import Axios from "axios"
import { useEffect, useState} from "react"


export default function App() {
  
  const [predictedExcuse, setPredictedExcuse] = useState("")
  const fetchData = (excuse) => {
  Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then ((res) =>{
    setPredictedExcuse(res.data[0].excuse)

  })
}



  return (
    <div className="App"> 
      <h1 className='App-title'> Generate an Excuse</h1>

      <button className='button-73' onClick={() => fetchData("party")}> Party </button>
      <button className='button-73' onClick={() => fetchData("family")}> Family </button>
      <button className='button-73' onClick={() => fetchData("office")}> Office </button>

      <div className='App-text'>
        <h1>EXCUSE:</h1> <p> {predictedExcuse} </p> 
      </div>
     
    </div>
  );
}


