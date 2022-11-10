//search component

import React from "react"



const SearchBar = ({ value, setValue }) => {

    
    return(
        <div className = "search">
            <h1 className="searchLabel">Reddit Post Optimizer</h1>
            <h3 className="description">Enter a subreddit below and the optimizer will tell you the best day, time, terms and length for your post</h3>
            <form className = "form">
                <input 
                    type="text" 
                    id="searchForm" 
                    className ="searchForm" 
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder = "Enter subreddit..."/>
                
            </form>

        </div>
    )
};

export default SearchBar

