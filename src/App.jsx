import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useEffect } from "react";
import axios, { Axios } from "axios";
import ResidentsTarjet from "./components/ResidentsTarjet";

function App() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then((res) => setLocation(res.data));
  }, []);

  const seachLocation = () => {
    axios.get();
  };

  //console.log(location);

  return (
    <div className="App">
      <input type="text" name="" id="" placeholder="type a location ID" />
      <button>Search</button>
      <ul className="container">
      <h1>{location.name}</h1>
      <h2>type: {location.type}</h2>
      <h2>Dimension: {location.dimension}</h2>
      <h2>Population: PENDIENTEEEEE!!!</h2>
      <hr />
        {location.residents?.map((charters) => (
          <ResidentsTarjet urlCharter={charters} key={charters} />
        ))}
      </ul>
    </div>
  );
}

export default App;
