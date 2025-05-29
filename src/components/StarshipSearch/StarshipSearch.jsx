import { useState } from "react"


export default function StarshipSearch({starships,setDisplayedStarships}) {
    const [filterTerm,setFilterTerm] = useState('') // State for the Search Input Box
    const [filterBy,setFilterBy] = useState('')
    const [searched,setSearched] = useState(false)  // State for accessibility customization
    const [error, setError] = useState(''); // State for error message

    const handleBack = (event) => {
        event.preventDefault()  // Prevent the page from reloading after clicking the 'Back' button
        setDisplayedStarships([]) // Set the Displayed Starships state back to an empty array
        setSearched(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault()  // Prevent the page from reloading after form submission
        if (filterTerm.length === 0) {
            setError('Please enter a search term.');
            return;
        }
        else if (filterBy === ''){
            setError('Please select a valid filter condition.');
            return;
        }
        setSearched(true)
        setDisplayedStarships(starships.filter(starship => starship[filterBy] && starship[filterBy].toLowerCase().includes(filterTerm.toLowerCase())))
        // Set the empty Displayed Starships array with the filtered Starships Data array
        setFilterTerm('')   // Clears the search box after form submission
        setError('')
    }

    return(
        <div className="searchDiv">
            <h1>Search</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="filter">Search Term: </label>
                <input id="filter" type="text" value={filterTerm} onChange={(e)=>setFilterTerm(e.target.value)} disabled={searched}></input>
                <label htmlFor="filterBy">Filter By: </label>
                <select id="filterBy" onChange={(e) => setFilterBy(e.target.value)} disabled={searched}>
                    <option value=''>--Please choose an option--</option>
                    <option value='name'>Name</option>
                    <option value='starship_class'>Class</option>
                    <option value='manufacturer'>Manufacturer</option>
                    <option value='model'>Model</option>
                </select>
                <button type="submit" disabled={searched}>Search</button>
                {searched && <button onClick={handleBack}>Back</button>}
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    )
}