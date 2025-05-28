import StarshipCard from "../StarshipCard/StarshipCard";

export default function StarshipList({starships,displayedStarships}) {
    
    return(
      <div>
        <h1>Starships</h1>
        {displayedStarships.length > 0 && <p>Number of Results: {displayedStarships.length}</p>}
        {displayedStarships.length === 0 ? <StarshipCard starships={starships} /> : <StarshipCard starships={displayedStarships} />}
      </div>
    )
}