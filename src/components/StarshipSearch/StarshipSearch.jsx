import { useState } from "react"

export default function StarshipSearch({starships,setDisplayedStarships}) {
    const [filterTerm,setFilterTerm] = useState('')
    const [searched,setSearched] = useState(false)

    const handleSearch = (event) => {
        setFilterTerm(event.target.value)
    }

    const handleBack = (event) => {
        event.preventDefault()
        setDisplayedStarships([])
        setSearched(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setSearched(true)
        setDisplayedStarships(starships.filter(starship => starship.name.toLowerCase().includes(filterTerm.toLowerCase())))
        setFilterTerm('')
    }

    return(
        <div className="searchDiv">
            <h1>Search</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="filter">Search Term: </label>
                <input id="filter" type="text" value={filterTerm} onChange={handleSearch}></input>
                <button type="submit">Search</button>
                {searched && <button onClick={handleBack}>Back</button>}
            </form>
        </div>
    )
}