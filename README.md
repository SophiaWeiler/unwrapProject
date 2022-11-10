Steps to run code:

1. in the terminal run
npx create-react-app sophia-weiler-subreddit
cd sophia-weiler-subreddit
git clone *this repository*
mv unwrapProject src
cd src
npm start


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
2. add a button to the search bar so that it only reloads on click
3. make sure that the loading state stays until all of the computations are completed
4. make the components smaller/easier to read by making sure that everything is visible on one page (no scrolling)
5. write a set of automated tests 
6. improve user experience by getting user feedback
7. display message of not a valid subreddit if invalid input
