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
        roles: ["Lab assistant"],
        description: "Former JTH student that studied the program Software Engineering and Mobile Platforms. Started the company Red Capes IT together with Daniel Fransén after he graduated. ",
        email: "",
        phone: "",
        website: "https://redcapesit.se/author/linus/"
    }, {
        name: "Muhammad Ismail",
        photo: "muhammad-ismail.jpeg",
        roles: ["Lab assistant"],
        description: "Laboratory Engineer at JTH.",
        email: "Muhammad.Ismail@ju.se",
        phone: "036 - 10 15 92",
        website: "https://ju.se/en/personinfo.html?sign=IsmMuh"
    }]'
/>

## Introduction
Building a good web application is not as easy as it used to be.
When we first got the web, all the webpages on a website were simply static HTML files. Everything the web application needed to do was to wait for an HTTP request from a web browser and then send back the requested HTML file in an HTTP response.

Then websites got more dynamic. Users could create accounts on the websites and create their own resources (blog posts, messages, articles, etc.) other users then could fetch and display in their web browsers. We needed to start worrying about sessions, authentication, authorization and security in general, and the code we wrote got bigger, more complex and harder to maintain. Implementing a web application was no longer straight forward.

Then some websites got so popular that running them on a single computer was not enough; web browsers sent more HTTP requests to the web application than the web application had time to handle. We needed to start worrying about the performance of our web application; how good it could scale, how fast it could send back an HTTP response, etc. Web applications now needed to be built with an architecture in mind.

Then we got Android and iOS devices, and users wanted to be able to use an app to access the content on our websites. But apps don't render HTML code, only web browsers do that. The apps needed a way to just fetch the data from our web applications, so we added APIs to the web applications. 

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

Display knowledge of the need for, and the use of, Content Delivery Networks
-Written Examination
+Tutorial

Display knowledge of the challenges inherent in and technologies used for the construction of scalable web applications (NOSQL databases, horizontal scaling with session management, data partitioning and sharding, etc.)
-Project Work
-Written Examination
+Recorded lecture: Scaling Web Applications
+Recorded lecture: Scaling Databases

Display the ability to use JavaScript to manipulate a web page's Document Object Model
-Laboratory Work
-Project Work
-Written Examination
+Recorded lecture: Client-side JavaScript
+Recorded lecture: Document Object Model

Display the ability to program against commonly used JavaScript libraries
-Project Work
+Various npm packages introduces in the course.

Display the ability to construct web pages that interact with other web systems using REST/JSON, OAuth, etc.
-Project Work
-Written Examination
+Recorded lecture: REST API Basics
+Recorded lecture: REST API in Express
+Recorded lecture: REST API Authorization
+Recorded lecture: JSON Web Tokens
+Recorded lecture: Third-Party Authentication
+Recorded lecture: AJAX

Display the ability to use advanced web client APIs such as web storage, web workers, web components, WebAssembly, etc.
-Project Work
+Recorded lecture: AJAX

Display the ability to configure and use containers for development, testing, and deployment environments
-Project Work
-Written Examination
+Recorded lecture: Docker Basics

Demonstrate the ability to evaluate the security of web applications
-Project Work
-Written Examination
+Recorded lecture: Same-origin Policy
+Recorded lecture: Cross-origin Resource Sharing

" />

## Learning Activities
Here are short introduction to the learning activities offered in the course.

### Recorded Lectures
In the beginning of some weeks you will be encouraged to view some recorded lectures. These will be quite theoretical and will teach new you things you can use when building a website.

### Tutorials
Some weeks there will be a tutorial session where the teacher will show you how to use what has been taught in the recorded lectures in practice. 

### Lab Sessions
Each week you may attend a 4 hours lab session. At the lab session you may ask the teacher there for help with your laboratory work and your project work. When you have completed your laboratory work you should also demonstrate your solution to a teacher at a lab session.

There are 3 different lab sessions each week, but you may only attend to one. To distribute you, join one of [the lab session groups on Ping Pong](https://pingpong.hj.se/courseId/22061/projectGroupsList.do). First come, first served. Feel free to attend other lab sessions if there is room for it, but only join one group on Ping Pong.

::: warning Note!
In the project work you should work in pair, so you might want to find your partner to work with before you join a lab session group. You're also welcome to change lab session group later. 
:::

## Examination Tests
The course contains three examination tests.

### Examination test 1: Written Examination
2.5 credits, graded `Fail`, `3`, `4`, and `5`. More information is available on the [Written Examination](written-examination/) page.

### Examination test 2: Laboratory Work
1 credit, graded `Fail` and `Pass`. More information is available on the [Laboratory Work](laboratory-work/) page.

### Examination test 3: Project Work
4 credits, graded `Fail`, `3`, `4` and `5`. More information is available on the [Project Work](project-work/) page.

### Re-examination
Re-examination for all examination tests will be available at the re-exam periods in June and August. For more information, see each examination test's respective page.

::: warning Note!
The examination tests might have changed a little bit the next time the course run, and if you re-take some of them then, then you take them according to the new description of the tests. You don't need to re-take a test you have previously passed.
:::

### Final grade
To receive a final grade in the course you need to pass all examination tests. The final grade will be based on the lowest grade of the `Project Work` and the `Written Examination`, but these grades will also be marked as *weak* or *strong*. If one of the grades is lower than the other and has been marked as *strong*, the final grade will be the lower grade + 1. For example, a strong 3 and a weak 4 gives you 4 as the final grade, while a weak 3 and a strong 5 gives you 3 as the final grade. For the `Written Examination`, 50% of max score is a strong 3, and 70% of max score is a strong 4.

## Course Literature and Other Teaching Aids
* [Eloquent JavaScript 3rd edition](https://eloquentjavascript.net/) by Marijn Haverbeke
* [The Twelve-Factor App](https://12factor.net/)

## Time Plan
A time plan is available on the [Time Plan](time-plan/) page.