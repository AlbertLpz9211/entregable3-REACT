import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const ResidentsTarjet = ({ urlCharter }) => {
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios
      .get(`${urlCharter}`)
      .then((res) => setCharacter(res.data))
      .catch((r) => console.log(r));
  }, []);

  console.log(character);
  return (
    <div className="charactersTarjets">
      <h2>{character?.name}</h2>
      <img src={character.image} alt="" />
      <h3>Raza: {character.species}</h3>
      <h3>Tipo: {character.type}</h3>
      <h3>Origen: {character.origin?.name}</h3>
    </div>
  );
};

export default ResidentsTarjet;
