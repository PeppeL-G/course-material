---
sidebar: auto
navbarTitle: Asynchronous Programming in JavaScript
---

# Asynchronous Programming in JavaScript
In this lecture we'll take a look at how synchronous programming differs from asynchronous programming, when you should use which one, and how we can use asynchronous programming in JavaScript through *callback functions*, *promises* and *promises with `async` and `wait`*.


## What is Synchronous Programming?
When you first learned programming, *synchronous programming* is most likely what you learned. In synchronous programming, one thing is carried out at a time, and you don't start doing the next thing until the first thing is done. In JavaScript, that *thing* is a function, as shown in <FigureNumber /> below.

<Figure caption="Example of synchronous programming in JavaScript.">

```js
// Example of a synchronous function.
function getSum(x, y){
	const sum = x + y
	return sum
}

// Example of calls to a synchronous function.
const sum1 = getSum(1, 2)
const sum2 = getSum(3, 4)

console.log(sum1 + sum2)
```

</Figure>

In <FigureNumber previous /> above, `getSum()` is a synchronous function. What that means is that when `getSum(1, 2)` is called on line 8, `getSum()` will do all it's work, and then return back the result and store it in `sum1`. Then we continue with the call `getSum(3, 4)` on line 9, and `getSum()` will again do it's entire work, and then return back the result, which we then store in `sum2`.

This sounds obvious, right? Well, that's because it works the way you're used to.

## What's the Problem with Synchronous Programming?
The problem with synchronous programming occurs when we have *long running operations*. What counts as a long running operation depends on what type of application you create, but operations that takes more than a few milliseconds to complete usually count as long running. The problem with synchronous programming is that we can only run one long running operation at a time, and that can be problematic for our application. A few examples of this is given next.

### Problem Example 1: Graphical User Interfaces
<ClientOnly>

<script>

</script>

</ClientOnly>

One problem with synchronous programming occurs when we implement graphical user interfaces (GUI). Imagine the user clicks on a button, and we start to compute something that takes 3 seconds to compute. If we use synchronous programming, nothing else in our code during those 3 seconds would run, so the graphical user interface would freeze, so the user can't click on an abort button, nor do anything else. Want an example of this? Just click <SleepButton :sleepMs="3000">this button</SleepButton> and then try to select text on this page, click on a link, or something, within 3 seconds (requires JavaScript to be enabled in your web browser).

The code in <FigureNumber /> below explains the problem in detail.

<Figure caption="Example of problem with synchronous programming.">

```js
// This is the function that is called when the button is clicked.
function handleClickOnButton(){
	// Imagine the sleep() function would exist, and calling it with
	// 3000 would make the function wait 3000ms before it returned.
	sleep(3000)
	// Then non of our code would execute during those 3000ms,
	// and the GUI would freeze.
	// (JS doesn't have a such stupid function, so it doesn't exist). 
}

// The sleep function in this example is implemented like this
// (we use a loop with very many iterations to simulate a long running operation):
function sleep(sleepMs){
	const timeToWakeUp = Date.now() + sleepMs
	while(Date.now() < timeToWakeUp){
		// Do nothing
	}
}
```

</Figure>

In this example, the long running operation was just a loop doing nothing for many iterations, but you can substitute it with any operation that takes long time to complete, for example to check if there's a human in the world named `Chipsope` (would in worst case require you to compare `Chipsope` with ~7 billion names, which would take a while).

### Problem Example 2: Data Loading
One problem with synchronous programming occurs when we want to carry out multiple tasks in parallel, and each task involves a lot of waiting, such as:

* Waiting for the result of a query sent to the database
* Waiting for the response for an HTTP request we have sent
* Waiting for GPS coordinates from a GPS receiver
* Waiting for the computer to load the content of a file on the file system
* Etc.

If we use synchronous programming, then we start carrying out the first task, which involves some waiting for the result (for example from the database). When we get back the result, we finish carrying out the first task, and then we start carrying out the second task, which shortly makes us wait again for another result (perhaps loading the content from a file), and then when we finally get back the result for that, we finish the second task, and so on.

The problem here is that we spend most of our time on waiting, instead of doing useful work. While we wait for the database result from task 1, we want to start carrying out task 2, and wait for the result for task 2 at the same time as we wait for the result from task 1, but we can't do that with synchronous programming, since we can only do one thing at a time in synchronous programming.

An example of this is shown in <FigureNumber /> below.

<Figure caption="Another example of problem with synchronous programming. ">

```js
function getAllHumans(){
	// Imagine db.getAllRows() would be a synchronous function, and it would
	// take 1 second before it has received the humans from the database.
	const allHumans = db.getAllRows("humans")
	return allHumans
}

function getAllPets(){
	// Imagine fileSystem.loadFile() would be a synchronous function, and
	// it would take 1 second before it has loaded the pets from the file.
	const allPets = fileSystem.loadFile("pets.json")
	return allPets
}

const humans = getAllHumans() // This line would take 1.001 seconds to complete (1 second spent on waiting).
const pets = getAllPets() // This line would take 1.001 seconds to complete (1 second spent on waiting).
```

</Figure>

In <FigureNumber previous /> above it takes ~2 seconds to load all data, but if humans and pets could be loaded at the same time, it would only take ~1 second. You don't like applications that takes a long time to load all the data at startup, right? So you probably don't want to use synchronous programming to do load data at startup.

## What is Asynchronous Programming?
So, asynchronous programming is when we start a long running operation, and it will run *in the background*. The rest of our code will run as usual while the long running operation runs in the background, until it completes. Then sometime in the future the long running operation will complete, and then the long running operation notifies our ordinary code what the result of the long running operation was, and our ordinary code can handle the result.

::: tip Long running operations that aren't waiting
Here we say that long running operations usually involve a lot of waiting. Long running operations can instead/also do useful work, e.g. compute something really complex that takes a very long time to compute. These operations can still run in the background at the same time as our ordinary synchronous code thanks to threads and multiple cores (or in worst case time slicing of the CPU). But these are details we don't worry about in this lecture. 
:::

The question is how the long running operation can tell our ordinary code when it's done doing it's work. That can be done in different ways, such as by using callback functions or promises.

## Asynchronous Programming with Callback Functions
One way in asynchronous programming to indicate what should happen after the long running operation has completed is to pass a `callback` function to the asynchronous function, and when the asynchronous function has completed its long running operation, it will call the `callback` function, and pass the result of the long running operation as an argument to the `callback` function. In the `callback` function we write the code that should run when the long running operation has completed.

For example, if we have synchronous function in <FigureNumber /> below.

<Figure caption="Example of a synchronous function.">

```js
// Synchronous function that returns back the result.
function getSum(x, y){
	const theSum = x + y
	return theSum
}

const sum = getSum(1, 2)
console.log(sum)
```

</Figure>

And would like to use this in an asynchronous way with a `callback` function, it would look as shown in <FigureNumber /> below.

<Figure caption="Example of an asynchronous function that will run synchronously.">

```js
// Asynchronous function that calls the callback function with the result.
function getSum(x, y, callback){

	// This is the "work" the "long running operation" should do.
	const theSum = x + y

	// When the result of the work has been computed, pass it to the callback function.
	callback(theSum)

}

// Call the asynchronous function, and pass along our callback function.
getSum(1, 2, function(sum){

	// When this function is called, the long running operation has completed.
	console.log(sum)

})
```

</Figure>

Even though `getSum()` above has a `callback` function as a parameter, everything will run synchronously, as you're used to. That's because we don't do any work that runs *in the background*. To make `getSum()` asynchronous, we need to tell it to do it's work in the background. You do that by calling an asynchronous built-in function, like:

* [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) (to send an HTTP request)
* [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) (to schedule a function to be called later)
* [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) (to schedule a function to be called repeatedly with a given interval)
* Etc.

To really make `getSum()` asynchronous, we can call `setTimeout()` in it, as shown in <FigureNumber /> below.

<Figure caption="Example of an asynchronous function that will run asynchronously.">

```js
// Asynchronous function that calls the callback function with the result.
function getSum(x, y, callback){

	// Here we call an asynchronous function, making our own function asynchronous.
	// In this case we schedule the function below to be called 1 second later.
	setTimeout(function(){
		
		const theSum = x + y
		callback(theSum)

	}, 1000)

	// Then we return back immediately, before we have computed the sum.

}

// This will call our own asynchronous function,
// which will call setTimeout(), and then return here immediately.
getSum(1, 2, function(sum){
	console.log(sum)
})

// This will call our own asynchronous function,
// which will call setTimeout(), and then return here immediately.
getSum(3, 4, function(sum){
	console.log(sum)
})

// This is the first value that will be logged.
console.log("Hello!")

// 1 second later, the two callback functions we have passed to setTimeout()
// will be called (one at a time), which in turn will compute their sums
// and call the callback functions we passed to getSum(), in which we log
// the computed sums (3 and 7).
```

</Figure>

So, to summarize:

1. To change a synchronous function so we can use it asynchronously, we need to add a `callback` parameter to it, and instead of returning back the computed value, we call the `callback` function and pass the `callback` function the computed value.
2. To make a function with a `callback` function really run asynchronously, it needs to call another asynchronous function. 

### Error Handling
In synchronous programming, when you discover something is wrong, you usually throw an exception, which you later can catch, which you can see in <FigureNumber /> below.

<Figure caption="Example of error handling in synchronous programming using exceptions.">

```js
// The synchronous function that might throw an exception.
function getQuotient(dividend, divisor){
	if(divisor == 0){
		throw "Can't divide by 0."
	}else{
		return dividend / divisor
	}
}

// The main code that contains the error handling.
try{
	const quotient = getQuotient(4, 0)
	console.log("The quotient is "+quotient+".")
}catch(error){
	console.log(error)
}
```

</Figure>

If you try to do something similar in asynchronous programming with callback functions, it could look like as shown in <FigureNumber /> below.

<Figure caption="Trying to catch exceptions when calling an asynchronous function.">

```js
// The asynchronous function that might throw an exception.
function getQuotient(dividend, divisor, callback){
	setTimeout(function(){
		if(divisor == 0){
			throw "Can't divide by 0."
		}else{
			callback(dividend / divisor)
		}
	}, 1000)
}

// The main code that needs to handle errors.
try{
	getQuotient(4, 0, function(quotient){
		console.log("The quotient is "+quotient+".")
	})
}catch(error){
	console.log(error)
}
```

</Figure>

This does unfortunately not work. The reason is simple: when you call `getQuotient()`, you are inside the try block, but `getQuotient()` returns back almost immediately, and you will leave the try/catch block. Then 1 second later, the `callback` you passed to `setTimeout()` will be called, and if you now throw the exception from inside that callback, you will throw it to the one who called the `callback` function, which will be the JavaScript runtime environment, so that's where the exception will be thrown to, and there of course no one is listening for your specific exceptions.

The workaround to this problem is usually to pass two values to the `callback` function. The first value is the exception (aka "the error"). If everything go well and you don't get an error, you simply use `null` as the error. The second value is the result of the long running operation. In your `callback` function you simply check if the first argument is `null` or not with an if statement to figure out if you got an error, as shown in <FigureNumber /> below.

<Figure caption="Example of error handling in asynchronous programming with callback functions.">

```js
function getQuotient(dividend, divisor, callback){
	setTimeout(function(){
		if(divisor == 0){
			callback("Can't divide by 0")
		}else{
			callback(null, dividend / divisor)
		}
	}, 1000)
}

getQuotient(4, 0, function(error, quotient){
	if(error){
		console.log(error)
	}else{
		console.log("The quotient is "+quotient+".")
	}
})
```

</Figure>

## The Drawback with Asynchronous Programming with Callback Functions
The drawback with asynchronous programming with `callback` functions is that it makes the code harder to read compared to synchronous programming, especially when you have many asynchronous functions you need to call in order, as shown in <FigureNumber /> below.

<Figure caption="Example of sequential calls to asynchronous functions with callbacks.">

```js
// Imagine getUserById(), getPetsByOwnerName() and
// storeInJsonFile() are all asynchronous functions.
function loadUserWithPetsAndStoreInFile(userId, filename, callback){
	getUserById(userId, function(userError, user){
		if(userError){
			callback(userError)
		}else{
			getPetsByOwnerName(user.name, function(petsError, pets){
				if(petsError){
					callback(petsError)
				}else{
					const data = {
						pets
					}
					storeInJsonFile(data, filename, function(storeError, fileSize){
						if(storeError){
							callback(storeError)
						}else{
							callback(null, fileSize)
						}
					})
				}
			})
		}
	})
}
```

</Figure>

This is just a simple example, but you can already now see that the code has become quite hard to read due to all the indentation of the code, especially at the end of the code, with all closing brackets. Imagine we would need to call more asynchronous functions, or use more loops or conditional statements, etc. This messy type of code is known as [Callback Hell](http://callbackhell.com/).

If we compare the code above with synchronous code with the same functionality, it would look as shown in <FigureNumber /> below.

<Figure caption="Example of sequential calls to synchronous functions.">

```js
function loadUserWithPetsAndStoreInFile(userId, filename){
	try{
		const user = getUserById(userId)
		const pets = getPetsByOwnerName(user.name)
		const data = {
			pets
		}
		const fileSize = fileSystem.storeInJsonFile(data, filename)
		return fileSize
	}catch(error){
		throw error // Could even skip try and catch since we throw the error again, but whatever.
	}
}
```

</Figure>

Clearly, the synchronous code is much easier to read. So this is the trade off: synchronous code is easier to read, but asynchronous code can run more efficient, since we don't waste time on waiting. Wouldn't it be great if there was a way to get the best of both worlds?

## What are Promises?
*Promises* is an attempt to make asynchronous code more readable and to avoid callback hell (making the code look more like synchronous code), but that still runs asynchronously. Instead of passing a `callback` to an asynchronous function, the asynchronous function returns back a promise. The promise is an object that represent a long running operation that will be completed some time in the future.

Initially, the promise will be in the `Pending` state, meaning that the long running operation is still running. When the long running operation complete (when the promise has been *resolved*), the promise will be in the `Fulfilled` state, and we can get the value the long running operations resulted in through the promise object. If something instead goes wrong with the long running operation (when the promise has been *rejected*), the promise will go into the `Rejected` state, and we can get the error through the promise object.

When you have called an asynchronous function and received back a promise from it, you usually want to listen to when the promise goes from the `Pending` state to the `Fulfilled` state, or from the `Pending` state to the `Rejected` state. You do that by calling `.then()` on the promise and `.catch()` on the promise respectively.

For example, if `getQuotient()` would be an asynchronous function with a `callback` function, you would use it as shown in <FigureNumber /> below.

<Figure caption="Sample usage of an asynchronous function with a callback.">

```js
getQuotient(4, 0, function(error, quotient){
	if(error){
		console.log(error)
	}else{
		console.log("The quotient is "+quotient+".")
	}
})
```

</Figure>

If `getQuotient()` instead of having a `callback` function would return back a promise, you would use it as shown in <FigureNumber /> below.

<Figure caption="Sample usage of an asynchronous function returning a promise.">

```js
const promise = getQuotient(4, 0)
// When the line above has been executed, the promise will be in the Pending state.

promise.then(function(quotient){
	// When the promise has been resolved (enters the Fulfilled state),
	// this function will be called.
	console.log("The quotient is "+quotient+".")
})

promise.catch(function(error){
	// When the promise has been rejected (enters the Rejected state),
	// this function will be called.
	console.log(error)
})
```

</Figure>

Since we still provide callback functions to `.then()` and `.catch()`, you might think this code will result in callback hell as well when we start calling multiple asynchronous functions returning back promises, but that is not the case, because promises are chainable. This is the hard part to understand with promises, so let's go through how it works in detail.

The callback function you pass to `.then()` can:

1. Return back a new promise.
2. Return back another value that automatically will be wrapped in a promise that will be immediately resolved.
3. Not return back any value at all (i.e. `undefined`), in which case we can **see it as** the promise you called `.then()` on will be returned back.

Note that you can **see it as** that the callback function you pass to `.then()` will always return back a promise. Promises are also implemented in a very clever way, so you can **see it as** the promise you return back from the callback function passed to `.then()` will also be returned from the call to `.then()`. All this and list item 3 above means that we can simplify the code we had earlier to the one shown in <FigureNumber /> below.

<Figure caption="Sample usage of an asynchronous function returning a promise.">

```js
const promise = getQuotient(4, 0)

promise.then(function(quotient){
	
	console.log("The quotient is "+quotient+".")
	// This function does not return a value, so we can see it
	// as the promise itself will be returned.

}).catch(function(error){ // So here we immediately call .catch() on the same promise.
	console.log(error)
})
```

</Figure>

As you probably realise, we can even get rid of the `promise` variable and call `.then()` and `.catch()` on the promise directly, as shown in <FigureNumber /> below.

<Figure caption="Sample usage of an asynchronous function returning back a promise.">

```js
getQuotient(4, 0).then(function(quotient){
	console.log("The quotient is "+quotient+".")
}).catch(function(error){
	console.log(error)
})
```

</Figure>

This code will run asynchronously, and is looks really similar to what a synchronous version of the code would look like, which is shown in <FigureNumber />, which is really promising.

<Figure caption="Sample usage of a synchronous function.">

```js
try{
	const quotient = getQuotient(4, 0)
	console.log("The quotient is "+quotient+".")
}catch(error){
	console.log(error)
}
```

</Figure>

The question is, how readable will the code be when we start using multiple promises? Will we get into a callback hell similar situation, as the one shown in <FigureNumber /> below where we use asynchronous functions with callbacks?

<Figure caption="Example of callback hell.">

```js
// Asynchronous version with callback functions.
function loadUserWithPetsAndStoreInFile(userId, filename, callback){
	getUserById(userId, function(userError, user){
		if(userError){
			callback(userError)
		}else{
			getPetsByOwnerName(user.name, function(petsError, pets){
				if(petsError){
					callback(petsError)
				}else{
					const data = {
						pets
					}
					fileSystem.storeInJsonFile(data, filename, function(storeError, fileSize){
						if(storeError){
							callback(storeError)
						}else{
							callback(null, fileSize)
						}
					})
				}
			})
		}
	})
}

// Sample usage of the function.
loadUserWithPetsAndStoreInFile(3, "data.json", function(error){
	if(error){
		console.log(error)
	}else{
		console.log("Data stored in file "+fileSize+" bytes big!")
	}
})
```

</Figure>

No, list item 1 above (our callback function passed to `.then()` can return back a new promise) makes sure that we don't get into a callback hell situation. If the asynchronous functions in the <FigureNumber previous /> above would return back promises instead of using callback functions, the code would look as shown in <FigureNumber /> below.

<Figure caption="Sample usage of sequential calls to asynchronous functions returning back promises.">

```js
// Asynchronous version with promises.
function loadUserWithPetsAndStoreInFile(userId, filename){
	return getUserById(userId).then(function(user){
		return getPetsByOwnerName(user.name)
	}).then(function(pets){
		const data = {
			pets
		}
		return fileSystem.storeInJsonFile(data, filename)
	})
}

// Sample usage of the function.
loadUserWithPetsAndStoreInFile(3, "data.json").then(function(fileSize){
	console.log("Data stored in file "+fileSize+" bytes big!")
}).catch(function(error){
	console.log(error)
})
```

</Figure>

An importing thing to know when using chained promises like we do here is that if one of the promises in the chain is rejected, the next promises in the chain will never be resolved, and the error will be passed to the callback functions passed to `.catch()` no matter which promise that was rejected. So in <FigureNumber previous /> above, even if it looks like we only call `.catch()` on the last promise in the chain, the callback function we pass to it will be called if any promise in the chain will be rejected.

This way of writing asynchronous code (with promises) is really similar to synchronous code, as shown in <FigureNumber /> below.

<Figure caption="Sample usage of sequential calls to synchronous functions.">

```js
// Synchronous version.
function loadUserWithPetsAndStoreInFile(userId, filename){
	const user = getUserById(userId)
	const pets = getPetsByOwnerName(user.name)
	const data = {
		pets
	}
	const fileSize = fileSystem.storeInJsonFile(data, filename)
	return fileSize
}

// Sample usage of the function.
try{
	const fileSize = loadUserWithPetsAndStoreInFile(3, "data.json")
	console.log("Data stored in file "+fileSize+" bytes big!")
}catch(error){
	console.log("error")
}
```

</Figure>

The only downside with promises is that we need to pass callback functions to `.then()` and `.catch()`, which makes our code a little bit more indented and a little bit harder to read than the synchronous code, but that we can solve with `async` and `await`.

## Async and Await
The keywords `async` and `await` can make our asynchronous code with promises even more readable. The `await` operator is the real hero of these two. Instead of calling `.then()` or `.catch()` on a promise, we can wait for the promise to be resolved or rejected with the `await` operator. When the promise resolve, the `await` operator will yield the value the promise resolved to, and when the promise is rejected the `await` operator will throw the error as an exception.

So, without `async` and `await`, we can call an asynchronous function returning a promise as shown in <FigureNumber /> below.

<Figure caption="Sample usage of an asynchronous function returning back a promise.">

```js
// Asynchronous version with promises.
getQuotient(4, 0).then(function(quotient){
	console.log("The quotient is "+quotient+".")
}).catch(function(error){
	console.log(error)
})
```

</Figure>

If we would use the `await` operator, it would instead look as shown in <FigureNumber /> below.

<Figure caption="Sample usage of an awaiting an promise returned back from a function.">

```js
// Asynchronous version with promises and await.
try{
	const quotient = await getQuotient(4, 0)
	console.log("The quotient is "+quotient+".")
}catch(error){
	console.log(error)
}
```

</Figure>

This code is just as readable as synchronous code, the only different is that whenever we call a function that returns a promise, we must remember to use the `await` operator to wait for the promise to be resolved or rejected.

Whenever you use the `await` operator in a function, you must mark that function with the `async` keyword. A function marked with the `async` keyword always returns back a promise that will resolve to the value you `return` back from the function. An example of that is shown in <FigureNumber /> below.

<Figure caption="Example of async functions.">

```js
// Asynchronous version with promises and async/await.
async function getTheSum(){
	const quotient1 = await getQuotient(4, 2)
	const quotient2 = await getQuotient(5, 3)
	return quotient1 + quotient12
}

async function logTheSum(){
	try{
		const theSum = await getTheSum()
	}catch(error){
		console.log("Couldn't log the sum because division by 0.")
	}
}

logTheSum() // Use the await operator here if you want the sum to be logged before Hello!
// As it is now (without the await operator), Hello! will be logged first.

console.log("Hello!")
```

</Figure>

## How to Create Promises
Often, promises are created automatically for you when you call one of the built-in function in the JavaScript runtime environment that run asynchronously and returns a promise, such as:

* [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

It's also possible to create your own promises using [the Promise constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). You need to pass a callback function to the Promise constructor. That callback function will be invoked immediately by the constructor, and in that function you should write the code for the long running operation. The constructor will also pass you two callback functions, one called `resolve()`, and one called `reject()`.

When your long running operation has completed, you should call `resolve()` and pass it the value the long running operation resulted in. If something goes wrong you should instead call `reject()`, and pass it the error. An example of this is shown in <FigureNumber /> below.

<Figure caption="Template for creating your own promise.">

```js
const myPromise = new Promise(function(resolve, reject){
	// The work the promise should do should be written here.
	// If all goes well, call resolve(), and pass it the computed value.
	// If something goes wrong, call reject(), and pass it the error.
})
```

</Figure>

To implement `getQuotient()` as an asynchronous function using promises, it would look as shown in <FigureNumber /> below.

<Figure caption="A function returning a custom promise.">

```js
function getQuotient(dividend, divisor){
	return new Promise(function(resolve, reject){
		if(divisor == 0){
			reject("Can't divide by 0")
		}else{
			resolve(dividend / divisor)
		}
	})
}

try{
	const quotient = await getQuotient(4, 0)
	console.log("The quotient is "+quotient+".")
}catch(error){
	console.log(error)
}
```

</Figure>

You can use the promise above in the same way as any other promise, but since it doesn't contain any call to an asynchronous function (that runs in the background), it will run synchronous. To make it asynchronous, we could for example use `setTimeout()` to delay the computations, as shown in <FigureNumber /> below.

<Figure caption="A function returning a custom promise that runs (waits) in the background.">

```js
function getQuotient(dividend, divisor){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			if(divisor == 0){
				reject("Can't divide by 0")
			}else{
				resolve(dividend / divisor)
			}
		}, 1000)
	})
}

try{
	const quotient = await getQuotient(4, 0)
	console.log("The quotient is "+quotient+".")
}catch(error){
	console.log(error)
}
```

</Figure>

Note that when you implement functions that makes use of promises from scratch, the implementation can have a few symptoms of callback hell, as `getQuotient()` above. The real benefit with promises is that the code is really easy to read when you call functions returning promises, as in the try/catch block above. 