---
sidebar: auto
navbarTitle: Using Sequelize in Node.js
---

# Using Sequelize in Node.js
You can write and send your own queries to your relational database, but what if you later change to another relational database using a little bit different SQL dialect? Then you need to go through all your queries and rewrite some of them 😥 Or, you can use an ORM instead, and let the ORM write the SQL queries for you. Then it's easy to switch to another relational database, and you don't even need to know SQL to use the database 😀

<iframe width="560" height="314" src="https://www.youtube.com/embed/0lGWqp-yUTU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

::: warning About sequelize.sync()
`sequelize.sync()` will only attempt to create the tables in the database if they don't already exists. If you try to call this method again after you have changed your model definitions, the tables in the database won't be updated to match your new model definitions. Use `sequelize.sync({force: true})` to make Sequelize first delete your tables in the database, and then re-create them per your new model definitions, or update the tables in the database manually yourself.
:::

## Lecture material
* [using-sequelize-in-node-js.pdf](using-sequelize-in-node-js.pdf)
* [using-sequelize-in-node-js.pptx](using-sequelize-in-node-js.pptx)

## Recommended reading
* [The docs on Sequelize's website have a lot of explanatory examples.](http://docs.sequelizejs.com/)