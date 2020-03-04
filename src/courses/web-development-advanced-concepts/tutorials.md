# Tutorials
Here you will find the source code written in the different tutorials.

## Tutorial 1 (client-side JS)
* <a href="static-files/tutorial-01/counter.html">counter.html</a>
* <a href="static-files/tutorial-01/clock.html">clock.html</a>
* <a href="static-files/tutorial-01/link.html">link.html</a>
* <a href="static-files/tutorial-01/form.html">form.html</a>

## Tutorial 2 (Docker + Layered Architecture)
Unzip <a href="static-files/tutorial-02/platform.zip">the source code for the platform</a> and then run the command `docker-compose up --build -V` to run it. You can also debug your web application by connecting to it in Visual Studio Code when you open the root folder of the platform as a workspace in Visual Studio Code. You might need to change the IP address `192.168.99.100` in `.vscode/launch.json` to `localhost` or the IP address of your docker machine.

## Tutorial 4 (REST API in Express)
1. Unzip <a href="static-files/tutorial-04/tutorial-04.zip">the source code for the REST API</a>.
2. Enter the root folder of the source code (use the `cd ...` command).
3. Run the command `npm install` to install all dependencies.
4. Run the command `node app.js` to start the application.
5. Send your HTTP requests to the application (e.g. `GET /pets`) on port `8080` using for example [Postman](https://www.postman.com/) (or from your Android/iOS application or single-page application).

## Tutorial 5 (Single-Page Application)
1. Unzip <a href="static-files/tutorial-05/tutorial-05.zip">the source code for the backend + frontend</a>.
2. Enter the root folder of the backend (use the `cd ...` command).
3. Run the command `npm install` to install all dependencies.
4. Run the command `node app.js` to start the backend.
5. In another terminal/shell/console, enter the root folder of the frontend (use the `cd ...` command).
6. Run the command `npm install` to install all dependencies.
7. Run the command `node app.js` to start the frontend.
8. Open [localhost:3000/](http://localhost:3000/) in a web browser.

::: warning Note!
The source code for the frontend application contains many comments suggesting how it can be improved. Feel also free to use `async`/`await`.
:::