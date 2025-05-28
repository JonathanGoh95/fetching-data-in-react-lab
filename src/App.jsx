// src/App.jsx
import { useState, useEffect } from "react";
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
      setStarshipsData(dataset);  // Only the Starships Data state will be set with the fetched data.
    };
    fetchStarships(); 
  }, []); // [] ensures the effect runs only once when the component mounts.

  return (
    <div className="main">
      <h1>Star Wars API</h1>
      <StarshipSearch starships={starshipsData} setDisplayedStarships={setDisplayedStarships}/>
      <StarshipList starships={starshipsData} displayedStarships={displayedStarships}/>
    </div>
  );
}

export default App
