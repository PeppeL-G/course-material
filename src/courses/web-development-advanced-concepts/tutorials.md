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




## Tutorial 3: REST API & Docker
```sql
/* projects/database/init.sql */
CREATE TABLE humans (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50)
);

INSERT INTO humans (name) VALUES ('Alice');
```

```Dockerfile
# projects/database/Dockerfile
FROM mariadb:10.9.4

COPY ./init.sql /docker-entrypoint-initdb.d/
```

```yaml
# projects/compose.yaml
services:
  db:
    build: ./database/
    ports:
      - "5555:3306"
    environment:
      MARIADB_ROOT_PASSWORD: abc123
      MARIADB_DATABASE: abc
```