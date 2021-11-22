---
sidebar: auto
navbarTitle: TeamWork
---

# Teamwork
The first time you do a project together with others it can be hard to know how you should work together to be efficient. This lecture contains some recommendations for you to avoid disaster (:

## Summary
For the lazy ones who don't want to read all text on this page, here is a short `README.md` file you can put in your GitHub repository with instructions on how you should work.

````md
# Here you write the name of your project/app
Here you write a short text describing what the project/application is about.

## Run Instructions
1. Here you write
2. reproducible instructions for
3. building and running
4. the application on a brand new computer.

## Team Members
| Name  | Roles/Main Responsibilities | GitHub Name |      Email      |      Phone      |
|-------|-----------------------------|-------------|-----------------|-----------------|
| Alice | Bluetooth, Database         | Al Ice      | alice@gmail.com | 070 - 123 45 67 |
| Bob   | GUI, UX                     | Bobbo       | bob@hotmail.com | 073 - 123 45 67 |
|  ...  | ...                         | ...         | ...             | ...             |

## Development Instructions
To implement a new feature:

1. Create an issue describing the feature.
2. When you start implementing the feature:
  1. Assign the issue to yourself.
  2. Create a new branch from the `master` branch with the name `feature-XXX`, where `XXX` is the id of the issue, and implement the feature in the new branch.
3. Use the issue to discuss the feature with others (use @mention functionality).
4. When you are done and have pushed your branch to the remote repository, create a pull request all team members need to approve to merge it into the `master` branch.
  * If not all approve, fix it according to the feedback you get and the discussions you have.
5. When all team members have approved the pull request it will be merged into the `master` branch and part of the latest official version of the application.
6. Close the issue.

## Meeting Instructions
We meet at school 13:00 each Thursday. Alice is responsible for booking a room for us. The protocol for each meeting is:

1. Agree on who will be the meeting chairman (good to switch each meeting so you all get some practice).
2. Agree on who will be the meeting secretary (good to switch each meeting so you all get some practice).
3. Ask each team member which tasks they've been working on since last meeting and how it's going.
4. Identify new tasks in the project that needs to be completed. 
5. Assign tasks to team members they should work on til next meeting.

Each meeting is documented in a new markdown file named `YYYY-MM-DD.md` (the date of the meeting) and stored in the `meetings/` folder. The following template for the markdown file should be used:

```md
Meeting date & time: __________________

Chairman: __________________

Secretary: ________________

Other present team members: _______________________

1. Each team member presented their progress since the previous week:
    * Alice has completed Task X without problem.
    * Bob discovered Task Y was much harder than expected because XXX.
    * Claire has been sick and couldn't work on Task Z.
2. The following new tasks were identified:
    * When Alice worked on Task X she realized it would be good to have Task U.
    * Claire likes animations and thinks it would be good to use that in the project, which is Task V.
    * Bob thinks it's better to divide his Task Y into the sub tasks Y1 and Y2.
3. The team members should work on the following tasks til next meeting:
    * Alice should work on Task U.
    * Bob should work on Task Y1 (almost done with it now) and Y2.
    * Claire should work on Task Z and Task V.
```
````

## Setup a Teamwork Environment
If you are going to work as a team, you have to agree on how to get things done. 3 students working individually without agreeing on what to build, without knowing what the other ones are doing, etc., won't produce a good final result. So you need to setup some rules for how the team should work, and then all team members need to adapt and follow these rules. **The individuals need to adapt to the team, the team should not adapt to individuals!**

### Setup a File Repository
A project usually results in many files, such as:

* Reports
* Mockups
* Prototypes
* Source files
* Power Point presentations
* Etc.

It is crucial that all team members have easy access to these files, so everyone easily can read and change them. To share the files with each others, you can try to use something simple as:

* Email the new versions of the files to everybody in the team when you have made changes to them.
* Use Dropbox/OneDrive/Google Drive/Etc. to automatically send the latest version of the files to a server all have access to.

These ways are tempting to use in the beginning since it's so easy to get started, **BUT** very soon it will be very hard to keep track of the files, such as when one team member forgets to send an email to everybody, or uses another topic in the email than what you agreed on, or one member introduces a temporary bug while implementing a new feature, and Dropbox automatically sends that file to the server and now the rest of the team members can't run their code because of this bug 😑

::: tip Use Git
We recommend you to use a proper Version Control System, such as [Git](https://git-scm.com/), to share your files with each other. In addition to have been designed to be used by users who need to share files with each other, it is standard to use a Version Control System in the industry, so just as good for you to learn how to use one already now. We recommend that you use Git (see the mini-course [Git](../../courses/git) for a small introduction), but you may use whichever Version Control System you want.
:::

Deciding how to share files is one of the first things your team need to agree on, preferably at the very first meeting you have, so everybody knows how to access the notes from the meeting.

### Communication
Throughout the project you need to communicate with each other. Sometimes the team needs to take a big decision, and then you need to have one communication channel you can use for that, such as physical meetings. Sometimes a team member needs to inform the others that the team needs to have a physical meeting to take a big decision, and then you need one communication channel for that, such as email or SMS. Sometimes one team member needs to communicate with one other team member to ask questions about code that other team member has written, and then you need one communication channel for that, such as phone or video calls, etc.

Deciding how you should communicate with each other/which communication channels to use when is something you need to agree on in the beginning of the project too, preferably at the very first meeting you have, so everybody knows how to contact each other.

::: tip Use issues in GitHub
We recommend you to use issues in a [GitHub](https://github.com/) repository to communicate with each other. This way, all your communication and decisions will be documented and searchable, and you can easily [@mention](https://github.blog/2011-03-23-mention-somebody-they-re-notified/) your team members to notify them that their input is needed.

Don't use issues like a chat, so don't create issues like *Help me Alice*, but create an issue about the problem you need help with/want to discuss, such as *Code about XXX needs better documentation*), and then mention the person who best can help you.
:::

#### Regular Meetings
To get to know each other better and to make sure that each team member has something to work on it's a good idea to have regular meetings (for example Tuesdays 10:00 and Fridays 13:00 each week). This way each team member can quickly update the others on what:

* the team member has done since the previous meeting.
* problems the team member has identified in his work since the previous meeting.
* what the team member intends to work on until next meeting.

In the beginning of the project it's good to have many small meetings (maybe every second day) since there's usually not much to do in the beginning for most team members (few tasks to do, and they are usually sequential). The second or third week there are usually more tasks that can be completed in parallel, and you can many start having the meetings more rarely (maybe once a week). You decide how you want to do it.

::: tip Document your meetings in the repository
We recommend you to have physical meetings every now and then (at least once each week in the beginning) to get to know each other better and have more efficient discussions. At each meeting, appoint a chairman and a secretary. The secretary should document all discussions and decisions taken at the meeting in a file (for example a markdown file), which then is stored in your repository. This way, team members who can't attend the meeting can easily catch up, and if someone forgets what was said or disagree with what you have decided can go back and look in the file to recall.

<FigureNumber /> below contains a minimal meeting protocol you can use at your meetings (feel free to extend/improve it).

<Figure caption="Example of meeting protocol.">

```markdown
1. Agree on who will be the meeting chairman (good to switch each meeting so you all get some practice).
2. Agree on who will be the meeting secretary (good to switch each meeting so you all get some practice).
3. Ask each team member which tasks they've been working on since the last meeting and how it's going.
4. Identify new tasks in the project that needs to be completed. 
5. Assign tasks to team members they should work on til next meeting.

```

</Figure>

The meeting notes produced by the secretary could be as simple as the ones shown in <FigureNumber /> below.

<Figure caption="Example of meeting notes.">

```markdown
Meeting date & time: __________________

Chairman: __________________

Secretary: ________________

Other present team members: _______________________

1. Each team member presented their progress since the previous week:
    - Alice has completed Task X without problem.
    - Bob discovered Task Y was much harder than expected because XXX.
    - Claire has been sick and couldn't work on Task Z.
2. The following new tasks were identified:
    - When Alice worked on Task X she realized it would be good to have Task U.
    - Claire likes animations and thinks it would be good to use that in the project, which is Task V.
    - Bob thinks it's better to divide his Task Y into the sub tasks Y1 and Y2.
3. The team members should work on the following tasks til next meeting:
    - Alice should work on Task U.
    - Bob should work on Task Y1 (almost done with it now) and Y2.
    - Claire should work on Task Z and Task V.
4. Next meeting is YYYY-MM-DD HH:MM.
```

</Figure>

A meeting protocol like this is valuable for all team members if a conflict should arise in the future. For example, if one student claims another student in the team has not contributed much to the project, the meeting notes together with the commit history and the issue discussions can be used to check what each student actually has contributed with.
:::

## Divide the work into tasks
When you have a Teamwork Environment setup, you are ready to start implementing the application in the project. It's usually a bad idea that the entire team works on one and the same problem. For example, if you are 4 team members and you need to design your database, it's enough if just one team member works on that; there's no need for the other 3 team members to work on this task too. If they do, they'll most likely just sit and watch and waste their time watching the fourth team member draw the database diagram instead of contributing to the project. So, to be efficient, it's crucial to divide the work among the team members.

So, don't view the project as one big thing, as shown in <FigureNumber /> below.

<Figure caption="The entire project.">
<RenderMermaid graph-definition="
graph TB
	Project
" />
</Figure>

Instead, view the project as a collection of tasks that needs to be completed, as shown in <FigureNumber /> below. When all tasks have been completed, the entire project has been completed. This way, each team member can then work on her own well-defined task, and contribute that way.

<Figure caption="Dividing the project into multiple smaller tasks.">
<RenderMermaid graph-definition="
graph LR
    subgraph Project
        a[Task A]
        b[Task B]
        c[Task C]
        d[Task D]
    end
" />
</Figure>

How the work is divided into these tasks depends on what type of project it is, so it differs quite a lot from project to project. If you don't know how to do it, then an excellent first task that can be assigned to a team member is *Divide the project into multiple smaller tasks* :) When you implement an application, each feature the application needs to contain can usually be expressed as a task (i.e. *Implement feature X*, like *Implement the guestbook page, which lists all guestbook posts users have written*).

::: tip Working on the same task
For some tasks it can make sense for all team members to individually work on the same task independently of each other at the same time. For example, if the task is *Design the graphical user interface of the app*, it's not uncommon to test multiple different designs, and then go with the one that seems most promising. Here, each team member can come up with their own design, and then you can have a meeting where you present your designs to each other and discuss about which one is best.
:::

### Parallel tasks
In best case you'll manage to divide the work into multiple tasks that can be completed in parallel. That's great, because then all team members have different tasks to work on at the same time. For example, on a website, Alice can implement the guestbook page and Bob can implement the contact page in parallel because these are independent of each other, as shown in <FigureNumber /> below.

<Figure caption='Example of parallel tasks ("Implement the guestbook page" and "Implement the contact page").'>
<RenderMermaid graph-definition="
graph TB
    subgraph Website Project
        a[Setup the layout]
        b1[Implement the guestbook page]
        b2[Implement the contact page]
        c[Deliver website to customer]
        a-->b1-->c
        a-->b2-->c
    end
" />
</Figure>

### Sequential tasks
Sometimes you have tasks that must be completed in order, i.e. Task 1 must be completed before Task 2 can be started, and Task 2 must be completed before Task 3 can be started, and so on. An example of that is a website with a blog users can write comments on. Alice is responsible for implementing the blog page, and Bob is responsible for implementing the comment functionality on the blog posts. Bob can't start working on his task until Alice has completed her task, as shown in <FigureNumber /> below.

<Figure caption='Example of sequential tasks (all of them).'>
<RenderMermaid graph-definition="
graph TB
    subgraph Website Project
        a[Setup the layout]
        b[Implement blog functionality]
        c[Implement comment on blogposts functionality]
        d[Deliver website to customer]
        a-->b-->c-->d
    end
" />
</Figure>

Now Alice and Bob can't work at the same time, but this is still manageable. When Alice and Bob work they probably don't spend 100% of their work time on the project (they have other things to do too, like other projects to work on, or, if you are a student, other courses to work on). For example, if Alice and Bob could work on their tasks in parallel, they might need 4 days to complete all tasks, but they complete them during 8 days anyway, because they work on other stuff during those 8 days too, as shown in <FigureNumber /> below.

<Figure caption='Alice and Bob working on parallel tasks (and other projects) independently of each other.'>
<RenderMermaid graph-definition="
gantt
    title Alice's and Bob's work hours in the project
    dateFormat  YYYY-MM-DD
    section Alice
    Task A1           :2021-01-01, 1d
    Task A2           :2021-01-03, 1d
    Task A3           :2021-01-06, 1d
    Task A4           :2021-01-08, 1d
    section Bob
    Task B1      :2021-01-01, 1d
    Task B2      :2021-01-04, 1d
    Task B3      :2021-01-05, 1d
    Task B4      :2021-01-06, 1d
" />
</Figure>

For sequential tasks that needs to be completed in order, such as Alice have to complete her tasks before Bob can start working on his tasks, Alice probably needs to work 100% on her tasks the first days, and then Bob needs to work 100% on his tasks after that, as shown in <FigureNumber /> below, and they will then have completed all their tasks within the same amount of time as when they could work on the tasks in parallel.


<Figure caption='Alice and Bob working on sequential tasks in the project, so they need to coordinate when to work on this project, and when to work on other projects.'>
<RenderMermaid graph-definition="
gantt
    title Alice's and Bob's work hours in the project
    dateFormat  YYYY-MM-DD
    section Alice
    Task A1           :2021-01-01, 1d
    Task A2           :2021-01-02, 1d
    Task A3           :2021-01-03, 1d
    Task A4           :2021-01-04, 1d
    section Bob
    Task B1      :2021-01-05, 1d
    Task B2      :2021-01-06, 1d
    Task B3      :2021-01-07, 1d
    Task B4      :2021-01-08, 1d
" />
</Figure>

So, with sequential tasks you will just be less flexible with when you can work on the task, but overall sequential tasks shouldn't take much longer time to complete than parallel tasks.

Big and really serious projects can take this one step further and use a [Gantt Chart](https://en.wikipedia.org/wiki/Gantt_chart) to help them estimate how long time it will take until the project is finished.

To encourage team members to complete their tasks it's a good idea to estimate how long time each task should take to complete and assign the task a deadline (you can do this together at your regular meetings). If the team member that has been assigned the task hasn't completed it before the deadline he needs to explain to the rest of the team why it takes him such long time, and if he can't give a reasonable explanation he has probably just been lazy. 

<FigureNumber /> below shows an example of tasks identified in a bigger project. At the start of the project it can be hard to identify all tasks, and the goal of the project will also sometimes change while you work on it, so it's not uncommon that tasks are added to/removed from the project as it progresses.

<Figure caption='Example of tasks in a bigger project.'>
<RenderMermaid graph-definition="
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
" />
</Figure>

::: tip Document your tasks as issues in GitHub
We recommend you to use [GitHub issues](https://guides.github.com/features/issues/) to keep track of which tasks you have. This way, you can easily:

* Document which tasks you have.
* Assign a team member to be responsible for carrying out the task.
* Document discussions and details about the tasks in the issue.
* Mark the task as completed when it has been carried out by closing the issue.
:::

## Verify each others' work
Even though individual team members have only worked on a small part of the project/the app, the team is still responsible for the entire project together. Therefore you want to verify that the work other team members have done has been done properly. This can be done at your regular meetings: when a team member has completed a task, ask her to explain how she has completed the task, and check if she can answer questions about it. For example, if one team member has been assigned the task to design the graphical user interface of an application, ask her questions like *Why did you put that link in the menu and not at place X?* and *Why is the background color blue?*, etc. If she can't answer these questions, then she hasn't thought about them and she can improve her work by thinking about them and then re-design the graphical user interface.

::: tip Use Code reviews in GitHub
We recommend you to use [Code Reviews in GitHub](https://github.com/features/code-review/):

1. When starting to work on a new task, create a new branch.
2. Carry out the task (i.e. implement the new feature) in the new branch.
3. Push the branch to the remote repository.
4. On GitHub, create a pull request to merge the changes in the new branch into the `main`/`master` branch.
5. When all team members have approved the request (after reviewing the code), apply the pull request.

GitHub has support for [only accepting code that has been approved by others](https://docs.github.com/en/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews). We strongly recommend you to use that.
:::

## Use Roles/Responsibilities
Optimally, all team members should know everything about the project/the application implementation (such as the code). In practice that's usually not possible. The application is often too big for that, and one of the points with dividing the project into tasks is so that each team member can work on her own tasks without knowing the details about the tasks the others are working on.

To be more productive, one can assign each team member a role, and that team member is then responsible for knowing all there is to know that is associated with that role. For example, one team member might be responsible for designing the graphical user interface and implementing the overall layout of the application, another team member might be responsible for designing the structure of the database and write an API the application can use to communicate with it, a third team member might be responsible for learning Bluetooth and write an API the application can use to communicate with other devices using Bluetooth, etc.

To have a role does not mean only that team member should work on tasks that are associated with that role. For example, the team member who is responsible for the database should not carry out all tasks that involves the database. Instead, this team member should be considered to be the database expert. This team member will probably do most of the work that involves the database (such as designing the structure of the database and start to implement the API one can use to communicate with it), but once the basics for this are done, any other team member should be able to work on tasks that involves making small changes to the database structure or the database API. If in doubt of how to do it, one can discuss the details with the database expertf.

::: tip Give different team members different roles/responsibilities
We recommend you to assign each team member one or more roles, so you specialize in different parts of the application. In the end, all students must know how all the code works, but it is OK if just one student is an expert and learn all there is to know about a technology, and then teaches the rest of the team members how your application makes use of that technology in best way possible.
:::

## Learn first, implement then
Projects carried out by students are not 100% the same as projects carried out by professionals. If a professional project manager puts together a team of her choice, she'll probably pick an experienced database manager to work on the database in the project, an experienced web developer to work on the website in the project, an experienced Android developer to work on the Android application in the project, etc. These experienced workers already know the area they are responsible for in the project, so it's quite straight forward for them to contribute with their parts to the project.

Students on the other hand are not experienced professionals. Often they don't know the subject they are responsible for in the project in advance, and first need to learn the subject and then implement the part they are responsible for. This is of course much harder! It might feel a bit unfair, but remember that students have more time to work on their projects than what professionals do, and the reason for this is of course so that students can learn the subject at the same time, so it's not as bad as it first seems.

::: warning It's hard to be a professional too!
Sometimes professionals need to learn the subject as they work on the project too. It's not uncommon that one person suddenly stops working on a project in a company (maybe that person got sick, got a new job, or maybe got hit by a car and unexpectedly died), and it's not uncommon that the boss then re-assigns that person's duties to other workers at the company, even though if it's not their area of expertise (they need someone working on it, and hiring a new guy takes time). 
:::

Some students try to learn the subject and apply it in the project at the same time. This is usually a bad idea; the first time you use something you rarely use it the correct way, and it will be confusing for the other team members if you redo your tasks many times just because you didn't knew how to do it properly the first time. Therefor it's better if each team member has her own *practice project* of some kind she can use to really learn the subject, and then apply it to the real project when she has experience of the subject. It might feel like a waste of time, but it's not: what will take most time is to learn the subject; to implement something when you already know the subject takes very little time.

::: tip Learn first, implement then
We strongly recommend students to first try to use something new they have learned in their own practice applications, and then, when they have learned how to use it properly, go ahead and use it in the project.
:::