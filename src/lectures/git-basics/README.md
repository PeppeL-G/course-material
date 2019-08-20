---
sidebar: auto
navbarTitle: Git Basics
---

# Git Basics
Git is a version control system you can use to remember previous versions of the source code (or whatever type of files you need to version control) in your projects. It was created by [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds) in 2005 when he couldn't find a good version control system he could use for the Linux kernel he was working on. Git quickly became a popular version control system, especially for open source projects thanks to GitHub hosting the source code online for free. [Git is today (2019) one of the most commonly used version control systems.](https://trends.google.com/trends/explore?date=all&q=%2Fm%2F05vqwg,%2Fm%2F012ct9,%2Fm%2F08441_,%2Fm%2F08w6d6,%2Fm%2F09d6g&hl=en-US&tz=&tz=)

## Why use a version control system?
So, why bother spending time on learning Git? Turns out that using a version control system have some very valuable benefits for projects, and all big software projects do today use some type of version control system.

### Benefit 1: Knowing when what changed
If a security bug is introduced into software, we can use the version control system to go back in time and see for how long time the bug has existed. This is especially important for libraries which other applications  makes use of, because the libraries will most likely exist in different versions, and applications making use of the library need to know if the specific version of the library they are using contains the vulnerability or not.

::: tip Example
When [The Heartbleed Bug](http://heartbleed.com/) was discovered in OpenSSL, they could quickly say that the *Bug was introduced to OpenSSL in December 2011 and has been out in the wild since OpenSSL release 1.0.1 on 14th of March 2012. OpenSSL 1.0.1g released on 7th of April 2014 fixes the bug.*
:::

With the same reasoning, applications need to version control their code as well, so if, for example, a website contains a security vulnerability, one can quickly see for how long time the vulnerability has existed. Maybe only newly registered users since the bug was introduced have had their data compromised?

### Benefit 2: Keeping track of who did what
When you find a vulnerability/bug, you always want to have as much information as possible about it, including who introduced the bug. Was it on purpose or not? What relevant code was introduced? With a version control system, that is quite easy to find out.

::: tip Example
When a new developer took over the npm package *event-stream* (a library in Node.js), he started to inject bad code into it, which was executed by all new applications (and some old ones that was updated) using this library. See [issue #116 on the event-stream's GitHub repository](https://github.com/dominictarr/event-stream/issues/116). Thanks to using a version control system, it was quite easy to discover all changes made by that programmer, and his changes to the code could be reverted back.
:::

### Benefit 3: Dealing with concurrent changes
In bigger software projects, there are often multiple programmers working on the source code at the same time. Each of them have their own copy of the source code, and when one programmer is done implementing a new feature, she needs to share her version of the source code with the other programmers, so their copy of the source code contains the new feature as well. But at the same time, these other programmers will be half way through implementing their own features, which might clash with the changes made by the first programmer. This is a non-trivial problem to solve, but version control systems gives us good tools to deal with it.

::: tip Example
[1 316 developers were involved in the development of the Linux kernel version 3.2](https://royal.pingdom.com/linux-kernel-development-numbers/).
:::

### Benefit 4: Backups
By using a *distributed* version control system (such as Git) you automatically get backups of your code. Each programmer that works on the project have a copy of the source code (and the previous versions of it) on her own computer. So if 10 programmers work on the same project, you have (at least) 10 copies of the source code on 10 different computers, so if one programmer's computer crashes and the source code on that computer is lost, there are still 9 copies left on the other computers. Your source code will never be truly lost again.

## How does Git work?
[There exists many different version control systems](https://en.wikipedia.org/wiki/Comparison_of_version-control_software#General_information), but let us focus on Git alone. Many other version control systems work in a similiar way and often use the same terms, but each term might have a little bit different meaning.

In the text below the term *project folder* will be used to refer to a folder on your computer in which you put all the files that belongs to a project you are working on. If the project for example is about creating a new website, then the project folder could be a folder named `the-project`, and in this folder you put all the source files (in this case all the HTML files, CSS files, images, etc.) the website consists of.

### Repositories
Version control systems make use of *repositories*. When you have a project you want to version control, you tell your version control system to create a new repository for you for that project. The repository is responsible for remembering all the different versions you have of your source files. So a single computer can contain multiple repositories: one for each project you version control.

How a version control system internally represents a repository is not something we need to worry that much about, but it is good to know that Git uses a folder named `.git` in the project folder for this. The repository will contain all the different versions of the source files you want to remember. If you later delete the `.git` folder in your project folder, then you have deleted your entire repository for that project, and all the versions of your source files you have asked Git to remember for you will be gone. Be careful to not delete a `.git` folder by accident!

To create a new Git repository for your project, go to the project folder and run the command `git init`. This will create the `.git` folder in your project folder for you. So far we haven't asked Git to remember any new version of the project for us, so the repository will at the moment be an empty repository (although the `.git` folder will already contain some files that are used by Git internally).

::: warning Note
Since the name of the `.git` folder starts with a dot, most file explorers don't display this folder unless you change a setting telling it to display files and folders that starts with a dot. How you change that settings depends on which file explorer you use (Google it...).
:::

::: tip Example
<Tabs remember-selected-key="selected-os">
<Tab title="Windows PowerShell">

```powershell
# Which directory are we currently standing in?
$ "$pwd"
C:\Users\peter\the-project

# What does that directory contain?
$ dir -Name -Force
# (no output = nothing)

# Create a new repository for the directory we are standing in.
$ git init
Initialized empty Git repository in C:/Users/peter/the-project/.git/

# What does the directory contain now?
$ dir -Name -Force
.git
```

</Tab>
<Tab title="Linux">

```bash
# TODO
```

</Tab>
</Tabs>
:::

### Commits (versions)
To tell the repository to remember a specific version of your project, you send the repository a *commit*. A commit describes the changes made to project since the previous commit. This way, each commit can be seen as a snapshot of what the project look like at the moment the commit was created. By using these commits Git is able to restore the source files so they contain precisely the same content as they did at a specific commit/version of your project.

A commit in Git primarily contains:

- A unique identifier for the commit (a hash value like the hexadecimal string `e4728bc8aa2...`)
- The unique identifier of the previous commit.
- Which changes that has been made to the project (files created/edited/deleted) since the previous commit.
- A human readable message explaining the changes that has been made since the previous commit.
- The name of the developer creating the commit.
- The time at which the commit was created. 

Before you tell Git to create a new commit for you, you must first tell Git which changes you want to put into the commit (you can change files without putting those changes into the next commit you create, which might seem a bit weird, but it can be extremely useful). If you have created a new file or made changes to an existing file, you need to run the command `git add THE_FILE_NAME.EXT` to tell Git that the changes you have made to the file named `THE_FILE_NAME.EXT` should be part of the next commit you create. Run `git add THE_FILE_NAME.EXT` one time for each file you have created/changed and want to be part of the next commit.

Then use the command `git commit -m "A descriptive message..."` to tell Git to create a new commit with the added files and with the human readable message `A descriptive message...` (that you of course should change to a message describing the changes you have made since the previous commit). Git will figure out the other information (your name, previous commit unique identifier, current time, etc.) on its own or simply ask you to enter it.

Some useful `git` commands:

- `git add THE_FILE_NAME.EXT` will add the file `THE_FILE_NAME.EXT` to the next commit you create.
- `git add THE_FOLDER_NAME/*` will add all the files in the folder named `THE_FOLDER_NAME` to the next commit you create.
- `git add .` will add all changes you have made to any file in the entire project folder.
- `git rm THE_FILE_NAME.EXT` will remove the file named `THE_FILE_NAME.EXT` in the next commit you create.
  - Note: When you use `git rm THE_FILE_NAME.EXT`, the previous versions of the file `THE_FILE_NAME.EXT` in earlier commits will still be remembered in your repository, but the project folder will no longer contain the file.
- `git status` will show you which files you have added/removed/"changed and not added" to the next commit you will create.

::: warning Note
When using the various `git` commands, it will often tell you that you are working on a branch called *master*. We'll get back to what branches are in the next lecture, but for now, just accept/ignore the fact that you are working on the master branch.
:::

::: tip Example (continuation of previous example)

In the previous example we had just setup a new Git repository for an empty project folder. Now, let us create and change some files in our project folder.

<Tabs remember-selected-key="selected-os">
<Tab title="Windows PowerShell">

```powershell
# What is the current status of our source files?
$ git status
On branch master

No commits yet

nothing to commit (create/copy files and use "git add" to track)

# Create file-1.txt containing some text.
$ "Content file 1" > file-1.txt
# (no output)

# What does the directory now contain?
$ dir -Name -Force
.git
file-1.txt

# What does file-1.txt contain?
$ cat file-1.txt
Content file 1

# What is the current status of our source files?
$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        file-1.txt

nothing added to commit but untracked files present (use "git add" to track)

# Add file-1.txt in the next commit we will create.
$ git add file-1.txt
# (no output)

# What is the current status of our source files?
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   file-1.txt

# Create next commit.
$ git commit -m "The first commit."
[master (root-commit) 543ec8a] The first commit.
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 file-1.txt

# What is the current status of our source files?
$ git status
On branch master
nothing to commit, working tree clean

# Create file-2.txt containing some text.
$ "Content file 2" > file-2.txt
# (no output)

# What is the current status of our source files?
$ git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)

        file-2.txt

nothing added to commit but untracked files present (use "git add" to track)

# Add file-2.txt in the next commit we will create.
$ git add file-2.txt
# (no output)

# What is the current status of our source files?
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   file-2.txt

# Change the content in file-1.txt.
$ "Updated content file 1" > file-1.txt
# (no output)

# What is the current status of our source files?
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   file-2.txt

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file-1.txt

# Add the changes we made to file-1.txt in the next commit we will create.
$ git add file-1.txt
# (no output)

# What is the current status of our source files?
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   file-1.txt
        new file:   file-2.txt

# Create next commit.
$ git commit -m "The second commit."
[master 25bdb4c] The second commit.
 2 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 file-2.txt

# What is the current status of our source files?
$ git status
On branch master
nothing to commit, working tree clean
```

</Tab>
<Tab title="Linux">

```bash
# TODO...
```

</Tab>
</Tabs>

:::

For small projects with a single developer (as in the example above), the repository usually consists of a single chain of commits, as visualized here (*Commit 3* is the latest commit created):

```
Commit 1      <--      Commit 2      <--      Commit 3
```

As long as we don't make use of branches, the repository will always consists of a sequence of commits like that (we will introduce branches in next lecture).

To view all the commits in the repository, you can use the command `git log`.

::: tip Example (continuation of previous example)

<Tabs remember-selected-key="selected-os">
<Tab title="Windows PowerShell">

```powershell
# Show all commits.
$ git log
commit 25bdb4c8b4e1d00e9cb885ff8d3a9b85cdafec17 (HEAD -> master)
Author: Peter L-G <my.email@site.com>
Date:   Wed Apr 24 11:24:53 2019 +0200

    The second commit.

commit 543ec8a30c37a037d500af5db985e2175f808458
Author: Peter L-G <my.email@site.com>
Date:   Wed Apr 24 11:21:50 2019 +0200

    The first commit.
```

</Tab>
<Tab title="Linux">

```bash
```

</Tab>
</Tabs>
:::

### Switching versions
To view a specific version of the project, you simply tell Git *Show me the files as they looked like in commit XXX*, where XXX is the unique identifier for the commit. When you do this, Git will change the files and folders in the project folder so they look precisely the way they did in commit XXX. The command used for this is `git reset XXX`. It is easy as that to jump between different versions of your source code! However, you better first learn about the HEAD pointer in Git before you create new commits after you have run this command.

::: warning Note
You can't use the command `git reset XXX` if you have made changes to the source files you haven't committed yet (because then those changes would be lost).
:::

::: tip Example (continuation of previous example)
<Tabs remember-selected-key="selected-os">
<Tab title="Windows PowerShell">

```powershell
# TODO
```

</Tab>
<Tab title="Linux">

```bash
```

</Tab>
</Tabs>
:::

### The HEAD pointer
In Git, each repository also contains a pointer called HEAD. It points to the branch you are currently working on, but since we avoid introducing branches in this lecture, you can for now see it as that the HEAD pointer points to the last commit you've created/the commit you are currently working on. That's how Git knows which the "previous commit" should be when you create a new commit: it simply uses the commit the HEAD pointer points to as the previous commit, and then when you create a new commit it changes the HEAD pointer to point to the newly created commit.

::: tip Example

If you have created two commits, it would look like this:

```
                        HEAD
                          ↓
Commit 1      <--      Commit 2
```

If you then create a third commit, it will look like this:

```
                                               HEAD
                                                 ↓
Commit 1      <--      Commit 2      <--      Commit 3
```

When you use the command `git reset XXX`, Git will change the files in your project folder so they look the way they did in commit `XXX`, but it will not change the HEAD pointer to point to commit `XXX`. If you use the command `git reset XXX` to change the files so they look the way they did in Commit 2 above, and then make changes and create a new commit, then you would end up with this:

```
                                                                      HEAD
                                                                        ↓
Commit 1      <--      Commit 2      <--      Commit 3      <--      Commit 4
```

That is, Commit 3 will still be in the chain of commits, but Commit 4 is rather a continuation of Commit 2.
:::

If you want to switch to an earlier commit and change the HEAD pointer to point to that earlier commit, you can use the command `git reset --hard XXX`.

::: tip Example
If you have the following:

```
                                               HEAD
                                                 ↓
Commit 1      <--      Commit 2      <--      Commit 3
```

And then use `git reset --hard XXX` to change the source files to what they looked like in Commit 2, you would end up with the following:

```
                        HEAD
                          ↓
Commit 1      <--      Commit 2      <--      Commit 3
```

If you now create a new commit, you would end up with the following:

```
                        HEAD
                          ↓
                       Commit 4
                          ↓
Commit 1      <--      Commit 2      <--      Commit 3
```
:::

Using `git reset --hard XXX` creates a new branch (or rather: the first commit after this command creates a new branch). It is not recommended to create branches this way, because you can forget commits (`git log` only displays the chain of commits the HEAD pointer points to, so you need to remember the other commits not part of this chain yourself (Commit 3 in the example above)). So don't create branches this way; Git has better support for working with branches through various commands which we will cover in next lecture. But this serve as a good example of how you should think of commits and the HEAD pointer.

## When to commit
A good question is *How do I know when it is time to create a new commit?* Is it good practice to create a new commit each day? Or should you create commits more often than that? Or less? Or is it the size of the commit (how many lines of you code you have removed/added/modified since the previous commit) that determines when to create a new commit? Are changes including 200 lines of code a good size of a commit? Well, it turns out that the best practice has nothing to do with these properties.

A good commit should contain a single new feature you have added to the project, or a bug that you have fixed, or similar. This way, it makes more sense to browse through the log of all commits afterwards. If it takes you 1 hour or 10 days to implement the feature/fix the bug, or if it requires changes to 20 lines of code or 2000 lines of code doesn't matter, although it is good to avoid commits with too big changes. If the feature you should implement is quite big, try to break it down into more smaller features, e.g. instead of implementing the feature *Manage blogposts* on a website, break it down into these features:

- Create blog posts
- Read blog posts
- Update blog posts
- Delete blog posts

This way, you end up with 4 smaller commits, instead of one large commit.

The best way to make use of a version control system is to work in a very structured way. Always before you start to write/change code in the project, you must have a goal that you want to achieve (the feature to implement or the bug to fix), and when this goal has been achieved, it is time to create a new commit.

::: tip Example
If the project is about writing a book, then it could be suitable to create a new commit each time you're done writing a chapter in the book. If spelling mistakes later are discovered, or if you want to improve a chapter by rephrasing sentences or paragraphs, then it could be suitable to create a new commit after each correction/rephrasing.
:::

::: tip Example
If the project is about creating a website, then it could be suitable to create a new commit each time you have implemented a new webpage on the website. If you later discover a bug or want to improve a webpage, you create a new commit when you have fixed the bug/improved that webpage.
:::

::: tip Example
If the project is about completing some lab assignments, then it could be suitable to create a new commit each time you have completed one of the assignments and each time you have fixed mistakes in an assignment you thought you had previously completed but now have corrected.
:::

## Using Git through a GUI
There exist applications with graphical user interfaces you can use to manage your Git repositories. This includes many IDE:s you can use to write source code. By using such an application, you don't need to remember all the details about the Git commands (arguments and flags), so this can be an easier way for you to get started with Git. However, these applications use the Git commands under the hood for you, so it is still good have a basic understanding of how the different Git commands work, because you use Git in the same way (creating commits, etc.) even if you use it through a graphical user interface instead of a command line interface.

## Practising
Play around with [Visualizing Git](http://git-school.github.io/visualizing-git/#free) to learn how commits work. With this tool, you never use `git add`; just use `git commit -m "Message"` directly to create a new commit, and imagine that the commit contains changed/new files. You can also try to use `git reset --hard XXX`.

## Recommended reading
[Pro Git](https://git-scm.com/book/en/v2) by *Scott Chacon* and *Ben Straub*. It is available for free online in multiple different formats.

* [Chapter 1: Getting Started](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)
* [Chapter 2: Git Basics](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)
  * You can skip the parts about using a remote repository (`git clone`, `git pull`, `git push`, ...); that's something you'll learn in the third lecture.