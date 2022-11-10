import React from "react"

import Dashboard from './Dashboard';

//npm install react-bootstrap bootstrap
//need to have react installed


import "./style.css"

function App(){
    return (
        <div className="wholeApp">
            <Dashboard />
        </div>
      
    )
}

export default App

/*

What I would do if I had more time to improve:
1. make sure that it actually uses the top 500 posts
2. add a button to the search bar so that it only reloads on click
3. make sure that the loading state stays until all of the computations are completed
4. make the components smaller/easier to read by making sure that everything is visible on one page (no scrolling)
5. write a set of automated tests 
6. improve user experience by getting user feedback
7. display message of not a valid subreddit if invalid input


*/ 