# Study Guide
<StudyGuideInfo
    course-name="Web Development Fundamentals"
    ladok-code="TGWK18"
    credits="7.5"
    course-coordinator="Peter Larsson-Green"
    examiner="Peter Larsson-Green"
    canvas-course-id="2142"
/>

## Introduction
In this course you will learn what the web is and how you can create web applications running on it. <FigureNumber /> below displays the architecture of a typical web application. 

<Figure caption="Common web application architecture.">
<mermaid>
graph LR
	users["Users"]
	subgraph "Users' computers"
        webBrowser["Web Browser"]
    end
	subgraph "Web Server"
        webApp["Web Application"]
    end
    subgraph "Database Server"
    	db["Database"]
    end
    users -- Use --> webBrowser
    webBrowser -- HTTP --> webApp
    webApp -- SQL --> db
</mermaid>
</Figure>

More specifically you will learn how to create a web application to which a single user can login to modify the resources on it, such as blog posts and guestbook posts. To accomplish this your web application will use an SQLite database to store the resources and the web framework Express to handle incoming HTTP requests. To avoid spending too much time on the graphical design of the web application you will also learn how to use a CSS framework with pre-styled graphical user interface components. Your web application must of course also be secure, so you will also learn common vulnerabilities in web applications and how you can prevent them.

## Prerequisites
At course start you are expected to already possess knowledge corresponding to the prerequisite courses shown in <FigureNumber/> below. 

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
    introComp --> introProg
    introProg --> db
    db --> webDevFund
	introProg --> dalg
    discMath --> dalg
    dalg --> oop
    oop --> webDevFund
</mermaid>
</Figure>

## Teachers
<StudyGuideTeachers
    :teachers='[{
        name: "Peter Larsson-Green",
        photo: "peter-larsson-green.jpeg",
        roles: ["Course coordinator", "examiner", "lecturer", "maybe lab assistant"],
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
        name: "Filip Andersson",
        photo: "filip-andersson.jpeg",
        roles: ["Maybe lab assistant"],
        description: "Former bachelor student that studied the program Software Engineering and Mobile Platforms here at JTH. Now master student studying the program AI Engineering.",
        email: "anfi1622@student.ju.se",
        phone: "",
        website: ""
    }]'
/>

## Intended Learning Outcomes
The intended learning outcomes of the course are found in the [Course Syllabus](./course-syllabus/). Below is a table showing how the examination tests cover the intended learning outcomes and which teaching activity helping you learn which intended learning outcome.

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

### Recorded Lectures
In the beginning of most weeks you will be encouraged to view some recorded lectures. These will be quite theoretical and will teach new you things you can use when building a website.

### Guest Lecture
[Oskar Westergren](https://ju.se/personinfo.html?sign=WESOSK) and a colleague of his will give a guest lecture on GDPR and relevant information that is important for web developers to know. The lecture will be given at campus, but only 20 students may attend it. The rest of you will be able to watch from home as it's also live streamed.

More information about this will be announced later.

### Tutorials
Some weeks there will be a tutorial session where the teacher will show you how to use what has been taught in the recorded lectures in practice.

::: warning The tutorials are streamed live
Since we're not allowed to have the tutorials at campus, they will be streamed live. Check the schedule to see when they are given. The will be given in [Peter's Personal Meeting Room in Zoom](https://ju-se.zoom.us/s/7774807897).

Learn more about how to use Zoom at JU's webpage [Zoom](https://ju.se/en/it-helpdesk/faq---manuals/programs/zoom.html).
:::

### Lab Sessions
Each week you may attend a 4 hours lab session. At the lab session you may ask the teacher there for help with your exercises and project work.

There are 3 different lab sessions each week, but you may only attend to one. To distribute you, join one of [the lab session groups on Canvas](https://ju.instructure.com/courses/2142/groups#tab-1471). First come, first served.

::: danger Corona restrictions
The Public Health Agency of Sweden (Folkhälsomyndigheten) recommends everyone feeling ill to stay home. This is especially important for the lab sessions; **do not attend a lab session if you're feeling ill**. Read more on [their website](https://www.folkhalsomyndigheten.se/the-public-health-agency-of-sweden/communicable-disease-control/covid-19/#_69327).

Students that need help but can't attend a lab session because they feel ill can email their questions to the course course coordinator at `peter.larsson-green@ju.se` or create an issue with the question on [this website's GitHub issue tracker](https://github.com/PeppeL-G/course-material/issues).

It's good if you can bring your own laptop to the lab sessions and work on that one. That way, you don't risk infecting others or being infected by using the school's computers.
:::

## Examination Tests
The course contains two examination tests.

### Examination test 1: `Written Examination`
2 credits, graded Fail, 3, 4, and 5. More information is available on the [Written Examination](./written-examination/) page.

### Examination test 2: `Project Work`
5.5 credits, graded Fail, 3, 4 and 5. More information is available on the [Project Work](./project-work/) page.

### Re-examination
<FigureNumber /> below shows the study and exam periods during a year. The small blue circle sectors shows when the (re-)examinations are offered in this course.

<AcademicYearFigure />

Re-examination for the `Written Examination` is offered at the re-exam periods in January and August.

Re-examination for the `Project Work` is offered at the re-exam periods in January and August. If you need to know a precise date and time in advance, email the course coordinator at `peter.larsson-green@ju.se`. The project work will only be graded 3/U (U=fail) at re-examination.

If you haven't passed some examination tests after the three examination opportunities (ordinary + 2 re-exam) you need to re-take those tests the next time the course run. Note that the instructions for those tests might have changed the next time the course run, and that you should take them according to the new instructions.

### Final Grade
To receive a final grade on the course you need to pass both examination tests (`Written Examination` and `Project Work`). The final grade will be based on the lowest grade on the `Written Examination` and the `Project Work`, but these grades will also be marked as `weak` or `strong`. If one of the grades is lower than the other and has been marked as `strong`, the final grade will be the lower grade + 1. For example, a strong 3 and a weak 4 gives you 4 as the final grade, while a weak 3 and a strong 5 gives you 3 as the final grade. For the `Written Examination`, 50% of max score is a strong 3, and 70% of max score is a strong 4.

## Course Literature and Other Teaching Aids
* [Introduction to HTTP](https://launchschool.com/books/http) by Launch School
* [MarkSheet](https://marksheet.io/) by Jeremy Thomas
* [Eloquent JavaScript 3rd edition](https://eloquentjavascript.net/) by Marijn Haverbeke

## Time Plan
A time plan is available on the page [Time Plan](time-plan/).