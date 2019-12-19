# Study Guide
<StudyGuideInfo
    course-name="Web Development - Advanced Concepts"
    ladok-code="TFWN19"
    credits="7.5"
    course-coordinator="Peter Larsson-Green"
    examiner="Peter Larsson-Green"
    ping-pong-event="Web Development - Advanced Concepts - TFWN19 - S20"
    ping-pong-password="TFWN19S2003"
/>

## Teachers
<StudyGuideTeachers
    :teachers='[{
        name: "Peter Larsson-Green",
        photo: "peter-larsson-green.jpeg",
        roles: ["Course coordinator", "examiner", "lecturer", "lab assistant"],
        description: "Has studied and followed the development of the web since 2004 and received his Master of Science in Computer Science at Linköping University in 2014. He has been working as programming teacher (part time) since 2010 at both Linköping University and Jönköping University.",
        email: "Peter.Larsson-Green@ju.se",
        phone: "036 - 10 17 35",
        website: "https://ju.se/en/personinfo.html?sign=LarPet"
    }, {
        name: "Linus Rudbeck",
        photo: "linus-rudbeck.jpeg",
        roles: ["Lab assistant", "guest lecturer"],
        description: "Former JTH student that studied the program Software Engineering and Mobile Platforms. Started the company Red Capes IT together with Daniel Fransén after he graduated. ",
        email: "",
        phone: "",
        website: "https://redcapesit.se/author/linus/"
    }, {
        name: "Filip Andersson",
        photo: "filip-andersson.jpeg",
        roles: ["Lab assistant"],
        description: "Former bachelor student that studied the program Software Engineering and Mobile Platforms here at JTH. Now master student studying the program AI Engineering.",
        email: "anfi1622@student.ju.se",
        phone: "",
        website: ""
    }, {
        name: "Simon Arvidsson",
        photo: "simon-arvidsson.jpeg",
        roles: ["Lab assistant"],
        description: "Former bachelor student that studied the program Software Engineering and Mobile Platforms here at JTH. Now master student studying the program AI Engineering.",
        email: "arsi1632@student.ju.se",
        phone: "",
        website: ""
    }]'
/>

## Introduction
Building a good web application is not as easy as it used to be.
When we first got the web, all the webpages on a website were simply static HTML files. Everything the web application needed to do was to wait for an HTTP request from a web browser and then send back the requested HTML file in an HTTP response.

Then websites got more dynamic. Users could create accounts on the websites and create their own resources (blog posts, messages, articles, etc.) other users then could fetch and display in their web browsers. We needed to start worrying about sessions, authentication, authorization and security in general, and the code we wrote got bigger, more complex and harder to maintain. Implementing a web application was no longer straight forward.

Then some websites got so popular that running them on a single computer was not enough; web browsers sent more HTTP requests to the web application than the web application had time to handle. We needed to start worrying about the performance of our web application; how good it could scale, how fast it could send back an HTTP response, etc. Web applications now needed to be built with an architecture in mind.

Then we got Android and iOS devices, and users wanted to be able to use an app to access the content on our websites. But apps don't render HTML code, only web browsers do that. the apps needed a way to just fetch the data from our web applications, so we added APIs to the web applications. 

Today, good web applications are not straight forward to implement, but in this course you will learn and get hands-on experience of using some of the technologies you can use to do that by implementing your own web application.

At course start you are expected to already possess knowledge corresponding to the pre-requisite courses shown in <FigureNumber /> below.

<Figure caption="Prerequisites for this course.">
<mermaid>
graph TD
	introComp[Introduction to Computing 7.5 Credits]
	introProg[Introduction to Programming 9 Credits]
	db[Databases 6 Credits]
	discMath[Discrete Mathematics 6 Credits]
	dalg[Data Structures and Algorithms 7.5 Credits]
	oop[Object-oriented Programming 7.5 Credits]
	webDevFund[Web Development Fundamentals 7.5 Credits]
    netProg[Network Programming 7.5 Credits]
    wdac[Web Development Advanced Concepts 7.5 Credits]
    introComp --> introProg
    introProg --> db
    db --> webDevFund
	introProg --> dalg
    discMath --> dalg
    dalg --> oop
    oop --> webDevFund
    oop --> netProg
    webDevFund --> wdac
    netProg --> wdac
</mermaid>
</Figure>

## Intended Learning Outcomes
The intended learning outcomes of the course are found in the [Course Syllabus](course-syllabus/). Below is a table showing how the examination tests cover the intended learning outcomes and which teaching activity helping you learn which intended learning outcome.

<ILOsActivitiesMapping description="

Display an understanding of the fundamental building blocks of the web (HTTP and HTML).
-Project work
-Written examination
+Recorded lecture: Internet
+Recorded lecture: Web Applications & HTTP

Display an understanding of common security concerns in web applications.
-Project work
-Written examination
+Recorded lecture: Authentication & Authorization
+Recorded lecture: Web Application Vulnerabilities

Display an ability to construct web pages using HTML5, CSS, and CSS frameworks.
-Project work
-Written examination
+Recorded lecture: HTML
+Recorded lecture: CSS
+Recorded lecture: CSS Frameworks

Display an ability to program in JavaScript.
-Project work
-Written examination
+Recorded lecture: JavaScript
+Recorded lecture: Asynchronous Programming

Display an ability to construct web pages using Node.js.
-Project work
-Written examination
+Recorded lecture: Node.js
+Recorded lecture: Introduction to Express
+Recorded lecture: Web Applications in Express

Display an ability to construct database-backed web applications.
-Project work
-Written examination
+Recorded lecture: Using SQLite in Node.js

" />

## Learning Activities
Here are short introduction to the learning activities offered in the course.

### Recorded lectures
...

### Tutorials
...

### Lab sessions
...

## Examination Tests
The course contains three examination tests.

### Examination test 1: Written Examination
2.5 credits, graded `Fail`, `3`, `4`, and `5`. More information is available on the [Written Examination](writte-examination/) page.

### Examination test 2: Laboratory Work
1 credit, graded `Fail` and `Pass`. More information is available on the [Laboratory Work](laboratory-work/) page.

### Examination test 3: Project Work
4 credits, graded `Fail`, `3`, `4` and `5`. More information is available on the [Project Work](project-work/) page.

### Re-examination
Re-examinations for the examination tests will be available at the re-exam periods in June and August. For more information, see each examination test's own page.

## Final grade
To receive a final grade on the course you need to pass all examination tests (`Written Examination` + `Laboratory Work` + `Project Work`). The final grade will be based on the lowest grade on the Project work and the Written Examination, but these grades will also be marked as "weak" or "strong". If one of the grades is lower than the other and has been marked as "strong", the final grade will be the lower grade + 1. For example, a strong 3 and a weak 4 gives you 4 as the final grade, while a weak 3 and a strong 5 gives you 3 as the final grade. For the Written Examination, 50% is a strong 3, and 70% is a strong 4.

## Course Literature and Other Teaching Aids
* [Eloquent JavaScript 3rd edition](https://eloquentjavascript.net/) by Marijn Haverbeke

## Time Plan
A time plan is available on the [Time Plan](time-plan/) page.