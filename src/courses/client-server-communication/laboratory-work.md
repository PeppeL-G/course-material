# Laboratory Work
This page contains instructions for the examination test *Laboratory Work*. It consists of three parts, and all of them need to be completed and presented orally to a teacher at a lab session before you are approved on the examination test.

## Installing Required Software
__If you work on the computers in TODO CHECK THESE ROOMS E2404, E2432 or E2433__, all required software should already be installed for you, so you should not need to install anything yourself.

__If you work on a school computer in any other room__, you need to manually install the required software through the Software Center application (unless someone already has done that on the specific computer you sit at).

__If you work on your own private computer__, you need to download and install all required software yourself. In this course, we only use free software available for both Windows, Mac and Linux.

The required software is:

* [Node.js](https://nodejs.org/)
  * Use the Current version
  * TODO ADD TO PATH!
  * To verify that Node.js has been successfully installed, run the command `node -v` in a shell (you might need to restart your computer first). If it has been installed successfully, you should see the version of Node.js that was installed, something like `v11.6.0`.
* [npm](https://www.npmjs.com/)
  * This one is installed along with Node.js, so you don't need to install it separately. However, you might want to update it to the latest version (not required):
    * [Update npm instructions](https://docs.npmjs.com/troubleshooting/try-the-latest-stable-version-of-npm)
  * To verify that npm has been successfully installed, run the command `npm -v` in a shell (you might need to restart your computer first). If it has been installed successfully, you should see the version of npm that was installed, something like `6.9.0`.
* [Vue CLI](https://cli.vuejs.org/guide/installation.html#installation)
  * After you have installed Node.js and npm, simply run the command `npm install -g @vue/cli` in a shell to install Vue CLI.
  * To verify that Vue CLI has been successfully installed, run the command `vue -V` in a shell. If it has been installed successfully, you should see the version of Vue CLI that was installed, something like `3.7.0`.

The following software tools are not required (use whichever tools you want), but recommended:

* [Visual Studio Code](https://code.visualstudio.com/)
  * IDE with good support for writing, running and debugging Node.js and JavaScript code
* [DB Browser for SQLite](https://sqlitebrowser.org/)
  * Database management tool you can use to visualize/debug the database. An alternative is to install and use [the SQLite extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)
* [Postman](https://www.getpostman.com/)
  * App you can use to send custom HTTP requests to a web application
* TODO Vue debug extension

## Part 1 - Learning Vue
The goal with this part of the laboratory work is to teach you how to use Vue to build a Single-Page Application. Vue is a quite big framework (it would be possible to have a single 7.5 credit course just to teach all there is to know about Vue), so you are only expected to learn and use the basics, which will be enough to create quite advanced and good Single-Page Applications.

The application is about...

### Pre-requisites
Before you start working on this part you are expected to view the following recorded lectures:

* XXX
* YYY
* ZZZ

### Creating a new Vue application
Start by using the Vue CLI program to create a new folder containing the initial source files for the Vue application you should create:

1. Open a shell, for example _Windows PowerShell_ in Windows.
2. Navigate to the folder where you want to create a new folder containing the source code for the Vue application. The following commands might be helpful:
   * `pwd` - Show which folder you are currently standing in
   * `mkdir projects` - Create a new sub-folder named `projects` in the folder you are currently standing in.
   * `cd projects` - Go into the sub-folder named `projects`
   * `cd ../` - Go back to the parent folder
3. Create the root folder for your project's source files by running the following command:
   * `vue create project-name` - Create a new sub-folder named `project-name` containing the source files for your Vue application (change `project-name` to something else (avoid using spaces))
   * In the configuration process, make the following choices:
      1. Please pick a preset: __Manually select features__
      2. Check the features needed for your project: __Only select _Router___.
         * Selecting more is OK, but it will produce more code making it harder to understand the initial source code.
      3. Use history mode for router: __no__
      4. Where do you prefer placing config for Babel, PostCSS, ESLint, etc.: __In package.json__
4. Go into the root folder of your Vue application by running the following command:
   * `cd project-name` - Go into the sub-folder named `project-name` (use the same name as before)
5. Open the application's root folder in a code editor of your choice, e.g.:
   * `code .` - Start Visual Studio Code with the application's root folder opened in the Explorer panel.
6. Start the Vue development server which will immediately build your Vue application and each time you change the source code in your Vue application by running the following command:
   * `npm run serve` - Start the Vue development server
7. Visit [http://localhost:8080](http://localhost:8080) in a web browser to see how your Vue application works.
8. Try changing some code in one of the `*.vue` files. When you save your changes, the server will immediately re-build the Vue application and push it to the web browser, so when you go back to your web browser you should be able to see the changes almost immediately.

Let's quickly go through the most important files and folders your Vue application consists of:

* `public/` - Folder you can place static files in. This is suitable for static files you want to have absolute paths to and won't use/refer to in the rest of the application, such as PDF files.
* `src/main.js` - This is the file that first run when your Vue application starts. It is primarily used to configure the Vue application. Currently it adds routing capabilities to the application (as they are defined in `src/router.js`) and tell Vue that `src/App.vue` is the main Vue component that should be shown.
* `src/router.js` - This file tells Vue what main content to show (which Vue component to use) on the page depending on which URI the user navigates to. Initially it says:
   * the URI `/` should show the Vue component `src/views/Home.vue` as the main content.
   * the URI `/about` should show the Vue component `src/views/About.vue` as the main content.
* `src/App.vue` is the main Vue component that is shown. It acts as the layout and will insert the main content on the page where you use the special Vue component `<router-view/>`. To insert links that changes the main content when clicked one use the special Vue component `<router-link to="/THE-URI">LINK TEXT</router-link>`
* `src/views/*.vue` - These Vue components represent the main content on the various pages.
* `src/components/*.vue` - These Vue components represent Vue components that can be re-used in other Vue components (for example, if you want to have a login form at multiple different places in your application you would create a Vue component containing that functionality here, and then refer to this component wherever you want the login form to appear).
* `assets/*` - Folder you can place static files in and refer to them from your Vue components using relative paths instead of absolute path.

### Application (layout)
So `src/App.vue` is a Vue component that act as the layout for the application. In this component you can use the special Vue component `<router-view/>` to insert the main content at one place, and you can use the special Vue component `<router-link to="/THE-URI">LINK TEXT</router-link>` to insert links to the other pages (`src/views/Home.Vue` and `src/views/About.Vue`) in a menu.

Change the layout (change the code in `src/App.vue`) to contain at least:

* A header
* A navigation menu
* The main content
* A footer

Design your layout however you want. Feel free to use CSS frameworks such as Bootstrap. It's not that important that it's beautiful, the most important thing is that you learn how this component works and should be used.

### Home & About (static)
Change `src/views/Home.Vue` and `src/views/About.Vue` to be more relevant to your application. It's not that important what they contain, but they should feel like they're part of the application. Feel free to delete `src/components/HelloWorld.vue`. 

### Dice (internal state + v-if)
Add a new Vue component representing the main content on a page that displays a random value between 1 and 6:

1. Create a new file called `Dice.vue` in `src/views/`. To start you can simply copy the content of `Home.vue` and paste it in `Dice.vue`.
2. Register a route to this new component in `src/router.js`.
3. Provide a link to the new route by adding `<router-link to="/THE-URI">LINK TEXT</router-link>` to the navigation menu or footer in your layout (`src/App.vue`).

Then add the `data` function to your component:

```html
<script>
export default {
  name: 'Dice',
  data(){
    
    const between1And6 = 1 + Math.floor(Math.random()*6)
    
    return {
      diceValue: between1And6
    }
    
  }
}
</script>
```

Then change the HTML code in `Dice.vue` to display the dice value. In the HTML code you should also display the text:

 * `That was low` if the dice value is 1 or 2
 * `That was average` if the dice value is 3 or 4
 * `that was high` if the dice value if 5 or 6

To conditionally display HTML code you need to use the [`v-if`](https://vuejs.org/v2/guide/conditional.html#v-if) and possibly the `v-elseif` and `v-else` directives. 

To generate a new random dice value shown on the screen the user needs to go to another page and then back again (so the current instance of `Dice.vue` is deleted and then a new instance of it is created and displayed when the user gets back). This is not that convenient for the user. Instead, add an HTML button in `Dice.vue` the user can click on to "throw" the dice again (generate a new random integer between 1 and 6). You need to add a method to your component to handle the click like this:

```html
<script>
export default {
  name: 'Time',
  data(){
    // As before...
  },
  methods: {
    throwDice(){
      // You need to change the code here...
      this.diceValue = 5
    }
  }
}
</script>
```

And then tell Vue to run this method when the user clicks on the button (you need to use the [`v-on`](https://vuejs.org/v2/guide/events.html#Listening-to-Events) directive (or the short syntax `@`)).

### FAQ (loops + clicks)
Add a new Vue component representing the main content on a FAQ page. The procedure is similar to what you did before.

Don't hard code the FAQs in the HTML code in your component. Instead, put the FAQs in an array like this:

```js
[{
  question: "How old are you?",
  answer: "I'm 10 years old."
}, {
  question: "What's your favorite color?",
  answer: "My favorite color is purple."
}, ...]
```

In your HTML code you can then use the [`v-for`](https://vuejs.org/v2/guide/list.html#Mapping-an-Array-to-Elements-with-v-for) directive to loop through all the FAQs and produce similar looking HTML code for all of them.

Then add a `showAnswer` property to all your FAQ objects in the array with the initial value `false`. The answer to a FAQ should only be shown if it's `showAnswer` property has the value `true`. The user should be able to show/hide the answer to each FAQ by clicking on the FQA's question shown on the screen. So in the HTML code you need to listen for click on the question, and then invert that FAQ object's `showAnswer` value.

Somewhere on the page you should also display how many FAQs there are in total.

### Calculator (model binding + computed property)
Add a new page with a form in which the user can enter two numbers and select one of the operations `+`, `-`, `*` and `/`. As the user changes any of these fields, the result of the computation should be shown on the screen, but no result should be shown on the screen until the user has changed all the three fields.

To implement this, use the `v-model` directive for two `<input>` (for the two numbers) and one `<select>` (for the operation). and then use a [computed property](https://vuejs.org/v2/guide/computed.html#Computed-Properties) to automatically compute the result of the operation as soon as the user changes any of the three fields.

### Time (life cycles)
Some times you want to create a Vue component that needs to be updated regularly. An example of that is a `Time` component that displays the current time of day in the format HH:mm:ss and updates that each second.

To figure out what the current time is, JavaScript gives us the `Date` constructor that we can use like this:

```js
const now = new Date()

const hours = now.getHours() // E.g. 14
const minutes = now.getMinutes() // E.g. 4
const seconds = now.getSeconds() // E.g. 45
```

To regularly execute som code, web browsers gives us the function `setInterval()`. However, if one page calls `setInterval()` to regularly update itself, then when the user leaves that page we need to tell the web browser to forget about that call we made to `setInterval()` before, because there's no need to continue to regularly update a page the user can't see. So when the user leaves the page that called `setInterval()`, we also need to call `clearInterval()`. To handle this, Vue components have two special methods called `created()` and `destroyed()` we can use. Call `setInterval()` in the `created()` and call `clearInterval()` in `destroyed()`.

Use `setTimeout()` and `Date` to implement a `Time` component that displays the current time in the format HH:mm:ss.

### XXX (props)
...

### Oral presentation
Present your work orally to a teacher at one of the lab sessions. Be prepared to:

* Show that your application is working as it should.
* Explain how the code you've written works.
* Answer any question the teacher might have about the code.


## Part 2 - Using a REST API in Vue
The goal with this part of the project is to teach you how to use a backend in your Single-Page Application to fetch and store some data.

In this lab you will implement a Single-Page Application as the frontend application for a platform called _Activity Finder_. On this platform users can create new accounts and then register activities they are going to do that others may join them in. Example of activities could be:

* Play football
* Learn how to play guitar
* Watch the Lord of the Rings

The backend for the platform has already been implemented. The backend exposes a REST API one can use to communicate with it. A client side SDK for the REST API is also available, making it very easy to communicate with the backend. Your task is simply to implement the frontend as a Single-Page Application using Vue and the SDK.

### Starting the backend
The backend is implemented in Node.js, and its source code is available at XXX. When you develop/test your frontend application, you need to have the backend application up and running on the same computer as your frontend application. To get the backend application up and running you need to:

1. Download and unzip the source code for the backend application.
2. Open the root folder for the backend application in a shell.
3. Run the command `npm run start`.

When you have started the backend application its REST API will listen for incoming HTTP request on port 8000 (if you want to change port number, just change that in the source code). To test if the backend application is properly running, open [localhost:8000/accounts](http://localhost:8000/accounts) in a web browser. If it's up and running you should see an empty JSON array (`[]`) on the screen. You can also try to use Postman to send your own HTTP requests to it.

### Getting started with the frontend
Create a new Vue application the same way you did in Part 1. Add the file `activity-finder-clients.js` TODO CREATE IT to the `/src` folder. This file is the SDK you can use to communicate with the backend application through its REST API. For example, this file exports a function called `getAllAccounts()`, and when you call that function the SDK will in turn send an HTTP GET request for `/accounts` to the backend application, which in turn sends back all accounts to the SDK, which then delivers all these accounts to you as an JS array containing objects, where each object contains information about an account. But more on this later.

### Implementing the layout
Just as in Part 1, change the code in `/src/Application.vue` to contain a layout of your choice. Feel free to use any CSS framework you want. Look through the rest of the sub-chapters to Part 2 to understand what functionali...

In your application you need to keep track of wether the user is signed in or not, and most likely you want this to be reactive, so the GUI updates on its own as soon as the user signs in/out. An easy way to implement that is by having a `data` function in `Application.vue` looking like this:

```js
module.exports = {
  // ...
  data(){
    return {
      // ...
      user: {
        isSignedIn: false
      }
    }
  }
  // ...
}
```

As soon as the user logs in, you simply change `this.user.isSignedIn` to `true`, and then you change it to `false` when the user signs out. This way, you can in the HTML code in `Application.vue` show different things depending on if the user is signed in or not, e.g.:

```html
<div>
  <div v-if="user.isSignedIn">
    You are signed in :)
  </div>
  <div v-else>
    You are not signed in :(
  </div>
</div>
```

If you want you can also add more properties to `user`, such as `user.username` if you want to be able to display the signed in user's username.

But what if you want to be able to figure out if the user is signed in or out in a view? Simple, pass `user` as a props to all the views: in `Application.vue`, use `<router-view :user="user"/>` instead of only `<router-view/>`.

::: warning Note
You might wonder why `Application.vue` uses:

```js
  data(){
    return {
      // ...
      user: {
        isSignedIn: false
      }
    }
  }
```

Instead of simply:

```js
  data(){
    return {
      // ...
      isSignedIn: false
    }
  }
```

The reason is because we want the views to be able to change `user.isSignedIn`. Since the views now receive the entire `user` object as a props, it will be reactive in the views since **objects are passed by reference**. If we would only pass `isSignedIn`, which is a primitive value (a boolean), the views would receive a copy of the value, and the reactivity would not exist.

(it's OK if you don't understand this, but the key thing to remember is that if a Vue component wants to change a value it received as a props and that change should be reactive, that props needs to be an object)
:::

### View all accounts
Add a view all account component.

Manually insert some records.

Call the SDK function `getAllAccounts()`

### View one account
Add a view account component.

EXPLAIN RouTING PARAMETERS

Call the SDK function `getAccountById(theId)`

### Sign up
Add a sign up component.

Use validation.

Call the SDK function `createAccount({username: "...", password: "..."})`.

### Sign in
Add a sign in component.

Call the SDK function `signIn()`.

Change `user.isSignedIn` to `true`

### Sign out
Add sign out component.

Call the SDK function `signOut()`

Change `user.isSignedOut` to `false`

### Create activity
Add a view all activities view.

Call the SDK function `create({accountId: 123, title: "...", description: "...", ...})`.

### View all activities
Add a view all activities view.

Call the SDK function `getAllActivities()`

### View one activity
Add a view specific activity view.

Call the SDK function `getActivityById(theId)`

### View own activities
Add a view showing only the signed in user's activities.

Call the SDK function `(getActivitiesByAccountId(accountId))`

### Delete activity
Somehow signed in users should be able to delete activities they have created. Implement this however you want.

Call the SDK function `deleteActivityById(theId)`

### Update activity
Somehow signed in users should be able to update activities they have created. Implement this however you want.

Validate

Call the SDK function `updateActivityById(theId, theActivity)`

### Extra tasks
These extra tasks do not need to completed, but if you have time for it, give them a try. They are fun, we promise! ;)

#### Auto login
When the user signs up, also automatically sign in the user.

#### Loading indicators
It can take some time for the frontend before it receives the response from the backend when it has sent an HTTP request to it. This is usually not noticeable for developers who run the frontend and backend on the same computer (the communication delay is so small), but can become apparent when you deploy them on the Internet. When there is a loading time like this (~each time you use the SDK), display a loading indicator of some kind. In the simplest case, this can just be the boring text "Loading", but most CSS frameworks have some nicely designed components for this.

#### Empty states
When listening all accounts or all activities and there are non, don't simply display an empty page. Instead, display the text "None have been created yet", or do something even better. For the curious one, [search for "empty state ux"](https://duckduckgo.com/?q=empty+state+ux).

#### Pagination
Although the REST API/the SDK does not provide pagination functionality, nothing prevents you from implementing one in the frontend application.

#### Filtering
Instead of showing a list of all activities, also have a form users can use to filter which activities to show. You decide what filtering should be available, but maybe search for title, or select a date range or to show all activities close to a specific place? Although the REST API/the SDK does not provide filtering functionality, nothing prevents you from implementing one in the frontend application.

#### Maps
Each activity has a longitude and a latitude. Requiring user to manually enter these won't be a good experience for them. Instead, it would be easier for them to pick their location on a map. Let them do that! And instead of showing a list of all activities, show a map marking where each activity takes place.

#### Remember activities
Let users remember activities they like locally (e.g. store the information in local storage). Have a special page they can use to list all the activities they've choose to remember.

### Oral presentation
Present it to a teacher at a lab session.