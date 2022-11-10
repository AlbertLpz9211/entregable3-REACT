import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import ResidentsTarjet from "./components/ResidentsTarjet";

function App() {
  const [location, setLocation] = useState({});
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then((res) => setLocation(res.data));
  }, []);

  const seachLocation = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${selectedId}`)
      .then((res) => setLocation(res.data));
  };

  //console.log(location);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="type a location ID"
        onChange={(event) => setSelectedId(event.target.value)}
        value={selectedId}
      />
      <button onClick={seachLocation}>Search</button>

      <h1>{location.name}</h1>
      <h2>type: {location.type}</h2>
      <h2>Dimension: {location.dimension}</h2>
      <h2>Population: PENDIENTEEEEE!!!</h2>
      <ul className="character-container">
        {location.residents?.map((charters) => (
          <ResidentsTarjet urlCharter={charters} key={charters} />
        ))}
      </ul>
    </div>
  );
}

export default App;
