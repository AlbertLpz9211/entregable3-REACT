import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [location, setLocation] = useState({});
  

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then((res) => setLocation(res.data));
  }, []);
  
  console.log(location);

  return (
    <div className="App">
      <h1>cuerpo</h1>
    </div>
  );
}

export default App;
