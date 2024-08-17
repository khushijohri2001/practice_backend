import {useEffect, useState} from "react";
import axios from "axios";
import './App.css';

function App() {
  const [jokes, setJokes] = useState([]);

  const getJokes = async() => {
    try{
      const res = await axios.get("http://localhost:3000/jokes");
      setJokes(res.data);
    } catch(error){
      console.log(error);
    }
  }
    useEffect(() => {
      getJokes();
  
    }, [])

  return (
    <div className="App">
      hello
      <div>
        {jokes.map((joke) => {
          return(
            <p>{joke.name}</p>
          )
        })}
      </div>
    </div>
  );
}

export default App;
