export default function StarshipCard({starships}) {
    return(
    <div className="starshipCardContainer">
        {starships.map((starship, index) => (
            <div key={index} className="starshipCard">
                <p><b>{starship.name}</b></p>
                <p>Class: {starship.starship_class}</p>
                <p>Manufacturer: {starship.manufacturer}</p>
                <p>Model: {starship.model}</p>
            </div>
        ))}
    </div>
    );
}