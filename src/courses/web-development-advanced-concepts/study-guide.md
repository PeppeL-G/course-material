# Study Guide
<StudyGuideInfo
    course-name="Web Development - Advanced Concepts"
    ladok-code="TFWN19"
    credits="7.5"
    year="2022"
    course-coordinator="Peter Larsson-Green"
    examiner="Peter Larsson-Green"
    canvas-course-id="4775"
/>

## Teachers
### Peter Larsson-Green
<Teacher
    name="Peter Larsson-Green"
    photo="peter-larsson-green.jpeg"
    :roles='["Course coordinator", "examiner", "lecturer", "lab assistant"]'
    description="Has studied and followed the development of the web since 2004 and received his Master of Science in Computer Science at Linköping University in 2014. He has been working as programming teacher (part time) since 2010 at both Linköping University and Jönköping University."
    email="Peter.Larsson-Green@ju.se"
    phone="036 - 10 17 35"
    website="https://ju.se/en/personinfo.html?sign=LarPet"
/>

### Fredrik Sjölander
<Teacher
    name="Fredrik Sjölander"
    photo="fredrik-sjolander.jpeg"
    :roles='["Lab assistant"]'
    description="Third year student in the bachelor program Software Engineering and Mobile Platforms."
/>

## Introduction
Building a good web application is not as easy as it used to be.
When we first got the web, all the webpages on a website were simply static HTML files. Everything the web application needed to do was to wait for an HTTP request from a web browser and then send back the requested HTML file in an HTTP response.

Then websites got more dynamic. Users could create accounts on the websites and create their own resources (blog posts, messages, articles, etc.) other users then could fetch and display in their web browsers. We needed to start worrying about sessions, authentication, authorization and security in general, and the code we wrote got bigger, more complex and harder to maintain. Implementing a web application was no longer straight forward.

Then some websites got so popular that running them on a single computer was not enough; web browsers sent more HTTP requests to the web application than the web application had time to handle. We needed to start worrying about the performance of our web application; how good it could scale, how fast it could send back an HTTP response, etc. Web applications now needed to be built with an architecture in mind.

Then we got Android and iOS devices, and users wanted to be able to use smartphone apps to access the content on our websites instead of using web browsers. But apps don't render HTML code, only web browsers do that. The apps needed a way to just fetch the data from our web applications, so we added Application Programming Interfaces (API) to our web applications. 

Today, good web applications are no longer straight forward to implement, but in this course you will learn and get hands-on experience of implementing your own scalable and good web application.

## Pre-requisites
At course start you are expected to already possess knowledge corresponding to the pre-requisite courses shown in <FigureNumber /> below.

<Figure caption="Prerequisites for this course.">
<RenderMermaid graph-definition="
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
" />
</Figure>

## Intended Learning Outcomes
The intended learning outcomes of the course are found in the [Course Syllabus](course-syllabus/). Below is a table showing how the examination tests cover the intended learning outcomes and which teaching activity helping you learn which intended learning outcome.

<ILOsActivitiesMapping description="
Display knowledge of the need for, and the use of, Content Delivery Networks
-Written Examination
+Lecture: Content Delivery Networks
---
Display knowledge of the challenges inherent in and technologies used for the construction of scalable web applications (NOSQL databases, horizontal scaling with session management, data partitioning and sharding, etc.)
-Project Work
-Written Examination
+Lecture: Scaling Web Applications
+Lecture: Scaling Databases
+Tutorial
---
Display the ability to use JavaScript to manipulate a web page's Document Object Model
-Laboratory Work
-Project Work
-Written Examination
+Lecture: Client-side JavaScript
+Lecture: Document Object Model
+Tutorial
---
Display the ability to program against commonly used JavaScript libraries
-Project Work
+Various npm packages introduced in the course
---
Display the ability to construct web pages that interact with other web systems using REST/JSON, OAuth, etc.
-Project Work
-Written Examination
+Lecture: REST API Basics
+Lecture: REST API in Express
+Lecture: REST API Authorization
+Lecture: JSON Web Tokens
+Lecture: Third-Party Authentication
+Lecture: AJAX
+Lecture: Same-Origin Policy & Cross-Origin Resource Sharing
+Tutorial
---
Display the ability to use advanced web client APIs such as web storage, web workers, web components, WebAssembly, etc.
-Project Work
+Lecture: AJAX
+Tutorial
---
Display the ability to configure and use containers for development, testing, and deployment environments
-Project Work
-Written Examination
+Lecture: Docker Basics
+Tutorial
---
Demonstrate the ability to evaluate the security of web applications
-Project Work
-Written Examination
+Lecture: REST API Authorization
+Lecture: JSON Web Tokens
+Lecture: Same-origin Policy & Cross-origin Resource Sharing
"/>

## Learning Activities
Here are short introduction to the learning activities offered in the course.

### Recorded Lectures
In the beginning of some weeks you will be encouraged to view some pre-recorded lectures (or read some text). These will be quite theoretical and will teach you new things you can use when building a website.

### Tutorials
Some weeks there will be a tutorial session where the teacher will show you how to use what has been taught in the pre-recorded lectures in practice.

### Lab Sessions
Each week you may attend a four hours long lab session. Some of the lab sessions have been scheduled in ordinary classrooms, and for those sessions you have to bring your own laptop to work on. If you can't do that, make sure to come to a lab session scheduled in a computer room.

Select which lab session you want to attend by joining the corresponding [Lab Session Group](https://ju.instructure.com/courses/4775/groups). Feel free to show up at and attend other lab sessions too **if there's room for it**, but you may only join one Lab Session Group on Canvas.

## Examination Tests
The course contains three examination tests.

### 1. Written Examination
2.5 credits, graded `Fail`, `3`, `4`, and `5`. More information is available on the [Written Examination](written-examination/) page.

### 2. Laboratory Work
1 credit, graded `Fail` and `Pass`. More information is available on the [Laboratory Work](laboratory-work/) page.

### 3. Project Work
4 credits, graded `Fail`, `3`, `4` and `5`. More information is available on the [Project Work](project-work/) page.

### Re-examination
<p><FigureNumber /> below shows the study and exam periods during a year. The small yellow circle sectors shows when the (re-)examinations are offered in this course (at the re-exam periods in June and August).</p>

<AcademicYearFigure />

If you need to know a precise date and time for the re-examination in advance, email the course coordinator at `peter.larsson-green@ju.se`. An announcement on Canvas with more information will be posted soon before the re-examination periods for this course.

The project work will only be graded 3/U (U=fail) at re-examination.

If you haven't passed some examination tests after the three examination opportunities (ordinary + 2 re-exam) you need to re-take those tests the next time the course run. Note that the instructions for those tests might have changed the next time the course run, and that you should take them according to the new instructions.

### Final grade
To receive a final grade in the course you need to pass all examination tests. The final grade will be based on the lowest grade of the `Project Work` and the `Written Examination`, but these grades will also be marked as *weak* or *strong*. If one of the grades is lower than the other and has been marked as *strong*, the final grade will be the lower grade + 1. For example, a strong 3 and a weak 4 gives you 4 as the final grade, while a weak 3 and a strong 5 gives you 3 as the final grade. For the `Written Examination`, 50% of max score is a strong 3, and 70% of max score is a strong 4.

## Course Literature and Other Teaching Aids
* [Eloquent JavaScript 3rd edition](https://eloquentjavascript.net/) by Marijn Haverbeke
* [The Twelve-Factor App](https://12factor.net/)

## Time Plan
A time plan is available on the [Time Plan](time-plan/) page.