import StarshipCard from "../StarshipCard/StarshipCard";

export default function StarshipList({starships}) {
    return(
      <div>
        <StarshipCard starships={starships} />
      </div>
    )
}