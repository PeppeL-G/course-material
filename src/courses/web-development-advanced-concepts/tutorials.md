# Tutorials
Here you will find material from the different tutorials.

## Tutorial 1: Client-side JS
* <a :href="$withBase('courses/web-development-advanced-concepts/files/tutorial-01/01-button-counter.html')" target="_blank">1. Counter Buttons</a>
* <a :href="$withBase('courses/web-development-advanced-concepts/files/tutorial-01/02-power-of-three.html')" target="_blank">2. Power of Three</a>
* <a :href="$withBase('courses/web-development-advanced-concepts/files/tutorial-01/03-clock.html')" target="_blank">3. Clock</a>
* <a :href="$withBase('courses/web-development-advanced-concepts/files/tutorial-01/04-friends-list.html')" target="_blank">4. Friends List</a>
* <a :href="$withBase('courses/web-development-advanced-concepts/files/tutorial-01/05-faq.html')" target="_blank">5. Faqs</a>




## Tutorial 2: Svelte
Covered the basics in Svelte.

### Example of using components
```html
<!-- lib/Counter.svelte -->
<script>
	
	export let startValue = 0
	export let incStep = 1
	
	let counter = startValue
	
	function handleClick(){
		counter += incStep
	}
	
</script>

<button on:click={handleClick}>
	{counter}
</button>

<style>
	button{
		color: blue;
	}
</style>
```

```html
<!-- App.svelte -->
<script>
	
	import Counter from './lib/Counter.svelte'
	
</script>

<p>Click the buttons!</p>
<div>
	<Counter />
	<Counter startValue={5} incStep={2} />
	<Counter startValue={10} incStep={5} />
</div>
```

### Example of using routing
First you need to install the npm package [svelte-routing](https://github.com/EmilTholin/svelte-routing) (or use SvelteKit, if you prefer).

```html
<!-- App.svelte -->
<script>
	
	import { Router, Link, Route } from 'svelte-routing'
	import Start from './lib/Start.svelte'
	import About from './lib/About.svelte'
	import Posts from './lib/Posts.svelte'
	
</script>

<Router>
	
	<header>
		Blogworld
	</header>
	
	<nav>
		<Link to="/">Start</Link>
		<Link to="/about">About</Link>
		<Link to="/posts">Posts</Link>
	</nav>
	
	<main>
		
		<Route path="/about" component={About}></Route>
		<Route path="/posts" component={Posts}></Route>
		<Route path="/" component={Start}></Route>
		
	</main>
	
	<footer>
		Copyright Peter L-G
	</footer>
	
</Router>
```

```html
<!-- lib/Start.svelte -->
<h1>Welcome!</h1>
<p>Welcome to Blogworld! ...</p>
```

```html
<!-- lib/About.svelte -->
<h1>About</h1>
<p>Blogworld is a website where...</p>
```

```html
<!-- lib/Posts.svelte -->
<script>
	
	import { blogposts } from '../data.js'
	
</script>

<h1>Posts</h1>

{#if blogposts.length == 0}
	<p>There are no blogposts.</p>
{:else}
	<p>Here are the blogposts:</p>
	<ul>
		{#each blogposts as blogpost (blogpost.id)}
			<li>{blogpost.title}</li>
		{/each}
	</ul>
{/if}
```

```js
/* data.js */
export const blogposts = [
	{id: 1, title: "A new journey", content: "Some content..."},
	{id: 2, title: "Yes!", content: "Great news! ..."},
	// ...
]
```




## Tutorial 3: REST API & Docker (DB)
```sql
/* project/database/init.sql */
CREATE TABLE humans (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50)
);

INSERT INTO humans (name) VALUES ('Alice');
```

```Dockerfile
# project/database/Dockerfile
FROM mariadb:10.9.4

COPY ./init.sql /docker-entrypoint-initdb.d/
```

```yaml
# project/compose.yaml
services:
  db:
    build: ./database/
    ports:
      - "5555:3306"
    environment:
      MARIADB_ROOT_PASSWORD: abc123
      MARIADB_DATABASE: abc
```

## Tutorial 4: REST API & Docker (Backend)
Use the same database files as in Tutorial 3.

project/backend/package.json
```json
{
  "name": "backend",
  "version": "1.0.0",
  "type": "module",
  "dependencies": {
    "express": "^4.18.2",
    "mariadb": "^3.1.0"
  }
}
```

```js
// project/backend/src/app.js
import express from 'express'
import { createPool } from 'mariadb'

const pool = createPool({
	host: "db",
	port: 3306,
	user: "root",
	password: "abc123",
	database: "abc",
})

pool.on('error', function(error){
	console.log("Error from pool", error)
})

const app = express()

app.get("/humans", async function(request, response){
	
	console.log("Hello there hi")
	
	try{
		
		const connection = await pool.getConnection()
		
		const query = "SELECT * FROM humans ORDER BY name"
		
		const humans = await connection.query(query)
		
		response.status(200).json(humans)
		
	}catch(error){
		console.log(error)
		response.status(500).end()
	}
	
})

app.get("/", function(request, response){
	response.send("It works")
})

app.listen(8080)
```

```Dockerfile
# project/backend/Dockerfile
FROM node:18.14.1

WORKDIR /backend

COPY ./package*.json ./

RUN npm install

COPY ./src/ ./

CMD node --watch ./src/app.js
```

```yaml
# project/compose.yaml
services:
  db:
    build: ./database/
    ports:
      - "5555:3306"
    environment:
      MARIADB_ROOT_PASSWORD: abc123
      MARIADB_DATABASE: abc
  backend:
    build: ./backend/
    ports:
      - "8080:8080"
    volumes:
      - ./backend/src/:/backend/src/
```





## Tutorial 5: AJAX & OAuth 2.0
Shows how to use the backend from the frontend using the REST API, and how to add authorization to the REST API using access tokens.

* [Recording](https://www.youtube.com/watch?v=Rr5kQZvNOn4)

### Backend
app.js
```js
const express = require('express')
const jwt = require('jsonwebtoken')

const MIN_NAME_LENGTH = 3
const MAX_NAME_LENGTH = 10
const MAX_AGE = 150

const ACCESS_TOKEN_SECRET = "ablkdjflksjdflsdjf"

const humans = [{
	id: 1,
	name: "Alice",
	age: 15,
}, {
	id: 2,
	name: "Bob",
	age: 20,
}]

const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.use(function(request, response, next){
	
	response.set("Access-Control-Allow-Origin", "*")
	response.set("Access-Control-Allow-Methods", "*")
	response.set("Access-Control-Allow-Headers", "*")
	response.set("Access-Control-Expose-Headers", "*")
	
	next()
	
})

app.get('/humans', function(request, response){
	setTimeout(function(){
		response.status(200).json(humans)
	}, 1000)
})

app.get('/humans/:id', function(request, response){
	
	const id = request.params.id
	
	const human = humans.find(h => h.id == id)
	
	if(human){
		response.status(200).json(human)
	}else{
		response.status(404).end()
	}
	
})

app.post('/humans', function(request, response){
	
	// TODO: This code will crash if no Authorization header value is provided.
	const authorizationHeaderValue = request.get("Authorization")
	const accessToken = authorizationHeaderValue.substring(7)
	
	jwt.verify(accessToken, ACCESS_TOKEN_SECRET, function(error, payload){
		if(error){
			response.status(401).end()
		}else{
			
			const human = request.body
			
			const errorCodes = []
			
			if(typeof human?.name != "string"){
				errorCodes.push("nameIsMissing")
			}else if(human.name.length < MIN_NAME_LENGTH){
				errorCodes.push("nameIsTooShort")
			}else if(MAX_NAME_LENGTH < human.name.length){
				errorCodes.push("nameIsTooLong")
			}
			
			if(typeof human?.age != "number"){
				errorCodes.push("ageIsMissing")
			}else if(human.age < 0){
				errorCodes.push("ageIsNegative")
			}else if(MAX_AGE < human.age){
				errorCodes.push("ageIsTooHigh")
			}
			
			if(0 < errorCodes.length){
				response.status(400).json(errorCodes)
				return
			}
			
			human.id = humans.at(-1).id + 1
			
			humans.push(human)
			
			response.set('Location', `/humans/${human.id}`)
			response.status(201).end()
			
		}
		
	})
	
})

app.post('/tokens', function(request, response){
	
	const grantType = request.body.grant_type
	const username = request.body.username
	const password = request.body.password
	
	if(grantType != "password"){
		response.status(400).json({error: "unsupported_grant_type"})
		return
	}
	
	if(username == "abc" && password == "abc123"){
		
		const payload = {
			isLoggedIn: true,
		}
		
		jwt.sign(payload, ACCESS_TOKEN_SECRET, function(error, accessToken){
			
			if(error){
				response.status(500).end()
			}else{
				response.status(200).json({
					access_token: accessToken,
					type: "bearer",
				})
			}
			
		})
		
	}else{
		
		response.status(400).json({error: "invalid_grant"})
		
	}
	
})

app.listen(8080)
```

### Frontend
user-store.js
```js
import { writable } from "svelte/store"

export const user = writable({
	isLoggedIn: false,
	accessToken: "",
})
```

App.svelte
```html
<script>
	
	import { Router, Link, Route } from "svelte-routing"
	
	import Home from './lib/Home.svelte'
	import Humans from "./lib/Humans.svelte"
	import Human from "./lib/Human.svelte"
	import CreateHuman from "./lib/CreateHuman.svelte"
	import Login from "./lib/Login.svelte"
	
	import { user } from "./user-store.js"
	
</script>

<div id="layout">
	
	<Router>
		
		<header>
			Human Site
		</header>
		
		<nav>
			<Link to="/">Home</Link>
			<Link to="/humans">Humans</Link>
			{#if $user.isLoggedIn}
				<Link to="/humans/create">Create Human</Link>
			{:else}
				<Link to="/login">Login</Link>
			{/if}
		</nav>
		
		<main>
			<Route path="/humans" component={Humans} />
			<Route path="/humans/create" component={CreateHuman} />
			<Route path="/humans/:id" component={Human} />
			<Route path="/login" component={Login} />
			<Route path="/" component={Home} />
		</main>
		
		<footer>
			Copyright Peter L-G 2023
		</footer>
		
	</Router>
	
</div>

<style>
	
	#layout{
		max-width: 600px;
		margin: 0 auto;
	}
	
	header{
		font-size: 2em;
		text-align: center;
	}
	
	nav{
		text-align: center;
	}
	
	footer{
		margin-top: 1em;
		text-align: center;
	}
	
</style>
```

Login.svelte
```html
<script>
	
	import { user } from "../user-store.js"
	
	// TODO: Add loading indicator.
	let username = ""
	let password = ""
	
	async function login(){
		
		const response = await fetch("http://localhost:8080/tokens", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: `grant_type=password&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
		})
		
		// TODO: Need to check status code, etc.
		const body = await response.json()
		
		const accessToken = body.access_token
		
		$user = {
			isLoggedIn: true,
			accessToken,
		}
		
	}
	
</script>

<h1>Login</h1>
<form on:submit|preventDefault={login}>
	
	<div>
		Username:
		<input type="text" bind:value={username}>
	</div>
	
	<div>
		Password:
		<input type="password" bind:value={password}>
	</div>
	
	<input type="submit" value="Login">
	
</form>
```

Humans.svelte
```html
<script>
	
	import { Link } from 'svelte-routing'
	
	const fetchHumansPromise = fetch("http://localhost:8080/humans")
	
</script>

<h1>Humans</h1>

{#await fetchHumansPromise}
	
	<p>Wait, I'm loading...</p>
	
{:then response}
	
	{#await response.json() then humans}
		
		<ul>
			{#each humans as human (human.id)}
				<li>
					<Link to="/humans/{human.id}">{human.name}</Link>
				</li>
			{/each}
		</ul>
		
	{/await}
	
{:catch error}
	
	<p>Something went wrong, try again later.</p>
	
{/await}
```

Human.svelte
```html
<script>
	
	export let id
	
	let isFetchingHuman = true
	let failedToFetchHuman = false
	let human = null
	
	async function loadHuman(){
		
		try{
			
			const response = await fetch("http://localhost:8080/humans/"+id)
			
			switch(response.status){
				
				case 200:
					human = await response.json()
					isFetchingHuman = false
					break
				
			}
			
		}catch(error){
			
			isFetchingHuman = false
			failedToFetchHuman = true
			
		}
		
	}
	
	loadHuman()
	
</script>

<h1>Human</h1>
{#if isFetchingHuman}
	<p>Wait, I'm fetching data...</p>
{:else if failedToFetchHuman}
	<p>Couldn't fetch the human. Check your Internet connection.</p>
{:else if human}
	<div>Id: {human.id}</div>
	<div>Name: {human.name}</div>
	<div>Age: {human.age}</div>
{:else}
	<p>No human with the given id {id}.</p>
{/if}
```

CreateHuman.svelte
```html
<script>
	
	import { user } from "../user-store.js"
	
	// TODO: Add loading indicator.
	let name = ""
	let age = 0
	let errorCodes = []
	let humanWasCreated = false
	
	async function createAccount(){
		
		const human = {
			name,
			age,
		}
		
		try{
			
			const response = await fetch("http://localhost:8080/humans", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Authorization": "Bearer "+$user.accessToken,
				},
				body: JSON.stringify(human),
			})
			
			switch(response.status){
				
				case 201:
					humanWasCreated = true
				break
				
				case 400:
					errorCodes = await response.json()
				break;
				
				// TODO: Handle 401.
				
			}
			
		}catch(error){
			errorCodes.push("COMMUNICATION_ERROR")
			errorCodes = errorCodes
		}
		
	}
	
</script>

<h1>Create Human</h1>

{#if humanWasCreated}
	<p>Human created!</p>
{:else}
	
	<form on:submit|preventDefault={createAccount}>
		
		<div>
			Name:
			<input type="text" bind:value={name}>
		</div>
		
		<div>
			Age:
			<input type="number" bind:value={age}>
		</div>
		
		<input type="submit" value="Create Human">
		
	</form>
	
	<!-- TODO: Show error messages instead of error codes. -->
	{#if 0 < errorCodes.length}
		<p>We have errors!</p>
		<ul>
			{#each errorCodes as errorCode}
				<li>{errorCode}</li>
			{/each}
		</ul>
	{/if}
	
{/if}
```