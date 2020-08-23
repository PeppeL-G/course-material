---
sidebar: auto
navbarTitle: Web Security
---

# Web Security
Many web applications contains security vulnerabilities hackers can exploit. Let's take a look at the most commonly used ones, and how we can prevent them.

<iframe width="560" height="314" src="https://www.youtube.com/embed/T5QJR3iXvZg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Lecture material
* [web-security.pdf](web-security.pdf)
* [web-security.pptx](web-security.pptx)

## Fun from xkcd:
* [Voting Machines](https://xkcd.com/463/)
* [Exploits of a Mom](https://xkcd.com/327/)
* [Security](https://xkcd.com/538/)

## Recommended reading
* [OWASP Top 10 - 2017](https://www.owasp.org/images/7/72/OWASP_Top_10-2017_%28en%29.pdf.pdf)
* [2019 Data Breach Hall of Shame: These were the biggest data breaches of the year](https://www.cnet.com/news/2019-data-breach-hall-of-shame-these-were-the-biggest-data-breaches-of-the-year/)
* [FBI recommends passphrases over password complexity](https://www.zdnet.com/article/fbi-recommends-passphrases-over-password-complexity/)
* [How Facebook Was Hacked And Why It's A Disaster For Internet Security](https://www.forbes.com/sites/thomasbrewster/2018/09/29/how-facebook-was-hacked-and-why-its-a-disaster-for-internet-security/#521220f82033)
* [Are You on Tinder? Someone May Be Watching You Swipe](https://www.checkmarx.com/2018/01/23/tinder-someone-may-watching-swipe-2/)
* [The Bank Job](https://boris.in/blog/2016/the-bank-job/%20)
* [Spyware Company Leaves ‘Terabytes’ of Selfies, Text Messages, and Location Data Exposed Online](https://motherboard.vice.com/en_us/article/9kmj4v/spyware-company-spyfone-terabytes-data-exposed-online-leak)
* [The MySpace Worm that Changed the Internet Forever](https://motherboard.vice.com/en_us/article/wnjwb4/the-myspace-worm-that-changed-the-internet-forever)
* [TweetDeck wasn't actually hacked, and everyone was silly](https://www.zdnet.com/article/tweetdeck-wasnt-actually-hacked-and-everyone-was-silly/)
* [Symmetric vs. Asymmetric Encryption – What are differences?](https://www.ssl2buy.com/wiki/symmetric-vs-asymmetric-encryption-what-are-differences)
* [Google Chrome impacted by new Magellan 2.0 vulnerabilities](https://www.zdnet.com/article/google-chrome-impacted-by-new-magellan-2-0-vulnerabilities/?mid=1)
* [Unpatched US Government Website Gets Pwned By Pro-Iran Script Kiddie](https://yro.slashdot.org/story/20/01/06/2018246/unpatched-us-government-website-gets-pwned-by-pro-iran-script-kiddie)
* [Starbucks Devs Leave API Key in GitHub Public Repo](https://www.bleepingcomputer.com/news/security/starbucks-devs-leave-api-key-in-github-public-repo/)
* [A Twitter app bug was used to match 17 million phone numbers to user accounts](https://techcrunch.com/2019/12/24/twitter-android-bug-phone-numbers/)
* [Undermålig säkerhet i artisten Linda Piras app Workish](https://www.svt.se/nyheter/inrikes/undermalig-sakerhet-i-piras-app-workish)
* [Sequelize ORM npm library found vulnerable to SQL Injection attacks](https://snyk.io/blog/sequelize-orm-npm-library-found-vulnerable-to-sql-injection-attacks/)
* [Report: Data Breach in Biometric Security Platform Affecting Millions of Users](https://www.vpnmentor.com/blog/report-biostar2-leak/)
* [Critical Magento SQL injection flaw could be targeted by hackers soon](https://www.csoonline.com/article/3385525/critical-magento-sql-injection-flaw-could-be-targeted-by-hackers-soon.html)
* [Smart alarms left 3 million cars vulnerable to hackers who could turn off motors](https://www.cnet.com/news/smart-alarms-left-3m-cars-vulnerable-to-hackers-who-could-turn-off-motors/
)
* [Somebody Tried to Hide a Backdoor in a Popular JavaScript npm Package](https://www.bleepingcomputer.com/news/security/somebody-tried-to-hide-a-backdoor-in-a-popular-javascript-npm-package/)
* [Malicious Chrome extensions infect 100,000-plus users, again](https://arstechnica.com/information-technology/2018/05/malicious-chrome-extensions-infect-more-than-100000-users-again/)
* [Row hammer](https://en.wikipedia.org/wiki/Row_hammer)
* [CSS Is So Overpowered It Can Deanonymize Facebook Users](https://www.bleepingcomputer.com/news/security/css-is-so-overpowered-it-can-deanonymize-facebook-users/)
* [Loose .zips sink chips: How poisoned archives can hack your computer](https://www.theregister.co.uk/2018/06/05/zip_slip_bug_archives/)
* [The 'World's Worst' Smart Padlock Is Even Worse Than Previously Thought](https://it.slashdot.org/story/18/06/18/2016220/)
* [Incident report: npm, Inc. operations incident of July 12, 2018](https://blog.npmjs.org/post/175824896885/incident-report-npm-inc-operations-incident-of)
* [Cryptocurrency wallet caught sending user passphrases to Google's spellchecker](https://www.zdnet.com/article/cryptocurrency-wallet-caught-sending-user-passwords-to-googles-spellchecker/)

## Cross-Site Scripting (XSS)
### Vulnerability
The vulnerability Cross-Site Scripting (XSS) is when a hacker manage to inject client-side code (HTML, CSS or JavaScript, etc.) on your website that is executed by your users' web browsers when they visit your website. By injecting client-side JavaScript code a hacker can tell the users' web browsers to do some bad things for the user, such as:

* Read information found on the webpage (which might be sensitive information about the user if she has logged in to an account) and then send that information to the hacker's own server in an HTTP request.
* Send HTTP requests to various websites. These websites will think the requests are intentionally sent by the user, so they will happily carry out the requests. This is especially troublesome if the user has logged in to an account on these websites. 

::: tip Example
In the search form below users should be able to enter search terms, and then get back a list with the search result. To indicate to the user what she has searched for, it also displays the search term. In this example, the search result is never displayed, only what the user searched for. Try entering a search term containing HTML code, for example `<b>Hi!</b>`, or `<b onclick="alert('Hi!')">Click me!</b>` (client-side JavaScript must be enabled in your web browser for the example to work). Although these examples are not harmful to the user, it shows the potential danger with the vulnerability if a hacker takes advantage of it.

<form onsubmit="event.preventDefault(); document.getElementById('rrr').innerHTML = 'You searched for: '+document.getElementById('sss').value">
    <p>
        Search:
        <input id="sss">
        <input type="submit" value="Go">
    </p>
</form>
<p id="rrr"></p>
:::

### Protection
When data comes from an untrusted source (for example a user or a third-party application you are using) you must escape the HTML code before sending it to the web browser as part of the webpage in the HTTP response. You can escape the data by replacing the following characters in it (the characters that have special meaning in HTML syntax) with their corresponding entity names:

* `<` can be replaced with `&lt;`.
* `>` can be replaced with `&gt;`.
* `"` can be replaced with `&quot;`.
* `'` can be replaced with `&apos;`.

When the web browser for example sees `&lt;`, it will display the `<` character.

::: tip Example
With proper protection, the search form in the previous example would work like the one shown below (client-side JavaScript must be enabled in your web browser for the example to work).

<form onsubmit="event.preventDefault(); document.getElementById('rrrr').innerText = 'You searched for: '+document.getElementById('ssss').value">
    <p>
        Search:
        <input id="ssss">
        <input type="submit" value="Go">
    </p>
</form>
<p id="rrrr"></p>
:::

<Tabs remember-selected-key="lang-framework">
<Tab title="Node.js/Express">

::: v-pre
When you use `request.send("Input from a client.")` you are responsible for escaping the input yourself. When you pass input to a view, the view engine usually escapes the data for you. For example, when using Handlebars as your view engine, data you insert into the view using `{{expression}}` will escape the HTML code in `expression`. This is usually what you want to happen, but if you for some reason don't want that, you can use `{{{expression}}}`, which won't escape the HTML code in `expression`, but then you are responsible to make sure that no XSS vulnerability exists.
:::

</Tab>
<Tab title="PHP">

PHP has a function called [htmlspecialchars()](https://www.php.net/manual/en/function.htmlspecialchars.php) you can use to escape HTML code.

</Tab>
</Tabs>

## Cross-Site Request Forgery (CSRF)
### Vulnerability
The vulnerability Cross-Site Request Forgery (CSRF) is about tricking the user's web browser into sending HTTP requests to other websites that is gainable for the hacker. This is especially troublesome if the user is logged in to an account on these websites, for example:

1. Alice sends her correct login credentials to bank.com.
2. bank.com creates a session containing an identifier for Alice's bank account.
3. Alice web browser stores the session's identifier in a cookie.
4. Alice somehow ends up at bad-website.com, which contains client-side code from a hacker.
5. The bad client-side code tells Alice's web browser to send an HTTP request to bank.com to transfer $1000 to the hacker's own bank account. Since Alice before logged in to bank.com, that cookie with the session identifier is attached to the request, so to bank.com it looks like the HTTP request is intentionally sent by Alice, so bank.com carries out the request.

## SQL injection
### Vulnerability
The vulnerability SQL injection is when a hacker manages to alter an SQL query the web application sends to the database. This happen when the web application tries to dynamically build the SQL query with some values it has received from the client, and the hacker can alter the query by providing a carefully chosen value. 

Imagine a website containing user accounts. The URI `/accounts/ACCOUNT_ID` is used to identify the account with the id `ACCOUNT_ID`. For example, `/accounts/3` identifies the account with the id `3`. When a GET request for this URI is received, the web application needs to send a query like `SELECT * FROM accounts WHERE id = ACCOUNT_ID` to the database. If that query is dynamically generated like this:

```js
app.get("/accounts/:ACCOUNT_ID", function(request, response){
    
    const ACCOUNT_ID = request.params.ACCOUNT_ID
    
    const query = "SELECT * FROM accounts WHERE id = "+ACCOUNT_ID
    
    // Send query to DB.
    
})
```

Then the hacker can use a clever `ACCOUNT_ID` to alter the query sent to the database. If an expected account id like `3` is used, then the query sent to the database will be `SELECT * FROM accounts WHERE id = 3`, but if the hacker uses an account id like `-1 OR username = 'Alice'`, then the query sent to the database will be `SELECT * FROM accounts WHERE id = -1 OR username = 'Alice'`, which the hacker can use to to retrieve Alice's account. This might not be a big deal, but if the hacker would use the account id `-1 OR password = 'abc123'`, he would get back the first user to have the password `abc123`, and can then simply login to that account (assuming passwords aren't hashed).

::: tip Example
Below you can change the URI and see how the query to the database changes (requires client-side JavaScript to be enabled).

<code>GET /accounts/<input oninput="document.getElementById('ppp').innerText = this.value"></code>

<code>SELECT * FROM accounts WHERE id = <span id="ppp"></span></code>
:::

### Protection
Don't use input from the client (a query string parameter, a cookie, the body of the request, a dynamic URI parameter, etc.) to dynamically generate SQL queries sent to the database. Instead, use placeholders for dynamic values in the query, and pass the values separately to the database.

<Tabs remember-selected-key="lang-framework">
<Tab title="Node.js/Express/SQLite 3">

```js
app.get("/accounts/:ACCOUNT_ID", function(request, response){
    
    const ACCOUNT_ID = request.params.ACCOUNT_ID
    
    const query = "SELECT * FROM accounts WHERE id = ?"
    const values = [ACCOUNT_ID]
    
    // Send query and values to DB.
    
})
```

</Tab>
<Tab title="PHP">

Using the old (now deprecated) `mysql_***()` functions, you needed to escape untrusted values yourself by calling the function [mysql_real_escape_string()](https://www.php.net/manual/en/function.mysql-real-escape-string.php):

```php
mysql_connect(/* Connection settings... */);

$ACCOUNT_ID = $_GET['ACCOUNT_ID'];

$result = mysql_query("SELECT * FROM accounts WHERE id = ".mysql_real_escape_string($ACCOUNT_ID));
```

Many programmers often forgot to call this functions, leading to that many SQL injection vulnerabilities existed. To prevent programmers from forgetting this, the `mysql_***()` functions were deprecated, and the `mysqli_***()` functions and PDO were introduced instead. Using the newer `mysqli_***()` functions you use placeholders in prepared statements like this:

```php
$connection = mysqli_connect(/* Connection settings... */);

$ACCOUNT_ID = $_GET['ACCOUNT_ID'];

$statement = mysqli_prepare($connection, "SELECT * FROM accounts WHERE id = ?")

mysqli_stmt_bind_param($statement, "i", $ACCOUNT_ID);

mysqli_stmt_execute($statement);

mysqli_stmt_bind_result($statement, $result);

mysqli_stmt_fetch($statement);
```

</Tab>
</Tabs>