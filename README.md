# E-Comerce Back End

![GitHub license](https://img.shields.io/badge/License-MIT-yellow.svg)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## Description
This app is a simple E-Comerced database app that allows a user to view, add, update, and delete products and their associated catagories or tags. This is done thrue the Insomnia app via http routes and JSON data. Node.js, PostgreSQL, Insomnia and some other dependencies are required for this to use this app.

## Table of Contents
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Usage 
First the user must have Node.js, PostgreSQL, and Insomnia installed on their system. Next, after cloning the repo, the user will need to run "npm i" to install the required dependencies. Once this is done the user needs enter their postgres credentials in a .env file and log into postgres in their terminal and run "\i ./db/schema.sql" then quit postgres. The user must then enter "npm run seed" followed by "npm run dev". Next comes Insomnia, launch the app build the http requests using the images provided above and start tracking your products. In order to add and update youll need to send the request with JSON by clicking on the "Body" tab and selecting "JSON" in the dropdown.

## Credits
JD Tadlock: For all the help and instruction in the Rutgers coding bootcamp

## License
#### MIT
A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
[Link to License](https://opensource.org/license/MIT)
You can also check out the LICENSE in the repo.

## How to Contribute
Check out the [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md)

## Tests
None

## Questions
If you have any questions check out my [Github](https://github.com/TIrwin19) or send me an email at .
