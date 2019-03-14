# Disc Golf Guru:
Disc Golf Guru is an application designed to allow users to search for disc golf courses by zip code and/or city, and view information about each course. Such information includes location, number of holes, ratings, and weather forecasts.  This application utilizes the Disc Golf Course Review the Open Weather Map APIs to collect data.  Disc Golf Guru is built primarily using React.js and Redux and testing using Enzyme and Jest.

Please Note: In its current iteration, Disc Golf Guru is only able to search for locations in New York state.  Please see [here](https://www.zip-codes.com/state/ny.asp) for a list of searchable New York zip codes.

## Deployed App
[https://alexanderela.github.io/disc-golf-guru](https://alexanderela.github.io/disc-golf-guru/)

## Getting Started
This is a general guide to setting up a Recharge API development environment on your local machine.

### Dependencies
* React.js
* Redux
* React Router
* Jest and Enzyme for testing
* See package.json for a list of required modules

### Developers:
#### Get the app on your local machine
* Fork this repo using the `Fork` button in the upper right corner of this page.

* `Clone` your fork onto your local machine
```
git clone https://github.com/YOUR_GITHUB_USERNAME_HERE/disc-golf-guru
```

* Jump into that directory on your local machine
```
cd disc-golf-guru
```

* Add an upstream remote that points to the main repo:
```
git remote add upstream https://github.com/alexanderela/disc-golf-guru.git
```

* Fetch the latest version of `master` from `upstream`
```
git fetch upstream master
```


#### Install and Start Server

* `npm install` all dependencies.

* `npm start` the development server.


### Contributing
This guide assumes that the git remote name of the main repo is `upstream` and that **your** fork is named `origin`.

Create a new branch on your local machine to make your changes against (based on `upstream/master`):
```
git checkout -b branch-name-here --no-track upstream/master
```
We recommend naming your branch using the following convention:
```
#(issueNumber)-feature-name-your-name
ex: 36-middleware-error-handling-alex
```

#### Contribute using GitHub Issues
* Click on the `Issues` tab at the top left of this page
* Choose one and work on your local machine to fix it  
  - We recommend naming your branch according to the above convention  
  - Use TDD as much as possible 
  - Once the tests are passing, you can commit your changes. See [Making a great commit for more tips](https://github.com/openfoodfoundation/openfoodnetwork/wiki/Making-a-great-commit).  
```
git add .
git commit -m "Add a concise commit message describing your change here"
```
  - Before pushing to your fork, rebase your commits against the upstream master branch
```
git pull --rebase upstream master
```
  - Push your changes to a branch on your fork:
```
git push origin branch-name-here
```

#### Submitting a Pull Request
* Create a Pull Request (PR) to this repo's master using GitHub's UI
* Fill in the requested information re: what you worked on
* Keep your PR small, with a single focus

## Technologies Used:
- React.js
- Redux
- Redux-thunk
- React Router
- TDD with Enzyme and Jest
- CSS3
- Fetch calls with asynchronous JavaScript
- Open Weather Map API
- Disc Golf Course Review (DGCR) API

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Requirements:
Project spec can be found [here](http://frontend.turing.io/projects/self-directed-project.html).

## Images:
### Home Page
![Home Page image](./src/assets/Site_Images/Home_Page.png "Home Page")

### Search Results
![Search Results image](./src/assets/Site_Images/Find_A_Course.png "Search Results")

### Golf Course Info
![Search Results image](./src/assets/Site_Images/Course_Info.png "Search Results")

### Favorite Courses
![Favorite Courses image](./src/assets/Site_Images/Favorites.png "Favorite Courses")

### Wireframes
#### Wireframe 1
![Wireframe image 1](./src/assets/Wireframes/Wireframe_Home.png "Wireframe 1")

#### Wireframe 2
![Wireframe image 1](./src/assets/Wireframes/Wireframe_Weather.png "Wireframe 1")

#### Wireframe 3
![Wireframe image 1](./src/assets/Wireframes/Wireframe_Favorites.png "Wireframe 1")

## This README relied upon Open Food Source's extensive and excellent [Set Up](https://github.com/openfoodfoundation/openfoodnetwork/blob/master/GETTING_STARTED.md) and [Contibution](https://github.com/openfoodfoundation/openfoodnetwork/blob/master/CONTRIBUTING.md) docs.
