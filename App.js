import React, {useState, useEffect} from "react"

import Dashboard from './Dashboard';

//npm install react-bootstrap bootstrap
//need to have react installed


import "./style.css"

function App(){
    return (
        <Dashboard />
    )
}

export default App

/*
1. change search bar to button click
2. create a loading state on dashboard for when API is loading info
3. when you press search, set loading to true, then when all data in, set data to false
5. in loading time, computation for all of the functions has to be included




*/ 