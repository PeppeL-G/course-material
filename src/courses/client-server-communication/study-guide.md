# Study Guide
<StudyGuideInfo
    course-name="Client-Server Communication"
    ladok-code="TSPK18"
    credits="7.5"
    year="2022"
    course-coordinator="Peter Larsson-Green"
    examiner="Peter Larsson-Green"
    canvasCourseId="6797"
/>

## Teachers
### Peter Larsson-Green
<Teacher
    name="Peter Larsson-Green"
    photo="peter-larsson-green.jpeg"
    :roles='["Examiner", "course coordinator", "lecturer", "lab assistant"]'
    description="Has studied and followed the development of the web since 2004 and received his Master of Science in Computer Science at Linköping University in 2014. He has been working as programming teacher (part time) since 2010 at both Linköping University and Jönköping University."
    email="Peter.Larsson-Green@ju.se"
    phone="036 - 10 17 35"
    website="https://ju.se/en/personinfo.html?sign=LarPet"
/>

### Jérôme Landré
<Teacher
    name="Jérôme Landré"
    photo="jerome-landre.jpeg"
    :roles='["Lab assistant"]'
    description="Assistant Professor in Computer Science and Informatics."
    email="jerome.landre@ju.se"
    phone=""
    website="https://ju.se/en/personinfo.html?sign=LanJer"
/>

## Introduction
In this course you will learn in more detail how the communication between clients and servers on the web works, i.e. learn the HTTP protocol. This will then be used to create a "web application" not only web browsers can communicate with, but any type of application connected to the Internet can communicate with using a REST API. This is convenient for smartphone applications and similar when they need to be able to store data from the users in the cloud instead of locally on the smartphone device.

<FigureNumber /> below displays an overview of how it can work. 

<Figure caption="Common web application architecture.">
<RenderMermaid graph-definition="
graph LR
	users[Users]
	subgraph Users' smartphone
		webBrowser[Android App]
	end
	subgraph Web Server
	webApp[Web Application]
	end
	subgraph Database Server
		db[Database]
	end
	users -- Use --> webBrowser
	webBrowser -- HTTP/REST API --> webApp
	webApp -- SQL --> db
" />
</Figure>

At course start you are expected to possess knowledge corresponding to the pre-requisite courses shown in <FigureNumber /> below. 

<Figure caption="Prerequisites for this course.">
<RenderMermaid graph-definition="
graph TD
	wuid[Web and User Interface Design 7.5 Credits]
	gdvc[Graphic Design and Visual Communication 15 Credits]
	csp[Client-side Programming 15 Credits]
	csc[Client-Server Communication 7.5 Credits]
	wuid --> csp
	gdvc --> csp
	csp --> csc
" />
</Figure>

## Intended Learning Outcomes
The intended learning outcomes of the course are found in the [Course Syllabus](./course-syllabus/). Below is a table showing how the examination tests cover the intended learning outcomes and which teaching activity help you learn which intended learning outcome.

<ILOsActivitiesMapping description="
Display knowledge of the HTTP protocol
-Laboratory work
-Project work
-Written examination
+Recorded lecture: Internet
+Recorded lecture: Web Applications & HTTP
---
Display knowledge of the REST architectural style
-Laboratory work
-Project work
-Written examination
+Recorded lecture: REST API Basics
---
Demonstrate comprehension of architectures consisting of multiple systems communicating through APIs
-Laboratory work
-Project work
-Written examination
+Recorded lecture: REST API Basics
---
Demonstrate the ability to design and document user-friendly APIs
-Project work
-Written examination
+Recorded lecture: REST Basics
+Recorded lecture: REST API in Express
---
Demonstrate skills of implementing APIs
-Project work
-Written examination
+Recorded lecture: Node.js
+Recorded lecture: Introduction to Express
+Recorded lecture: REST API in Express
+Recorded lecture: SQLite in Node.js
+Recorded lecture: JWT
---
Demonstrate skills of consuming APIs
-Project work
-Written examination
+Recorded lecture: SPA Requests
+Recorded lecture: SOP & CORS
+Recorded lecture: JWT
---
Demonstrate skills of implementing SDKs for APIs
-Project work
-Written examination
+Recorded lecture: SPA Requests
+Recorded lecture: SOP & CORS
+Recorded lecture: JWT
---
Demonstrate skills of implementing SPAs using front-end frameworks
-Laboratory work
-Project work
-Written examination
+Recorded lecture: Vue
"/>

## Learning Activities
Here are short introduction to the learning activities offered in the course.

### Recorded Lectures
In the beginning of most weeks you will be encouraged to view some recorded lectures. These will be quite theoretical and will teach new you things you can use when building a platform.

### Tutorials
Most weeks there will be a tutorial session where the teacher will show you how to use what has been taught in the recorded lectures in practice.

### Lab Sessions
Each week you may attend a 4 hours long lab session. At the lab session you may ask the teacher there for help with your lab and project work.

There are 2 different lab sessions each week, but you may only sign up for one of them. To distribute you, join one of [the Lab Groups on Canvas](https://ju.instructure.com/courses/6797/groups). First come, first served.

::: tip Attending more lab sessions
You may attend the other lab session if there is room for it, but the teacher there must of course prioritize helping the students that have signed up for that lab session.
:::

## Examination Tests
The course contains two examination tests.

### 1. Laboratory Work
1 credit, graded fail/pass. More information is available on the [Laboratory Work](./laboratory-work/) page.

### 2. Project Work
4.5 credits, graded U, 3, 4 and 5. More information is available on the [Project Work](./project-work/) page.

### 3. Written Examination
2 credits, graded U, 3, 4, and 5. More information is available on the [Written Examination](./written-examination/) page.

### Final Grade
To receive a final grade on the course you need to pass all examination tests (`Laboratory Work`, `Project Work` and `Written Examination`). The final grade will be based on the lowest grade of the `Project Work` and `Written Examination` , but these grades will also be marked as `weak` or `strong`. If one of the grades is lower than the other and has been marked as `strong`, the final grade will be the lower grade + 1. Examples:

* A `strong 3` and a `weak 4` gives you `4` as the final grade
* A `weak 3` and a `strong 5` gives you `3` as the final grade

For `Written Examination`, 50% of max score is a strong 3, and 70% of max score is a strong 4.

### Re-examination
<FigureNumber /> below shows the study and exam periods during a year. The small blue circle sectors shows when the (re-)examinations are offered in this course.

<AcademicYearFigure />

Re-examination for all examination tests will be offered at the re-exam periods in January and August. To learn precise dates before they have been announced, email the course coordinator at `peter.larsson-green@ju.se`. The project work will only be graded U/3 at re-examination.

::: danger Last time the course run!
This course is this year running for the last time. Therefor, you will have 2 more re-examination opportunities in addition to the ones described above. More information about these will be announced later. To learn more, email the course coordinator at `peter.larsson-green@ju.se`.

If you haven't passed the course after the ordinary examination opportunity + the 4 re-examination opportunities, you can't pass the course. If this happen to you, contact your student councilor or program manager to learn your alternatives.
:::



## Course Literature and Other Teaching Aids
* *Express in Action: Writing, building, and testing Node.js applications* by *Evan M. Hahn*
* [Working with Web APIs](https://launchschool.com/books/working_with_apis) by *Launch School*
* [Web API Design: Crafting Interfaces that Developers Love](https://pages.apigee.com/rs/apigee/images/api-design-ebook-2012-03.pdf)

## Time Plan
A time plan is available on the page [Time Plan](time-plan/).