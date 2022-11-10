Steps to run code:

in the terminal run:
1. npx create-react-app sophia-weiler-subreddit
2. cd sophia-weiler-subreddit
3. rm -r src
4. git clone *this repository*
5. mv unwrapProject src
6. cd src
7. npm start


Dependencies in my react app:
"dependencies": {
"@testing-library/jest-dom": "^5.16.5",
"@testing-library/react": "^13.4.0",
"@testing-library/user-event": "^13.5.0",
"bootstrap": "^5.2.2",
"react": "^18.2.0",
"react-bootstrap": "^2.6.0",
"react-dom": "^18.2.0",
"react-loader-spinner": "^5.3.4",
"react-scripts": "5.0.1",
"react-spinners": "^0.13.6",
"snoowrap": "^1.23.0",
"web-vitals": "^2.1.4"}
        
        
What I would do if I had more time to improve:

1. make sure that it actually uses the top 500 posts
2. get past the issue of "No 'Access-Control-Allow-Origin' header is present" (found this error and didn't have time to get past this issue)
3. add a button to the search bar so that it only reloads on click
4. make sure that the loading state stays until all of the computations are completed
5. make the components smaller/easier to read by making sure that everything is visible on one page (no scrolling)
6. write a set of automated tests 
7. improve user experience by getting user feedback
8. display message of not a valid subreddit if invalid input
