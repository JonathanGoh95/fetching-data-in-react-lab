import StarshipCard from "../StarshipCard/StarshipCard";

export default function StarshipList({starships,displayedStarships}) {
    return(
      <div>
        {displayedStarships.length === 0 ? <StarshipCard starships={starships} /> : <StarshipCard starships={displayedStarships} />}
      </div>
    )
}