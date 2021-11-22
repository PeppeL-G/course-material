<SetTitle title="Android Development 2021" />

# Study Guide
<StudyGuideInfo
    course-name="Android Development"
    ladok-code="TAGK19"
    credits="7.5"
    course-coordinator="Peter Larsson-Green"
    examiner="Peter Larsson-Green"
    canvas-course-id="3421"
/>

## Introduction
Smartphones and tablets have a huge potential to facilitate for us humans. Often, they can not only replace old none-digital products we have, but also provide us with an even better solution. As an example, when you play a song on an instrument you need to see which notes you should play, which traditionally have been printed on papers. How easy is it to turn to the next side as you play and hold an instrument in your hands? And consequently, the notes are usually quite small to fit as many as possible on the same paper, making them hard to read from a distance.

Imagine the notes instead are shown on a tablet, which just displays the notes you need to play at the moment, and that automatically switches to the notes after that as you play them. Furthermore, it is also possible to record what you play on the instrument, and then re-play it to hear what you need to practice a bit more on. Then you can compare a recording today with a recording you did three weeks ago to see how much you have improved. Used correctly, the potential benefits of these devices are huge!

In this course you will learn how to create applications running smartphones and tablets running Android. Focus will be on learning the fundamental application components all Android applications consists of, but you will also be given the opportunity to dig deeper into specific areas, such as:

* Using Bluetooth to connect to other devices.
* Using Beacons to detect when the device is close to something and react accordingly.
* Using the Internet (e.g. Firestore) to synchronize data between devices.

At course start you are expected to possess knowledge corresponding to the pre-requisite courses shown in <FigureNumber /> below. 

<Figure caption="Prerequisites for this course.">
<RenderMermaid graph-definition="
graph TD
	introCompTech[Introduction to Computer Technology 7.5 Credits]
	introProg[Introduction to Programming 7.5 Credits]
	discMath[Discrete Mathematics 7.5 Credits]
	dalg[Data Structures and Algorithms 7.5 Credits]
	oop[Object-Oriented Programming 7.5 Credits]
	oop2[Object-Oriented Software Development 6 Credits OR Object-Oriented Software Development with Design Patterns 7.5 Credits]
	andDev[Android Development 7.5 Credits]
	introCompTech --> introProg
	introProg --> dalg
	discMath --> dalg
	dalg --> oop
	oop --> oop2
	oop2 --> andDev
" />
</Figure>

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

### Martin Lindh
<Teacher
    name="Martin Lindh"
    photo="martin-lindh.jpeg"
    :roles='["Lecturer"]'
    description="Experienced designer."
    email="martin.lindh@ju.se"
    phone="036 - 10 19 23"
    website="https://ju.se/en/personinfo.html?sign=lindma"
    zoomLink="https://ju.instructure.com/courses/3421/pages/zoom-links?module_item_id=76266"
/>

### Linus Rudbeck
<Teacher
    name="Linus Rudbeck"
    photo="linus-rudbeck.jpeg"
    :roles='["Lab assistant"]'
    description="Former JTH student that studied the program Software Engineering and Mobile Platforms. Started the company Red Capes IT together with Daniel Fransén after he graduated."
    website="https://redcapesit.se/"
    zoomLink= "https://ju.instructure.com/courses/3421/pages/zoom-links?module_item_id=76266"
/>

### Rigmor Skoglund
<Teacher
    name="Rigmor Skoglund"
    photo="rigmor-skoglund.jpeg"
    :roles='["Teacher in Gruppdynamic"]'
    description="Not directly involved in this course, but course coordinator for the course Gruppdynamic. Only the Swedish students will meet her."
    email="rigmor.skoglund@ju.se"
    phone="036 - 10 19 10"
    website="https://ju.se/en/personinfo.html?sign=SKORIG"
/>

## Intended Learning Outcomes
The intended learning outcomes of the course are found in [the course syllabus](course-syllabus/) in force. Below is a table showing how the examination tests cover the intended learning outcomes and which teaching activity helping you learn which intended learning outcome.

<ILOsActivitiesMapping description="
Display an understanding for the consequences of the Android technical and economical ecosystems
-Project work
+Recorded Lectures
+Tutorials
+Lab Sessions
---
Display an understanding for human interface guidelines for mobile devices
-Project work
+Lecture
+Lab Sessions
---
Display an ability to use the Android SDK and toolchain to develop high quality Android apps
-Project work
+Recorded Lectures
+Tutorials
+Lab Sessions
---
Display an ability to use sensor systems using Android APIs
-Project work
+Recorded Lectures
+Tutorials
+Lab Sessions
---
Display an ability to use common APIs for Android
-Project work
-Laboratory work
+Recorded Lectures
+Tutorials
+Lab Sessions
---
Display an ability to employ established methods to develop user interfaces for small screens with touch input
-Project work
+Lectures
+Lab Sessions
---
Display an ability to evaluate the Android system architecture
-Project work
+Recorded Lectures
+Tutorials
+Lab Sessions
"/>

## Learning Activities
Here are short introduction to the learning activities offered in the course.

### Recorded Lectures
Most lectures will be pre-recorded and available online and teach you most of what you need to learn to pass the examination tests. Some lectures will be available at course start, but most will be published as the course proceed. 

### Tutorials
The recorded lectures will be quite theoretical and focus on specific techniques. The tutorials will be given on Zoom and show you how you can combine different techniques taught in the recorded lectures to build Android apps. 

### Lectures
Martin Lindh will give you two online lectures focused on Material Design and prototyping in Adobe XD.

### Lab Sessions
Each week you may attend a 4 hours lab session. At the lab session you may ask the teacher there for help with your laboratory work and your project work. When you have completed your laboratory work you should also present your solution to a teacher at a lab sessions. This year the lab sessions will be given online due to the corona restrictions.

There are 4 different lab sessions each week, but you may only come to one of them. To distribute you, join one of the [Lab Session Groups](https://ju.instructure.com/courses/3421/groups#tab-3282) on Canvas. First come, first served. Feel free to attend the other lab sessions as well, but students that have signed up for a specific lab session should of course be prioritized by the teacher.

## Examination Tests
The course contains two examination tests.

### 1. Laboratory Work
More information about the `Laboratory Work` can be found on the page [Laboratory Work](laboratory-work/).

### 2. Project Work
More information about the `Project Work` can be found on the page [Project Work](project-work/).

### Re-examination
<p><FigureNumber /> below shows the study and exam periods during a year. The small yellow circle sectors shows when the (re-)examinations are offered in this course (at the re-exam periods in June and August).</p>

<AcademicYearFigure />

If you need to know a precise date and time for the re-examination in advance, email the course coordinator at `peter.larsson-green@ju.se`. An announcement on Canvas with more information will be posted soon before the re-examination periods for this course.

The project work will only be graded 3/U (U=fail) at re-examination.

If you haven't passed some examination tests after the three examination opportunities (ordinary + 2 re-exam) you need to re-take those tests the next time the course run. Note that the instructions for those tests might have changed the next time the course run, and that you should take them according to the new instructions.

### Final grade
To receive a final grade in the course you need to pass all examination tests. The final grade will be based on the grade for the `Project Work`.

## Course Literature and Other Teaching Aids
The following [CommonsWare’s Books](https://commonsware.com/catalog):

* [Elements of Android Room](https://commonsware.com/Room)
* [Elements of Android Jetpack](https://commonsware.com/Jetpack)
* [Elements of Kotlin Coroutines](https://commonsware.com/Coroutines)
* [Elements of Kotlin](https://commonsware.com/Kotlin)
* [Exploring Android](https://commonsware.com/AndExplore)
* [Elements of Android Q](https://commonsware.com/Q)

They are all available online for $20 through [the Warescription program](https://commonsware.com/warescription).

## Time Plan
A time plan is available on the page [Time Plan](time-plan/).