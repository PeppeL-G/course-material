---
sidebar: auto
navbarTitle: Handlebars
---

# Handlebars
A templating language used to generate HTML code.

<iframe width="560" height="314" src="https://www.youtube.com/embed/04cXGOZxhAI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

::: tip Extra info
One thing I forgot in the lecture was that when you use the `#each` helper, the context is changed to the value you are iterating over. You can use `../` in the beginning to reference the parent context. Example:

Context:

```js
{
    isLoggedIn: true,
    humans: [
        {id: 1, name: "Alice"},
        {id: 2, name: "Bob"}
    ]
}
```

Template:

```handlebars
<ul>
    {{#each humans}}
        <li>
            {{name}}
            {{#if ../isLoggedIn}}
                <a href="/humans/{{id}}/edit">Edit</a>
            {{/if}}
        </li>
    {{/each}}
<ul>
```

Generated HTML code:

```handlebars
<ul>
    <li>
        Alice
        <a href="/humans/1/edit">Edit</a>
    </li>
    <li>
        Bob
        <a href="/humans/2/edit">Edit</a>
    </li>
<ul>
```
:::

::: tip Extra info
One thing I forgot in the lecture was that when you use the `#each` helper to iterate over primitive values (strings, numbers, booleans, etc.), you can use `this` to reference the value you are iterating over.

Context:

```js
{
    names: [
        "Alice",
        "Bob"
    ]
}
```

Template:

```handlebars
<ul>
    {{#each names}}
        <li>{{this}}</li>
    {{/each}}
<ul>
```

Generated HTML code:

```handlebars
<ul>
    <li>Alice</li>
    <li>Bob</li>
<ul>
```
:::

## Lecture material
* [handlebars.pdf](handlebars.pdf)
* [handlebars.pptx](handlebars.pptx)

## Recommended reading
* [Handlebars' Language Guide](https://handlebarsjs.com/guide/)
* [tryhandlebarsjs.com](http://tryhandlebarsjs.com/)
    * Use it for practice and to see a lot of examples.
