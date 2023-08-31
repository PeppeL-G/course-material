import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="project-work" tabindex="-1"><a class="header-anchor" href="#project-work" aria-hidden="true">#</a> Project Work</h1><p>As project you should work in pairs and create a platform (a solution consisting of both a backend application handling the data on the platform and a frontend application containing the graphical user interface through which users will use the platform). The backend should expose a REST API which the frontend can use to work with the data on the platform. The platform should be implemented with the technologies taught in the course, i.e. Node.js/Express for the backend and Vue.js for the frontend.</p><p>You should not only implement the platform, you should also write a report describing the platform and its implementation, including what it can be used for and how it has been implemented. The file <a href="files/project-report-template.docx">project-report-template.docx</a> contains a template for the report. Your report will be a living document throughout the course, meaning that you will write on it from the start and continually improve it until the end of the course.</p><h2 id="part-1-find-a-partner" tabindex="-1"><a class="header-anchor" href="#part-1-find-a-partner" aria-hidden="true">#</a> Part 1: Find a partner</h2>', 4);
const _hoisted_5 = {
  href: "https://ju.instructure.com/courses/6797/groups",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "a",
  { href: "mailto:Peter.Larsson-Green@ju.se" },
  "Peter.Larsson-Green@ju.se",
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "part-2-platform-idea",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#part-2-platform-idea",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Part 2: Platform idea")
  ],
  -1
  /* HOISTED */
);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Before you start working on this part you are expected to read/view the following lectures:",
  -1
  /* HOISTED */
);
const _hoisted_9 = /* @__PURE__ */ createStaticVNode('<hr><p>Come up with the platform you want to implement. The platform may be about whatever you want, but the following requirements exist:</p><ul><li>Users should be able to create accounts</li><li>Users should be able to login to accounts</li><li>Users should be able to create at least one other type of resource (in addition to accounts) that belongs to an account</li></ul><p>Example of what the additional resource type could be:</p><ul><li>Blogposts for a platform hosting blogs</li><li>Diary entries for a platform hosting diaries</li><li>Movies for a platform where users can register which movies they&#39;ve watched</li></ul><p>If you want to have a more fun platform to implement, you probably need to have accounts + 2-3 additional resource types, but it is OK to just have one additional resource type.</p><p>Try to be creative and come up with an idea that solves a real world problem. For example, <em>standing in line and wait</em> is boring, maybe you can come up with a platform that somehow makes it fun? Or maybe a platform that entirely eliminates the need to stand in line and wait? Or maybe you know someone (football coach, friend at a company, etc.) that have some problem you can help them with by creating a platform (such as keeping track of which players attended which practice sessions, or who&#39;s responsible to bring fika to work each friday, etc.).</p><p>Users should be able to apply <abbr title="Create, Read, Update, Delete">CRUD</abbr> operations on at least accounts + 1 additional resource type on the platform, but how they do that through the frontend is up to you to decide. For example, to delete an account you may have a delete button either on the <em>View account</em> &quot;page&quot; or you may have a dedicated <em>Delete account</em> &quot;page&quot; that only contains the delete button. Users should also be able to login to the account they have created using a username and a password.</p><p>Describe your platform as detailed as possible in your project report. You should at least be able to complete most of the chapters <em>Introduction</em> and <em>Graphical User Interface</em> now.</p><h2 id="part-3-designing-the-rest-api" tabindex="-1"><a class="header-anchor" href="#part-3-designing-the-rest-api" aria-hidden="true">#</a> Part 3: Designing the REST API</h2><p>Before you start working on this part you are expected to read/view the following lectures:</p>', 11);
const _hoisted_20 = /* @__PURE__ */ createStaticVNode('<hr><p>Design the REST API you will implement on the backend and through which the frontend will communicate with it. By looking at the graphical user interface in your report you should be able to figure out which type of requests the frontend needs to be able to send to the backend to be able to function properly. For example, if the frontend have a &quot;page&quot; showing a list of all accounts, then your REST API should send back all accounts when it receives a <code>GET</code> request for <code>/accounts</code> (or similar), and if the frontend have a &quot;page&quot; showing all information about an account with a specific id, then your REST API should send back all information about an account with a <code>SPECIFIC_ID</code> when it receives a <code>GET</code> request for <code>/accounts/SPECIFIC_ID</code> (or similar).</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>You do not need to worry about login functionality (authentication and authorization) yet, that comes in Part 6.</p></div><p>Describe the REST API in your project report. Be as detailed as possible. Other programmers should understand how to use your REST API just by reading the specification for it in your report. This means that you must mention details such as which methods, URI:s, status codes, headers etc. that are used in your REST API for each type of request it can handle.</p><h2 id="part-4-implementing-the-rest-api-in-express" tabindex="-1"><a class="header-anchor" href="#part-4-implementing-the-rest-api-in-express" aria-hidden="true">#</a> Part 4: Implementing the REST API in Express</h2><p>Before you start working on this part you are expected to read/view the following lectures:</p>', 6);
const _hoisted_26 = /* @__PURE__ */ createStaticVNode('<hr><p>Implement the REST API you&#39;ve specified in your project report so far as an Express application that stores the resources in an SQLite database. Next you&#39;ll find some guiding steps to help you get started.</p><h3 id="getting-started-with-express" tabindex="-1"><a class="header-anchor" href="#getting-started-with-express" aria-hidden="true">#</a> Getting started with Express</h3><p>Start by creating a new folder to store the source code for your backend application:</p><ol><li>Open a terminal/shell/console, for example <em>Windows PowerShell</em> in Windows</li><li>Navigate to the folder where you want to create the root folder of your source code. Use the following commands: <ul><li><code>cd /projects</code> - Go into the sub-folder named <code>projects</code></li><li><code>cd ../</code>- Go back to the parent folder (you will probably not need to use this one)</li></ul></li><li>Create the root folder for your project&#39;s source code files by running the following command: <ul><li><code>mkdir my-backend</code> - Create a new folder named <code>my-backend</code> (use a better name)</li></ul></li><li>Go into the root folder by running the following command: <ul><li><code>cd my-backend</code> - Go into the sub-folder named <code>my-backend</code></li></ul></li><li>Create the <code>package.json</code> file (which keep tracks of which npm packages the project is using) by running the following command: <ul><li><code>npm init --yes</code></li></ul></li><li>Install the <code>express</code> package by running the following command: <ul><li><code>npm install express</code></li></ul></li></ol><p>Then open the root folder of your project in your code editor:</p><ol start="7"><li>Use the following command to open the root folder in Visual Studio Code: <ul><li><code>code .</code></li></ul></li></ol>', 7);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "app.js",
  -1
  /* HOISTED */
);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Hello, World",
  -1
  /* HOISTED */
);
const _hoisted_35 = {
  href: "http://localhost:3000/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_36 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\napp<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    response<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, World&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\napp<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 1);
const _hoisted_37 = {
  href: "http://localhost:3000/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_38 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "http://localhost:3000/",
  -1
  /* HOISTED */
);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "node",
  -1
  /* HOISTED */
);
const _hoisted_40 = /* @__PURE__ */ createStaticVNode('<ol start="8"><li>Run your web application using the following command: <ul><li><code>node app.js</code> – Use Node.js to execute the code in the file <code>app.js</code></li></ul></li></ol><p>If everything works, you should see the text <code>Hello, World</code> in your web browser.</p><p>If you started the web application through a terminal/shell/console, you can stop it from running by holding <kbd>CTRL</kbd> and pressing <kbd>C</kbd> (possibly twice) in the terminal/shell/console that started it. You can then change the code in <code>app.js</code>, and then run the node command to start your web application again.</p><p>Play around a little bit to learn the basics:</p><ul><li>Can you change the text that is sent back to the client?</li><li>Can you add a function handling GET requests for another URI and that sends back another text to the client?</li><li>What happens when a client sends a GET request for a URI that does not exist?</li></ul><h3 id="getting-started-with-sqlite" tabindex="-1"><a class="header-anchor" href="#getting-started-with-sqlite" aria-hidden="true">#</a> Getting started with SQLite</h3><p>The resources on the platform should be stored in a database. In this course we will use the relational database SQLite as our database. SQLite is most often not the best choice for big platforms with a lot of users, but it is easy to use and get started with, and you can later replace it with a more powerful database when needed.</p><p>SQLite stores the entire database in a single file and does not require any installation in addition to an npm package exposing an API you can use to communicate with it.</p>', 8);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "sqlite3",
  -1
  /* HOISTED */
);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "sqlite",
  -1
  /* HOISTED */
);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "async",
  -1
  /* HOISTED */
);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "await",
  -1
  /* HOISTED */
);
const _hoisted_52 = {
  href: "http://callbackhell.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_53 = /* @__PURE__ */ createStaticVNode('<ol><li>Open a terminal/shell/console and navigate to your project folder</li><li>Install the npm package <code>sqlite3</code> by running the following command: <ul><li><code>npm install sqlite3</code></li></ul></li></ol><p>Then use <code>sqlite3</code> in your backend to create a new database to store your resources in. Here are some guiding steps helping you with the accounts resources:</p><ol start="3"><li>Add the line <code>const sqlite3 = require(&#39;sqlite3&#39;)</code></li><li>Add the line <code>const db = new sqlite3.Database(&quot;my-database.db&quot;)</code></li><li>Use <code>db.run(&quot;Your SQL query&quot;)</code>to send a query to the database creating a table that can be used to store the accounts on the platform</li><li>Start the backend again. When you do this, the web application will send the query above to the database, which in turn will create the table to store the accounts in</li><li>Open your database file in DB Browser for SQLite and verify that the table has been created</li></ol><div class="custom-container warning"><p class="custom-container-title">Note</p><p>If you send a query like <code>CREATE TABLE accounts (...)</code>to the database, you will get an error when you later start your backend again and this query is sent to the database again, because the table <code>accounts</code> already exists in the database. Instead, you can send a query like <code>CREATE TABLE IF NOT EXISTS accounts (...)</code>, which will attempt to create the <code>accounts</code> table only if it does not already exist.</p></div><div class="custom-container warning"><p class="custom-container-title">Note</p><p>In the end the passwords should not be stored in plain text in the database, only their hash values, but to give you a gentle start we will not care about hashing them now.</p></div><p>Use DB Browser for SQLite to manually insert some accounts (remember to click on the <code>Write Changes</code> button in the GUI!). Then let&#39;s write the code letting clients fetch accounts (this might not be in line with what you&#39;ve written in your report, so you might need to modify the code below a little bit).</p><div class="custom-container warning"><p class="custom-container-title">The DB file might be locked!</p><p>When an app, such as DB Browser to SQLite and your Express app, opens a file, they might keep having the file open (i.e. they do not all read all the file content and then immediately close the file) for as long as they run. If so, no other app can write to the file. So, you might have problem if you try to open and work with the DB file in DB Browser for SQLite if your web app is running at the same time.</p></div><h3 id="fetching-all-accounts" tabindex="-1"><a class="header-anchor" href="#fetching-all-accounts" aria-hidden="true">#</a> Fetching all accounts</h3><p>To let clients fetch all accounts, they can send a GET request to <code>/accounts</code>. When the backend receives this request, it needs to fetch all accounts from the database and send them back in JSON format. To make that happen, you can use the code below:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ...</span>\napp<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/accounts&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// TODO: You should probably not fetch the password...</span>\n    <span class="token keyword">const</span> query <span class="token operator">=</span> <span class="token string">&quot;SELECT * FROM accounts ORDER BY username&quot;</span>\n    db<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>query<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> accounts</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token comment">// If something went wrong, send back status code 500.</span>\n            response<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n            <span class="token comment">// Otherwise, send back all accounts in JSON format.</span>\n            response<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>accounts<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">// ...</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Try sending a GET request to <code>/accounts</code> in Postman to verify that it works. Remember that you need to restart your backend each time you change the JavaScript code in it.</p><h3 id="fetching-a-single-account" tabindex="-1"><a class="header-anchor" href="#fetching-a-single-account" aria-hidden="true">#</a> Fetching a single account</h3><p>To let clients fetch an account with a specific id, they can send a GET request to <code>/accounts/THE_ID</code>, e.g. <code>/accounts/5</code>. When the backend receives this request, it needs to fetch the account with this id from the database and send it back in JSON format. To make that happen, you can use the code below:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ...</span>\napp<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/accounts/:id&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">const</span> id <span class="token operator">=</span> request<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id\n    <span class="token comment">// TODO: You should probably not fetch the password...</span>\n    <span class="token keyword">const</span> query <span class="token operator">=</span> <span class="token string">&quot;SELECT * FROM accounts WHERE id = ?&quot;</span>\n    <span class="token keyword">const</span> values <span class="token operator">=</span> <span class="token punctuation">[</span>id<span class="token punctuation">]</span>\n    db<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>query<span class="token punctuation">,</span> values<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> account</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token comment">// If something went wrong, send back status code 500.</span>\n            response<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>account<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token comment">// If no account with that id existed.</span>\n            response<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n            <span class="token comment">// Otherwise, send back the account in JSON format.</span>\n            response<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>account<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">// ...</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Try sending a GET request to <code>/accounts/1</code> and <code>/accounts/6876868</code> in Postman to verify that it works. Remember that you need to restart your backend each time you change the JavaScript code in it.</p><h3 id="creating-accounts" tabindex="-1"><a class="header-anchor" href="#creating-accounts" aria-hidden="true">#</a> Creating accounts</h3><p>To let clients create new accounts, they can send a POST request to <code>/accounts</code>, and in the body pass information about the account to be created in JSON format, e.g. <code>{&quot;username&quot;: &quot;Alice&quot;, &quot;password&quot;: &quot;abc123&quot;}</code>. They also need to use the <code>Content-Type</code> header with the value <code>application/json</code>. When the backend receives this request, it needs to read the information from the body of the request and then insert that information as a new account in the database, and then send back a response to the client.</p><p>To be able to read bodies written in JSON format, you need to add the middleware function <code>express.json()</code>:</p><ol><li>Add the line <code>app.use(express.json())</code></li></ol><p>Then you can let clients create new accounts using the following code:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ...</span>\napp<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&quot;/accounts&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">const</span> account <span class="token operator">=</span> request<span class="token punctuation">.</span>body\n    <span class="token keyword">const</span> query <span class="token operator">=</span> <span class="token string">&quot;INSERT INTO accounts (username, password) VALUES (?, ?)&quot;</span>\n    <span class="token keyword">const</span> values <span class="token operator">=</span> <span class="token punctuation">[</span>account<span class="token punctuation">.</span>username<span class="token punctuation">,</span> account<span class="token punctuation">.</span>password<span class="token punctuation">]</span>\n    db<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>query<span class="token punctuation">,</span> values<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            response<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n            <span class="token keyword">const</span> id <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastID\n            response<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&quot;Location&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/accounts/&quot;</span><span class="token operator">+</span>id<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">// ...</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Try adding Update and Delete operations for accounts on your own:</p><ul><li>To update a resource, clients should send a PUT request, the URI should identify which resource that should be updated, and the body should contain the updated resource. Use <code>app.put(&quot;...&quot;, function(...){ ... })</code> to listen for PUT requests</li><li>To delete a resource, clients should send a DELETE request, and the URI should identify which resource that should be deleted. Use <code>app.delete(&quot;...&quot;, function(...){ ... })</code> to listen for DELETE requests</li></ul><p>Then add the other operations for the other type of resources you have. Note that we yet don&#39;t bother about authentication and authorization, so all clients should for now be allowed to whatever they want.</p><p>Don&#39;t forget to describe in your project report how the backend has been implemented.</p><h2 id="part-5-implementing-the-frontend" tabindex="-1"><a class="header-anchor" href="#part-5-implementing-the-frontend" aria-hidden="true">#</a> Part 5: Implementing the Frontend</h2><p>Before you start working on this part you are expected to read/view the following lectures:</p>', 27);
const _hoisted_80 = /* @__PURE__ */ createBaseVNode(
  "hr",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_81 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Implement the frontend application in Vue.js. You will not get any help with how to use Vue.js here (use what you learned from the laboratory work), but we will give you some instructions on how to communicate with the backend through its REST API.",
  -1
  /* HOISTED */
);
const _hoisted_82 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "custom-container warning" },
  [
    /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "Remember"),
    /* @__PURE__ */ createBaseVNode("p", null, "The frontend does not yet contain login functionality, so you can't implement that part of the frontend yet.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_83 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Don't forget to describe in your project report how the frontend has been implemented.",
  -1
  /* HOISTED */
);
const _hoisted_84 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "enabling-cors-on-the-backend",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#enabling-cors-on-the-backend",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Enabling CORS on the backend")
  ],
  -1
  /* HOISTED */
);
const _hoisted_85 = {
  href: "https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_86 = {
  href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_87 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "*",
  -1
  /* HOISTED */
);
const _hoisted_88 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>\n<span class="token comment">//...</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token comment">// Enable CORS.</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n	\n	<span class="token comment">// Allow client-side JS from the following websites to send requests to us:</span>\n	<span class="token comment">// (not optimal, for better security, change * to the URI of your frontend)</span>\n	response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Origin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span>\n	\n	<span class="token comment">// Allow client-side JS to send requests with the following methods:</span>\n	response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Methods&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span>\n	\n	<span class="token comment">// Allow client-side JS to send requests with the following headers:</span>\n	<span class="token comment">// (needed for the Authorization and Content-Type headers)</span>\n	response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Headers&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span>\n	\n	<span class="token comment">// Allow client-side JS to read the following headers in the response:</span>\n	<span class="token comment">// (in addition to Cache-Control, Content-Language, Content-Type</span>\n	<span class="token comment">// Expires, Last-Modified, Pragma).</span>\n	<span class="token comment">// (needed for the Location header)</span>\n	response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Expose-Headers&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span>\n	\n	<span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n	\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">// ...</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 1);
const _hoisted_89 = { class: "custom-container warning" };
const _hoisted_90 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Note!",
  -1
  /* HOISTED */
);
const _hoisted_91 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "*",
  -1
  /* HOISTED */
);
const _hoisted_92 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Access-Control-Allow-Origin",
  -1
  /* HOISTED */
);
const _hoisted_93 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  'response.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type")',
  -1
  /* HOISTED */
);
const _hoisted_94 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "*",
  -1
  /* HOISTED */
);
const _hoisted_95 = {
  href: "https://bugzilla.mozilla.org/show_bug.cgi?id=1309358",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_96 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "*",
  -1
  /* HOISTED */
);
const _hoisted_97 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "*",
  -1
  /* HOISTED */
);
const _hoisted_98 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "sending-http-requests-from-the-frontend",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#sending-http-requests-from-the-frontend",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Sending HTTP requests from the frontend")
  ],
  -1
  /* HOISTED */
);
const _hoisted_99 = {
  href: "https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_100 = {
  href: "https://davidwalsh.name/fetch",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_101 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "fetch()",
  -1
  /* HOISTED */
);
const _hoisted_102 = /* @__PURE__ */ createStaticVNode('<h4 id="xmlhttprequest" tabindex="-1"><a class="header-anchor" href="#xmlhttprequest" aria-hidden="true">#</a> <code>XMLHttpRequest</code></h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token comment">// Specify method and URI.</span>\nrequest<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;http://localhost:3000/accounts&quot;</span><span class="token punctuation">)</span>\n\n<span class="token comment">// Add headers to the request.</span>\nrequest<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;application/json&quot;</span><span class="token punctuation">)</span>\n<span class="token comment">// ...</span>\n\n<span class="token comment">// Add a callback function that will be called when</span>\n<span class="token comment">// we receive back the response.</span>\nrequest<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">const</span> statusCode <span class="token operator">=</span> request<span class="token punctuation">.</span>status\n    <span class="token keyword">const</span> bodyAsString <span class="token operator">=</span> request<span class="token punctuation">.</span>responseText\n    <span class="token keyword">const</span> bodyAsJsObject <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>bodyAsString<span class="token punctuation">)</span>\n    <span class="token keyword">const</span> locationHeader <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getResponseHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Location&quot;</span><span class="token punctuation">)</span>\n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// Add a callback function that will be called if</span>\n<span class="token comment">// the communication with the server fails.</span>\nrequest<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// Request failed :(</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// Specify body and send it.</span>\n<span class="token keyword">const</span> accountToBeCreated <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&quot;abc123&quot;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> bodyAsString <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>accountToBeCreated<span class="token punctuation">)</span>\nrequest<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>bodyAsString<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="fetch" tabindex="-1"><a class="header-anchor" href="#fetch" aria-hidden="true">#</a> <code>fetch()</code></h4>', 3);
const _hoisted_105 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "XMLHttpRequest",
  -1
  /* HOISTED */
);
const _hoisted_106 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "fetch()",
  -1
  /* HOISTED */
);
const _hoisted_107 = {
  href: "https://javascript.info/promise-chaining",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_108 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "fetch()",
  -1
  /* HOISTED */
);
const _hoisted_109 = {
  href: "https://developers.google.com/web/updates/2015/03/introduction-to-fetch",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_110 = /* @__PURE__ */ createStaticVNode('<p>Below is an example of how to use <code>fetch()</code> without chaining promises.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> accountToBeCreated <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&quot;abc123&quot;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> bodyAsString <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>accountToBeCreated<span class="token punctuation">)</span>\n\n<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;http://localhost:3000/accounts&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">body</span><span class="token operator">:</span> bodyAsString\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    \n    <span class="token keyword">const</span> statusCode <span class="token operator">=</span> response<span class="token punctuation">.</span>status\n    <span class="token keyword">const</span> locationHeader <span class="token operator">=</span> response<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;Location&quot;</span><span class="token punctuation">)</span>\n    \n    response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">bodyAsJsObject</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token comment">// Handle the body in the response here ...</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token comment">// Handle errors with the body of the response here...</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    \n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// Handle errors with sending the request/receiving the response here...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Below is an example of how to use <code>fetch()</code> with chaining promises.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> accountToBeCreated <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&quot;abc123&quot;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> bodyAsString <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>accountToBeCreated<span class="token punctuation">)</span>\n\n<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;http://localhost:3000/accounts&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">body</span><span class="token operator">:</span> bodyAsString\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">const</span> statusCode <span class="token operator">=</span> response<span class="token punctuation">.</span>status\n    <span class="token keyword">const</span> locationHeader <span class="token operator">=</span> response<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;Location&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">bodyAsJsObject</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// Handle the body in the response here ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// Handle all different type of errors here...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="fetch-with-async-and-await" tabindex="-1"><a class="header-anchor" href="#fetch-with-async-and-await" aria-hidden="true">#</a> <code>fetch()</code> with async and await</h4><p>The biggest benefit with promises is that we can use the <code>async</code> and <code>await</code> keywords in JavaScript instead of chaining them. This way, we end up writing code that looks to run synchronously (and hence very easy to read ☺), but it will run asynchronously (hence not blocking ☺).</p>', 6);
const _hoisted_116 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "async",
  -1
  /* HOISTED */
);
const _hoisted_117 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "await",
  -1
  /* HOISTED */
);
const _hoisted_118 = {
  href: "https://medium.com/javascript-in-plain-english/async-await-javascript-5038668ec6eb",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_119 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "async",
  -1
  /* HOISTED */
);
const _hoisted_120 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "await",
  -1
  /* HOISTED */
);
const _hoisted_121 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">createAccount</span><span class="token punctuation">(</span><span class="token parameter">accountToBeCreated</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    \n    <span class="token keyword">const</span> bodyAsString <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>accountToBeCreated<span class="token punctuation">)</span>\n    \n    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;http://localhost:3000/accounts&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">body</span><span class="token operator">:</span> bodyAsString\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    \n    <span class="token keyword">const</span> statusCode <span class="token operator">=</span> response<span class="token punctuation">.</span>status\n    <span class="token keyword">const</span> locationHeader <span class="token operator">=</span> response<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;Location&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">const</span> bodyAsJsObject <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    \n    <span class="token keyword">return</span> bodyAsObject\n    \n<span class="token punctuation">}</span>\n\n<span class="token keyword">try</span><span class="token punctuation">{</span>\n    <span class="token keyword">const</span> bodyAsObject <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createAccount</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&quot;abc123&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// Called when something goes wrong :(</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="part-6-adding-login-to-the-rest-api" tabindex="-1"><a class="header-anchor" href="#part-6-adding-login-to-the-rest-api" aria-hidden="true">#</a> Part 6: Adding Login to the REST API</h2><p>Before you start working on this part you are expected to read/view the following lectures:</p>', 3);
const _hoisted_124 = /* @__PURE__ */ createBaseVNode(
  "hr",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_125 = {
  href: "https://oauth.net/2/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_126 = {
  href: "https://openid.net/connect/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_127 = /* @__PURE__ */ createStaticVNode('<ul><li>Add one request clients can use to &quot;login&quot; to an account (to obtain an Access Token and an ID Token) <ul><li>Clients also need to know which claims the ID Token contains</li></ul></li><li>Describe how clients can pass the Access Token to the backend in requests</li><li>Describe which clients that are allowed to perform which operations in the API</li></ul><p>You only need to support the <em>Authorization Grant</em> called <em>Resource Owner Password Credentials</em>. Follow the details in the specification as much as possible.</p><div class="custom-container warning"><p class="custom-container-title">Report Feedback</p><p>The quality of your report will affect the grade on your project quite much. From one point of view, your grade should only be based on what is written in the report, and your source code will only be used to verify that you actually have implemented it as it is described in the report. So it&#39;s important that your report is of good quality.</p><p>During the lab sessions, we encourage you to discuss your report with the teacher. You can&#39;t expect the teacher to read all your text, but we strongly advice you to have higher level of discussions about the report (such as structure and discussions around figures).</p></div><h2 id="part-7-implementing-login-in-express" tabindex="-1"><a class="header-anchor" href="#part-7-implementing-login-in-express" aria-hidden="true">#</a> Part 7: Implementing Login in Express</h2><p>Implement authentication and authorization in the Express application the way you describe it in the previous part. You should also change the code to store hash values of the users passwords, instead of storing them as plain text. Here we give you some hints about how to accomplish this.</p><h3 id="adding-login-creating-tokens" tabindex="-1"><a class="header-anchor" href="#adding-login-creating-tokens" aria-hidden="true">#</a> Adding login/Creating tokens</h3><div class="custom-container tip"><p class="custom-container-title">OAuth 2.0 implementation not required!</p><p>It is good to implement authorization per a specification, such as OAuth 2.0. But to simplify for the students that take this course this year, following the OAuth 2.0 specification is not a must. For example:</p><ul><li>OAuth 2.0 specifies that the login request should use the data format <code>application/x-www-form-urlencoded</code>, but using <code>application/json</code>, as you do for all other POST request, is OK</li><li>You don&#39;t need to worry about <code>grant_type</code> in the login request (let the client just send a username and a password)</li><li>You don&#39;t need to worry about sending back responses that conform to the OAuth 2.0 specification (use whichever status codes and response bodies you think make most sense, but you must send back an access token and an ID token on a successful login)</li><li>When the client sends the Access Token to the server, the client can pass it directly in the Authorization header (skip <code>Bearer </code>)</li></ul><p>The instructions in the rest of this sub-chapter is for implementing authorization per the OAuth 2.0 specification, and they are left as they are for the students who want implement it that way. But those who prefer to do it with the simplifications mentioned above, that is OK too.</p></div><p>According to the OAuth 2.0 specification, when a user logs in with a username and password, they should send it to the server in the body of the request in the data format <code>application/x-www-form-urlencoded</code>. This is the same data format that is used in the querystring, e.g. <code>variable1=value1&amp;variable2=value2&amp;...</code>. When the backend receives such a request, it needs to parse the body written in that data format. This can be added to Express using the middleware function <code>express.urlencoded()</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token literal-property property">extended</span><span class="token operator">:</span> <span class="token boolean">false</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When you have added this middleware, <code>request.body</code> will be populated with information from the body, e.g.:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Body: variable1=value1&amp;variable2=value2</span>\napp<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/tokens&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">const</span> variable1 <span class="token operator">=</span> request<span class="token punctuation">.</span>body<span class="token punctuation">.</span>variable1 <span class="token comment">// value1</span>\n    <span class="token keyword">const</span> variable2 <span class="token operator">=</span> request<span class="token punctuation">.</span>body<span class="token punctuation">.</span>variable2 <span class="token comment">// value2</span>\n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You need to check that the body contains a variable called <code>grant_type</code> with the value <code>password</code>. If that&#39;s not the case, then the user tries to login in one of the other ways described in OAuth 2.0 that we don&#39;t support, and we should send back an error response (see the specification for the details).</p><p>If <code>grant_type</code> has the value <code>password</code>, then the body should also contain the variables <code>username</code> and <code>password</code>. If that&#39;s not the case, then something is wrong with the request and we should send back an error response (see the specification for the details).</p><p>If <code>grant_type</code> has the value <code>password</code> and the body also contains the variables <code>username</code> and <code>password</code>, then we need to fetch the account from the database with the given <code>username</code> and see if the <code>password</code> matches. If no account with that username exists, or if the password is wrong, we should send back an error response (see the specification for the details).</p>', 14);
const _hoisted_141 = {
  href: "https://jwt.io/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_142 = {
  href: "https://www.npmjs.com/package/jsonwebtoken",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_143 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "jsonwebtoken",
  -1
  /* HOISTED */
);
const _hoisted_144 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "npm install jsonwebtoken",
  -1
  /* HOISTED */
);
const _hoisted_145 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> jwt <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;jsonwebtoken&#39;</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> jwtSecret <span class="token operator">=</span> <span class="token string">&quot;some_random_characters&quot;</span>\n\n<span class="token keyword">const</span> dataToPutInTheToken <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token comment">// AKA &quot;claims&quot; and &quot;payload&quot;.</span>\n    <span class="token literal-property property">country</span><span class="token operator">:</span> <span class="token string">&quot;Sweden&quot;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> accessToken <span class="token operator">=</span> jwt<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span>dataToPutInTheToken<span class="token punctuation">,</span> jwtSecret<span class="token punctuation">)</span> <span class="token comment">// &quot;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3VudHJ5IjoiU3dlZGVuIn0.k6rz1VHMIg3YvFpm4JMy78RUnFBUCPQPRoRXa2HlRjs&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the Access Token you probably want to put something that identifies the user, such as the user&#39;s account id, and then send it back to the client (see the specification for the details).</p>', 2);
const _hoisted_147 = {
  href: "https://jwt.io/#debugger-io",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_148 = /* @__PURE__ */ createStaticVNode('<h3 id="receiving-and-extracting-tokens" tabindex="-1"><a class="header-anchor" href="#receiving-and-extracting-tokens" aria-hidden="true">#</a> Receiving and extracting tokens</h3><p>When a client in the future sends requests to the backend and need to prove that she&#39;s the owner of a specific account, she can pass the Access Token in the <code>Authorization</code> header, e.g.:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3VudHJ5IjoiU3dlZGVuIn0.k6rz1VHMIg3YvFpm4JMy78RUnFBUCPQPRoRXa2HlRjs\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>When the backend receives that request it needs to extract the Access Token from this header and then extract the data from the token that you put inside of it before. You can do that like this:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> jwt <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;jsonwebtoken&#39;</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> jwtSecret <span class="token operator">=</span> <span class="token string">&quot;some_random_characters&quot;</span> <span class="token comment">// Same secret as before.</span>\n\napp<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/some-protected-resource&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    \n    <span class="token keyword">let</span> dataInToken <span class="token operator">=</span> <span class="token keyword">null</span>\n    \n    <span class="token keyword">try</span><span class="token punctuation">{</span>\n        <span class="token keyword">const</span> authorizationHeader <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;Authorization&quot;</span><span class="token punctuation">)</span> <span class="token comment">// E.g. &quot;Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3VudHJ5IjoiU3dlZGVuIn0.k6rz1VHMIg3YvFpm4JMy78RUnFBUCPQPRoRXa2HlRjs&quot;</span>\n        <span class="token keyword">const</span> accessToken <span class="token operator">=</span> authorizationHeader<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token string">&quot;Bearer &quot;</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token comment">// E.g. &quot;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3VudHJ5IjoiU3dlZGVuIn0.k6rz1VHMIg3YvFpm4JMy78RUnFBUCPQPRoRXa2HlRjs&quot;</span>\n        dataInToken <span class="token operator">=</span> jwt<span class="token punctuation">.</span><span class="token function">verify</span><span class="token punctuation">(</span>accessToken<span class="token punctuation">,</span> jwtSecret<span class="token punctuation">)</span> <span class="token comment">// E.g. {country: &quot;Sweden&quot;}</span>\n    <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token comment">// Access token not present or invalid.</span>\n    <span class="token punctuation">}</span>\n    \n    <span class="token keyword">if</span><span class="token punctuation">(</span>dataInToken<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token comment">// We received a valid Access Token :D</span>\n    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n        <span class="token comment">// We didn&#39;t receive an Access Token or the received Access Token was invalid :(</span>\n    <span class="token punctuation">}</span>\n    \n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After we have extracted the data from the token we can figure out to which account the user logged in to before, and then figure out if the user is authorized to make the request or not.</p>', 6);
const _hoisted_154 = {
  href: "https://jwt.io/#debugger-io",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_155 = /* @__PURE__ */ createStaticVNode('<div class="custom-container tip"><p class="custom-container-title">Avoiding copy-pasting code</p><p>Extracting the Access Token from the <code>Authorization</code> header like that and then extract the data from the Access Token is something you want to do in many of the requests your backend receives, so instead of copy-pasting all of this code it is better to put it in a function and then call the function when you need to extract it (or even better: use a middleware function).</p></div><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>One should rather use <code>jwt.sign()</code> and <code>jwt.verify()</code> asynchronously by providing a callback function, but to simplify we used them synchronously instead (they send back a return value). By using them synchronously they are blocking, so concurrent incoming HTTP requests are queued instead of handled immediately (the calls to <code>jwt.sign()</code> and <code>jwt.verify()</code> takes many milliseconds to execute). The call to these functions with a callback function are not blocking (the long running operations are executed in the background/another thread), and therefor better to use.</p><p>You can probably also find another JWT package that are built on promises instead of callback functions. That would be even better to use.</p></div><h3 id="adding-openid-connect" tabindex="-1"><a class="header-anchor" href="#adding-openid-connect" aria-hidden="true">#</a> Adding OpenID Connect</h3>', 3);
const _hoisted_158 = {
  href: "https://openid.net/connect/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_159 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "You get to decide what you want to put in your ID Token, but follow the specification as much as possible.",
  -1
  /* HOISTED */
);
const _hoisted_160 = {
  href: "https://jwt.io/#debugger-io",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_161 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "hashing-passwords",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#hashing-passwords",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(),
    /* @__PURE__ */ createBaseVNode("s", null, "Hashing passwords")
  ],
  -1
  /* HOISTED */
);
const _hoisted_162 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "custom-container tip" },
  [
    /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "Not required!"),
    /* @__PURE__ */ createBaseVNode("p", null, [
      /* @__PURE__ */ createTextVNode("Storing passwords in plain text in the database is not good practice. If a hacker comes over the database, she can find all out users' passwords in plain text. To avoid that, one should hash the passwords, and only store the hash value of them. BUT, to facilitate for you who take this course this year, you don't have to do this part of the project. So what's written in this sub-chapter ("),
      /* @__PURE__ */ createBaseVNode("code", null, "Hashing passwords"),
      /* @__PURE__ */ createTextVNode(") is optional to implement.")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_163 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Storing passwords in plain text is a bad idea. Users often use the same password on different platforms, and if their passwords on our platform are leaked (by accident or by a hacker that has manage to hack our platform), anyone can login on their accounts on the other platforms they are using. Quite bad!",
  -1
  /* HOISTED */
);
const _hoisted_164 = {
  href: "https://en.wikipedia.org/wiki/Bcrypt",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_165 = {
  href: "https://en.wikipedia.org/wiki/Brute-force_attack",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_166 = {
  href: "https://www.npmjs.com/package/bcryptjs",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_167 = /* @__PURE__ */ createStaticVNode('<ol><li>Download the npm package to your backend application: <ul><li>In the root folder of your backend application, run the command <code>npm install bcryptjs</code></li></ul></li><li>When creating a new account, hash the user&#39;s password using:</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> bcrypt <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;bcryptjs&#39;</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> hashingRounds <span class="token operator">=</span> <span class="token number">8</span> <span class="token comment">// How slow it should be (the higher number the slower).</span>\n\n<span class="token keyword">const</span> passwordToHash <span class="token operator">=</span> <span class="token string">&quot;abc123&quot;</span>\n\n<span class="token keyword">const</span> hashValue <span class="token operator">=</span> bcrypt<span class="token punctuation">.</span><span class="token function">hashSync</span><span class="token punctuation">(</span>passwordToHash<span class="token punctuation">,</span> hashingRounds<span class="token punctuation">)</span> <span class="token comment">// &quot;$2y$08$qc1V89V0GAstCI/NAMM4HO4DcP9Jwgk/h/WX2JsgvTIZqXRw6vxAK&quot;</span>\n\n<span class="token comment">// Store hashValue with the user&#39;s account in the database instead of passwordToHash.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>When the user logs in, fetch the user&#39;s <code>hashValue</code> from the database and see if the provided password matches that one:</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> bcrypt <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;bcryptjs&#39;</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> usersEnteredPassword <span class="token operator">=</span> <span class="token string">&quot;abc123&quot;</span>\n<span class="token keyword">const</span> storedHashValue <span class="token operator">=</span> <span class="token string">&quot;$2y$08$qc1V89V0GAstCI/NAMM4HO4DcP9Jwgk/h/WX2JsgvTIZqXRw6vxAK&quot;</span> <span class="token comment">// Fetched from database.</span>\n\n<span class="token keyword">if</span><span class="token punctuation">(</span>bcrypt<span class="token punctuation">.</span><span class="token function">compareSync</span><span class="token punctuation">(</span>usersEnteredPassword<span class="token punctuation">,</span> storedHashValue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// Correct password.</span>\n<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n    <span class="token comment">// Wrong password.</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When you&#39;re done, use Postman to create some new accounts and then try to login to these.</p><div class="custom-container warning"><p class="custom-container-title">Remember</p><p>The old accounts in your database contains the password in plain text, so you should not be able to login to them anymore. Feel free to delete these.</p></div>', 6);
const _hoisted_173 = { class: "custom-container warning" };
const _hoisted_174 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "Note!",
  -1
  /* HOISTED */
);
const _hoisted_175 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "To simplify, many things you should think of for a real platform has been ignored in the instructions above, but here are short descriptions of these things for the curious ones:",
  -1
  /* HOISTED */
);
const _hoisted_176 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "bcrypt",
  -1
  /* HOISTED */
);
const _hoisted_177 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "bcryptjs",
  -1
  /* HOISTED */
);
const _hoisted_178 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "bcryptjs",
  -1
  /* HOISTED */
);
const _hoisted_179 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "bcrypt",
  -1
  /* HOISTED */
);
const _hoisted_180 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "bcrypt",
  -1
  /* HOISTED */
);
const _hoisted_181 = {
  href: "https://github.com/kelektiv/node.bcrypt.js#dependencies",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_182 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "bcrypt",
  -1
  /* HOISTED */
);
const _hoisted_183 = /* @__PURE__ */ createStaticVNode("<p>One should rather use the asynchronous functions <code>hash()</code> and <code>compare()</code> instead of the synchronous <code>hashSync()</code> and <code>compareSync()</code>. The synchronous functions are easier to use (return values instead of callback functions), but they are blocking, so concurrent incoming HTTP requests are queued instead of handled immediately. The asynchronous functions compute the hash values in the background/in another thread, so they don&#39;t have this shortage.</p><p>Both <code>bcrypt</code> and <code>bcryptjs</code> supports using promises, so rather use these instead of using callbacks.</p>", 2);
const _hoisted_185 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "8",
  -1
  /* HOISTED */
);
const _hoisted_186 = {
  href: "https://security.stackexchange.com/a/3993/70743",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_187 = /* @__PURE__ */ createStaticVNode('<h2 id="part-8-adding-login-to-the-frontend" tabindex="-1"><a class="header-anchor" href="#part-8-adding-login-to-the-frontend" aria-hidden="true">#</a> Part 8: Adding Login to the Frontend</h2><p>Now that the backend have login functionality through Access Tokens and ID Tokens, use this login functionality in the frontend application. When you&#39;re done, users should only be able to do what they should be able to. For example, a user should not be able to delete another user&#39;s account, or similar.</p><p>You are recommended to keep track of whether the user is logged in or not the same way as you did in the lab, i.e. in add a <code>user</code> object to <code>App.vue</code> and pass this as a props to your other Vue components.</p><p>When the user successfully logs in you get back an ID Token with information about the user (it&#39;s id, username, etc.). You need to open up this JWT and read out the information from it. You can&#39;t do that with the npm package <code>jsonwebtoken</code> (that you used in your backend), because it only works in Node.js, and not in web browsers. Instead, you can use the npm package <code>jwt-decode</code>:</p><ol><li>In the root folder of your frontend application, run the command <code>npm install jwt-decode</code>.</li><li>To read out the data from the ID Token, use the function this npm package consists of:</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> jwtDecode <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;jwt-decode&#39;</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> idToken <span class="token operator">=</span> <span class="token string">&quot;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsInByZWZlcnJlZF91c2VybmFtZSI6IkFsaWNlIn0.3Xp7iQkttgTE6hpuT28LFdZ7EYWHlPndqdaWoIzTr9A&quot;</span>\n\n<span class="token keyword">const</span> dataInIdToken <span class="token operator">=</span> <span class="token function">jwtDecode</span><span class="token punctuation">(</span>idToken<span class="token punctuation">)</span> <span class="token comment">// E.g. {sub: 4, preferred_username: &quot;Alice&quot;} </span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="part-9-presentation" tabindex="-1"><a class="header-anchor" href="#part-9-presentation" aria-hidden="true">#</a> Part 9: Presentation</h2>', 7);
const _hoisted_194 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "ONE",
  -1
  /* HOISTED */
);
const _hoisted_195 = {
  href: "https://ju.instructure.com/courses/6797/groups",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_196 = /* @__PURE__ */ createStaticVNode('<p>The reason for the presentation is two-folded:</p><ul><li>You get some practice in presenting your work, which is a very important skill in your future professional career</li><li>You get to see other platforms that you should be able to implement yourself</li></ul><p>At the presentation you should simply tell the audience what problem you try to solve by letting users use your platform, and then show how users would solve their problem by using the platform (i.e. demonstrate how the platform can be used). You should not show any code nor explain any implementation details, but feel free to show slides if you want.</p><p>The best way to show what a user can do on the platform is by having one of you speaking and telling the other one what to do (e.g. <em>Create a new account for me</em>), and then the other shows how to do that.</p><p>To be allowed to present your work your you must at least be done with Part 5.</p><p>You may use at most 10 minutes for your presentation. If you need more than this to show all features, then skip some of them. If your presentation takes just 3 minutes, that could be OK as well. Don&#39;t start talking about irrelevant things just to make the presentation longer.</p><p>If you can&#39;t present your work on your own laptop, email the course coordinator and he will help you.</p><p>Your presentation will not be graded; consider it as (mandatory) practice.</p><h2 id="part-10-grade-4-and-5" tabindex="-1"><a class="header-anchor" href="#part-10-grade-4-and-5" aria-hidden="true">#</a> Part 10: Grade 4 and 5</h2>', 9);
const _hoisted_205 = /* @__PURE__ */ createStaticVNode('<h3 id="sdk-required-for-grade-4" tabindex="-1"><a class="header-anchor" href="#sdk-required-for-grade-4" aria-hidden="true">#</a> SDK (required for grade 4)</h3><p>Create an SDK other programmers can use to communicate with your backend from their client-side JavaScript code. Then also use it in your own frontend. Also update the report to reflect this.</p><h3 id="supporting-multiple-data-formats-required-for-grade-4" tabindex="-1"><a class="header-anchor" href="#supporting-multiple-data-formats-required-for-grade-4" aria-hidden="true">#</a> <s>Supporting Multiple Data Formats (required for grade 4)</s></h3><div class="custom-container tip"><p class="custom-container-title">Not required!</p><p>To facilitate for you who take this course this year, you don&#39;t have to do this part of the project to be able to get grade 4 and 5. So what&#39;s written in this sub-chapter (<code>Supporting Multiple Data Formats (required for grade 4)</code>) is optional to implement.</p></div><p>Add support for another data format in addition to JSON (+ www-form-urlencoded for logging in). This should work in both requests and responses, so when you receive a request you need to look at the <code>Content-Type</code> header to figure out which format the body in the request is written in, and you also need to look at the <code>Accept</code> header to figure out in which format you should send back the body in the response in.</p><p>Example of data formats you can support:</p><ul><li>XML</li><li>YAML</li></ul>', 7);
const _hoisted_212 = {
  href: "https://www.npmjs.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_213 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Also update your report to reflect this.",
  -1
  /* HOISTED */
);
const _hoisted_214 = /* @__PURE__ */ createBaseVNode(
  "h4",
  {
    id: "guidelines-parsing-the-body-of-incoming-http-request",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#guidelines-parsing-the-body-of-incoming-http-request",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Guidelines parsing the body of incoming HTTP request")
  ],
  -1
  /* HOISTED */
);
const _hoisted_215 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Content-Type",
  -1
  /* HOISTED */
);
const _hoisted_216 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "application/yaml",
  -1
  /* HOISTED */
);
const _hoisted_217 = /* @__PURE__ */ createStaticVNode('<div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>You need to do this for all incoming HTTP requests with a body, so the best way to implement it is as a middleware function. In your middleware function, after you have obtained the resource from the body as a JavaScript object, assign it to <code>request.body</code> so your ordinary request handler functions in <code>app.post(...)</code> and <code>app.put(...)</code> can obtain the resource through <code>request.body</code>.</p><p>Or, maybe you can find an npm package that exports a middleware function doing all of this for you already?</p></div><h4 id="sending-back-responses-in-correct-data-format" tabindex="-1"><a class="header-anchor" href="#sending-back-responses-in-correct-data-format" aria-hidden="true">#</a> Sending back responses in correct data format</h4><p>You can&#39;t always call <code>response.json(theResource)</code> to send back the resource. You should only use <code>response.json(...)</code> if the <code>Accept</code> header in the request is <code>application/json</code>. If the <code>Accept</code> header instead is <code>application/yaml</code>, you should send it back in YAML format. To convert the resource to a string with YAML code, use a suitable npm package. To send back the string with the YAML code, you can use <code>response.end(&quot;THE YAML CODE&quot;)</code>.</p><div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>You need to do this for all outgoing HTTP responses with a body, so one way to implement it is as a function doing something like this:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token comment">/* Accept header in request is application/json */</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// Send back the resource in JSON format.</span>\n<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token comment">/* Accept header in request is application/yaml */</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// Send back the resource in YAML format.</span>\n<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n    <span class="token comment">// Send back the resource in your chosen default format.</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="third-party-authentication-required-for-grade-5" tabindex="-1"><a class="header-anchor" href="#third-party-authentication-required-for-grade-5" aria-hidden="true">#</a> Third-Party Authentication (required for grade 5)</h3><p>Add third-party authentication to your application so users can login on your platform with their Google account (or whichever third-party you choose to use) instead of using a username and password. You need to implement this in your backend application and then use it in your frontend application as well.</p><p>Also update your report to reflect this.</p><h2 id="part-11-final-submission" tabindex="-1"><a class="header-anchor" href="#part-11-final-submission" aria-hidden="true">#</a> Part 11: Final submission</h2>', 8);
const _hoisted_225 = {
  href: "https://ju.instructure.com/courses/6797/assignments/35559",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_226 = /* @__PURE__ */ createStaticVNode("<ul><li>Your report as a PDF file</li><li>The source code for the frontend app as a ZIP file: <ol><li>Delete the <code>node_modules</code> folder in the app&#39;s root folder</li><li>Create a ZIP file of the app&#39;s root folder</li></ol></li><li>The source code for the backend app as a ZIP file: <ol><li>Delete the <code>node_modules</code> folder in the app&#39;s root folder</li><li>Create a ZIP file of the app&#39;s root folder</li></ol></li></ul><p>The examiner will only look at your latest submission here, so be sure to upload all files in one and the same submission, and not as three separate submissions.</p><p>It is very important that your two apps can be started by:</p><ol><li>Unzipping the ZIP files</li><li>In respective app&#39;s root folder running the following two commands: <ol><li><code>npm install</code></li><li><code>node app.js</code> or <code>npm run dev</code> (or whatever)</li></ol></li></ol><p>If this does not work, the teacher will grade your work <em>Revision required</em>, and you need to submit your work again at the next examination occasion, so double check that this work yourself before you submit your work!</p>", 5);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("Start by finding a classmate to work with. Then "),
      createBaseVNode("a", _hoisted_5, [
        createTextVNode("join a Project Group on Canvas"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" to let the examiner know who you're working with. If you can't find a classmate to work with, email the course coordinator at "),
      _hoisted_6,
      createTextVNode(" and he will pair you with another student in the same situation.")
    ]),
    _hoisted_7,
    _hoisted_8,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/report-writing/" }, {
          default: withCtx(() => [
            createTextVNode("Report Writing")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/uml-use-case-diagrams/" }, {
          default: withCtx(() => [
            createTextVNode("UML Use-Case Diagrams")
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    _hoisted_9,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/internet-basics/" }, {
          default: withCtx(() => [
            createTextVNode("Internet Basics")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/http-and-web-applications/" }, {
          default: withCtx(() => [
            createTextVNode("HTTP and Web Applications")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/rest-api-basics/" }, {
          default: withCtx(() => [
            createTextVNode("REST API Basics")
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    _hoisted_20,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/node-js/" }, {
          default: withCtx(() => [
            createTextVNode("Node.js")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/web-applications-in-node-js/" }, {
          default: withCtx(() => [
            createTextVNode("Web Applications in Node.js")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/npm/" }, {
          default: withCtx(() => [
            createTextVNode("npm")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/express-basics/" }, {
          default: withCtx(() => [
            createTextVNode("Express Basics")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/rest-api-in-express/" }, {
          default: withCtx(() => [
            createTextVNode("REST API in Express")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/sqlite/" }, {
          default: withCtx(() => [
            createTextVNode("SQLite")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/using-sqlite-in-node-js/" }, {
          default: withCtx(() => [
            createTextVNode("Using SQLite in Node.js")
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    _hoisted_26,
    createBaseVNode("p", null, [
      createTextVNode("Then create the file "),
      _hoisted_33,
      createTextVNode(" with the content shown below. That code is a web application sending back the text "),
      _hoisted_34,
      createTextVNode(" when you visit "),
      createBaseVNode("a", _hoisted_35, [
        createTextVNode("localhost:3000/"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(".")
    ]),
    _hoisted_36,
    createBaseVNode("p", null, [
      createTextVNode("Test if everything works by running your application and then visit "),
      createBaseVNode("a", _hoisted_37, [
        createTextVNode("localhost:3000/"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" a web browser or using Postman to send a GET request for the URI "),
      _hoisted_38,
      createTextVNode(". You can run your application either through the Debug section in Visual Studio Code or through the "),
      _hoisted_39,
      createTextVNode(" command in your terminal/shell/console:")
    ]),
    _hoisted_40,
    createBaseVNode("p", null, [
      createTextVNode("Start by installing the "),
      _hoisted_48,
      createTextVNode(" package (feel free to use "),
      _hoisted_49,
      createTextVNode(" instead if you want to use promises (and optionally "),
      _hoisted_50,
      createTextVNode("/"),
      _hoisted_51,
      createTextVNode(") to avoid "),
      createBaseVNode("a", _hoisted_52, [
        createTextVNode("callback hell"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(", although that's not something you will learn in this course):")
    ]),
    _hoisted_53,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/sop-and-cors/" }, {
          default: withCtx(() => [
            createTextVNode("SOP and CORS")
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    _hoisted_80,
    _hoisted_81,
    _hoisted_82,
    _hoisted_83,
    _hoisted_84,
    createBaseVNode("p", null, [
      createTextVNode("To start with, web browsers will forbid the frontend to communicate with the backend due to the "),
      createBaseVNode("a", _hoisted_85, [
        createTextVNode("Same-Origin Policy"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" (at least forbid many of the requests it needs to send). To allow it, you need to add support for "),
      createBaseVNode("a", _hoisted_86, [
        createTextVNode("CORS"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" to your backend application. In Express it's as easy as this (using the "),
      _hoisted_87,
      createTextVNode(" value in the CORS headers to allow any clients to do anything):")
    ]),
    _hoisted_88,
    createBaseVNode("div", _hoisted_89, [
      _hoisted_90,
      createBaseVNode("p", null, [
        createTextVNode("FireFox did before support the "),
        _hoisted_91,
        createTextVNode(" value only in the "),
        _hoisted_92,
        createTextVNode(" header, so if you wanted to support Firefox you needed to list the values you want to allow in the other 3 headers, e.g. "),
        _hoisted_93,
        createTextVNode(" instead of using "),
        _hoisted_94,
        createTextVNode(", but "),
        createBaseVNode("a", _hoisted_95, [
          createTextVNode("support for the "),
          _hoisted_96,
          createTextVNode(" value was added in FireFox 69"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(". If you want to support older versions of FireFox, you need to list the supported values instead of using "),
        _hoisted_97,
        createTextVNode(".")
      ])
    ]),
    _hoisted_98,
    createBaseVNode("p", null, [
      createTextVNode("To send HTTP requests from your Vue.js application you can either use "),
      createBaseVNode("a", _hoisted_99, [
        createTextVNode("the old XMLHttpRequest object"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" or "),
      createBaseVNode("a", _hoisted_100, [
        createTextVNode("the new "),
        _hoisted_101,
        createTextVNode(" function"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(". Below you find example of how to use each of them.")
    ]),
    _hoisted_102,
    createBaseVNode("p", null, [
      _hoisted_105,
      createTextVNode(" is built on callback functions. The newer "),
      _hoisted_106,
      createTextVNode(" function is instead built on promises. A major benefit with using promises instead of callback functions is that you can chain them, which will make the code much more readable (you avoid callback hell). You can learn about how to chain promises by reading the article "),
      createBaseVNode("a", _hoisted_107, [
        createTextVNode("Promises chaining"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(".")
    ]),
    createBaseVNode("p", null, [
      createTextVNode("To learn how the "),
      _hoisted_108,
      createTextVNode(" function works, read the article "),
      createBaseVNode("a", _hoisted_109, [
        createTextVNode("Introduction to fetch()"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(".")
    ]),
    _hoisted_110,
    createBaseVNode("p", null, [
      createTextVNode("To learn how to use "),
      _hoisted_116,
      createTextVNode("/"),
      _hoisted_117,
      createTextVNode(" you can read the article "),
      createBaseVNode("a", _hoisted_118, [
        createTextVNode("How to use Async Await in JavaScript."),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(". Using promises with "),
      _hoisted_119,
      createTextVNode("/"),
      _hoisted_120,
      createTextVNode(" is probably easier than learning how to chain promises, so don't be afraid of trying.")
    ]),
    _hoisted_121,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/rest-api-authorization/" }, {
          default: withCtx(() => [
            createTextVNode("REST API Authorization")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/json-web-tokens/" }, {
          default: withCtx(() => [
            createTextVNode("JSON Web Tokens")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/third-party-authentication/" }, {
          default: withCtx(() => [
            createTextVNode("Third-Party Authentication")
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    _hoisted_124,
    createBaseVNode("p", null, [
      createTextVNode("Add authentication and authorization to the REST API in your project report as described by the "),
      createBaseVNode("a", _hoisted_125, [
        createTextVNode("OAuth 2.0 Framework"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" and "),
      createBaseVNode("a", _hoisted_126, [
        createTextVNode("OpenID Connect"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(". You basically need to:")
    ]),
    _hoisted_127,
    createBaseVNode("p", null, [
      createTextVNode("Otherwise, if everything is OK and the user should be signed in, we need to create an Access Token the user can send to the backend in the future as a proof of being signed in to a specific account. We can implement these Access Tokens as "),
      createBaseVNode("a", _hoisted_141, [
        createTextVNode("JSON Web Tokens"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" (JWT). To create a new JWT, we can use the npm package "),
      createBaseVNode("a", _hoisted_142, [
        _hoisted_143,
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(". To install it, run the command "),
      _hoisted_144,
      createTextVNode(" in the root folder of your backend application. Then you can use it like this:")
    ]),
    _hoisted_145,
    createBaseVNode("p", null, [
      createTextVNode("When you're done you can use Postman to test if you can login and get back an Access Token. If you do, you can then use "),
      createBaseVNode("a", _hoisted_147, [
        createTextVNode("the debugger at jwt.io"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" to verify that the token contains expected data.")
    ]),
    _hoisted_148,
    createBaseVNode("p", null, [
      createTextVNode("When you have added authorization checks to your code you can use Postman to send requests with the Authorization header containing the Access Token and see if it works as it should. You can also use "),
      createBaseVNode("a", _hoisted_154, [
        createTextVNode("the debugger at jwt.io"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" to create invalid Access Tokens and see if your backend properly detects them as invalid.")
    ]),
    _hoisted_155,
    createBaseVNode("p", null, [
      createTextVNode("When a client logs in and receives back an Access Token, the client does probably also want to know to which account the user logged into, so the client knows the username of the account, the id of the account, etc. For that we can use "),
      createBaseVNode("a", _hoisted_158, [
        createTextVNode("OpenID Connect"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(". It specifies that when the client logs in, we do not only send back an Access Token, but also an ID Token that contains information about who the user is. Unlike Access Tokens, ID Tokens have to be implemented as JWT.")
    ]),
    _hoisted_159,
    createBaseVNode("p", null, [
      createTextVNode("When you're done you can use Postman and see if you also get back an ID Token when you login. If you do you can use "),
      createBaseVNode("a", _hoisted_160, [
        createTextVNode("the debugger at jwt.io"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" to verify that the token contains expected information.")
    ]),
    _hoisted_161,
    _hoisted_162,
    _hoisted_163,
    createBaseVNode("p", null, [
      createTextVNode("Instead, passwords should be hashed, and we should only store the hash value of their passwords. There exists many different hashing algorithms, but one of the best ones to use for hashing passwords is "),
      createBaseVNode("a", _hoisted_164, [
        createTextVNode("bcrypt"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(". Many hashing algorithms are designed to be fast, so the hash value quickly can be computed, but that is not suitable for passwords, because then hackers can use "),
      createBaseVNode("a", _hoisted_165, [
        createTextVNode("brute-force"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" to figure out what the original password was. bcrypt on the other hand has intentionally been designed to be slow to prevent this, and you can control how slow it should be (so you can make it even slower in the future when computers have become faster).")
    ]),
    createBaseVNode("p", null, [
      createTextVNode("To use bcrypt in Node.js you can use the npm package "),
      createBaseVNode("a", _hoisted_166, [
        createTextVNode("bcryptjs"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(":")
    ]),
    _hoisted_167,
    createBaseVNode("div", _hoisted_173, [
      _hoisted_174,
      _hoisted_175,
      createBaseVNode("p", null, [
        createTextVNode("One should rather use the npm package "),
        _hoisted_176,
        createTextVNode(" instead of "),
        _hoisted_177,
        createTextVNode(". The JavaScript you write to use them is the same, but "),
        _hoisted_178,
        createTextVNode(" has been implemented in JavaScript, making it 30% slower than "),
        _hoisted_179,
        createTextVNode(", which is implemented in C, so it is better to use "),
        _hoisted_180,
        createTextVNode(". But "),
        createBaseVNode("a", _hoisted_181, [
          _hoisted_182,
          createTextVNode(" has some dependencies"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" making it a bit harder to use.")
      ]),
      _hoisted_183,
      createBaseVNode("p", null, [
        createTextVNode("You should most likely not use "),
        _hoisted_185,
        createTextVNode(" as the number of hashing rounds (too low), but "),
        createBaseVNode("a", _hoisted_186, [
          createTextVNode("it is a bit complicated to find out the optimal number of rounds to use"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(", and to do that you also need to know which server your backend will be running on in the end, and since deploying a backend on a server is not part of this course, we don't have all the details to compute it.")
      ])
    ]),
    _hoisted_187,
    createBaseVNode("p", null, [
      createTextVNode("Present your platform to the rest of the class in smaller groups. To distribute you, "),
      _hoisted_194,
      createTextVNode(" in your Project Group should join the corresponding "),
      createBaseVNode("a", _hoisted_195, [
        createTextVNode("Project Presentation Group"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" on Canvas.")
    ]),
    _hoisted_196,
    createBaseVNode("p", null, [
      createTextVNode("Be sure to read through "),
      createVNode(_component_RouterLink, { to: "/courses/client-server-communication/project-grading-guidelines/" }, {
        default: withCtx(() => [
          createTextVNode("Project Grading Guidelines")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode(" to see that you follow the guidelines for grade you're aiming for. To be able get grade 4 and 5 you also need to implement the extra functionality described next.")
    ]),
    _hoisted_205,
    createBaseVNode("p", null, [
      createTextVNode("Try to "),
      createBaseVNode("a", _hoisted_212, [
        createTextVNode("find a suitable npm package"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" doing most of the work for you.")
    ]),
    _hoisted_213,
    _hoisted_214,
    createBaseVNode("p", null, [
      createTextVNode("Each time you receive an HTTP request with a body, check the "),
      _hoisted_215,
      createTextVNode(" of the incoming HTTP request. If the content type is "),
      _hoisted_216,
      createTextVNode(", then the resource in the body of the request has been written in YAML format. Then you need to read the body of the quest into a string, and then parse it as YAML code, then you have your resource as a JavaScript object. How to read the body into a strings is described in the lecture "),
      createVNode(_component_RouterLink, { to: "/lectures/web-applications-in-node-js/" }, {
        default: withCtx(() => [
          createTextVNode("Web Applications in Node.js")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode(". Find an npm package you can use to do the parsing of YAML code for you.")
    ]),
    _hoisted_217,
    createBaseVNode("p", null, [
      createTextVNode("When you are done with your project, upload it for grading by submitting the Canvas assignment "),
      createBaseVNode("a", _hoisted_225, [
        createTextVNode("Project Final Submission"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(". Upload:")
    ]),
    _hoisted_226
  ]);
}
const projectWork_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "project-work.html.vue"]]);
export {
  projectWork_html as default
};
