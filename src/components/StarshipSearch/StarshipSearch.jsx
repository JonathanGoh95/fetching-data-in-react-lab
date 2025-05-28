import { useState } from "react"


export default function StarshipSearch({starships,setDisplayedStarships}) {
    const [filterTerm,setFilterTerm] = useState('') // State for the Search Input Box
    const [searched,setSearched] = useState(false)  // State for accessibility customization

    const handleBack = (event) => {
        event.preventDefault()  // Prevent the page from reloading after clicking the 'Back' button
        setDisplayedStarships([]) // Set the Displayed Starships state back to an empty array
        setSearched(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault()  // Prevent the page from reloading after form submission
        setSearched(true)
        setDisplayedStarships(starships.filter(starship => starship.name.toLowerCase().includes(filterTerm.toLowerCase())))
        // Set the empty Displayed Starships array with the filtered Starships Data array
        setFilterTerm('')   // Clears the search box after form submission
    }

    return(
        <div className="searchDiv">
            <h1>Search</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="filter">Search Term: </label>
                <input id="filter" type="text" value={filterTerm} onChange={(e)=>setFilterTerm(e.target.value)}></input>
                <button type="submit" disabled={searched}>Search</button>
                {searched && <button onClick={handleBack}>Back</button>}
            </form>
        </div>
    )
}