---
sidebar: auto
navbarTitle: Using SQLite in Node.js
---

# Using SQlite in Node.js
So, how do we use SQLite in a Node.js application? Let's find out!

<iframe width="560" height="314" src="https://www.youtube.com/embed/65f7Fl0AEi8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


::: warning Note!
When communicating with an SQLite 3 database, foreign key constraints are disabled by default! To enable them, you must send the query `PRAGMA foreign_keys = ON` to the database after you have established a connection with it.

Learn more about this in [the documentation for enabling foreign key constraints in SQLite](https://www.sqlite.org/foreignkeys.html#fk_enable).
:::

## Recommended reading

* [sqlite3 Documentation](https://github.com/mapbox/node-sqlite3/wiki):
    * API Documentation <br>
    (read if you need to learn some details)


