---
sidebar: auto
navbarTitle: Report Writing
---

# Report Writing
There are some common mistakes students do the first time they try to write a report describing the project work they've done. In this lecture some of those mistakes are covered so you can avoid doing them yourself. But first some important theory to know before you start writing your report.

## What is a project?
Most reports are associated with a project, so you must have a good understanding of what a project is before you write a report on one. [Wikipedia's Project page](https://en.wikipedia.org/wiki/Project) has a long definition of the term, but let us be more straight to the point with projects that involves the creation of software of some kind. A project is always about a problem that should be solved and the solution you create that solves that problem, and in our case the solution will involve the creation of software.

### The problem
The goal with the software you create is to get people to use it. Why would they use it? Because it helps them in some way. So the first thing you should decide in a project work is: *What is the problem people are having and that we try to solve in this project*? Examples of problems are:

* Crossing the road is dangerous.
* Waiting (in line, at a bus stop, at the traffic lights, etc.) is boring AND a waste of time (two problem in one).
* Leaving the children home alone is dangerous (parents are worried both about the house and their children).
* Communicating with someone not speaking your language is hard.
* Remembering when Arsenal plays their next game is hard, and it changes all the time.
* Contacting all players in a hockey team (to notify them of cancelled matches, changed practice hours, etc.) is hard/time consuming.
* Knowing what is cheap and what is expensive in a grocery store is hard.

If you can't come up with a problem on your own, simply ask a friend or a company about problems they're having.

When you have identified a problem to solve, you need to analyze the problem in depth to get a better understanding of it, so you know things like:

* Who are having the problem?
* What is characteristic for those having the problem? E.g.:
    * Are they rich?
    * Do they live in big cities?
    * Are they old?
    * Etc.
* Etc.

To analyse the problem could be a big project itself taking many months, but let us keep things minimal here and move on.

### The solution
When you have a good understanding of the problem, you need to come up with a solution to the the problem. What the solution looks like do of course depends on what the problem is, but in our case the solution will involve creating software of some kind. For example, if the problem is *My children has grown up and now I have a lot of small clothes no one in the family can use*, then maybe the solution could be to create a website where people can sell their clothes to others.

Often you don't only come up with one solution, but many different solutions (coming up with different solutions could be a project itself taking many months), and then you continue to work with the solution you think is the most promising one. When you do, you need to be sure that the people having the problem really think that your solution is a good solution and are willing to use it (optimally willing to pay money for it 🤑). You can compare your solution to existing solutions to see if your solution seems to be better. For example, parents might throw/give away their children clothes for free now, but with your solution they would get some money for them, which would make them prefer your solution.

When you have decided which solution to go with, you need to realize it (in this case to build the website), and this is what your project work will be about.

## Report structure
Most report are quite long, so we divide it into chapters, making it a bit more structured. But which chapters should we have? In which order should they be? There's no single answer to this, but let me give you an example of a good structure.

### The first chapter: Introduction
The first chapter in the report should introduce the reader to project. The reader does so far not know anything about your project, so the first thing you need to do is to explain to the reader which problem you try to solve and how you intend to solve it.

In this chapter you can think of the reader as an investor with a lot of money, and your goal is to convince the reader that the problem is a serious problem worth solving, and that your solution solves the problem in an excellent way. If you manage to convince the reader about this, she will be willing to invest some money in the project, and you get the money you need to start working on the project and to build the solution. 

In our case the solution is a website, so we need to tell the reader what problem the users of the website are having and then explain how they solve that problem through the website. A UML use-case diagram is an excellent tool to visualize what the users can do on the website.

::: warning Remember!
Investors are not technical people (just rich and stupid bastards 😉), so avoid using technical terms. Anyone reading your report should be able to understand the text in the Introduction chapter, even your grandpa who doesn't even know to turn off the radio.
:::

### The second chapter: Solution
So, you have decided on a solution and you've got the money you need to build it from an investor? Great, now we just need to figure out how we should build it. The solution is usually quite complex, so dividing the solution into multiple chapters is usually a good idea.

In our case, the solution is a website, so this chapter could be about giving an overview of how we will implement the website. In our case we could explain that a user will use her web browser on her computer to communicate with our web application running on our server, and our server in turn will communicate with our database that runs on yet another server. 

In our case the solution consists of two components:

* The web application
* The database

We have a lot to say about these, but that will be implementation details, and those are probably better described in other chapters, so this chapter is just about the architecture of the solution (an overview of the solution). This way, readers who don't know much about programming should still be able to read and understand most parts of this chapters.

::: tip Tips!
In our case we describe the architecture of our solution in this chapter, so maybe *Architecture* is a more accurate name on the chapter than *Solution*?
:::

### Database
We can use a separate chapter for the database component in our solution, so in this chapter we describe everything there is to know about the database, such as:

* What database do we use (MySQL? SQLite?, MariaDB? Etc.)
* What tables do we have in the database?
* ...

::: tip Tips!
In this chapter you can expect the reader to know a lot about databases, so don't expect your grandpa to understand much of what you write here.
:::

::: warning Remember!
This chapter is about the database only, so no need to mention anything about the web application in this chapter. 
:::

### Web Application
We can use a separate chapter for the web application component in our solution, so in this chapter we describe everything there is to know about the web application, such as:

* Which framework is the web application implemented in?
* How is the source code structured?
* How do you handle authentication and authorization?
* How do you remember information about the clients? E.g. cookies, sessions, tokens, etc.
* What security vulnerability have you thought of and is protected against?
* ...

::: tip Tips!
In this chapter you can expect the reader to know a lot about how to implement web applications, so don't expect your grandpa to understand much of what you write here.
:::

::: warning Remember!
This chapter is about the web application only, so no need to describe implementation details of the database. The only thing you need to mention about the database in this chapter is how you communicates with it.
:::

### Other chapters
Add whichever chapters you want. Maybe a chapter describing the website's graphical user interface is good to have? Or maybe designing that is an entire project on its own? Maybe the solution also includes a smartphone app? Then having a chapter explaining the implementation of that app would be good. Maybe our solution also includes special days people can come to a house and leave the clothes they want to sell there, and then others can come to the house and buy them? Then a chapter explaining how this work would be good, etc.

## something

When you write the report you must always remember that you write it for the reader. Each time you hesitate over something, for example:

* Which chapters do I need?
* In which chapter should I write this?
* Do I need a figure to explain this?
* Have I explained this good enough now?

Always think of the reader. Pretend you are a very stupid reader of the report, and that you don't know anything about the project work. Then try to answer these questions, and then go with the answer you come up with. 

Remember that it doesn't matter wether you think the report is good or bad, what's important is what the readers think of your report, since they are the ones who will read it. To make them think the report is good, you often need to do more work with the report than what you think is necessary, because you know YOUR project work by heart, but the reader doesn't know anything about it, so you need to explain more things than you think.

## Common student mistakes
So, which are the common mistakes students do in their reports? Here are some of them.

### Non unique solution name

<example>
    <bad>My Website</bad>
    <good>ShoeSell</good>
</example>

<example>
    <bad>Camera App</bad>
    <good>CamAppo</good>
</example>

<mistake>The name of the solution is very general.</mistake>

<problem>The solution is hard to find for people searching on the web, and it's hard to talk about the solution (e.g. Person A: *I like the Camera App, it's a great application*, Person B: *😕 Which camera app?*).</problem>

<solution>Use a more unique name on your solution. Compare to *Google*, *Netflix*, *Spotify*, etc. Hard to come up with one? Use a [project name generator](https://www.google.se/search?q=project+name+gnerator&oq=project+name+generator).</solution>

### Weird solution name
<example>
    <bad>Jukioperlatino</bad>
    <good>Fnelly</good>
</example>
<example>
    <bad>dsfkjs</bad>
    <good>Klanga</good>
</example>

<mistake>The name of the solution is too strange.</mistake>

<problem>People can't easily talk about the solution, and remembering the name is extremely hard.</problem>

<solution>Use an easier (and possibly shorter) name. Compare to *Google*, *Netflix*, *Spotify*, etc..</solution>

### Components used before defined
<example>
    <bad>The database stores the resources on the website.</bad>
    <good>The website has a database it uses to store the resources in.</good>
</example>

<mistake>The text refer to components before they have been introduced.</mistake>

<problem>The reader has no idea about what you refer to (which database *The database* in the example above refers to), nor that it's part of the solution.</problem>

<solution>Introduce components before you use them.</solution>

### Ambiguous explanations
<example>
    <bad>The solution consists of a backend application and a frontend application. The application is...</bad>
    <good>The solution consists of a backend application and a frontend application. The frontend application is...</good>
</example>

<mistake>The text is ambiguous, i.e. can be read in many different ways.</mistake>

<problem>The reader doesn't know what the text actually means and have to guess what the intended meaning is.</problem>

<solution>Be explicit about what you mean. Don't leave any room for different interpretation anywhere in the text.</solution>

### Inconsistent terms
<example>
    <bad>The solution consists of an Android application. The app is designed...</bad>
    <good>The solution consists of an Android application. The application is designed...</good>
</example>

<mistake>The text use different terms to refer to the same thing.</mistake>

<problem>It's hard for the reader to read the text, and the reader gets unsure about if you refer to the same thing or two different things when you refer to it by different terms.</problem>

<solution>Be consistent with which terms you are using.</solution>

### Making text stand out
<example>
    <bad>"<b><i><u>Pangoga</u></i></b>" is a platform that...</bad>
    <good><i>Pangoga</i> is a platform that...</good>
</example>

<mistake>Some of the text stands out too much.</mistake>

<problem>The text is harder to read when a word stand out too much from the rest of the. For example, when you looked at this paragraph, this smiley 😃 was probably the first thing you looked at.</problem>

<solution>Don't make the text stand out too much. Just using italic is probably good enough.</solution>

### Abbreviations without explanations
<example>
    <bad>The GUI has been...</bad>
    <good>The Graphical User Interface (GUI) has been...</good>
</example>

<mistake>The text use abbreviations without explaining what they mean.</mistake>

<problem>The reader don't know what the abbreviation mean and doesn't understand the text.</problem>

<solution>Always explain what the abbreviation mean the first time you use it in the report.</solution>

### Repeating information
<example>
    <bad>The database contains three tables: accounts, blogposts and comments. [...] The three type of resources in the database are accounts, blogposts and comments. [...] The resources stored in the database (accounts, blogposts and comments) are all validated before they are inserted.</bad>
    <good>The database contains three tables: accounts, blogposts and comments.</good>
</example>

<mistake>The same type of information is mentioned multiple times in the report, often across many different chapters.</mistake>

<problem>Making changes in the future will be hard, since the report needs to be updated at multiple places (and oyu will probably forget to update the report at all places, which makes it inconsistent). The report does also have a poor structure if the same information is described at multiple places. For example, if the user want to find this specific information and it's written at multiple different places, it is not obvious where in the report the user should start searching for it.</problem>

<solution>Don't repeat the same information, each thing worth mentioning should only be mentioned once, and it should be obvious where in the report (which chapter) each thing is described.</solution>

### Chapters start with text
<example>
    <bad>[Figure] The figure above shows...</bad>
    <good>The figure below shows... [Figure]</good>
</example>

<mistake>The first thing in the chapter is a figure.</mistake>

<problem>When the reader starts reading the chapter, she has no idea why there's a figure there, or why she should look at it.</problem>

<solution>Always start a chapter with text, and if you want the reader to immediately look at a figure, tell the reader to do that the first thing you do in the chapter.</solution>

### Chapters missing figures
<example>
    <bad>The default profile avatar is a picture of a human. Only the head is shown, the human is almost smiling and has blue ring above her (his?) head.</bad>
    <good>The default profile avatar is 👼.</good>
</example>

<mistake>No figures are used in a chapter; the chapter only consists of text.</mistake>

<problem>Figures are much easier to understand and faster to interpret than reading a long wall of text. It's also easier to remember a figure than it is to remember something described in text. It's also easier to have a discussion about a figure than it is about something only described in text. Each user reading a text paints their own image in their head about what they're reading, by using a figure all readers get the same picture in their head.</problem>

<solution>Use many figures in your chapters (which ones has been instructed to you).</solution>

### Figures should have captions
<example>
    <bad>🐵</bad>
    <good>🐵 Figure 1: Picture of Peter's pet DK.</good>
</example>

<mistake>Figures don't have captions.</mistake>

<problem>Without a descriptive caption, the reader is not always sure about what the figure represents, nor why it's there.</problem>

<solution>Each figure should always have a descriptive caption that explains what the figure shows.</solution>

### Captions should be descriptive
<example>
    <bad>🐵 Figure 1: A monkey.</bad>
    <good>🐵 Figure 1: What students transforms to if they eat too many bananas (a monkey).</good>
</example>

<mistake>The caption doesn't describe the figure good enough.</mistake>

<problem>The user doesn't know why the figure is there, how it's relevant to the text nor how to interpret the figure.</problem>

<solution>Use a descriptive caption. If the figure consists of components, colors, arrows, etc., describe what each component, color, arrow, etc. represent.</solution>

### Figures should have figure numbers
<example>
    <bad>🐵</bad>
    <good>🐵 Figure 1: What humans looked like just before we evolved from apes.</good>
</example>

<mistake>Figures don't have figures number.</mistake>

<problem>You can't refer to a specific figure from the text, and the reader can't easily send the report to a friend and ask the friend to look at a specific figure in the report.</problem>

<solution>Give each figure a unique figure number.</solution>

### Properly refer to figures
<example>
    <bad>The figure below shows...</bad>
    <good>Figure 5 below shows...</good>
</example>

<mistake>The text refers to figures without using their figure numbers.</mistake>

<problem>It's often ambiguous which figure you refer to if you don't mention the figure number. For example, "the figure below" could refer to any of all the figures below the text, which are quite many at the beginning of the report.</problem>

<solution>Refer to figures using their figure numbers.</solution>

### The figure should be close to the relevant text
<example>
    <bad>[at the begging of the chapter:] Figure 4 at the end of the chapter shows...</bad>
    <good>[at the begging of the chapter:] Figure 4 below shows...</good>
</example>

<mistake>The text refers to a figure, and the figure is far away.</mistake>

<problem>The reader needs to stop reading, scroll to the figure, interpret the figure, and then scroll back to the text. This is inconvenient, and the reader lose concentration, making the report much harder to read.</problem>

<solution>Place figures close to the text referring to the figure.</solution>

### Putting the figures at the end
<example>
    <bad>[at the end of the chapter:] Figure 8 below gives an overview of the architecture.</bad>
    <good>[at the begging of the chapter:] Figure 8 below gives an overview of the architecture.</good>
</example>

<mistake>The figures are put after most of the text, making the reader first read the text, and then look at the figures.</mistake>

<problem>Reading text is hard, interpreting figures is easy. </problem>

<solution>Put figures (often) at the beginning of the text. They give a good understanding of the big picture, and then the reader can read the text to learn the details.</solution>

### Images should not display text
<example>
    <bad>Figure 5 below is a screenshoot of the getAllBlogposts() function.</bad>
    <good>Figure 5 below contains the code for the getAllBlogposts() function.</good>
</example>

<mistake>Code (or text in general) is shown as images/screenshots instead of text.</mistake>

<problem>Searching does not work, zooming works poorly (images have limited resolution) and copy-pasting the text doesn't work.</problem>

<solution>Use text to display text, not images.</solution>

### Don't use contractions
<example>
    <bad>The client didn't send a request.</bad>
    <good>The client did not send a request.</good>
</example>

<mistake>Contractions (didn't, can't, won't, etc.) are used.</mistake>

<problem>Contractions should not be used in report.</problem>

<solution>Don't use contractions (write did not, can not, will not, etc.).</solution>

### Don't use I, we, etc.
<example>
    <bad>We use the database MySQL to...</bad>
    <good>A MySQL database is used to...</good>
</example>

<mistake>Words such as I, we, us, our, etc. are used.</mistake>

<problem>The reader doesn't know who I/we are. Also, the report should often describe a solution/product, and that should be independent of who created it, so there should be no need to use I/we in a report unless you express you own opinions/decisions. Also, if you write <i>This application is developed and maintained by me.</i>, then you need to update the report if you give away the project to someone else or if you invite someone else to work on the project with you.</problem>

<solution>Avoid using I, we, etc. unless you are expressing your own opinions/decisions.</solution>

### Properly mark up the text
<mistake>A bold paragraph is used as a header.</mistake>

<problem>The header won't appear in a table of content, the reader gets unsure about wether the bold paragraph is a paragraph or a header, you risk end up having the bold paragraph at the end of one page, and the text belonging to it on the top of the next page.</problem>

<solution>Properly mark up the text.</solution>

### Inconsistent usage of white-space
<example>
    <bad>First paragraph...<br><br>Second paragraph...<br>Third paragraph...</bad>
    <good>First paragraph...<br><br>Second paragraph...<br><br>Third paragraph...</good>
</example>

<mistake>Different parts of the report use white-space differently around headers, lists, paragraphs, tables, figures, etc.</mistake>

<problem>It's hard to see the structure of the report when white-space is used differently.</problem>

<solution>Be consistent with how you use white-space throughout the entire report.</solution>

### Describe things where they should be described
<example>
    <bad>The Database chapter describes parts of the web application (e.g. how it communicates with it, or how the source code has that communicates with the database has been structured).</bad>
    <good>The Database chapter only describes the database, the web application is not mentioned at all.</good>
</example>

<mistake>One thing is described in a chapter where it doesn't make sense to describe it.</mistake>

<problem>When the reader is looking for some specific information, she won't find it in the chapter she expects to find it in. And when she wants to only learn about a specific thing by reading the corresponding chapter, she's also forced to read the unrelated thing you describe there.</problem>

<solution>In a chapter, only describe the thing the chapter is about.</solution>

### Spelling names wrong
<example>
    <bad>The graphical user interface is implemented in html.</bad>
    <good>The graphical user interface is implemented in HTML.</good>
</example>
<example>
    <bad>The framework express is used to implement the web application.</bad>
    <good>The framework Express is used to implement the web application.</good>
</example>

<mistake>The spelling of names (languages, frameworks, libraries, etc.) are wrong.</mistake>

<problem>It's harder for the reader to read the text, and the reader is unsure what you refer to.</problem>

<solution>Use the correct spelling of names. Feel free to name your own things whatever you want, but be sure to use the names others have given their solutions.</solution>

### Describe your work, not someone else's
<example>
    <bad>The graphical user interface is implemented in HTML. HTML is a markup language that contains the tags &lt;a&gt;, &lt;br&gt;, &lt;p&gt;, &lt;link&gt;...</bad>
    <good>The graphical user interface is implemented in HTML<sup>[1](https://html.spec.whatwg.org/)</sup>. HTML is a markup language used to define what different type of text represents, such as headers and paragraphs.</good>
</example>
<example>
    <bad>The web browser communicates with the web application by sending HTTP requests to it. HTTP is built on top of TCP, which is transport protocol for sending small packages (messages) from one computer to another.</bad>
    <good>The web browser uses HTTP<sup>[1](https://tools.ietf.org/html/rfc2616)</sup> to communicate with the web application. In HTTP, the client (the web browser) simply sends a HTTP request to the server (the web application), telling the server what it wants it to do, then the server do that and sends back an HTTP response.</good>
</example>

<mistake>Techniques used to implement the solution (such as HTTP, HTML, CSS, Express, etc.) has been described in detail.</mistake>

<problem>The report should be about the solution you have created, not about the techniques you use to implement it. Many readers do probably already know these techniques, and reading about them is no fun, and you describing them in vain wastes your time.</problem>

<solution>Only describe what's unique to your solution. You can describe the techniques you are using (HTTP, HTML, etc.) very short and briefly, but for more information about these, provide references to their specifications/documentations and let the reader read more about them there.</solution>