This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.

## Project Details

 - Since I'm using create-react-app to build the project, I chose not to add sass/scss compiling pipeline to keep it simple
 - All controls are responsive except for the hotspot thumbnail, I did not include the methods to calculate wether there is enough space to show (mobile view)
 - I also did not include any volume controls
 - The video control loads an external video file
 - I chose to leave the configuration of the hotspots as an external .json file (build or public/data.json)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### `npm run serve`

Run a local server with the build files
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.
