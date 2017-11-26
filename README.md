# CRUD App

A CRUD application using the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/). It fetches data from 3 resources of the API, combining them and then displaying them as a list. The resources are `/posts`, `/users`, `/albums`.

The combined collection contains only 30 items, each of which contains random items from each resource.

This list is rendered on the DOM and displays the following per list item: the post title, album title and user name. There is also a way to delete the item and update the post title only.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Setup

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!