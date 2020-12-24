# Evento Project

## Prerequisites:

### client:

- You need git to clone the project repository. You can get git from [here][git].

- using several Node.js tools to initialize and test the project. You must have Node.js
  and its package manager (npm) installed. You can get them from [here][node].

- To run the end-to-end tests, you will also need to have the
  [Java Development Kit (JDK)][jdk-download] installed on your machine.

### server:

- You need an MSSQL database installed and configured to use the project.
  You can get MSSQL from [here][mssql].

- Node & NPM installed ([here][node]).


## To run the Application in Development:

- Open the terminal at the project directory and run the command:

```sh
cd server;npm i;touch .env;echo "JWT_KEY=UNSAFEJWTKEYYDANGER\nDB_PASSWORD=REPLACE_WITH_YOUR_MSSQL_PASSWORD" >> .env;npm start;

```

- You should see the server running and output 'Listening on port 5000'.
- Leave the terminal window open and open a different terminal window.
- Go again to the project directory and run the command:

```sh
cd client;npm run prestart;npm run postinstall;npm run update-webdriver; npm start;
```

- You should see the server running and output 'Listening on port 8000'.

```sh
Starting up http-server, serving ./app
Available on:
  http://localhost:8000
```

Now browse to the app at [`localhost:8000/index.html`][local-app-url].

[git]: https://git-scm.com/
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads
[local-app-url]: http://localhost:8000/index.html
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
[mssql]: https://www.microsoft.com/en-us/sql-server/sql-server-downloads
