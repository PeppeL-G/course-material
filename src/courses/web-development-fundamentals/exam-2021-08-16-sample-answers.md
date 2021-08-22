---
sidebar: auto
---

# Exam 2021-08-16
Here is the exam from 2021-08-16 together with some sample answers and grading guidelines.

::: danger Point reduction for improper usage of upper-/lowercase characters
As explained in the exam instructions, answers not properly using upper-/lowercase characters will receive point reduction. This time it has only been set to 0.2 points for each answer that do not properly use upper-/lowercase characters, such as answers written with only lowercase characters. Next time the point reduction will likely be higher.
:::

---

Start by reading through all questions.

Max score is 30 points.

* For grade 3, 40% of max score (12 points) is required.
* For grade 4, 60% of max score (18 points) is required.
* For grade 5, 80% of max score (24 points) is required.

You are not allowed to use anything else except:

* The computer you sit at to only answer the questions on this exam.
* A dictionary to translate to/from English from/to your native language.

Write your answers in either English or Swedish. If you write your answers in Swedish, make sure to not introduce any translation confusement. **Write proper sentences (spelling, upper/lower case characters, punctuation, etc.).** Answers that do not do this good enough/are vague/are not understandable cannot receive full score on the questions.

Answers that are more or less copies of sample answers given to you or copies of text found somewhere else will be rewarded 0 points. Use your own words to answer the questions.

Good luck!

## Question 1 (1p)
<ExamQuestion>
<template v-slot:question>

On one server, the HTTP request one should send when one wants to delete the account with id 123 is:

```http
GET /accounts/delete/123
```

Is this a good or bad way to do it? If good, justify why. If bad, explain why and suggest a better way to do it.

**Note**: This question is about HTTP, and not about websites, and you don't need to worry about security.

</template>
<template v-slot:sample-answer>

That is a bad way to do it since HTTP is not used properly. Since the request is about deleting a resource, the method should be `DELETE`, and not `GET`. And the URI should only identify the resource(s) that should be deleted, so it should rather just be `/accounts/123`.

</template>
<template v-slot:marking-guidelines>

* 0.25 points for correct method.
* 0.25 points for correct method justification.
* 0.25 points for correct URI.
* 0.25 points for correct URI justification.
* Small point deductions for mistakes/minor wrong details.

</template>
</ExamQuestion>




## Question 2 (1p)
<ExamQuestion>
<template v-slot:question>

To update a resource on a server, one should according to the HTTP specification send a PUT request. However, websites usually use another method. Why do websites not use the PUT method to update a resource, which method do they use instead, and why do they use that one?

</template>
<template v-slot:sample-answer>

Since it's only possible to send GET and POST requests in HTML, websites can't send PUT requests. In the choice between GET and POST, POST is the more appropriate to use when the request is about updating a resource since GET requests should not change anything on the server, so websites usually send a POST request to update a resource.

</template>
<template v-slot:marking-guidelines>

* 0.25 points for why not PUT.
* 0.25 points for POST instead.
* 0.25 points for why GET or POST instead.
* 0.25 points for why POST and not GET.

</template>
</ExamQuestion>




## Question 3 (1p)
<ExamQuestion>
<template v-slot:question>

Write the HTTP status code for the following reason phrases:

* Bad Request
* OK
* Internal Server Error

You'll get:

* 0.33 points for each correct answer.
* -0.33 points for each incorrect answer.
* 0 points for each blank answer.
* 1 point for all correct answers.
* Minimum is 0 points on the question.

</template>
<template v-slot:sample-answer>

* Bad Request: `400`
* OK: `200`
* Internal Server Error: `500`

</template>
<template v-slot:marking-guidelines>

* 0.33 points for each correct answer.
* -0.33 points for each incorrect answer.
* 0 points for each blank answer.
* 1 point for all correct answers.
* Minimum is 0 points on the question.

</template>
</ExamQuestion>




## Question 4 (1p)
<ExamQuestion>
<template v-slot:question>

What is the name of the HTTP header used to indicate which format the body of the request is written in?

What is the name of the HTTP header used to indicate which format the body of the response should preferably be written in?

You'll get:

* 0.5 points for each correct answer.
* -0.5 points for each incorrect answer.
* 0 points for each blank answer.
* 1 point for all correct answers.
* Minimum is 0 points on the question.

(**small** spelling mistakes are acceptable but might give point reduction)

</template>
<template v-slot:sample-answer>

* Format the body of the request: `Content-Type`
* Format the body of the response should be written in: `Accept`

</template>
<template v-slot:marking-guidelines>



</template>
</ExamQuestion>




## Question 5 (1p)
<ExamQuestion>
<template v-slot:question>

Place the lines of code below in such order that they form a valid HTML5 document (only place one line of code in each box).

* `<head>`
* `<h1>Welcome!</h1>`
* `</body>`
* `<title>Welcome!</title>`
* `<!DOCTYPE html>`
* `</html>`
* `</head>`
* `<html>`
* `<body>`

**Note**: All must be correct to get points on this question.

</template>
<template v-slot:sample-answer>

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Welcome!</title>
    </head>
    <body>
        <h1>Welcome!</h1>
    </body>
</html>
```

</template>
<template v-slot:marking-guidelines>



</template>
</ExamQuestion>




## Question 6 (2p)
<ExamQuestion>
<template v-slot:question>

Which of the following tags **do not exist** in HTML?

* h1
* table
* language
* tr
* column
* h6

You'll get:

* 1 point for each correct checked answer.
* -1 point for each incorrect checked answer.
* 0 points for each unchecked answer.
* Minimum is 0 points on the question.

</template>
<template v-slot:sample-answer>

* language
* column

</template>
<template v-slot:marking-guidelines>

* 1 point for each correct.
* -1 point for each incorrect.
* Minimum is 0 points in total.

</template>
</ExamQuestion>




## Question 7 (2p)
<ExamQuestion>
<template v-slot:question>

Which of the following statements about HTML attributes **are false**?

* The `id` attribute can be used on any element.
* The `button` element has an attribute called `value`.
* The `class` attribute can be used on any element.
* The `lang` attribute can be used on any element.
* An element can have the `id` attribute and the `class` attribute set at the same time.
* Different elements can have the same value in their `id` attributes.

You'll get:

* 1 point for each correct checked answer.
* -1 point for each incorrect checked answer.
* 0 points for each unchecked answer.
* Minimum is 0 points on the question.

</template>
<template v-slot:sample-answer>

* The `button` element has an attribute called `value`.
* Different elements can have the same value in their `id` attributes.

</template>
<template v-slot:marking-guidelines>

* 1 point for each correct.
* -1 point for each incorrect.
* Minimum is 0 points in total.

</template>
</ExamQuestion>




## Question 8 (1p)
<ExamQuestion>
<template v-slot:question>

The form below can be used on a website that, when receiving the request, searches other websites for products matching the search string, and lists the price for those products, so the user easily can find the cheapest one on the searched websites.

```html
<form action="" method="XXX">
   Search: <input type="text" name="query">
   <input type="submit" value="Search!">
</form>
```

Which method should be used when submitting the HTML form above (i.e. what should `XXX` in the HTML code above be)? Justify your answer.

</template>
<template v-slot:sample-answer>

The form should be submitted with the GET method since the request is about retrieving resources (the products). 

</template>
<template v-slot:marking-guidelines>

* 1 point for correct answer and valid justification.

</template>
</ExamQuestion>




## Question 9 (1p)
<ExamQuestion>
<template v-slot:question>

Explain what a *declaration* is in CSS, give an example of one and explain how that one works.

</template>
<template v-slot:sample-answer>

A declaration in CSS is a CSS property together with one of it's values. The property indicates which part of an element that should be styled (for example `border-color`) and the value indicates how that part of the element should be styled (for example be `red`).

Example that would makes an element's border red:

```
border-color: red
```

</template>
<template v-slot:marking-guidelines>

* 0.5 points for general explanation.
* 0.25 points for example.
* 0.25 points for example explanation.

</template>
</ExamQuestion>




## Question 10 (1p)
<ExamQuestion>
<template v-slot:question>

Explain what a *media query* can be used for in CSS.

</template>
<template v-slot:sample-answer>

A media query can be used to apply CSS rules under certain conditions based on the media device the webpage should be displayed on. This way, we can apply some CSS rules when the webpage should be printed ("displayed on paper"), some other rules when it should be displayed on a small screen, some other when it should be displayed on a large screen, etc.

</template>
<template v-slot:marking-guidelines>

* 1 point for a good explanation

</template>
</ExamQuestion>




## Question 11 (1p)
<ExamQuestion>
<template v-slot:question>

Here is some CSS code:

```css
p.span b#i{
  background-color: black;
}
```

Write HTML code that contains a match for the CSS selector in the code above.

**Note**: You only need to write the HTML code found in the `<body>` element (including the `<body>` element), you do not need to write the HTML code for an entire HTML document.

</template>
<template v-slot:sample-answer>

```html
<body>
    <p class="span">
        <b id="i">I'm matched!</b>
    </p>
</body>
```

</template>
<template v-slot:marking-guidelines>

* 1 point for correct answer.
* -0.25 points for missing `<body>`.
* -0.1 point for each unnecessary element in valid solution.

</template>
</ExamQuestion>




## Question 12 (1p)
<ExamQuestion>
<template v-slot:question>

On a website with user accounts, before any user has started to use it, the developer adds some code that, if a user's password is longer than 20 characters, only makes use of the first 20 characters in the password, and ignores the rest. The programmer is reasoning that passwords consisting of 20 characters are long enough to be considered secure anyway, and the database will now use less space.

Does the developer's reasoning make sense? Does it seem to be a good implemented website? Justify your answer.

</template>
<template v-slot:sample-answer>

No, the developer's reasoning does not make sense.

If the developer actually saves space in the database by doing this, then the website doesn't hash the users' passwords, and that's bad, because then anyone with access to the database can read the users' passwords (i.e. a badly implemented website).

Otherwise, if the passwords actually are hashed (i.e. a good implemented website), then he won't save any space in the database by hashing only the beginning of the password, since all hash values will be of the same length anyway.

</template>
<template v-slot:marking-guidelines>

* 0.5 points for the developer is reasoning wrong based on how hashing works.
* 0.5 points for the website implemented good if passwords are hashed.

</template>
</ExamQuestion>




## Question 13 (2p)
<ExamQuestion>
<template v-slot:question>

Are there any benefits using HTTPS on a website that only contains static HTML files, so users can only fetch content, and never send any content to the website?

</template>
<template v-slot:sample-answer>

Yes, there are at least two benefits using HTTPS in this case:

* A man in the middle can't see which HTTP pages the user is fetching, just which server the user is communicating with, so it's harder for someone to spy on the user.
* A man in the middle can't modify the HTTP response, so the user can be sure the HTTP response actually is as it was when the server sent it.

</template>
<template v-slot:marking-guidelines>

* 0.5 points for each mentioned benefit.
* 0.5 points extra for each clearly explained benefit and how it helps (just saying something like "hacker can send bad code" is not enough, need to explain how a hacker how do that).

</template>
</ExamQuestion>




## Question 14 (2p)
<ExamQuestion>
<template v-slot:question>

Here is an HTML form on a website one can use to login on that website:

```html
<form method="post" action="/login">
    Username: <input type="text"     name="username">
    Password: <input type="password" name="password">
              <input type="submit"   value="Sign in!">
</form>
```

Here is the code on the server handling the HTTP request sent when the form is submitted:

```js
app.post('/login', function(request, response){
  const username = request.body.username
  const password = request.body.password
  // Query to be sent to the database to check if password and username are correct.
  const query = 'SELECT id FROM members WHERE username = "'+username+'" AND password = "'+password+'"'
  // Query sent to database, the id of the user is retrieved, etc.
  // ...
})
```

As your answer, write a username and a password you can use to login as the member having the password `abc123`, no matter which username that member has (this can be used to see if a member/which member that has that password).

Be explicit about what you enter as username and what you enter as password.

**Note**: As you can see in the code, passwords are stored as plain text in the database.

</template>
<template v-slot:sample-answer>

Username: `" OR "" = "`

Password: `abc123`

</template>
<template v-slot:marking-guidelines>

* 2 points for correct answer.
* 0.5 points for answers that are really close to a valid answer.

</template>
</ExamQuestion>




## Question 15 (2p)
<ExamQuestion>
<template v-slot:question>

Explain what a session is, give two examples of what they can be used for and explain how they work/can be implemented.

</template>
<template v-slot:sample-answer>

A session is a collection of key-value pairs the server can create and store on the server to remember information about a specific client (each client gets its own session). The sessions can for example be stored in a relational database, an ordinary file on the server, or simply in the web application's memory. Each session gets its own unique identifier (session id), and when a session is created for a client, the session id is sent to the client in a cookie using the `Set-Cookie` header.

When a client sends requests to the server, it should pass along the cookie with the session id in the requests using the `Cookie` header. When the server receives the requests, it can fetch the session with the provided session id, and there read out information it has stored about the client. Example of such information is:

* To which account the user has previously logged in to.
* What products the user has previously put in her shopping basket.

</template>
<template v-slot:marking-guidelines>

* 0.25 points for example 1.
* 0.25 points for example 2.
* 0.5 points for key value pair stored on the server.
* 0.5 points for session id.
* 0.5 points for how session ids are transferred (details).

::: warning Common mistake
It's very hard to write a good answer to this question without mentioning that each client/user has its own session on the server.
:::

</template>
</ExamQuestion>




## Question 16 (2p)
<ExamQuestion>
<template v-slot:question>

`Website A` contains a cross site request forgery vulnerability. Explain what they need to do to fix the vulnerability. Don't mention any library/framework; give a general description of how they can fix the vulnerability (mention details).

</template>
<template v-slot:sample-answer>

The problem is that one of `Website A`'s users can visit another website (`Website B`) that contains bad client-side code that tells the user's web browser to send an HTTP request to `Website A` doing something the user doesn't want (like transferring money to another bank account, if `Website A` is a bank website and the user is logged in there).

One fix to this problem is to use anti-forgery tokens. For the money transfer request to actually be initiated by the user, and not bad client-side code on another website, the user must first send an HTTP request for the form that should be used to send the request to do the transfer. When `Website A` sends back this form to the user, it adds a token to the form (e.g. a random string), and when it receives the request to do the transfer, it will only do it if the token in the request is the same as it sent back before. If it is, it can be sure that the request was initiated by the user, because bad client-side code on other websites can't send GET requests for the form to figure out which token to use (Same-Origin Policy forbids it).

</template>
<template v-slot:marking-guidelines>

* 2 points for an explanation with enough details to implement the fix.

</template>
</ExamQuestion>




## Question 17 (2p)
<ExamQuestion>
<template v-slot:question>

Explain what a foreign key constraints is, give an example of a web application that would use a foreign key constraint, and give an example of what could go wrong if the web application wouldn't have used a foreign key constraint.

</template>
<template v-slot:sample-answer>

When a relational database has two tables with a relation, such as pets in one table belonging to a human in another table, the pet table will contain a field (known as the foreign key) with the id of the human in the humans table it belongs to. To tell the database about this relation, you add a foreign key constraint describing the relation. This constraint enforces that all pets belongs to an human, and that we, for example, can't insert a new pet that belongs to a human that doesn't exists.

An example of a web application using a foreign key constraint could be one with blogposts and comments on blogposts. Each comment must belong to a blogpost, so we use a foreign key constraint to enforce this relationship. If we wouldn't have used, we could end up with comments in the database that doesn't belong to existing blogposts, for example:

1. User A starts writing on a comment to blogpost X.
2. User B deletes blogpost X.
3. User A submits her comment on blogpost X.

Without a foreign key constraint, the web application would insert the new comment.

</template>
<template v-slot:marking-guidelines>

* 1 point for general explanation.
* 0.5 points for specific example.
* 0.5 points for error example.
* -0.5 points for describing "foreign key constraint" as "foreign key".

::: warning Common mistake
Many students wrote that if the web application receives a request to create a comment on a blogpost, then that blogpost must exists, because otherwise the user wouldn't be able to see the "create comment form", since that is only shown on the page that displays the blogpost (hence the blogpost must exist). Two problems with that reasoning:

1. Hackers can send the request anyway.
2. Between the user fetched the blogpost and wrote a comment, someone might have deleted the blogpost.
:::

::: warning Foreign Key VS Foreign Key Constraint
Many students confuse the terms *Foreign Key* and *Foreign Key Constraint*. A Foreign Key is a field in one table that "links" to the Primary Key in another table. To use a Foreign Key, you don't need to inform the database about the relation when you create the tables, and the database will not do anything special to enforce the relation. By adding a Foreign Key Constraint, you tell the database about the relation, and the database will also enforce the relation and can optimize the way it stores the data to faster work with queries that uses the relation.
:::

</template>
</ExamQuestion>




## Question 18 (1p)
<ExamQuestion>
<template v-slot:question>

This is a question about GDPR. The scenario is that you are the owner of a website, and you want to collect the IP addresses of your visitors, so you can see how many unique visitors you have. Which of the statements below are true for you to comply with GDPR?

* It's OK for me to collect the IP addresses of my visitors without informing them about it.
* It's OK for me to collect the IP addresses of my visitors as long as I inform them about it in advance.
* I have to ask the visitors if I may collect their IP addresses, and I may only collect the IP addresses from the visitors that say yes. If they later regret their decision and say no I have to delete their IP addresses.
* I can start collecting the IP addresses of my visitors and then ask my visitors if I may collect their IP addresses, but I have to delete the IP addresses from the visitors that say no.
* I have to ask the visitors if I may collect their IP addresses, and I may only collect the IP addresses from the visitors that say yes. If some visitors later regret their decision and say no I don't have to delete their IP addresses, because I had their permission to collect them when I collected them.

You'll get:

* 1 point for each correct checked answer.
* -1 point for each incorrect checked answer.
* 0 points for each unchecked answer.
* Minimum is 0 points on the question.

</template>
<template v-slot:sample-answer>

I have to ask the visitors if I may collect their IP addresses, and I may only collect the IP addresses from the visitors that say yes. If they later regret their decision and say no I have to delete their IP addresses.

</template>
<template v-slot:marking-guidelines>

* 1 point for correct answer.

</template>
</ExamQuestion>




## Question 19 (1p)
<ExamQuestion>
<template v-slot:question>

Implement the JavaScript function `getSums(numbers_1, numbers_2)`, that receives two arrays with numbers (both arrays contains the same number of numbers) as argument and returns a new array that contains the pairwise sum of the numbers in the array.

Sample usage:

```js
getSums([1, 2], [3, 4]) // --> [4, 6]
getSums([5, 5, 5], [7, 2, 3]) // --> [12, 7, 8]
```

</template>
<template v-slot:sample-answer>

```js
function getSums(numbers_1, numbers_2){
    const sums = []
    for(let i=0; i<numbers_1.length; i++){
        sums.push(
            numbers_1[i] + numbers_2[i]
        )
    }
    return sums
}
```

</template>
<template v-slot:marking-guidelines>

* 1 point for a function that works correct.

</template>
</ExamQuestion>




## Question 20 (2p)
<ExamQuestion>
<template v-slot:question>

In JavaScript, a human with name and an age (in years) can be represented as an object like this:

```js
const human = {name: "Alice", age: 10}
```

Implement the function `containsAdult(humans)`, which receives an array with human objects and returns `true` if any human in the array is 18 years or older, otherwise `false`.

</template>
<template v-slot:sample-answer>

```js
function containsAdult(humans, ){
    for(const human in humans){
        if(18 <= human.age){
            return true
        }
    }
    return false
}
```

</template>
<template v-slot:marking-guidelines>

* 2 points for a function that largely works.
* -0.25 points for incorrect indentation.
* -0.25 points for writing operator wrong (e.g. using `=>` instead of `>=`).

</template>
</ExamQuestion>




## Question 21 (2p)
<ExamQuestion>
<template v-slot:question>

In JavaScript, implement the synchronous function `duplicateString(string)`, which receives a string as argument and returns a string containing that string twice, e.g. `duplicateString('ab')` ➔ `abab`.

Then implement the synchronous function `duplicateStringTwice(string)`, which receives a string as argument and returns a string containing that string four times, e.g. `duplicateStringTwice('ab')` ➔ `abababab`. The only allowed operation to use in the implementation of `duplicateStringTwice(string)` is function calls to `duplicateString(string)`.

Then implement asynchronous versions of these two functions using callback functions instead of return values. The asynchronous version of `duplicateStringTwice` may only be implemented using the asynchronous version of `duplicateString`, no other operations are allowed.

</template>
<template v-slot:sample-answer>

```js
function duplicateString(string){
    return string + string
}
function duplicateStringTwice(string){
    return duplicateString(duplicateString(string))
}

function duplicateString(string, callback){
    callback(string + string)
}
function duplicateStringTwice(string, callback){
    duplicateString(string, function(duplicatedString){
        duplicateString(duplicatedString, callback)
    })
}
```

</template>
<template v-slot:marking-guidelines>

* 0.25 points for synchronous `duplicateString`.
* 0.25 points for synchronous `duplicateStringTwice`.
* 0.5 points for asynchronous `duplicateString`.
* 1 point for asynchronous `duplicateStringTwice`.
* -0.5 points for wrong function name.
* -0.5 points for indentation errors.
* -0.5 points for syntax errors.
* -0.5 points for unnecessary return statement.
* -0.5 points for unnecessary changes to parameters.
* Small point deductions for mistakes/bad implementations.

</template>
</ExamQuestion>
