---
sidebar: auto
navbarTitle: Common Code Mistakes
---

# Common Code Mistakes
In this lecture we take a look at common mistakes students do in the code they write. But first some introduction to why even small mistakes are very bad.

## Why are small mistakes such a big deal?
Many students think that many of the common mistakes mentioned in this lecture are something they don't need to worry about. *My code compiles, it works as intended, so what's the problem?* Well, the problem is that these students have only thought about delivering a *functional* solution, not a *good* solution. These students often think that they are the only ones who ever will read the code they write, or maybe even that no one at all will ever read the code they write, but that is usually not the case:

* When the application has been fully implemented, a *quality assurance expert* might read all the code so she can guarantee customers you deliver what has been agreed on. Then it's very important the code is easy to read.
* When the application has been fully implemented, a *security expert* might read all the code so she can guarantee customers the application doesn't contain any known security vulnerabilities. Then it's very important the code is easy to read.
* After the application has been fully implemented, *customers might discover bugs* that needs to be fixed. A programmer other than you might be assigned the task to fix the bug (you might for example have started to work on other projects and are busy with them), and then it's very important the code is easy to read for the new programmer.
* After the application has been fully implemented, *customers might want additional features* added to the application. A programmer other than you might be assigned the task to add it (you might for example have started to work on other projects and are busy with them), and then it's very important the code is easy to read for the new programmer.
* Etc.

When your code is executed by a computer, it is very important that the code is fully functional and, if not optimized, at least not terribly slow. But it is even more important that others easily can read your code, because humans are much more expensive to use than computers. For example, if you have written good code that is easy to read, a security expert might need one day to look through all the code in the application to verify that it doesn't contain any known security vulnerabilities. But if the code instead is hard to read, she might need a week to do that. And if she is having difficulties to read the code, so will the quality assurance guy, who also needs a week instead of a single day to look through the code. And when adding a new feature in the future, which would take 4 hours to do with good code, will take 3 days with the bad code, and most likely new bugs are introduced with this new feature because the programmer who added it didn't understand how all the existing code worked, so she made assumptions of how parts of the code worked instead of knowing, and some of these assumptions will be wrong and need to be corrected later.

So, a programmer that is lazy and considers himself to be finish when the code is functional is not a good programmer. **When the code is functional, you are half way there**: you have implemented the feature in such way that computers can execute your code. Half of your work remains: to improve the quality of the code by re-structuring it and making it more readable so other humans easily can understand how your code works.

## But why are *small* mistakes such a big deal?
*OK, I misspelled the name of a variable once, and at a few places I didn't stick to my indentation convention. Other humans can still read and understand my code although these small mistakes exist, what's the big deal?*

Programmers are only humans, so one or two of these mistakes in 5 000 lines of code are understandable. But if more than that exists, it's simply a job poorly done by the programmer. Programming is quite abstract and can be hard to understand, so let's compare it to other professions:

* Do you think a painter do a good job if he paints 99.9% of the wall in one color, but there's a small line in the middle of the wall in another color?\
*What's the big deal, it's only a small line*?
* Do you think a car manufacturer do a good job if the steering wheel only works 99.9% of the cases?\
*What's the big deal, you can still steer the car most of the time*?
* Do you think an author do a good job if all sentences in her book always start with a lower case character?\
*What's the big deal, most characters are in the correct case*?

Hopefully you agree in these other professions, even small mistakes, such as those listed above, are quite bad, so for students studying to these professions it's very important to learn that these small mistakes are not acceptable. The same is true for students studying programming, the only difference is that it's harder for beginners to realize that small programming mistakes are just as bad as the mistakes listed above. 

Of course there are some nice xkcd:s about code quality:

* [https://xkcd.com/1513/](https://xkcd.com/1513/)
* [https://xkcd.com/1695/](https://xkcd.com/1695/)
* [https://xkcd.com/1833/](https://xkcd.com/1833/)


## Common student mistakes
So, what are some of the common mistakes students do in their code?

### Indent wrong
<ReportMistake>
<template v-slot:example-1-bad>

```js
function getSum(x, y){
    const sum = x + y
        return sum
}
```

</template>
<template v-slot:example-1-good>

```js
function getSum(x, y){
    const sum = x + y
    return sum
}
```

</template>
<template v-slot:example-2-bad>

```js
function logSum(numbers){
    let sum = 0
    for(const number of numbers)
        sum += number
        console.log(sum)
}
```

</template>
<template v-slot:example-2-good>

```js
function logSum(numbers){
    let sum = 0
    for(const number of numbers)
        sum += number
    console.log(sum)
}
```

</template>

<template v-slot:mistake>

The code has been indented wrong.

</template>
<template v-slot:problem>

Indentation is a tool we have to make the code more readable. Used wrong, it instead makes the code less readable, and it would be better to not indent the code at all. That way, at least the reader would not mistake an incorrect indentation for a correct indentation.

Compare to text in natural languages (e.g. English and Swedish): when you come across a word starting with an uppercase character you can assume that word is a name (*Alice*, *England*, etc.) (unless it's the first word in a sentence). Using this wrong makes the reader misinterpret the meaning of the text, for example:

* *alice is young* means that the reader won't interpret *alice* as a name, and the text has another meaning than the writer intended.
* *the Dog is old* means the reader will interpret *Dog* as a name, and the text has another meaning than the writer intended.

Even if you only have 2-3 of these mistakes, the reader can't trust that you use lowercase/uppercase characters correct anywhere in your text, and she must read all your text very carefully, and that requires bigger concentration and takes longer time.

</template>
<template v-slot:solution>

Always properly indent the code.

</template>
</ReportMistake>





### Multiple indentation conventions
<ReportMistake>
<template v-slot:example-1-bad>

```js
function logSum(numbers){
  let sum = 0
  for(const number of numbers){
          sum += number
  }
  console.log(sum)
}
```

</template>
<template v-slot:example-1-good>

```js
function logSum(numbers){
    let sum = 0
    for(const number of numbers){
        sum += number
    }
    console.log(sum)
}
```

</template>
<template v-slot:example-2-bad>

```js
function logSum(numbers){
        if(0 < numbers.length){
             let sum = 0
             for(const number of numbers){
                     sum += number
             }
             console.log(sum)
        }else{
         console.log("No sum to log.")
        }
}
```

</template>
<template v-slot:example-2-good>

```js
function logSum(numbers){
    if(0 < numbers.length){
        let sum = 0
        for(const number of numbers){
            sum += number
        }
        console.log(sum)
    }else{
        console.log("No sum to log.")
    }
}
```

</template>

<template v-slot:mistake>

The code uses multiple indentation conventions ("indentation of different sizes").

</template>
<template v-slot:problem>

It's hard to see how nested the code is when each indentation level is of different size. As always, it's **better to be consistent**.

</template>
<template v-slot:solution>

Always use the same indentation convention (e.g. `2 spaces`, `4 spaces`, `8 spaces` or `1 tab`, etc.) for all your code. Files of different types can use different indentation convention if that is suitable.

::: tip Show white spaces!
Most code editors do by default show space and tab characters as transparent boxes. This makes it hard to see if one is mixing spaces and tabs when one indents the code. But any proper code editor has a setting you can change to display spaces as `·` and tabs as `→`, or similar. We strongly recommend you to enable this, so you can be sure that you don't mix indentation conventions.
:::

</template>
</ReportMistake>





### Not using mnemonic names
<ReportMistake>
<template v-slot:example-1-bad>

```js
if(username == uname){
    // Correct username entered!
}else{
    console.log("The wrong username '"+username+"' was entered.")
     // By only looking at the line above, we can't be sure we used the correct variable.
     // Need to look at the definition of the variables to be certain... 😒
}
```

</template>
<template v-slot:example-1-good>

```js
if(enteredUsername == correctUsername){
    // Correct username entered!
}else{
    console.log("The wrong username '"+enteredUsername+"' was entered.")
    // We can be sure that we used the correct variable on the line above.
    // No need for us to look at the definition of the variables 😀
}
```

</template>
<template v-slot:example-2-bad>

```js
const movies = 4 // "movies" sounds like a collection of multiple movie objects, like:
// movies = [{title: "Die Another Day", title: "Titanic"}]

// Much further down...:

console.log("I have "+movies+" movies.")
// The line above seems wrong, should rather use movies.length?
// Need to go to the definition of the "movies" variable to check... 😒
```

</template>
<template v-slot:example-2-good>

```js
const numberOfMovies = 4

// Much further down...:

console.log("I have "+numberOfMovies+" movies.")
// The line above is obviously correct 😀
// No need to go to the definition of the "movies" variable to check.
```

OR

```js
const movies = [{title: "Die Another Day", title: "Titanic"}]

// Much further down...:

console.log("I have "+movies.length+" movies.")
// The line above makes total sense, is probably correct 😀
```

</template>

<template v-slot:mistake>

The names on variables, functions, classes, files, etc. are not descriptive (the names don't describe what they represent).

</template>
<template v-slot:problem>

The code becomes very hard to read, because the reader can't understand what a specific line of code using these names do, but have to go and look at the definition of these names elsewhere to understand what they represent, and then go back to the initial line of code to understand how that one works. Too much work...

</template>
<template v-slot:solution>

Always use good descriptive names on everything. Optimally one should be able to understand what each line of code do/how each line of code works only by reading that line of code.

</template>
</ReportMistake>





### Using hardcoded values
<ReportMistake>
<template v-slot:example-1-bad>

```js
// The condition below contains no info about why username is compared to "Alice".
if(username == "Alice"){
    // ...
}
```

</template>
<template v-slot:example-1-good>

```js
const ADMIN_USERNAME = "Alice"

// The condition below obviously checks if the user is an admin.
if(username == ADMIN_USERNAME){
    // ...
}
```

</template>
<template v-slot:example-2-bad>

```js



const errorCodes = []

// The condition below contains no info about why we have this condition.
if(name.length < 3){
    errorCodes.push(1) // No info about what 1 means. Is this really correct?
}

// ...

function errorCodeToMessage(errorCode){
    switch(errorCode){
        case 1: // No easy way to check that this translation is correct.
            return "Name needs to contain at least 3 characters."
        // ...
    }
}
```

</template>
<template v-slot:example-2-good>

```js
const MIN_NAME_LENGTH = 3
const ERROR_CODE_NAME_TOO_SHORT = 1

const errorCodes = []

// The condition below obviously checks if the name is too short.
if(name.length < MIN_NAME_LENGTH){
    errorCodes.push(ERROR_CODE_NAME_TOO_SHORT) // Using this error code here is obviously correct.
}

// ...

function errorCodeToMessage(errorCode){
    switch(errorCode){
        case ERROR_CODE_NAME_TOO_SHORT: // The translation here is obviously correct.
            return "Name needs to contain at least "+MIN_NAME_LENGTH+" characters."
        // ...
    }
}
```

</template>

<template v-slot:mistake>

Harcoded values are used in the middle of the code.

</template>
<template v-slot:problem>

A hardcoded value contains no information about what that value represent; when someone reads a hardcoded value, they must guess what the value represents. This makes the code hard to understand. For example, when comparing `username` to `"Alice"`, is that because `"Alice"` is admin or because `"Alice"` is a banned member? The reader won't know until she has read the other lines of code close to this one (should not be needed!).

</template>
<template v-slot:solution>

Don't use hardcoded values in the middle of the code. Put the values in descriptive constants instead. This way, the code becomes more readable, and it's also easy to change these values in the future (if a hardcoded value is used at multiple values, you just need to change it where you create the constant, and not at each place you use the hardcoded value).

</template>
</ReportMistake>