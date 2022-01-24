# Project Work
On this page you find information about the examination test `Project Work`.

## General information
<CompactInfo :infoPieces='{
    "Number of credits": "6",
    "Grades": ["Fail", "3", "4", "5"],
    "How to work": "In groups of three.",
    "Goal": "To learn how to implement an advanced Android application.",
    "Instructions": "Complete the different parts the project work consists of described on this page. You will implement an Android application, write a report describing your implementation and present your application to the rest of the class at the end of the course.",
    "Grading guidelines": "Available on the Project Grading Guidelines page.",
    "Re-examination": "Special presentation sessions will be available at the re-exam periods in June and in August. Contact the course coordinator for more details. Your work can also be graded at these re-exam period, but it will only be graded Fail/3.",
    "Help": "Ask the teacher for help at the lab sessions."
}'>
</CompactInfo>

## Introduction
As project work, you should create a non-elementary Android application for smartphones & tablets by completing the instructions in this document. The instructions have been divided into different parts that should be completed in order. We recommend you read through all the parts before you start working on the project.

The [Project Grading Guidelines](project-grading-guidelines/) page contains some guidelines for how your work will be graded. We recommend you read through it every now and then to double check that you fulfill the requirements for the grade you are aiming for.

In your work you should also write a report explaining how your application is implemented. The report will be a living document throughout the course, meaning that you will continuously improve and add content to it as the course proceeds. The Word file [project-report-template.docx](files/project-report-template.docx) contains more information about what the report should cover.





## Part 1: Joining a project group
The project work should be carried out in groups of 3 students each. Let the examiner know who you are working with by joining one of the [Project Groups](https://ju.instructure.com/courses/4825/groups) on Canvas.

If you can't find someone to work with, send the course coordinator an email at [Peter.Larsson-Green@ju.se](mailto:Peter.Larsson-Green@ju.se) using the template shown in <FigureNumber /> below (you just need to replace `XXX` with your specific values).

<Figure caption="Template of message to be sent to the course coordinator if you can't find a partner to work with on your own. ">

```
Hi!

I need you to match me with a student for the project work in the course Android Development.

My name: XXX
My JU email: XXX@student.ju.se
I'm an international student: XXX
The grade I'm aiming for in this course: XXX
I got the following grades in the following pre-requisite courses (or similar):
 - Introduction to Programming: XXX
 - Data Structures and Algorithms: XXX
 - Object-Oriented Programming: XXX
 - Object-Oriented Software Development (with Design Patterns): XXX

Thanks!
```

</Figure>

If you don't care about who you are matched with, you just need to enter your name and JU email in the template. The course coordinator will then try to match you with a student with similar ambitions and skills as you.

::: danger To the Swedish students
After you have joined a Project Group you should each day you work with the project write an entry in your diary. Do not only write about what you have done, but also write about what discussions you had, which disagreement you had, how the work was divided, how you felt about your project partners, what you think is fair/not fair etc.
:::




## Part 2: Project Environment
Before you start working on this part, you are recommended to:

* Read/View the following lectures:
    * [Teamwork](../../lectures/teamwork/)
* Read the following short course on Git:
    * [Git](../git/)

---

The very first thing you should agree on is how you should work together. Especially, you need to some extent document who is doing what in the project, and write that in your report, so the examiner can verify that all group members have contributed ~equally much.

We recommend you to work together per the basis described in the [Teamwork](../../lectures/teamwork/) lecture. That way you will automatically document who has contributed with what by using Git and GitHub issues. But if you want to work together in another way, that is OK too, as long as you can show who has contributed with what in the project.

The *Worklog* chapter in [project-report-template.docx](files/project-report-template.docx) shows an example of how you can report who has contributed with what in the project.





## Part 3: Specifying the application idea
The next thing you should do is to decide what the application you want to create should do. Try to be creative and come up with an application someone wants to use, i.e. an application that solves a real-world problem of some kind. You could for example create an application for an organization you are member of (e.g. a football organization that needs to keep track of members, leaders, teams, training sessions, etc.), or simply an application you would like to use yourself. You can also try asking your family and friends if they need an Android application with some functionality that doesn't exist today.

Another way to come up with an application is to think of something you find boring/dangerous/time consuming, and then try to make it fun/safe/avoid it completely by using an Android application. For example, most people find it boring to wait in line. Maybe you can create an application that makes it fun to wait in line? Or an application that entirely eliminates the need to wait in line?

### Suggestions
At the bottom of this page you find the chapter *Project idea: Flee Market Manager* that describes a real-world problem you can try to solve by creating an Android application. It can also be used as a guideline for how "complicated"/"complex" the application you create needs to be.

Another idea is to create an application that can control an embedded system of some kind (dish washer, microwave, robot vacuum cleaner, etc.), for example using Bluetooth. Feel free to create your own embedded system. It can for example be a simple prototype used as a proof of concept. For example, your application might be about controlling a smart lock on a door (a lock that can be locked/unlocked with a smartphone using Bluetooth), but you don't have any smart lock, so then you create your own embedded system that simulates one, e.g. one that consists of a Bluetooth module and a LED lamp that is turned on/off to indicate if the door is locked or not. The embedded system can also be simulated as another Android application running on another Android device, e.g. an application showing a red/green circle indicating if the smart lock is locked or not.

::: warning Note
You will not get any credits for doing things not related to the intended learning outcomes in this course. To build an embedded system is out of scope for this course, so only do that if you are willing to spend your own spare time on it.
:::

::: tip Robots
The course coordinator has 6 [Robot Car Starter Kit](http://osoyoo.com/2017/08/06/osoyoo-robot-car-diy-introduction/)s he can borrow to the Project Groups who want to build an Android application they can use to control a robot with. Note that just controlling the robot using Bluetooth is not enough, but some additional functionality is required, such as recording how the robot has been driving, re-play how the robot has been driving, manage logs, etc.
:::

If you need some special equipment (such as Beacons, modules for an embedded system, some smart devices, etc.), the school might be able to provide you with it (must be returned to the school at the end of the course). Email your needs to the course coordinator at [Peter.Larsson-Green@ju.se](Peter.Larsson-Green@ju.se) and he will look into it and get back to you.

### Requirements
The application you create must make use of at least one other device in addition to the Android device your application is running on. This could be:

* Any other device you can communicate with using Bluetooth
* Bluetooth beacons
* Another Android device running the same application, e.g. using Bluetooth to sync data
* A server on the Internet, such as:
    * A [Cloud Firestore](https://firebase.google.com/docs/firestore/) database (or any Backend-as-a-Service you want)

The application may also not be too simple. For example, creating the simplest possible all-to-all chat application synchronizing chat messages using Firestore will not be accepted. But often ideas like this one can quite easily be made more complex by adding functionalities to it. For example, in this case one could also add support for one-to-one chats, group chats, friends chat, etc.

Describe your application by starting to write on [the project report](files/project-report-template.docx). Especially, visualize which components your solution consists of (android device running your application + at least one other device) and how they make use of each other. You should especially write as much as possible for now in the Introduction chapter and the Overview chapter. 

Note that your report is a living document throughout the course. What you write now will most likely be changed later when you come up with ideas for improvements, so do not spend too much time on details now. Just write it detailed enough so the reader gets a rough understanding of everything, e.g. start out simple. But write it properly (sentences, upper/lower case characters, etc.), of course!

::: danger To the Swedish students
Do not forget to write an entry in your diary each day you have done some work on your project. Do not only write about what you have done, but also write about what discussions you had, which disagreement you had, how the work was divided, how you felt about your project partners, what you think is fair/not fair etc.
:::





## Part 4: Creating Mockups
Start with this part of the Project Work when Martin Lindh has had his first lecture with you about graphical user interface design and prototyping.

Create mockups of the graphical user interface. Then present these to "the rest of the class" (in smaller groups) at one of the following sessions:

* Monday 2 February 15:00-15:45
* Monday 2 February 16:00-16:45
* Tuesday 3 February 10:00-10:45
* Tuesday 3 February 11:00-11:45

To distribute you, one from each project group should join the corresponding Mockup Presentation Session on Canvas. At least one from each group need to attend your presentation. At the presentation, you will also receive feedback on your mockups from Martin and the other groups attending.

After the presentation session, go to [the examiner's Bookable Doodle Calendar](https://doodle.com/mm/peterlarssongreen719/android-development) and choose a meeting slot you can meet him. At the meeting, present what you have written in the report so far, and what your mockups look like. You only have 15 minutes to do this, so be sure to come prepared and present it in an efficient way. Before the meeting, submit the assignment [Application Idea](https://ju.instructure.com/courses/4825/assignments/25232) on Canvas with the current version of your report and your mockups.

The examiner will either approve or disapprove your application idea. If he approves it, he will approve you on the assignment [Application Idea](https://ju.instructure.com/courses/4825/assignments/25232) on Canvas. If he disapproves it, you need to come back another time (use the examiner's Bookable Doodle Calendar again) after you have changed it according to the examiner's feedback. If you haven't been approved on it after the second meeting, you can still pass the project work, but the examiner won't have any more time trying to estimate if the application you create will be advanced enough for this course until you submit the final version of it at the end of the course.

::: tip Note!
It may take some time before you manage to get a meeting with the examiner. If you want, you can start implementing the application (continue on next part of the project work) before the examiner has approved your application idea. If he disapproves it, it is most likely because your application is a bit too simple to implement, so the changes you need to do will most likely be to add (and not change existing) functionality.
:::







## Part 5: Implementing the Application
::: danger Note!
**Before you start implementing the application you must complete and present the [Laboratory Work](laboratory-work/) to a teacher!**

If a student hasn't passed the `Laboratory Work` when you submit your project work for grading at the end of the course, that student will be taken out of the group and forced to do her own project from scratch.

If a student presents her laboratory work at the end of the course, she will not get any credits for her contribution to the project work up until that point in time, which most likely means she won't pass the project work.

PLEASE, make this easy for all of us: complete and present your `Laboratory Work` before continuing past this point. **The examiner has no problem failing students that can't follow this simple instruction.**
:::

Start implementing your application using Android Studio. The first Android lectures will primarily focus on how to implement the graphical user interface in Android applications, so you are recommended to start by implementing that part of your application. Learning how to properly implement the graphical user interface (properly handling runtime configuration changes) is also the most difficult part of learning Android development.

Initially, see it as you are creating a prototype of your application,  where you only bother to implement the GUI. This is quite common to do for bigger applications, where the GUI/user experience needs to be evaluated before the actual application is implemented. 

::: tip Example
If a user should be able to login to your application (which could be the case if you use Cloud Firestore), you need to have text boxes where the user can enter her credentials (i.e. her username and password) and a Login-button, but for the prototype you do not have to actually login the user when she presses the Login-button (you don't need to use Firebase at all). Instead, hardcode the correct credentials for a specific user in the prototype, and verify the entered credentials directly in your application.
:::

::: tip Example
If you need to fetch data from a REST API, hardcode the data directly in the Android application.
:::

::: tip Example
If you need to communicate with an embedded system using Bluetooth, emulate the communication with the embedded system without using Bluetooth at all.
:::

As more Android features are covered at the lectures in the course, start to use them in your Android application, so your prototype application slowly turns into the final version of your application. For example, the first version of your prototype might note care about runtime configuration changes at all, but when those have been covered in the course, improve your activities by starting to handle them. Or maybe some of you code should run in a service instead of an activity? Then you can initially put that code in an activity, and then refactor it to a service when those have been covered in the course.

::: warning Lectures won't cover everything
The lectures in the course about Android will not necessarily cover everything you need to know to implement your specific Android application; you might need to learn some things on your own. Skipping the Android lectures in the course and learn everything on your own (e.g. form the course book or from the Google's Android developers guides/documentation) is OK too. The Android lectures aim at teaching you the most common parts of Android most applications have use of.
:::

::: tip Divide and Conquer!
You are three students in the group. To be efficient you somehow need to distribute the work among you. You all need to learn the basics of Android development, and you should all have an excellent understanding of how your entire application works at the end of the course (including the parts of the application the other two have done), but you are recommended to specialize in different parts of Android, and then combine your skills to create an excellent application. For example, one of you might choose to become an expert in how to handle runtime configuration changes, another one might choose to become an expert in how to handle Bluetooth communication, and the third one might choose to become an expert in how to store your data in a database, or how to properly use fragments, etc..

Sitting three students at one computer and only one writing the code is not efficient and will most likely prevent you from finishing your work on time.
:::

We recommend you to not start too advanced. To pass the course, it is more important that the functionality you implement works properly than that the graphical user interface looks beautiful. Therefore, it is probably better to start with a simple graphical user interface and then improve it at the end of the course if you have time for it.

If you want to get grade 4 or 5, you must come and see the examiner for another meeting to discuss your progress. Your work will not be graded, but this is an extra chance for you to get some feedback on your work before the final submission at the end of the course. If you are aiming for grade 3 you are welcome to book one of these meetings as well, but it is only mandatory for grade 4 and 5. The meeting should take place week 9 or 10. Use [the examiner's Bookable Doodle Calendar](https://doodle.com/mm/peterlarssongreen719/android-development) again the same way as before. After the meeting, the examiner will approve you on the assignment [Halfway Meeting](https://ju.instructure.com/courses/4825/assignments/25233) on Canvas.

::: danger Remember!
Just implementing your application idea is not good enough to pass the project work. As you can read on the [Project Grading Guidelines](./project-grading-guidelines) page, you must also gather some points by implementing "extra functionalities" to pass.
:::






## Part 6: Presentation
Your work should be presented to "the rest" of the class (in smaller groups) at the end of course. All members in the group need to be present at the presentation. At the presentation, you should:

* Explain the problem you have tried to solve with your application.
* Explain how users can use your application to solve the problem.
* Show how users will use the application (a demonstration of its features).

You may structure your presentation however you want, as long as you present it in a good way. Showing the figures you have in your report is an excellent idea.

The presentation is preferably carried out by having one person interacting with the application (shown on a big screen), and another one explaining what the first person is doing/telling the first person what to do.

The presentation should take at most 15 minutes. There should be a short time for questions from the audience at the end (included in the 15 minutes). Plan and rehearse your presentation in advance, so no time is wasted on *Oh, what can I show you next? Hmm...* or *Oh, that should not have happened. It has never happened before. Hmm...*. 

The reasons you should present your application to the rest of the class are two-folded:

* To learn what type of Android applications you can create (you have all taken the same course, so you should all be able to create the applications the other students have created).
* To practice your presentation technique. This is not limited to improving your speaking skills, but also includes improving your skills to explain how something works to others, and to prepare and carry out presentations (your future customers will appreciate such skills).

Join one of the [Project Presentation Sessions](https://ju.instructure.com/courses/4825/groups#) on Canvas to let the examiner know which project presentation session you want to attend to. Only one in your Project Group should do this.

After you have presented your work the teacher will mark you as approved on the assignment [Presentation](https://ju.instructure.com/courses/4825/assignments/25234) on Canvas.






## Part 7: Final Submission
When you are done with your project work, upload it to Canvas for grading by submitting the assignment [Final Submission](https://ju.instructure.com/courses/4825/assignments/25235). Submit your work per the instructions on that page (read them in advance!).





## Project idea: Flee Market Manager
A Flee Market is a marketplace where people can sell things. These exists in different variations, but things that usually are sold at a flea market includes:

* Used things
* Cheap things
* Home made things

The people who sell things at the flea market usually need to pay the flea market organizer some money for selling their things at the market. There exist different pricing models for this, such as:

* A fixed amount of money (e.g. 5 SEK/sold item or 5 SEK/month).
* A percentage of what they sell for (e.g. 5% of the price of each sold item).

An example of a flea market in Sweden is a Klädbytardag ("exchanging of clothes day"). Those work like this:

1. A parent that wishes to sell her children's outgrown clothes at the Klädbytardagen register itself at the flea market organizer.
2. The flea market organizer gives the parent a unique parent number (such as 1, 2, 3, and so on).
3. The parent puts notes on the children's clothes that should be sold at the flea market containing the unique parent number and the price the clothes should be sold for (whole SEK such as 5, 10, 22, and similar).
4. The parent hands over the children's clothes to the flea market organizer.
5. At the flea market day, customers (other parents) can come to organizer's facility to browse and buy clothes other parents have handed over.
6. At the checkout, the flea market organizer looks at the notes on the clothes the customer wants to buy to compute what the customer needs to pay and to remember how much each parent has sold their clothes for.
7. At the end of the day, each parent can come to the flea market and collect their clothes that weren't sold and the money they have earned for their clothes that was sold. The flea market organizer keeps 20% of the money, so the parent only gets back 80% of what her clothes was sold for.

At the checkout, an Android app could be used to keep track of which clothes (and for how much) a parent has sold clothes for, and how much each customer should pay. At the end of the day, an Android app could also be used to compute how much each parent should get back for the sold clothes. To do this in a good way, the Android app could also be responsible for keeping track of which parents that are selling things, and which their unique parent numbers are.

### Challenges / "Opportunities"
#### Synchronizing data
Their usually exists multiple checkouts at the market place, and each checkout will have one device running the Android application. At the end of the day, when computing how much each parent has sold, all data about the selling needs to be accessible from a single device. This means that the data either:

* Needs to be stored at a centralized place, such as a Firestore database. As you understand, it is important that the Android application still can function and register which clothes that has been sold without an Internet connection.
* Needs to be synchronized across multiple devices running the application at the end of the day (Bluetooth?).

#### Using the camera
One possibility is to not only store the name of the parent in the application/Firebase, but also a picture of the parent taken with the camera on the device. This could be useful for the organizers to identify parents.

Another possibility might be to replace the unique parent numbers with QR codes. This could speed up the checkout process (scanning the QR code with a camera instead of entering the seller number manually). Maybe the price for the clothes could be read by the camera as well somehow?

#### Using Tags
Instead of using QR codes, maybe RFID/Bluetooth tags can be used to speed up the checkout process?