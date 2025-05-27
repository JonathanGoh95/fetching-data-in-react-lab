// src/App.jsx
import { useState } from "react";
import { useEffect } from "react";
import StarshipSearch from "./components/StarshipSearch/StarshipSearch";
import StarshipList from "./components/StarshipList/StarshipList";
import * as starshipService from './services/starshipService'

import './App.css'


const App = () => {
  const [starshipsData,setStarshipsData] = useState([])
  const [displayedStarships,setDisplayedStarships] = useState([])
  
  useEffect(() => {
    const fetchStarships = async () => {
      const dataset = await starshipService.index();
      setStarshipsData(dataset);        // Both state setters are called with the fetched data.
      setDisplayedStarships(dataset);
    };
    fetchStarships(); 
  }, []); // []  ensures the effect runs only once when the component mounts.

  return (
    <div className="main">
      <h1>Star Wars API</h1>
        <StarshipList starships={starshipsData}/>
    </div>
  );
}

export default App
