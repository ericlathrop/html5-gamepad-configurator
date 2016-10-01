# react-redux-boilerplate
Boilerplate SPA with React, Redux, Immutable, Babel, Eslint, & Mocha

This boilerplate app has all the pieces set up for what I think is a top-shelf front-end JavaScript Single Page Application.

* [react](http://facebook.github.io/react/) for rendering
* [redux](http://redux.js.org/) for state management
* [react-router](https://github.com/rackt/react-router) for client-side routing
* [immutable](http://facebook.github.io/immutable-js/) for an efficient data store
* [babel](http://babeljs.io/) for the latest & greatest JavaScript
* [webpack](https://webpack.github.io/) for bundling modules for the browser
* [mocha](http://mochajs.org/) & [chai](http://chaijs.com/) for testing
* [eslint](http://eslint.org/) for catching common bugs and style issues
* [node-sass](https://github.com/sass/node-sass) for better CSS
* [autoprefixer-loader](https://github.com/passy/autoprefixer-loader) to never have to write vendor prefixed CSS rules again

[A Comprehensive Guide to Test-First Development with Redux, React, and Immutable](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html) helped me put a lot of this together.

## Commands

* `npm install` to install all the dependencies.
* `npm start` to start a [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) on http://localhost:4000. The dev server will live-reload the page when you save changes to the code.
* `npm run build` to build the app.js file for the browser.
* `npm run watch` to build the app.js file for the browser and rebuild it when you save changes to the code.
* `npm test` to run the tests.
* `npm run test-watch` to run the tests and rerun the tests when you save changes to the code.
