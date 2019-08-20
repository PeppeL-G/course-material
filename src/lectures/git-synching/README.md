---
sidebar: auto
navbarTitle: Git Synching
---
# Git Synching
If you need to share your project with other programmers (could be programmers working on the same project, or if you want to release the project as open source), then it is not good enough to only have a local repository on your own computer, because how would the other programmers get access to it? Your own computer is probably not connected to the Internet all the time, and even if it would be, how would you configure who would have access to your different repositories? Therefor it is very common that you have the repository on a server on the Internet instead, where it is available to anyone that should be able to access it 24/7, and it is through this repository multiple programmers can work on the project at the same time.

## Remote repositories
We call a repository hosted on a server on the Internet for a *remote repository*, because it is not a local repository that exists locally on your own computer, but a repository on a remote computer.

There exists two different types of remote repositories: public and private repositories.

A *public repository* is a repository anyone have read access to. The creator of the repository can give other members write access, so others can contribute to the project. Open Source projects usually use a public repository.

A *private repository* is a repository that only the creator and invited members have read & write access to. This is usually used by companies working on projects they are selling to customers and don't want to give away for free.

Instead of you setting up your own server to host your repositories, you can use one of the many websites that offer to host your repositories for you:

- [GitHub](https://github.com/)
- [GitLab](https://about.gitlab.com/)
- [And some other...](https://www.git-tower.com/blog/git-hosting-services-compared/)

In addition to hosting your repositories, these websites usually offers some other good-to-have features, such as:

- Issue tracking (let users report errors they find).
- Collaboration (give other users read/write access to your repositories).
- Continuos Integration
- ...

Which of these websites you should use depends on which features you need and how much you are willing to pay for them, but GitHub is one of the most popular choices for open source projects. A benefit with GitLab is that GitLab itself is open source, so if you later discover that you need to host your repositories on your own server, then you can "easily" setup your own GitLab server and move your repositories over there, and then continue to work as usual.

## Connecting remote and local repositories
So, often when you start to work on a new project, you start by creating a new remote repository on one of the previously mentioned websites. Each remote repository get's a URI (Uniform Resource Identifier) that uniquely identifies that repository. That URI is something you can use to *clone* (create a copy of) that repository to you own computer using the command `git clone THE_URI`. This will create a new folder locally on your own computer that contains a copy of the remote repository. The idea is that when you want to add features/fix bugs, then you change the code in the local repository on your own computer and create commits there. Then you can send these commits to the remote repository, where the rest of the world (or only invited users) can take part of them.

Most often, we have just one remote repository, but it is possible to have multiple remote repositories for the same project. We will not get into the details of that here, but a consequence of that is that each remote repository also gets a name we can use to refer to that specific remote repository. When you use `git clone THE_URI`, the remote repository will get the name *origin* (we say that the origin of our local repository is the remote repository we cloned it from), so in our local repository the name `origin` will refer to the remote repository (the name of the remote repository is something we will use later).

When a local repository is connected to a remote repository, it has extra pointers to keep track of the branches in the remote repository. For example, imagine that the remote repository looks like this:

```
                    MASTER BRANCH
                          ↓
Commit 1      <--      Commit 2
```

When you clone the remote repository to your own computer, your local repository will look like this:

```
                        HEAD
                          ↓
                    MASTER BRANCH
                          ↓
Commit 1      <--      Commit 2
                          ↑
                 ORIGIN/MASTER BRANCH
```

That is, it has a pointer called `origin/master` that points to the latest commit on the `master` branch you have received from the remote (`origin`) repository, and a branch called `master` that keeps track of the latest commit you have on your own local `master` branch. The same is true for all other branches you have in the repository (if you had a branch called `test`, you would also have a pointer called `origin/test`, or whatever you call your remote repository).

When you then create a new commit (Commit 3) in your local repository on the `master` branch, it looks like this:

```
                                               HEAD
                                                 ↓
                                           MASTER BRANCH
                                                 ↓
Commit 1      <--      Commit 2      <--      Commit 3
                          ↑
                 ORIGIN/MASTER BRANCH
```

That is, creating a new commit on the `master` branch does not update the `origin/master` pointer, only your own `master` pointer. Git uses these extra pointers (one for each branch) to keep track of which commits you have in your local repository that you haven't uploaded to the remote repository yet, and which commits in the remote repository you haven't downloaded yet (that has been uploaded by other programmers). 

::: warning Note
`git clone THE_URI` is not the only way to "connect" two repositories. If you already have a local repository that you want to share with the world, then you can create an empty remote repository and then "connect" to it from your local repository using the command `git remote add` instead of the command `git clone`, but we will not cover the details here, but do be aware of the possibility.
:::

## Synching commits
So the idea is that we have one remote repository, and each programmer that wants to work on the project clones the remote repository to her own computer using the `git clone THE_URI` command, and then each programmer gets their own local repository where they can modify the source code on their own computers and create commits that only exists in their own local repository. When a programmer wants the other programmers that work on the project to take part of her commits, she uploads her local commits to the remote repository, and then the other programmers can download her commits from there.

### Downloading commits (pulling)
So imagine that you clone a remote repository looking like this:

```
                    MASTER BRANCH
                          ↓
Commit 1      <--      Commit 2
```

Then you get a local repository looking like this:

```
                        HEAD
                          ↓
                    MASTER BRANCH
                          ↓
Commit 1      <--      Commit 2
                          ↑
                 ORIGIN/MASTER BRANCH
```

Then someone uploads a new commit (Commit 3) to the `master` branch on the remote repository, so the remote repository looks like this:

```
                                           MASTER BRANCH
                                                 ↓
Commit 1      <--      Commit 2      <--      Commit 3
```

If you want to download Commit 3 to your local repository, then you would run the command `git fetch origin master`. This command tells Git to download the commits from the `master` branch in the remote repository that you don't yet have in your local repository. Afterwards, your local repository would look this:

```
                        HEAD
                          ↓
                    MASTER BRANCH
                          ↓
Commit 1      <--      Commit 2      <--      Commit 3
                                                 ↑
                                        ORIGIN/MASTER BRANCH
```

You usually don't just want to download the remote commits, you usually also want the remote commits on the `master` branch to be part of your own `master` branch, so you usually immediately afterwards merges the branch `origin/master` into the `master` branch by running the command `git merge origin/master`, so your local repository becomes:

```
                                               HEAD
                                                 ↓
                                           MASTER BRANCH
                                                 ↓
Commit 1      <--      Commit 2      <--      Commit 3
                                                 ↑
                                        ORIGIN/MASTER BRANCH
```

In this case, the branch `origin/master` contained all the commits the branch `master` contained, so Git simply used the fast-forward merge strategy, but if you would have created your own local commits on the `master` branch, you could here have had a merge conflict that you now would need to resolve manually.

Very often when you use `git fetch` you want to use `git merge` immediately afterwards. Therefore, Git provides another command for executing these two commands called `git pull`. So instead of first running `git fetch origin master` and then `git merge origin/master`, we could simply had run `git pull origin master`.

### Uploading commits (pushing)
When you have created some commits in your own local repository and want to upload these to the remote repository you use the command `git push origin BRANCH_NAME`. This is known as *pushing*. `origin` is the name of the remote repository you want to push the commits to. This doesn't have to be `origin`, but if you only have one remote repository (which most often is the case), you should use `origin`. `BRANCH_NAME` if the name of the branch whose commits you want to push, for example `master`.

::: warning Note
You can only push your own newly created commits to the remote repository if you have all the commits the remote repository contains. If you don't have that, Git will display an error message to you when you try to push. If that's the case, then you first need to download the commits from the remote repository you don't have, resolve any merge conflicts you might get, and then you can push to the remote repository.
:::

::: tip Example
Imagine that you clone a remote repository looking like this:

```
                    MASTER BRANCH
                          ↓
Commit 1      <--      Commit 2
```

Then you get a local repository looking like this:

```
                        HEAD
                          ↓
                    MASTER BRANCH
                          ↓
Commit 1      <--      Commit 2
                          ↑
                 ORIGIN/MASTER BRANCH
```

Then you create a new commit (Commit 3), so your local repository looks like this:

```
                                               HEAD
                                                 ↓
                                           MASTER BRANCH
                                                 ↓
Commit 1      <--      Commit 2      <--      Commit 3
                          ↑
                 ORIGIN/MASTER BRANCH
```

To send Commit 3 to the remote repository, you run the command `git push origin master`. If no one else has push any new commits to the remote repository everything will be fine, and the remote repository will become:

```
                                           MASTER BRANCH
                                                 ↓
Commit 1      <--      Commit 2      <--      Commit 3
```

And your own local repository will become:

```
                                               HEAD
                                                 ↓
                                           MASTER BRANCH
                                                 ↓
Commit 1      <--      Commit 2      <--      Commit 3
                                                 ↑
                                        ORIGIN/MASTER BRANCH
```
:::

::: tip Example
Imagine that you clone a remote repository looking like this:

```
                    MASTER BRANCH
                          ↓
Commit 1      <--      Commit 2
```

Then you get a local repository looking like this:

```
                        HEAD
                          ↓
                    MASTER BRANCH
                          ↓
Commit 1      <--      Commit 2
                          ↑
                 ORIGIN/MASTER BRANCH
```

Then you create a new commit (Commit 3), so your local repository looks like this:

```
                                               HEAD
                                                 ↓
                                           MASTER BRANCH
                                                 ↓
Commit 1      <--      Commit 2      <--      Commit 3
                          ↑
                 ORIGIN/MASTER BRANCH
```

Before you push your Commit 3 to the remote repository, someone else has pushed a commit to it (Commit 4), so the remote repository is:

```
                                           MASTER BRANCH
                                                 ↓
Commit 1      <--      Commit 2      <--      Commit 4
```

If you try to run `git push origin master` now, you will get an error, because the remote repository contains a commit (Commit 4) that your local repository does not contain. So before you can push, you need to run `git pull origin master`, but let's do this by manually running `git fetch origin master` followed by `git merge origin/master`, so you can see what happens.

So first we run `git fetch origin master`, and our local repository becomes:

```
                                               HEAD
                                                 ↓
                                           MASTER BRANCH
                                                 ↓
Commit 1      <--      Commit 2      <--      Commit 3
                          ↑
                       Commit 4
                          ↑
                 ORIGIN/MASTER BRANCH
```

Then we run the command `git merge origin/master`, and a merge commit (Commit 5) is created (if there were conflicts, we needed to resolve those manually before the merge commit is created), and our local repository looks like:

```
Commit 1      <--      Commit 2      <--      Commit 3                   HEAD
                          ↑                      ↑                         ↓
                       Commit 4      <--      Commit 5      <--      MASTER BRANCH
                          ↑
                 ORIGIN/MASTER BRANCH
```

We can then run `git push origin master` to upload Commit 3 and Commit 5 to the remote repository, so the remote repository becomes:

```
Commit 1      <--      Commit 2      <--      Commit 3
                          ↑                      ↑
                       Commit 4      <--      Commit 5      <--      MASTER BRANCH
```

And our local repository becomes:

```
Commit 1      <--      Commit 2      <--      Commit 3                   HEAD
                          ↑                      ↑                         ↓
                       Commit 4      <--      Commit 5      <--      MASTER BRANCH
                                                 ↑
                                        ORIGIN/MASTER BRANCH
```
:::

## Practising
Play around with [Visualizing Git (Free Explore with Remote)](http://git-school.github.io/visualizing-git/#free-remote) to learn how branches work. With this tool, you never use `git add`; just use `git commit -m "Message"` directly to create a new commit, and then you can also use the commands `git branch BRANCH_NAME`, `git checkout BRANCH_NAME`, `git merge BRANCH_NAME`, `git pull origin BRANCH_NAME`, `git push origin BRANCH_NAME`, etc. as expected.

If you want some more practice, you can also try [Learn Git Branching](https://learngitbranching.js.org/) (the parts about using a remote repository).

## Recommended reading
[Pro Git](https://git-scm.com/book/en/v2) by *Scott Chacon* and *Ben Straub*. It is available for free online in multiple different formats.

* [Chapter 2: Git Basics](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)
  * The parts about using a remote repository (`git clone`, `git pull`, `git push`, ...)
* [Chapter 3: Git Branching](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)
  * The parts about using a remote repository (`git clone`, `git pull`, `git push`, ...)

[git - the simple guide](https://rogerdudler.github.io/git-guide/) is a nice short summary of what you have learned in this small Git course.