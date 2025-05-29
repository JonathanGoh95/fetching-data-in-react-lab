import StarshipCard from "../StarshipCard/StarshipCard";

export default function StarshipList({starships,displayedStarships}) {
    
    return(
      <div>
        <h1>Starships</h1>
        {/* Display the number of elements in the Displayed Starships array if it is not empty */}
        {displayedStarships.length > 0 && <p>Number of Results: {displayedStarships.length}</p>}
        {/* Choose which state to display based on the availability of elements in the Displayed Starships array */}
        <StarshipCard starships={displayedStarships.length === 0 ? starships : displayedStarships} />
      </div>
    )
}