---
sidebar: auto
navbarTitle: How to Work in Groups
---

# How to Work in Groups
In some courses you do projects in groups of 2 or more students. In this lecture you'll find some tips on how to make sure that all students contribute to the project and how you get efficient in carrying out the project.

## Divide the work into tasks
It's usually a bad idea that the entire group work on one and the same problem. For example, if you are 4 project members and you need to design your database, it's enough if just one member work on that, there's no need for the other 3 project members to work on this task too. If they do, they'll most likely just sit and watch and waste their time instead of contributing to the project. So, to be efficient, it's crucial to divide the work among the project members.

So, don't view the project as one big thing, as shown in <FigureNumber /> below.

<Figure caption="The entire project.">
<Mermaid>
{{`
graph TB
    Project
`}}
</Mermaid>
</Figure>

Instead, view the project as a collection of tasks that needs to be completed, as shown in <FigureNumber /> below. When all tasks have been completed, the entire project has been completed. This way, each project member can then work on her own task, and contribute that way.

<Figure caption="Dividing the project into multiple smaller tasks.">
<Mermaid>
{{`
graph LR
    subgraph Project
        a[Task A]
        b[Task B]
        c[Task C]
        d[Task D]
    end
`}}
</Mermaid>
</Figure>

How the work is divided into these task depends on what type of project it is, so it differs quite a lot from project to project. If you don't know how to do it, then an excellent first task that can be assigned to a project member is *Divide the project into multiple smaller tasks*.

### Parallel tasks
In best case you manage to divide the work into multiple tasks that can be completed in parallel. That's great, because then all project members have something different to work on at the same time. For example, on a website, Alice can implement the guestbook page and Bob can implement the contact page in parallel because these are independent of each other, as shown in <FigureNumber /> below.

<Figure caption='Example of parallel tasks ("Implement the guestbook page" and "Implement the contact page").'>
<Mermaid>
{{`
graph TB
    subgraph Website Project
        a[Setup the layout]
        b1[Implement the guestbook page]
        b2[Implement the contact page]
        c[Deliver website to customer]
        a-->b1-->c
        a-->b2-->c
    end
`}}
</Mermaid>
</Figure>

### Sequential tasks
Sometimes you have tasks that must be completed in order, i.e. Task 1 must be completed before Task 2 can be started, and Task 2 must be completed before Task 3 can be started, and so on. An example of that is a website with a blog users can write comment on. Alice is responsible for implementing the blog page, and Bob is responsible for implementing the comment functionality on the blog posts. Bob can't start working on his task until Alice has completed her task, as shown in <FigureNumber /> below.

<Figure caption='Example of sequential tasks (all of them).'>
<Mermaid>
{{`
graph TB
    subgraph Website Project
        a[Setup the layout]
        b[Implement blog functionality]
        c[Implement comment on blogposts functionality]
        d[Deliver website to customer]
        a-->b-->c-->d
    end
`}}
</Mermaid>
</Figure>

Now Alice and Bob can't work at the same time, but this is still manageable. When Alice and Bob can work on their tasks in parallel, they might work on the tasks at 50% of their capacity (they have other things to do too) for 2 days, so after 2 days they have completed their tasks. When the tasks needs to be completed in order, Alice probably needs to work 100% on her task the first day, and then Bob needs to work 100% on his task the second day, and they will now have completed their two tasks within two days even though they needed to be completed in order.

So, with sequential tasks you will just be less flexible with when you can work on the task, but overall sequential tasks shouldn't take longer time to complete than parallel tasks.

[Trello](https://trello.com/) can be used to keep track of which tasks you have and who has been assigned which. Big and really serious projects can use a [Gantt Chart](https://en.wikipedia.org/wiki/Gantt_chart).

<FigureNumber /> below shows an example of tasks identified in a bigger project. At the start of the project it can be hard to identify all tasks, and the goal of the project also sometimes changes while you work on it, so it's not uncommon that tasks are added to/removed from the project as it progresses.

<Figure caption='Example of tasks in a bigger project.'>
<Mermaid>
{{`
graph LR
    subgraph Website Project
        start1[Create database]
        start2[Create website layout]
        a1[Create blogposts table in DB]
        a2a[Add create blogpost page]
        a2b[Add show blogpost page]
        a2c[Add edit blogpost page]
        a2d[Add delete blogpost page]
        b1[Create guestbookPosts table in DB]
        b2a[Add create guestbook post page]
        b2b[Add show guestbook posts page]
        stop[Deliver to customer]
        start1-->a1
        start1-->b1
        a1-->a2a
        a1-->a2b
        a1-->a2c
        a1-->a2d
        b1-->b2a
        b1-->b2b
        start2-->a2a
        start2-->a2b
        start2-->a2c
        start2-->a2d
        start2-->b2a
        start2-->b2b
        a2a-->stop
        a2b-->stop
        a2c-->stop
        a2d-->stop
        b2a-->stop
        b2b-->stop
    end
`}}
</Mermaid>
</Figure>

## Regular meetings
To make sure that each project member has something to work on it's a good idea to have regular meetings (for example Tuesdays 10:00 and Fridays 13:00 each week). This way new tasks can be continuously identified as the project work progresses, and new tasks can be assigned to project members that are done with their previous tasks, so each project member always have a task to work on.

To encourage project members to complete their tasks it's a good idea to estimate how long time each task will take to complete and assign the task a deadline. If the project member that has been assigned the task hasn't completed it before the deadline she needs to explain to the rest of the group why it takes her such long time, and if she can't give a reasonable explanation she's probably just been lazy. 

In the beginning of the project it's good to have many small meetings (maybe every second day) since there's usually not much to do in the beginning for most groups members (few tasks to do, and they are usually sequential). The second or third week there are usually more tasks that can be completed in parallel, and you can have the meetings more rarely (maybe once a week).

## Verify each others' work
Even though individual project members have only worked on a small part of the project, you are still responsible for the entire project together. Therefore you want to verify that the work the other project members have done has been done properly. This can be done at your regular meetings: when a project member has completed a task, ask her to explain how she has completed the task, and check if she can answer questions about it. For example, if one project member has been assigned the task to design the graphical user interface of an application, ask her questions like *Why did you put that link in the menu and not at place X?* and *Why is the background color blue?*, etc. If she can't answers these questions, she hasn't thought about them and she can improve her work by thinking about them and then re-design the graphical user interface.

The same goes with the code project members write. For that [Git](https://git-scm.com/) is an excellent tool to use: don't let other members push their work to the master branch unless someone else in the group has approved it.

## Learn first, implement then
Projects carried out by students are not 100% the same as projects carried out by professionals. If a professional project manager puts together a team of her choice, she'll probably pick an experienced database manager to work on the database in the project, an experienced web developer to work on the website in the project, an experienced Android developer to work on the Android app in the project, etc. These experienced workers already know the area they are responsible for in the project, so it's quite straight forward for them to contribute with their parts to the project.

Students on the other hand are not experienced workers. Often they don't know the subject they are responsible for in the project in advance, and first need to learn the subject and then implement the part they are responsible for. This is of course much harder! It might feel a bit unfair, but remember that students have more time to work on their projects than what professionals do, and the reason for this is of course so that students can learn the subject at the same time, so it's not as bad as it sounds.

::: tip It's hard to be a professional too
Sometimes professionals need to learn the subject as they work on the project too. It's not uncommon that one person suddenly stops working on a project in a company (maybe that person got sick, got a new job, or maybe got hit by a car and unexpectedly died), and it's not uncommon that the boss then re-assigns her duties to other workers at the company, even though if it's not their area of expertise. 
:::

Some students try to learn the subject and apply it in the project at the same time. This is usually a bad idea; the first time you use something you rarely use it the correct way, and it will be confusing for the other project members if you redo your part of the project many times just because you didn't knew how to do it properly the first time. Therefor it's better if each project member has her own *practice project* of some kind she can use to really learn the subject, and then apply it to the real project. It might feel like a waste of time, but it's not. What will take most time is to learn the subject, to implement something when you already know the subject takes very little time.

## A meeting protocol
Below is a suggestion on a meeting protocol you can use at your meetings.

1. Agree on who will be the meeting chairman (good to switch each meeting so you all get some practice).
2. Agree on who will be the meeting secretary (good to switch each meeting so you all get some practice).
3. Ask each project member which tasks they've been working on since the last meeting and how it's going. 
4. Identify new tasks that needs to be completed. 
5. Assign tasks to project members they should work on til next meeting.

::: warning Note!
This protocol is kind of minimal, you probably discover a lot of other items that are good to have in the protocol.
:::

The meeting notes produced by the secretary could be as simple as the one shown in <FigureNumber /> below.

<Figure caption="Example of meeting notes.">
<div style="margin: 2em; background-color: silver; border-radius: 1em; padding: 1em 2em;">

Meeting date & time: __________________

Chairman: __________________

Secretary: ________________

Other present project members: _______________________

1. Each project member presented their progress since the previous week:
    - Alice has completed Task X without problem.
    - Bob discovered Task Y was much harder than expected because XXX.
    - Claire has been sick and couldn't work on Task Z.
2. The following new tasks were identified:
    - When Alice worked on Task X she realized it would be good to have Task U.
    - Claire likes animations and thinks it would be good to use that in the project, which is Task V.
    - Bob thinks it's better to divide his Task Y into the sub tasks Y1 and Y2.
3. The project members should work on the following tasks til next meeting:
    - Alice should work on Task U.
    - Bob should work on Task Y1 (almost done with it now) and Y2.
    - Claire should work on Task Z and Task V.
4. Next meeting is YYYY-MM-DD HH:MM.

</div>
</Figure>

::: warning Note!
These sample meeting notes are kind of minimal, you will probably write a lot more than just this.
:::

A meeting protocol like this is valuable for all project members if a conflict should arise in the future. For example, if one student claims another student in the group has not contributed much to the project, the meeting notes can be used to check what the student actually has contributed with.