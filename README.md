# Cookbook App

## Write an api served app application with React

The goal of this project is to write a simple react implementation of dynamicaly served react app.

The main functional requirements are to use an API, asynchronous code, Contentfull, React-Router and deployment to gh=pages.

The implementation of this website can be viewed [here](https://konstrukteur.github.io/hacker-news-react/)

![initial design](design.png)

## API

Algolia API [https://hn.algolia.com/api](https://hn.algolia.com/api)

## Deployment on GitHub

- gustomize root path to github repository root path in package.json

  - "homepage": "http://{github-username}.github.io/{repo-name}",

- install gh-pages

  - npm install gh-pages --save-dev

- add predeploy and deploy script to package.json. customize the gh-pages deply script

  - "predeploy" : "npm run build",
  - "deploy" : "gh-pages -d build (--remote github)",

- commit and push to github

  - git add .
  - git commit -m "setup gh-pages"
  - git push

- deploy
  - npm run deploy
