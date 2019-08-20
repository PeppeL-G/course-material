---
navbarTitle: Web Development Fundamentals
---

# Study Guide
<StudyGuideInfo
    course-name="Web Development Fundamentals"
    ladok-code="TGWK18"
    credits="7.5"
    course-coordinator="Peter Larsson-Green"
    examiner="Peter Larsson-Green"
    ping-pong-event="Web Development Fundamentals - TGWK18 - A19"
    ping-pong-password="TGWK18A1934"
/>

## Teachers
<StudyGuideTeachers
    :teachers='[{
        name: "Peter Larsson-Green",
        photo: "/web-development-fundamentals/peter-larsson-green.jpeg",
        roles: ["Course coordinator", "examiner", "lecturer", "lab assistant"],
        description: "Has studied and followed the development of the web since 2004 and received his Master of Science in Computer Science at Linköping University in 2014. He has been working as programming teacher (part time) since 2010 at both Linköping University and Jönköping University.",
        email: "Peter.Larsson-Green@ju.se",
        phone: "036 - 10 17 35",
        website: "https://ju.se/en/personinfo.html?sign=LarPet"
    }, {
        name: "Linus Rudbeck",
        photo: "/web-development-fundamentals/linus-rudbeck.jpeg",
        roles: ["Lab assistant", "guest lecturer"],
        description: "Former JTH student that studied the program Software Engineering and Mobile Platforms. Started the company Red Capes IT together with Daniel Fransén after he graduated. ",
        email: "",
        phone: "",
        website: "https://redcapesit.se/author/linus/"
    }]'
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

More specifically you will learn how to create a web application to which a single user can login to modify the resources on it, such as blog posts and guestbook posts. To accomplish this your web application will use an SQLite database to store the resources and the web framework Express to handle incoming HTTP requests. To avoid spending too much time on the graphical design of the web application you will also learn how to use a CSS framework with pre-styled GUI components. Your web application must of course also be secure, so you will also learn common vulnerabilities in web applications and how you can prevent them.

At course start you are expected to already possess knowledge corresponding to the pre-requisite courses shown in <FigureNumber/> below. 

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

## Intended Learning Outcomes
The intended learning outcomes of the course are found in [the course syllabus](./course-syllabus) in force and are described under the next heading.

## Examination, ILOs and Learning Activities

### Description of the elements that examine the course ILOs, and the corresponding learning activities
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

### Information to students
Information about the **Project Work** can be found on the page [Project Instructions](./project-instructions). It's about a website you should create throughout the course.

**Written Examination** is a [Digital Exam](https://ju.se/student/en/digital-exam.html) in Inspera at the end of the course. You need to register for it in advance per the instructions at [https://ju.se/student/en/studies/examination.html](https://ju.se/student/en/studies/examination.html).

### Conditions for the examined elements
Conditions for the **Project Work** can be found on the page [Project Instructions](./project-instructions).

No aids allowed are allowed for the **Written Examination**. The computer you write the exam on may only be used to answer the questions on the exam, nothing else.

### Re-examination of this course
Re-examination for the **Written Examination** is offered in the re-exam periods in January and August.

Re-examination for the **Project Work** is offered in the re-exam periods in January and August. If you need to know a precise date and time in advance, contact the course coordinator. The project work will only be graded 3/U (U=fail) at re-examination.

If you haven't passed some examination tests after the three examination opportunities (ordinary + 2 re-exam) you need to re-take those tests the next time the course run. Note that the instructions for those tests might have changed the next time the course run.

## Grading criteria
To receive a final grade on the course you need to pass both examination tests (Project Work + Written Examination). The final grade will be based on the lowest grade on the Project work and the Written Examination, but these grades will also be marked as "weak" or "strong". If one of the grades is lower than the other and has been marked as "strong", the final grade will be the lower grade + 1. For example, a strong 3 and a weak 4 gives you 4 as the final grade, while a weak 3 and a strong 5 gives you 3 as the final grade. For the Written Examination, 50% is a strong 3, and 70% is a strong 4.

| Examination test | Grading criteria grade 3 | Grading criteria grade 4 | Grading criteria grade 5 |
|---|---|---|---|
| Written Examination | 40% or max score | 60% of max score | 80% of max score |

The grading criteria for the project work can be found on the page [Project Grading Guidelines](./project-grading-guidelines).

## Course Literature and Other Teaching Aids
* [Introduction to HTTP](https://launchschool.com/books/http) by Launch School
* [MarkSheet](https://marksheet.io/) by Jeremy Thomas
* [Eloquent JavaScript 3rd edition](https://eloquentjavascript.net/) by Marijn Haverbeke

## Time Plan
A time plan is available on the page [Time Plan](./time-plan).