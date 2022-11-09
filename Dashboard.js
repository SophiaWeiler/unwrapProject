import React, {useState, useEffect} from 'react'

import SearchBar from './SearchBar'
import Category from "./Category"
import LoadingSpinner from './LoadingSpinner'

import {dayOfWeekAsString, timeOfDayAsString, parsePostsIntoPostsByDay, parsePostsIntoPostsByTime, parsePostsIntoPostsByTitle, parsePostsIntoPostsByLength } from './helperFunctions';




const Dashboard = () => {
    const [posts, setPosts] = useState([]);
    const [subreddit, setSubreddit] = useState('');
    const [loading, setLoading] = useState(false);
    const [postSearch, setPostSearch] = useState(false);


    useEffect(() => {
        async function getData() {
            const res = await fetch(`https://www.reddit.com/r/${subreddit}.json?count=500&limit=10000`);
            const data = await res.json();
            setLoading(true);
            if (data != null) {
                setPosts(data.data.children);
            }

            setLoading(false);
            setPostSearch(true);
        }

        getData();
        console.log(posts)

    }, [subreddit]);

    const postsByDay = parsePostsIntoPostsByDay(posts);
    const postsByTime = parsePostsIntoPostsByTime(posts);
    const postsByTitle = parsePostsIntoPostsByTitle(posts);
    const postsByLength = parsePostsIntoPostsByLength(posts);
    


    return (
        <div>
            
            <SearchBar value={subreddit} setValue={setSubreddit}/>
            {loading ? <LoadingSpinner/> : (postSearch && 
            <div>
                <Category postsByValue={postsByDay} title={"Most common day"} labelFunction={dayOfWeekAsString} total={7}/>
                {console.log(postsByDay)}
                <Category postsByValue={postsByTime} title={"Most common hour"} labelFunction={timeOfDayAsString} total={24}/>
                {console.log(postsByTime)}
                {/*<Category postsByValue={postsByDay} title={"Most common day"} word={""} array={postsByDay} total={7}/>
                <Category postsByValue={postsByTime} title={"Most common hour"} word={""} array={postsByTime} total={24}/>*/}
                
                <Category postsByValue={postsByTitle} title={"Most common word in title"} word={""}array={postsByTitle} total={10}/>
                <Category postsByValue={postsByLength} word={"Length: "} title={"Most common title length"}array={postsByLength} total={5}/>

                
        
            </div>)
            }
            
        </div>
    )
}

export default Dashboard;