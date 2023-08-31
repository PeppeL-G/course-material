import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "git-branches",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#git-branches",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Git Branches")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("When you work alone on a project with a Git repository, you usually don't need to worry that much about branches in Git. This is especially true when the repository only exists locally on your own computer, because then the repository only have a single branch (a default branch) called "),
    /* @__PURE__ */ createBaseVNode("code", null, "master"),
    /* @__PURE__ */ createTextVNode(" or "),
    /* @__PURE__ */ createBaseVNode("code", null, "main"),
    /* @__PURE__ */ createTextVNode(", and you can more or less ignore the fact that branches exist in Git, even though you do work on the "),
    /* @__PURE__ */ createBaseVNode("code", null, "master"),
    /* @__PURE__ */ createTextVNode("/"),
    /* @__PURE__ */ createBaseVNode("code", null, "main"),
    /* @__PURE__ */ createTextVNode(" branch all the time. But most often, this is not the case, and you need to have a basic understanding of how branches work in Git for you to use Git in best way possible. Furthermore, Linus Torvalds designed Git around the usage of branches, so they play a very central role in Git.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = { class: "custom-container warning" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "master VS main",
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "git init",
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "master",
  -1
  /* HOISTED */
);
const _hoisted_7 = {
  href: "https://github.com",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "main",
  -1
  /* HOISTED */
);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("In these lectures we use "),
    /* @__PURE__ */ createBaseVNode("code", null, "master"),
    /* @__PURE__ */ createTextVNode(" as the default name.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_10 = /* @__PURE__ */ createStaticVNode('<h2 id="what-is-a-branch" tabindex="-1"><a class="header-anchor" href="#what-is-a-branch" aria-hidden="true">#</a> What is a branch?</h2><p>We usually use commits to remember earlier versions of the project, but we can also use commits to work on different versions of the project at the same time. This is the case when the repository does not consists of a single chain of commits. An example of that would be a repository consisting of the following commits:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                       Commit 4                HEAD\n                          ↓                      ↓ \nCommit 1      &lt;--      Commit 2      &lt;--      Commit 3\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here we can see that we have two different latest versions of the project represented by <code>Commit 4</code> and <code>Commit 3</code> respectively. They both contain features/functionalities the other version does not contain, and we say that we have two branches of the project at <code>Commit 2</code>. To know which version of the project we are working on, Git uses the <code>HEAD</code> pointer, so in this case we can see that we are currently working on the branch with <code>Commit 3</code> (if we would create a new commit, that commit would point to <code>Commit 3</code>).</p><p>So, a <em>branch</em> is simply a separate line of commits that takes the project in a different direction.</p><p>By default, there exists a single branch called <code>master</code>, which usually is used for the &quot;main version&quot; of the project. As long as you don&#39;t create a new branch and switch to it, you always work on the <code>master</code> branch.</p><p>In practice, a branch is just a pointer that points to the latest commit in that branch. The <code>HEAD</code> pointer in turn points to the branch you are currently working on.</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>To simplify, we said in the previous lecture that <code>HEAD</code> pointed to the latest commit. This is wrong; <code>HEAD</code> points to the branch you are currently working on.</p></div><p>A repository with a single branch (the <code>master</code> branch only) and two commits would look like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                        HEAD\n                          ↓\n                    MASTER BRANCH\n                          ↓\nCommit 1      &lt;--      Commit 2\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then when you create a new commit, the <code>master</code> branch pointer is changed to point to the newly created commit:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                                               HEAD\n                                                 ↓\n                                           MASTER BRANCH\n                                                 ↓\nCommit 1      &lt;--      Commit 2      &lt;--      Commit 3\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="creating-branches" tabindex="-1"><a class="header-anchor" href="#creating-branches" aria-hidden="true">#</a> Creating branches</h2><p>It is possible to create a new branch using the command <code>git reset --hard XXX</code>, but Git have better support for working with branches through other commands that are better to use.</p><p>The best way to create a new branch is by using the command <code>git branch BRANCH_NAME</code>. This create a new branch with the name <code>BRANCH_NAME</code> that points to the commit your current branch is pointing to. Note that this command only creates the branch, it does not switch to that branch, so we are still working on the same branch as we were on before.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>If your repository looks like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                        HEAD\n                          ↓\n                    MASTER BRANCH\n                          ↓\nCommit 1      &lt;--      Commit 2\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And you then run the command <code>git branch test</code>, then your repository would look like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                        HEAD\n                          ↓\n                    MASTER BRANCH\n                          ↓\nCommit 1      &lt;--      Commit 2\n                          ↑\n                      TEST BRANCH\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="switching-branches" tabindex="-1"><a class="header-anchor" href="#switching-branches" aria-hidden="true">#</a> Switching branches</h2><p>To change which branch you are working on, you use the command <code>git checkout BRANCH_NAME</code>. This will change the <code>HEAD</code> pointer to point to the branch <code>BRANCH_NAME</code>, and it will also change all the source files in the project to the way they looked like in the commit that branch pointer points to. Do not use this command if you have changes made to the source code in your project you haven&#39;t committed yet.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Imagine our repository looks like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                        HEAD\n                          ↓\n                    MASTER BRANCH\n                          ↓\nCommit 1      &lt;--      Commit 2\n                          ↑\n                      TEST BRANCH\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We are currently working on the <code>master</code> branch. To switch to the test branch, we run the command <code>git checkout test</code>. Then our repository will look like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                    MASTER BRANCH\n                          ↓\nCommit 1      &lt;--      Commit 2\n                          ↑\n                      TEST BRANCH\n                          ↑\n                        HEAD\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If we then make changes to the source files and create a new commit, it would look like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                    MASTER BRANCH\n                          ↓\nCommit 1      &lt;--      Commit 2      &lt;--      Commit 3\n                                                 ↑\n                                             TEST BRANCH\n                                                 ↑\n                                               HEAD\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you now run the command <code>git checkout master</code>, it would look like this (all the source files in the project folder will be changed to what they contained in <code>Commit 2</code>):</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                        HEAD\n                          ↓\n                    MASTER BRANCH\n                          ↓\nCommit 1      &lt;--      Commit 2      &lt;--      Commit 3\n                                                 ↑\n                                             TEST BRANCH\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And if you now make changes to the source files and create a new commit, it would look like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                        HEAD\n                          ↓\n                    MASTER BRANCH\n                          ↓\n                       Commit 4\n                          ↓\nCommit 1      &lt;--      Commit 2      &lt;--      Commit 3\n                                                 ↑\n                                             TEST BRANCH\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="why-use-branches" tabindex="-1"><a class="header-anchor" href="#why-use-branches" aria-hidden="true">#</a> Why use branches?</h2><p>So, a branch is basically a sequence of a commits that takes the project in another direction. But why would you want that? In the end, you only want to have a single version of the project that contains all the features/functionalities, and not 5 different versions that each contains a fifth of all the functionalities, right?</p><p>When you have two branches, you can merge the work you have done (the commits) in one of them into the other. You do that by creating a special type of commit called a <em>merge commit</em>. A merge commit is a new commit that points to the latest commit in each of the two branches, so this new commit will contain the features/functionality from both branches.</p><p>When you have created a merge commit, the commits in a repository can look like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                                               HEAD\n                                                 ↓\n                                           MASTER BRANCH\n                                                 ↓\n                       Commit 4      &lt;--      Commit 5\n                          ↓                      ↓ \nCommit 1      &lt;--      Commit 2      &lt;--      Commit 3\n                                                 ↑\n                                             TEST BRANCH\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Commit 5</code> will now contain the features/functionality from both <code>Commit 4</code> and <code>Commit 3</code>, and can now be seen as the single latest version of the project.</p><div class="custom-container warning"><p class="custom-container-title">Merging can be hard!</p><p>Creating merge commits can be a little bit complicated; you can have merge conflicts (contradictive changes to the source code in the two different branches)) that you need to handle. But let&#39;s go through how to merge branches later, for now it&#39;s enough for you to know that you can do it.</p></div><p>But why use branches at all if we don&#39;t want to have them in the end? Turns out that branches are really useful during development. Especially when multiple programmers work on the same project at the same time, because a programmer don&#39;t want to be disturbed by commits from other programmers that might interfere with the programmer&#39;s own work before it is finished. So each programmer can create their own branch which the other programmers won&#39;t interfere with, and when the programmer is done with all of her work on that branch, she can share her work with the other programmers by merging it with the <code>master</code> branch. It can for example look like this (let&#39;s ignore the <code>HEAD</code> pointer, because it is not important in this example):</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                       Commit 3      &lt;--      Commit 6      &lt;--      ALICE BRANCH\n                          ↓\nCommit 1      &lt;--      Commit 2      &lt;--      MASTER BRANCH\n                          ↑\n                       Commit 4      &lt;--      Commit 5      &lt;--      BOB BRANCH\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When Alice is done with her work, she merges her branch with the <code>master</code> branch:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                       Commit 3      &lt;--      Commit 6\n                          ↓                      ↑\nCommit 1      &lt;--      Commit 2      &lt;--      Commit 7      &lt;--      MASTER BRANCH (now also containing Alice&#39;s work)\n                          ↑\n                       Commit 4      &lt;--      Commit 5      &lt;--      BOB BRANCH\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And when Bob is done with his work, he merges his work with the <code>master</code> branch:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                       Commit 3      &lt;--      Commit 6\n                          ↓                      ↑\nCommit 1      &lt;--      Commit 2      &lt;--      Commit 7      &lt;--      Commit 8      &lt;--      MASTER BRANCH (now containing both Alice&#39;s work and Bob&#39;s work)\n                          ↑                                             |\n                       Commit 4      &lt;--      Commit 5      &lt;-----------┙\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">Note</p><p>How multiple programmers sitting at different computers can work on the same repository (to synch commits) is not something we cover in this lecture, but Git has special support for this which we will cover in next lecture.</p></div><p>There are more use-cases for branches than just &quot;one branch per programmer&quot;. For example, if you create a library, then you might want to have one branch for each major version of the library you have, so you conveniently can switch between them. This way, it is easy to fix bugs/security vulnerabilities in older versions of the library, and to add new features in the latest version of the library. Or maybe you just want to test something new which you don&#39;t know if you&#39;ll have any use of. Then you can do that work in a new branch, and if you later discover that it didn&#39;t play out well, you go back and work as usual on the <code>master</code> branch or your own branch.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>A designer was given the task to improve the layout on a website (change the placement of menus, change the colors used, etc.). It was a very big website containing hundreds of webpages, so it took her 2 weeks to change everything. She did all her work in her own branch, so during these two weeks, the other programmers working on the same project was not disturbed by her work: they did never see some pages with the old layout and some pages in the new layout, they saw all pages in the old layout until she after 2 weeks merged her branch with the <code>master</code> branch, at which point they saw all pages with the new layout.</p></div><div class="custom-container tip"><p class="custom-container-title">Example</p><p>A web developer was given the task to add two major functionalities to an existing website:</p><ul><li>Users should be able to send an email with feedback to the author of an article on the website through a form on the website</li><li>Users should be able to write comments on an article on the website after having created and logged into an account</li></ul><p>The web developer created a new branch and started to implement the first functionality (emailing feedback) in it. When she was half done with this (had created 5 commits on the new branch), the owner of the website contacted her and told her that he needed to have the comment and login functionality ASAP, so she needed to stop working on the first functionality, and instead start to implement the second functionality. To do that, she simply:</p><ol><li>Switched back to the <code>master</code> branch (with no traces of her half finished first functionality).</li><li>Created a new branch.</li><li>Implemented the comment and login functionality (12 commits) in the new branch.</li><li>Merged the new branch with the <code>master</code> branch.</li></ol><p>Then she reported back to the website owner that the comment and login functionality now was implemented in the <code>master</code> branch. Then she checked out the first branch she created and continued with the implementation of the first functionality.</p></div><h2 id="viewing-branches" tabindex="-1"><a class="header-anchor" href="#viewing-branches" aria-hidden="true">#</a> Viewing branches</h2><p>If you forget which branch you are currently working on, you can use the command <code>git branch</code>. Then Git will show you which branches that exist in the repository and which one of them you are currently working on (which branch <code>HEAD</code> points to).</p><h2 id="merging-branches" tabindex="-1"><a class="header-anchor" href="#merging-branches" aria-hidden="true">#</a> Merging branches</h2><p>So, let&#39;s take a closer look at how we can merge the commits in one branch into another branch. This can be really easy, or a bit complicated, depending on which commits the branches contain.</p><h3 id="fast-forward-merging" tabindex="-1"><a class="header-anchor" href="#fast-forward-merging" aria-hidden="true">#</a> Fast-Forward merging</h3><p>Imagine our repository looks like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                    MASTER BRANCH\n                          ↓\nCommit 1      &lt;--      Commit 2      &lt;--      Commit 3      &lt;--      Commit 4\n                                                                        ↑\n                                                                   ALICE BRANCH\n                                                                        ↑\n                                                                      HEAD\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That is, we have created a new branch called <code>alice</code>, implemented a new feature on that branch in <code>Commit 3</code> and <code>Commit 4</code>, and now we want to merge those commits into the <code>master</code> branch. To make that happen, we first need to be working on the branch we want to merge the work into, so we start by running the command <code>git checkout master</code>, so our repository looks like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                        HEAD\n                          ↓\n                    MASTER BRANCH\n                          ↓\nCommit 1      &lt;--      Commit 2      &lt;--      Commit 3      &lt;--      Commit 4\n                                                                        ↑\n                                                                   ALICE BRANCH\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then we use the command <code>git merge alice</code>, to tell Git to take the commits in the <code>alice</code> branch and merge them into the current branch (the <code>master</code> branch). Since the <code>master</code> branch doesn&#39;t have any commit the <code>alice</code> branch doesn&#39;t have, Git uses a merge strategy here called <em>fast-forward</em>. In this case Git doesn&#39;t need to create an extra merge commit, but will instead simply move the <code>master</code> branch pointer to the <code>alice</code> branch pointer, so the repository will look like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                                                                      HEAD\n                                                                        ↓\n                                                                  MASTER BRANCH\n                                                                        ↓\nCommit 1      &lt;--      Commit 2      &lt;--      Commit 3      &lt;--      Commit 4\n                                                                        ↑\n                                                                   ALICE BRANCH\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is the simplest type of merging, but it only works as long as extra work (new commits) only exists in one of the branches, which is not always the case.</p><h3 id="three-way-merging" tabindex="-1"><a class="header-anchor" href="#three-way-merging" aria-hidden="true">#</a> Three-way merging</h3><p>Often when you merge branches, both of them contain commits the other one does not contain. Then the fast-forward merging strategy can&#39;t be used, and git uses a merge strategy called three-way merging.</p><h4 id="the-simple-case" tabindex="-1"><a class="header-anchor" href="#the-simple-case" aria-hidden="true">#</a> The simple case</h4><p>If you have not done contradictive changes to the source code in the two branches you are merging, creating the merge commit is really easy. Imagine our repository looks like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                        HEAD\n                          ↓\n                    MASTER BRANCH\n                          ↓\n                       Commit 4\n                          ↓\nCommit 1      &lt;--      Commit 2      &lt;--      Commit 3\n                                                 ↑\n                                             TEST BRANCH\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And that we in <code>Commit 4</code> created a new file called <code>master-file.txt</code>, and in <code>Commit 3</code> created a new file called <code>test-file.txt</code>. The most common desired outcome of merging two such commits is to end up with both of the files, and Git knows this.</p><p>So, to merge the <code>test</code> branch into the <code>master</code> branch we run the command <code>git merge test</code>. When we do that, Git will create a new merge commit (<code>Commit 5</code>) that contains both <code>master-file.txt</code> and <code>test-file.txt</code>, and our repository will look like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                                               HEAD\n                                                 ↓\n                                           MASTER BRANCH\n                                                 ↓\n                       Commit 4      &lt;--      Commit 5\n                          ↓                      ↓\nCommit 1      &lt;--      Commit 2      &lt;--      Commit 3\n                                                 ↑\n                                             TEST BRANCH\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Simple as that!</p><p>Git is also quite smart. If two different branches modifies the same file, but different parts of it, Git will figure out what makes most sense to end up with when you merge them, and use that automatically for you.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>If the original file looks like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a = 1\nb = 2\nsum = a + b\nprint(sum)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And one branch says that it should look like this (second line changed):</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a = 1\nb = 20\nsum = a + b\nprint(sum)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And another branch says that it should look like this (last line changed):</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a = 1\nb = 2\nsum = a + b\nprint(&quot;The sum is: &quot;+str(sum))\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then when you merge these two branches Git automatically figures out that you want to end up with this (the second and last line changed):</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a = 1\nb = 20\nsum = a + b\nprint(&quot;The sum is: &quot;+str(sum))\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h4 id="the-harder-case" tabindex="-1"><a class="header-anchor" href="#the-harder-case" aria-hidden="true">#</a> The harder case</h4><p>If you have done contradictive changes to the source code in the two branches you are merging, then Git won&#39;t know what you want to end up with, so it lets you know that a <em>merge conflict</em> exists that you need to handle manually (you need to tell Git what the result of the merge should be).</p><p>For example, if the original file looks like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>x = 1\ny = 2\nprint(x*y)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And one branch says that it should look like this (first line changed):</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>x = 10\ny = 2\nprint(x*y)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And another branch says that it should look like this (first line changed):</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>x = 5\ny = 2\nprint(x*y)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Git won&#39;t be able to figure out what the outcome of the merge should be, so when you try to merge the two branches by running the command <code>git merge BRANCH_NAME</code>, the merge commit will not be created. Instead, Git will print an error message saying that the file contains a merge conflict, and it will change the content of the file to look something like this (you can see the changes each branch wants to make to the file):</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-----------------\nx = 10\n-----------------\nx = 5\n-----------------\ny = 2\nprint(x*y)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You need to resolve this conflict manually by:</p><ol><li>Change the content to the file to what you want it be.</li><li>Save the file.</li><li>Run the command <code>git commit</code> (which will create the merge commit).</li></ol><p>In this case, maybe the average value of 5 and 10 is what makes sense to use, so you would change the content of the file to:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>x = 7.5\ny = 2\nprint(x*y)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And then create the merge commit by running <code>git commit</code>.</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>When you merge two branches you might end up with multiple merge conflicts (in multiple files, and even multiple conflicts within the same file). You should resolve all of them by changing the code and save the files before you create the merge commit.</p></div><h3 id="rebasing" tabindex="-1"><a class="header-anchor" href="#rebasing" aria-hidden="true">#</a> Rebasing</h3><p>We will not cover it in this lecture, but instead of creating merge commits, you can do something called <em>rebasing</em>. Rebasing will rather copy the commits from one branch to another. The main benefit with this approach is that the history of a branch becomes much simpler: it will consist of a linear sequence of commits only (no merge commits!), making it much easier to read. When you create merge commits, the history of a branch will not be a linear sequence, but rather a graph of commits, which is harder to read.</p><h2 id="practising" tabindex="-1"><a class="header-anchor" href="#practising" aria-hidden="true">#</a> Practising</h2>', 78);
const _hoisted_88 = {
  href: "http://git-school.github.io/visualizing-git/#free",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_89 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "git add",
  -1
  /* HOISTED */
);
const _hoisted_90 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  'git commit -m "Message"',
  -1
  /* HOISTED */
);
const _hoisted_91 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "git branch BRANCH_NAME",
  -1
  /* HOISTED */
);
const _hoisted_92 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "git checkout BRANCH_NAME",
  -1
  /* HOISTED */
);
const _hoisted_93 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "git merge BRNACH_NAME",
  -1
  /* HOISTED */
);
const _hoisted_94 = {
  href: "https://learngitbranching.js.org/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_95 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "recommended-reading",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#recommended-reading",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Recommended reading")
  ],
  -1
  /* HOISTED */
);
const _hoisted_96 = {
  href: "https://git-scm.com/book/en/v2",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_97 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "Scott Chacon",
  -1
  /* HOISTED */
);
const _hoisted_98 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "Ben Straub",
  -1
  /* HOISTED */
);
const _hoisted_99 = {
  href: "https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_100 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("You can skip the parts about using a remote repository ("),
      /* @__PURE__ */ createBaseVNode("code", null, "git clone"),
      /* @__PURE__ */ createTextVNode(", "),
      /* @__PURE__ */ createBaseVNode("code", null, "git pull"),
      /* @__PURE__ */ createTextVNode(", "),
      /* @__PURE__ */ createBaseVNode("code", null, "git push"),
      /* @__PURE__ */ createTextVNode(", ...); that's something you'll learn in the third lecture")
    ])
  ],
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("div", _hoisted_3, [
      _hoisted_4,
      createBaseVNode("p", null, [
        createTextVNode("If you create your repository on your own computer using the "),
        _hoisted_5,
        createTextVNode(" command, then the default branch is called "),
        _hoisted_6,
        createTextVNode(". If you create your repository on a server, that you then clone to your own computer (read more about this in next lecture), then the default branch may have another name. For example, "),
        createBaseVNode("a", _hoisted_7, [
          createTextVNode("GitHub"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" names the default branch "),
        _hoisted_8,
        createTextVNode(".")
      ]),
      _hoisted_9
    ]),
    _hoisted_10,
    createBaseVNode("p", null, [
      createTextVNode("Play around with "),
      createBaseVNode("a", _hoisted_88, [
        createTextVNode("Visualizing Git"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" to learn how branches work. With this tool, you never use "),
      _hoisted_89,
      createTextVNode("; just use "),
      _hoisted_90,
      createTextVNode(" directly to create a new commit, and then you can also use the commands "),
      _hoisted_91,
      createTextVNode(", "),
      _hoisted_92,
      createTextVNode(" and "),
      _hoisted_93,
      createTextVNode(" as expected (but you will never end up with merge conflicts, so you can't practice on resolving them using this tool).")
    ]),
    createBaseVNode("p", null, [
      createTextVNode("If you want some more practice, you can also try "),
      createBaseVNode("a", _hoisted_94, [
        createTextVNode("Learn Git Branching"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(".")
    ]),
    _hoisted_95,
    createBaseVNode("p", null, [
      createTextVNode("If you want to learn more about branches in Git, read the following chapters from "),
      createBaseVNode("a", _hoisted_96, [
        createTextVNode("Pro Git"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" by "),
      _hoisted_97,
      createTextVNode(" and "),
      _hoisted_98,
      createTextVNode(" (available for free online in multiple different formats):")
    ]),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_99, [
          createTextVNode("Chapter 3: Git Branching"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _hoisted_100
      ])
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
