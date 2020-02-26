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
2. Run the command `npm install` to install all dependencies.
3. Run the command `npm run app.js` to start the application.
4. Send your HTTP requests to the application (e.g. `GET /pets`) on port `8080` using for example [Postman](https://www.postman.com/) (or from your Android/iOS application or single-page application).