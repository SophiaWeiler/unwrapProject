export const parsePostsIntoPostsByDay = (posts) => {
    const postsByDayHelper = [0,0,0,0,0,0,0]

    for (let post of posts) {
        const dotw = (Math.floor(post?.data?.created_utc / 86400) + 4) % 7
        postsByDayHelper[dotw] += 1
    }

    const postsByDay = []
    for(let step = 0; step < 7; step ++){
        postsByDay.push({number: postsByDayHelper[step], term: dayOfWeekAsString(step)})
    }
    
    postsByDay.sort((a,b) => b.number - a.number);

    console.log(postsByDay)

    console.log(postsByDay)
    return postsByDay;
}


export const parsePostsIntoPostsByTime = (posts) => {
    const postsByTimeHelper = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    for (let post of posts) {
        let timestamp = post?.data?.created_utc
        var date = new Date(timestamp * 1000)
        const totd = date.getHours()
        postsByTimeHelper[totd] += 1
    }

    const postsByTime = []
    for(let step = 0; step < 24; step ++){
        postsByTime.push({number: postsByTimeHelper[step], term: timeOfDayAsString(step)})
    }
    
    postsByTime.sort((a,b) => b.number - a.number);

    console.log(postsByTime)
    return postsByTime;
}



export const parsePostsIntoPostsByTitle = (posts) => {
    const postsByTitle = []

    for(let post of posts){
        let title = post?.data?.title
        const words = title.split(" ")
        for(let word of words){
            const index = postsByTitle.map(object => object.term).indexOf(word);
            if(index >= 0){
                postsByTitle[index].number++
            }
            else{
                postsByTitle.push({number: 1, term: word})
            }
        }

    }
    postsByTitle.sort((a,b) => b.number - a.number)

    return postsByTitle

    
}

export const parsePostsIntoPostsByLength = (posts) => {
    const postsByLength = []

    for(let post of posts){
        const word = post?.data?.title.split(" ")
        const length = word.length
        const index = postsByLength.map(object => object.term).indexOf(length);
        if(index >= 0){
            postsByLength[index].number++
        }
        else{
            postsByLength.push({number: 1, term: length})
        }

    }

    
    postsByLength.sort((a,b) => b.number - a.number)


    return postsByLength

    
}

export function dayOfWeekAsString(dayIndex) {
    return ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][dayIndex] || '';
}

export function timeOfDayAsString(timeIndex) {
    return ["12:00am", "1:00am","2:00am","3:00am","4:00am","5:00am","6:00am","7:00am", "8:00am","9:00am","10:00am","11:00am","12:00pm", "1:00pm","2:00pm","3:00pm","4:00pm","5:00pm","6:00pm","7:00pm", "8:00pm","9:00pm","10:00pm","11:00pm"][timeIndex] || '';
}
