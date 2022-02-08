# how-to-start-E-Commerce

The consumer market for online retail is becoming more and more impactful for businesses. The purpose of this app is to maintain a database for an e-commerce site.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The user needs to install `Node.js` in order to utilize the commands to operate the application.
Instructions on how to install can be found here: [Installing Node](https://nodejs.org/en/download/)

They also need to install `MySQL` since the application will use databases and MySQL methods. Finally, the user would need a software such as `Insomnia Core` to use and view the routes and their returned data.

### Installing

User needs to run `npm install` to install the appropriate packages required for the app to function.

The user needs to login to their MySQL within the directory to create the initial database. Run `SOURCE schema.sql;` to initialize the database and tables. Ensure you had the appropriate pathing to the file from where you establised a connection. (Ex. `SOURCE db/schema.sql;`).

Return to the directory and run `npm run seed` to fill the tables with preset data for demonstration purposes. Start the server via `npm run start`. Open Insomnia Core to operate the routes.

## Built With

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/en/docs/)
* [Inquirer Package](https://www.npmjs.com/package/inquirer)
* [MySQL2 Package](https://www.npmjs.com/package/mysql2)
* [Sequelize Package](https://www.npmjs.com/package/sequelize)
* [Dotenv Package](https://www.npmjs.com/package/dotenv)

## Video Explanation & Demonstration

The videoes focuses on the perspective of the user.

* [Video Demonstration](https://watch.screencastify.com/v/0IgA7RiUHqLVcFpAQSP1)
* [Video Demonstration - Continued](https://watch.screencastify.com/v/qft6utYVCGJhGAsAXurT)
* [Video Demonstration - Continued](https://watch.screencastify.com/v/Zwye1Rjzecbf1HnAhpjb)

## Screenshot

* ![Screenshot of Insomnia Core](/images/screenshot1.jpg)

Example of user using a POST route to insert data into the database.

## Authors

* **Bradley Le** 

- [Link to Portfolio Site](https://pentazoned.github.io/portfolio-v2/)
- [Link to Github](https://github.com/PentaZoned)
- [Link to LinkedIn](https://www.linkedin.com/in/bradley-le-/)

## License

This project is licensed under the MIT License 