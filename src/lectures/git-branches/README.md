---
sidebar: auto
navbarTitle: Git Branches
---

# Git Branches
When you work alone on a project with a Git repository, you usually don't need to worry that much about branches in Git. This is especially true when the repository only exists locally on your own computer, because then the repository only have a single branch (a default branch) called `master`, and you can more or less ignore the fact that branches exist in Git, even though you do work on the `master` branch all the time. But most often, this is not the case, and you need to have a basic understanding of how branches work in Git for you to use Git in best way possible. Furthermore, Linus Torvalds designed Git around the usage of branches, so they play a very central role in Git.

::: warning master VS main
If you create your repository on your own computer using the `git init` command, then the default branch is called `master`. If you create your repository on a server, such as [GitHub](https://github.com), then your default branch will be named `main` instead. In these lecture we assume the default name is `master`.
:::

## What is a branch?
We usually use commits to remember earlier versions of the project, but we can also use commits to work on different versions of the project at the same time. This is the case when the repository does not consists of a single chain of commits. An example of that would be a repository consisting of the following commits:

```
                       Commit 4                HEAD
                          ↓                      ↓ 
Commit 1      <--      Commit 2      <--      Commit 3
```

Here we can see that we have two different latest versions of the project represented by `Commit 4` and `Commit 3` respectively. They both contain features/functionalities the other version does not contain, and we say that we have two branches of the project at `Commit 2`. To know which version of the project we are working on, Git uses the `HEAD` pointer, so in this case we can see that we are currently working on the branch with `Commit 3` (if we would create a new commit, that commit would point to `Commit 3`).

So, a *branch* is simply a separate line of commits that takes the project in a different direction.

By default, there exists a single branch called `master`, which usually is used for the "main version" of the project. As long as you don't create a new branch and switch to it, you always work on the `master` branch.

In practice, a branch is just a pointer that points to the latest commit in that branch. The `HEAD` pointer in turn points to the branch you are currently working on.

::: warning Note
To simplify, we previous said that `HEAD` pointed to the latest commit. This is wrong; `HEAD` points to the branch you are currently working on.
:::

A repository with a single branch (the `master` branch only) and two commits would look like this:

```
                        HEAD
                          ↓
                    MASTER BRANCH
                          ↓
Commit 1      <--      Commit 2
```

Then when you create a new commit, the `master` branch pointer is changed to point to the newly created commit:

```
                                               HEAD
                                                 ↓
                                           MASTER BRANCH
                                                 ↓
Commit 1      <--      Commit 2      <--      Commit 3
```

## Creating branches
It is possible to create a new branch using the command `git reset --hard XXX`, but Git have better support for working with branches through other commands that are better to use.

The best way to create a new branch is by using the command `git branch BRANCH_NAME`. This create a new branch with the name `BRANCH_NAME` that points to the commit your current branch is pointing to. Note that this command only creates the branch, it does not switch to that branch, so we are still working on the same branch as we were on before.

::: tip Example

If your repository looks like this:

```
                        HEAD
                          ↓
                    MASTER BRANCH
                          ↓
Commit 1      <--      Commit 2
```

And you then run the command `git branch test`, then your repository would look like this:

```
                        HEAD
                          ↓
                    MASTER BRANCH
                          ↓
Commit 1      <--      Commit 2
                          ↑
                      TEST BRANCH
```

:::

## Switching branches
To change which branch you are working on, you use the command `git checkout BRANCH_NAME`. This will change the `HEAD` pointer to point to the branch `BRANCH_NAME`, and it will also change all the source files in the project to the way they looked like in the commit that branch pointer points to. Do not use this command if you have changes made to the source code in your project you haven't committed yet.

::: tip Example
Imagine our repository looks like this:

```
                        HEAD
                          ↓
                    MASTER BRANCH
                          ↓
Commit 1      <--      Commit 2
                          ↑
                      TEST BRANCH
```

We are currently working on the `master` branch. To switch to the test branch, we run the command `git checkout test`. Then our repository will look like this:

```
                    MASTER BRANCH
                          ↓
Commit 1      <--      Commit 2
                          ↑
                      TEST BRANCH
                          ↑
                        HEAD
```

If we then make changes to the source files and create a new commit, it would look like this:

```
                    MASTER BRANCH
                          ↓
Commit 1      <--      Commit 2      <--      Commit 3
                                                 ↑
                                             TEST BRANCH
                                                 ↑
                                               HEAD
```

If you now run the command `git checkout master`, it would look like this (all the source files will be changed to what they contained in Commit 2):

```
                        HEAD
                          ↓
                    MASTER BRANCH
                          ↓
Commit 1      <--      Commit 2      <--      Commit 3
                                                 ↑
                                             TEST BRANCH
```

And if you now make changes to the source files and create a new commit, it would look like this:

```
                        HEAD
                          ↓
                    MASTER BRANCH
                          ↓
                       Commit 4
                          ↓
Commit 1      <--      Commit 2      <--      Commit 3
                                                 ↑
                                             TEST BRANCH
```
:::

## Why use branches?
So, a branch is basically a sequence of a commits that takes the project in another direction. But why would you want that? In the end, you only want to have a single version of the project that contains all the features/functionalities, and not 5 different versions that each contains a fifth of all the functionalities, right?

When you have two branches, you can merge the work you have done (the commits) in one of them into the other. You do that by creating a special type of commit called a *merge commit*. A merge commit is new commit that points to the latest commit in each of the two branches, so this new commit will contain the features/functionality from both branches.

When you have created a merge commit, the commits in a repository can look like this:

```
                                               HEAD
                                                 ↓
                                           MASTER BRANCH
                                                 ↓
                       Commit 4      <--      Commit 5
                          ↓                      ↓ 
Commit 1      <--      Commit 2      <--      Commit 3
                                                 ↑
                                             TEST BRANCH
```

`Commit 5` will now contain the features/functionality from both `Commit 4` and `Commit 3`, and can now be seen as the single latest version of the project. Creating merge commits can be a little bit complicated (you can have conflicts (contradictive changes to the source code in the two different branches)) that you need to handle, but let's go through how to merge branches later. For now, it's enough for you to know that you can do it.

But why use branches at all if we don't want to have them in the end? Turns out that branches are really useful during development. Especially when multiple programmers work on the same project at the same time, because a programmer don't want to be disturbed by commits from other programmers that might interfere with the programmer's own work before it is finished. So each programmer can create her own branch which the other programmers won't interfere with, and when the programmer is done with all of her work on that branch, she can share her work with the other programmers by merging it with the `master` branch. It can for example look like this (let's ignore the `HEAD` pointer, because it is not important in this example):

```
                       Commit 3      <--      Commit 6      <--      ALICE BRANCH
                          ↓
Commit 1      <--      Commit 2      <--      MASTER BRANCH
                          ↑
                       Commit 4      <--      Commit 5      <--      BOB BRANCH
```

When Alice is done with her work, she merges her branch with the `master` branch:

```
                       Commit 3      <--      Commit 6
                          ↓                      ↑
Commit 1      <--      Commit 2      <--      Commit 7      <--      MASTER BRANCH (now also containing Alice's work)
                          ↑
                       Commit 4      <--      Commit 5      <--      BOB BRANCH
```

And when Bob is done with his work, he merges his work with the `master` branch:

```
                       Commit 3      <--      Commit 6
                          ↓                      ↑
Commit 1      <--      Commit 2      <--      Commit 7      <--      Commit 8      <--      MASTER BRANCH (now containing both Alice's work and Bob's work)
                          ↑                                             |
                       Commit 4      <--      Commit 5      <-----------┙
```

::: warning Note
How multiple programmers sitting at different computers can work on the same repository (to synch commits) is not something we cover in this lecture, but Git has special support for this which we will cover in next lecture.
:::

There are more use-cases for branches than just "one branch per programmer". For example, if you create a library, then you might want to have one branch for each major version of the library you have, so you conveniently can switch between them. This way, it is easy to fix bugs/security vulnerabilities in older versions of the library, and to add new features in the latest version of the library. Or maybe you just want to test something new which you don't know if you'll have any use of. Then you can do that work in a new branch, and if you later discover that it didn't play out well, you go back and work as usual on the `master` branch or your own branch.

::: tip Example
A designer was given the task to improve the layout on a website (change the placement of menus, change the colors used, etc.). It was a very big website containing hundreds of webpages, so it took her 2 weeks to change everything. She did all her work in her own branch, so during these two weeks, the other programmers working on the same project was not disturbed by her work: they did never see some pages with the old layout and some pages in the new layout, they saw all pages in the old layout until she after 2 weeks merged her branch with the `master` branch, at which point they saw all pages with the new layout.
:::

::: tip Example
A web developer was given the task to add two major functionalities to an existing website:

* Users should be able to send an email with feedback to the author of an article on the website through a form on the website. 
* Users should be able to write comments on an article on the website after having created and logged into an account.

The web developer created a new branch and started to implement the first functionality (emailing feedback) in it. When she was half done with this (had created 5 commits on the new branch), the owner of the website contacted her and told her that he needed to have the comment and login functionality ASAP, so she needed to stop working on the first functionality, and instead start to implement the second functionality. To do that, she simply:

1. Switched back to the `master` branch (with no traces of her half finished first functionality).
2. Created a new branch.
3. Implemented the comment and login functionality (12 commits) in the new branch.
4. Merged the new branch with the `master` branch.

Then she reported back to the website owner that the comment and login functionality now was implemented in the `master` branch. Then she checked out the first branch she created and continued with the implementation of the first functionality. 
:::

## Viewing branches
If you forget which branch you are currently working on, you can use the command `git branch`. Then Git will show you which branches that exist in the repository and which one of them you are currently working on (which branch `HEAD` points to).

## Merging branches
So, let's take a closer look at how we can merge the commits in one branch into another branch. This can be really easy, or a bit complicated, depending on which commits the branches contain.

### Fast-Forward merging
Imagine our repository looks like this:

```
                    MASTER BRANCH
                          ↓
Commit 1      <--      Commit 2      <--      Commit 3      <--      Commit 4
                                                                        ↑
                                                                   ALICE BRANCH
                                                                        ↑
                                                                      HEAD
```

That, is we have created a new branch called `alice`, implemented a new feature on that branch in `Commit 3` and `Commit 4`, and now we want to merge those commits into the `master` branch. To make that happen, we first need to be working on the branch we want to merge the work into, so we start by running the command `git checkout master`, so our repository looks like this:

```
                        HEAD
                          ↓
                    MASTER BRANCH
                          ↓
Commit 1      <--      Commit 2      <--      Commit 3      <--      Commit 4
                                                                        ↑
                                                                   ALICE BRANCH
```

Then we use the command `git merge alice`, to tell Git to take the commits in the `alice` branch and merge them into the current branch (the `master` branch). Since the `master` branch doesn't have any commit the `alice` branch doesn't have, Git uses a merge strategy here called fast-forward. In this case Git doesn't need to create an extra commit to merge the two branches, but will instead simply move the `master` branch pointer to the `alice` branch pointer, so the repository will look like this:

```
                                                                      HEAD
                                                                        ↓
                                                                  MASTER BRANCH
                                                                        ↓
Commit 1      <--      Commit 2      <--      Commit 3      <--      Commit 4
                                                                        ↑
                                                                   ALICE BRANCH
```

This is the simplest type of merging, but it only works as long as extra work (new commits) exists in only one of the branches, which is not always the case.

### Three-way merging
Often when you merge branches, both of them contain commits the other one does not contain. Then the fast-forward merging strategy can't be used, and git uses a merge strategy called three-way merging.

#### The simple case
If you have not done contradictive changes to the source code in the two branches you are merging, creating the merge commit is really easy. Imagine our repository looks like this:

```
                        HEAD
                          ↓
                    MASTER BRANCH
                          ↓
                       Commit 4
                          ↓
Commit 1      <--      Commit 2      <--      Commit 3
                                                 ↑
                                             TEST BRANCH
```

And that we in `Commit 4` created a new file called `master-file.txt`, and in `Commit 3` created a new file called `test-file.txt`. The only sensible outcome of merging the two branches is to end up with both of the files, and Git understands that.

So, to merge the `test` branch into the `master` branch we run the command `git merge test`. When we do that, Git will create a new merge commit (Commit 5) that contains both `master-file.txt` and `test-file.txt`, and our repository will look like this:

```
                                               HEAD
                                                 ↓
                                           MASTER BRANCH
                                                 ↓
                       Commit 4      <--      Commit 5
                          ↓                      ↓
Commit 1      <--      Commit 2      <--      Commit 3
                                                 ↑
                                             TEST BRANCH
```

Simple as that!

Git is also quite smart. If two different branches modifies the same file, but different parts of it, Git will figure out what makes most sense to end up with when you merge them, and use that.

::: tip Example
If the original file looks like this:

```
a = 1
b = 2
sum = a + b
print(sum)
```

And one branch says that it should look like this (second line changed):

```
a = 1
b = 20
sum = a + b
print(sum)
```

And another branch says that it should look like this (last line changed):

```
a = 1
b = 2
sum = a + b
print("The sum is: "+sum)
```

Then when you merge these two branches Git automatically figures out that you want to end up with this (the second and last line changed):

```
a = 1
b = 20
sum = a + b
print("The sum is: "+sum)
```
:::

#### The harder case
If you have done contradictive changes to the source code in the two branches you are merging, then Git won't know what you want to end up with, so it let you know that a merge conflict exists that you need to handle manually (you need to tell Git what the result of the merge should be).

For example, if the original file looks like this:

```
x = 1
y = 2
print(x*y)
```

And one branch says that it should look like this (first line changed):

```
x = 10
y = 2
print(x*y)
```

And another branch says that it should look like this (first line changed):

```
x = 5
y = 2
print(x*y)
```

Git won't be able to figure out what the outcome of the merge should be, so when you try to merge the two branches by running the command `git merge BRANCH_NAME`, the merge commit will not be created. Instead, Git will print an error message saying that the file contains a merge conflict, and it will change the content of the file to this (you can see the changes each branch wants to make to the file):

```
-----------------
x = 10
-----------------
x = 5
-----------------
y = 2
print(x*y)
```

You need to resolve this conflict manually by:

1. Change the content to the file to what you want it be.
2. Save the file.
3. Run the command `git commit` (which will create the merge commit).

In this case, maybe the average value of 5 and 10 is what makes sense to use, so you would change the content of the file to:

```
x = 7.5
y = 2
print(x*y)
```

And then create the next commit.

::: warning Note
When you merge two branches you might end up with multiple merge conflicts (in multiple files, and even multiple conflicts within the same file). You should resolve all of them by changing the code and save the files before you create the next commit.
:::

### Rebasing
We will not cover it in this lecture, but instead of creating merge commits, you can do something called *rebasing*. Rebasing will rather copy the commits from one branch to another. The main benefit with this approach is that the history of a branch becomes much simpler: it will consist of a linear sequence of commits only (no merge commits!), making it much easier to read. When you create merge commits, the history of a branch will not be a linear sequence, but rather a tree of commits, which is harder to read. 

## Practising
Play around with [Visualizing Git](http://git-school.github.io/visualizing-git/#free) to learn how branches work. With this tool, you never use `git add`; just use `git commit -m "Message"` directly to create a new commit, and then you can also use the commands `git branch BRANCH_NAME`, `git checkout BRANCH_NAME` and `git merge BRNACH_NAME` as expected (but you will never end up with merge conflicts, so you can't practice on resolving them using this tool).

If you want some more practice, you can also try [Learn Git Branching](https://learngitbranching.js.org/).

## Recommended reading
[Pro Git](https://git-scm.com/book/en/v2) by *Scott Chacon* and *Ben Straub*. It is available for free online in multiple different formats.

* [Chapter 3: Git Branching](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)
  * You can skip the parts about using a remote repository (`git clone`, `git pull`, `git push`, ...)