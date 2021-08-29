<SetTitle title="Client-Server Communication 2019" />

# Study Guide
<StudyGuideInfo
    course-name="Client-Server Communication"
    ladok-code="TSPK18"
    credits="7.5"
    course-coordinator="Peter Larsson-Green"
    examiner="Johan Kohlin"
    ping-pong-event="Client-Server Communication - TSPK18 - A19"
    ping-pong-password="TSPK18A1934"
/>

## Teachers
### Peter Larsson-Green
<Teacher
    name="Peter Larsson-Green"
    photo="peter-larsson-green.jpeg"
    :roles='["Course coordinator", "lecturer", "lab assistant"]'
    description="Has studied and followed the development of the web since 2004 and received his Master of Science in Computer Science at Linköping University in 2014. He has been working as programming teacher (part time) since 2010 at both Linköping University and Jönköping University."
    email="Peter.Larsson-Green@ju.se"
    phone="036 - 10 17 35"
    website="https://ju.se/en/personinfo.html?sign=LarPet"
/>

### Johan Kohlin
<Teacher
    name="Johan Kohlin"
    photo="johan-kohlin.jpeg"
    :roles='["Examiner"]'
    description="Has been teaching web development and web design since 2006 for communication students at HLK and since 2016 he teaches JavaScript and misc. web technologies at JTH, primarily to New Media Design students."
    email="Johan.Kohlin@ju.se"
    phone="036 - 10 15 09"
    website="https://ju.se/en/personinfo.html?sign=KoJo"
/>

### Linus Rudbeck
<Teacher
    name="Linus Rudbeck"
    photo="linus-rudbeck.jpeg"
    :roles='["Lab assistant"]'
    description="Former JTH student that studied the program Software Engineering and Mobile Platforms. Started the company Red Capes IT together with Daniel Fransén after he graduated."
    phone="036 - 10 17 35"
    website="https://redcapesit.se/author/linus/"
/>

## Introduction
In this course you will learn in more detail how the communication between clients and servers on the web works, i.e. learn the HTTP protocol. This will then be used to create a "web application" not only web browsers can communicate with, but any type of application connected to the Internet, using a REST API. This is convenient for smartphone applications and similar when they need to be able to store data from the users in the cloud instead of locally on the smartphone device.

<FigureNumber /> below displays an overview of how it can work. 

<Figure caption="Common web application architecture.">
<Mermaid>
{{`
graph LR
	users["Users"]
	subgraph "Users' smartphone"
		webBrowser["Android App"]
	end
	subgraph "Web Server"
	webApp["Web Application"]
	end
	subgraph "Database Server"
		db["Database"]
	end
	users -- Use --> webBrowser
	webBrowser -- HTTP/REST API --> webApp
	webApp -- SQL --> db
`}}
</Mermaid>
</Figure>

At course start you are expected to possess knowledge corresponding to the pre-requisite courses shown in <FigureNumber /> below. 

<Figure caption="Prerequisites for this course.">
<Mermaid>
{{`
graph TD
	wuid[Web and User Interface Design 7.5 Credits]
	gdvc[Graphic Design and Visual Communication 15 Credits]
	csp[Client-side Programming 15 Credits]
	awa[Applied Web Architecture 15 Credits]
	csc[Client-Server Communication 7.5 Credits]
	wuid --> csp
	gdvc --> csp
	csp --> awa
	awa --> csc
`}}
</Mermaid>
</Figure>

## Intended Learning Outcomes
The intended learning outcomes of the course are found in [the course syllabus](course-syllabus/) in force and are described under the next heading.

## Examination, ILOs and Learning Activities

### Description of the elements that examine the course ILOs, and the corresponding learning activities
<ILOsActivitiesMapping description="
Display knowledge of the HTTP protocol.
-Laboratory work
-Project work
-Written examination
+Recorded lecture: Internet
+Recorded lecture: Web Applications & HTTP
---
Display knowledge of the REST architectural style.
-Laboratory work
-Project work
-Written examination
+Recorded lecture: REST API Basics
---
Demonstrate comprehension of architectures consisting of multiple systems communicating through APIs.
-Laboratory work
-Project work
-Written examination
+Recorded lecture: REST API Basics
---
Demonstrate the ability to design and document user-friendly APIs.
-Project work
-Written examination
+Recorded lecture: REST Basics
+Recorded lecture: REST API in Express
---
Demonstrate skills of implementing APIs.
-Project work
-Written examination
+Recorded lecture: Node.js
+Recorded lecture: Introduction to Express
+Recorded lecture: REST API in Express
+Recorded lecture: SQLite in Node.js
+Recorded lecture: JWT
---
Demonstrate skills of consuming APIs.
-Project work
-Written examination
+Recorded lecture: SPA Requests
+Recorded lecture: SOP & CORS
+Recorded lecture: JWT
---
Demonstrate skills of implementing SDKs for APIs.
-Project work
-Written examination
+Recorded lecture: SPA Requests
+Recorded lecture: SOP & CORS
+Recorded lecture: JWT
---
Demonstrate skills of implementing SPAs using front-end frameworks.
-Laboratory work
-Project work
+Recorded lecture: Vue
"/>

### Information to students
Information about the **Laboratory Work** can be found on the page [Lab Instructions](lab-instructions/). It will teach you how to build a Single-Page Application in Vue.js communicating with a backend using a Software Development Kit.

Information about the **Project Work** can be found on the page [Project Instructions](project-instructions/). It's about creating a platform consisting of a frontend application and a backend application communicating using a REST API.

**Written Examination** is a [Digital Exam](https://ju.se/student/en/digital-exam.html) in Inspera at the end of the course. You need to register for it in advance per the instructions at [https://ju.se/student/en/studies/examination.html](https://ju.se/student/en/studies/examination.html). Sample answers are only published for the ordinary exam, not the re-exams. For the re-exams, come and talk with the course coordinator if there are any answers you are unsure of.

* [Sample answers to the exam 2019-10-15](files/exam-2019-10-15-sample-answers.txt)
* [Sample answers to the exam 2020-08-13](files/exam-2020-08-13-sample-answers.txt)

### Conditions for the examined elements
Conditions for the **Laboratory Work** can be found on the page [Lab Instructions](lab-instructions/).

Conditions for the **Project Work** can be found on the page [Project Instructions](project-instructions/).

No aids allowed are allowed for the **Written Examination**. The computer you write the exam on may only be used to answer the questions on the exam, nothing else.

### Re-examination of this course
Re-examination for the **Laboratory Work** is offered in the re-exam periods in January and August. If you need to know a precise date and time in advance, contact the course coordinator.

Re-examination for the **Project Work** is offered in the re-exam periods in January and August. If you need to know a precise date and time in advance, contact the course coordinator. The project work will only be graded 3/U (U=fail) at re-examination.

Re-examination for the **Written Examination** is offered in the re-exam periods in January and August.

If you haven't passed some examination tests after the three examination opportunities (ordinary + 2 re-exam) you need to re-take those tests the next time the course run. Note that the instructions for those tests might have changed the next time the course run.

## Grading criteria
To receive a final grade on the course you need to pass all examination tests (Laboratory Work + Project Work + Written Examination). The final grade will be based on the lowest grade on the Project work and the Written Examination, but these grades will also be marked as "weak" or "strong". If one of the grades is lower than the other and has been marked as "strong", the final grade will be the lower grade + 1. For example, a strong 3 and a weak 4 gives you 4 as the final grade, while a weak 3 and a strong 5 gives you 3 as the final grade. For the Written Examination, 50% is a strong 3, and 70% is a strong 4.

| Examination test | Grading criteria grade 3 | Grading criteria grade 4 | Grading criteria grade 5 |
|---|---|---|---|
| Written Examination | 40% or max score | 60% of max score | 80% of max score |

The grading criteria for the project work can be found on the page [Project Grading Guidelines](project-grading-guidelines/).

## Course Literature and Other Teaching Aids
* [Express in Action: Writing, building, and testing Node.js applications](http://proquestcombo.safaribooksonline.com.proxy.library.ju.se/book/programming/javascript/9781617292422) by Evan M. Hahn
* [Working with Web APIs](https://launchschool.com/books/working_with_apis) by Launch School
* [Web API Design: Crafting Interfaces that Developers Love](https://pages.apigee.com/rs/apigee/images/api-design-ebook-2012-03.pdf)

## Time Plan
A time plan is available on the page [Time Plan](time-plan/).