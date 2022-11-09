import React from "react"

const SearchBar = ({ value, setValue }) => {
    return(
        <div className = "search">
            <h1 className="searchLabel">Enter subreddit</h1>
            <form className = "form">
                <input 
                    type="search" 
                    id="searchForm" 
                    className ="searchForm" 
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder = "Search..."/>
            </form>

        </div>
    )
};

export default SearchBar

//<button type="submit" className="searchButton" value={value} onClick={e => setValue(e.target.value)}> Enter </button>