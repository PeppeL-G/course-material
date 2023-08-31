import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-8331cbf7.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="git-synching" tabindex="-1"><a class="header-anchor" href="#git-synching" aria-hidden="true">#</a> Git Synching</h1><p>If you need to share your project with other programmers (could be programmers working on the same project, or if you want to release the project as open source), then it is not good enough to only have a local repository on your own computer, because how would the other programmers get access to it? Your own computer is probably not connected to the Internet all the time, and even if it would be, how would you configure who would have access to your different repositories? Therefor it is very common that you have the repository on a server on the Internet instead, where it is available to anyone that should be able to access it 24/7, and it is through this repository multiple programmers can work on the project at the same time.</p><h2 id="remote-repositories" tabindex="-1"><a class="header-anchor" href="#remote-repositories" aria-hidden="true">#</a> Remote repositories</h2><p>We call a repository hosted on a server on the Internet for a <em>remote repository</em>, because it is not a local repository that exists locally on your own computer, but a repository on a remote computer.</p><p>There exists two different types of remote repositories: public and private repositories.</p><p>A <em>public repository</em> is a repository anyone has read access to. The creator of the repository can give other users write access, so others can contribute to the project. Open source projects usually use a public repository.</p><p>A <em>private repository</em> is a repository that only the creator and invited users have read &amp; write access to. This is usually used by companies working on projects they are selling to customers and don&#39;t want to give away for free.</p><p>Instead of you setting up your own server to host your repositories, you can use one of the many websites that offer to host your repositories for you, such as:</p>', 8);
const _hoisted_9 = {
  href: "https://github.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_10 = {
  href: "https://about.gitlab.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_11 = {
  href: "https://www.git-tower.com/blog/git-hosting-services-compared/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_12 = /* @__PURE__ */ createStaticVNode('<p>In addition to hosting your repositories, these websites usually have many other good-to-have features, such as:</p><ul><li>Issue tracking (let users report errors they find)</li><li>Collaboration (give other users read/write access to your repositories)</li><li>Continuos Integration</li><li>...</li></ul><p>Which of these websites you should use depends on which features you need and how much you are willing to pay for them, but GitHub is one of the most popular choices for open source projects. A benefit with GitLab is that GitLab itself is open source, so if you later discover that you need to host your repositories on your own server, then you can &quot;easily&quot; setup your own GitLab server and move your repositories over there, and then continue to work as usual.</p><h2 id="connecting-remote-and-local-repositories" tabindex="-1"><a class="header-anchor" href="#connecting-remote-and-local-repositories" aria-hidden="true">#</a> Connecting remote and local repositories</h2><p>So, often when you start to work on a new project, you start by creating a new remote repository on one of the previously mentioned websites. Each remote repository get&#39;s a Uniform Resource Identifier (URI) that uniquely identifies that repository. That URI is something you can use to <em>clone</em> (create a copy of) that repository to you own computer by using the command <code>git clone THE_URI</code>. This will create a new folder locally on your own computer that contains a copy of the remote repository. The idea is that when you want to add features/fix bugs, then you change the code in the local repository on your own computer and create commits there. Then you can send these commits to the remote repository, where the rest of the world (or only invited users) can take part of them.</p><p>Most often, we have just one remote repository, but it is possible to have multiple remote repositories for the same project. We will not get into the details of that here, but a consequence of that is that each remote repository also gets a name we can use to refer to that specific remote repository. When you use <code>git clone THE_URI</code>, the remote repository will get the name <code>origin</code> (we say that the origin of our local repository is the remote repository we cloned it from), so in our local repository the name <code>origin</code> will refer to the remote repository (the name of the remote repository is something we will use later).</p><p>When a local repository is connected to a remote repository, it has extra pointers to keep track of the branches in the remote repository. For example, imagine that the remote repository looks like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                    MASTER BRANCH\n                          ↓\nCommit 1      &lt;--      Commit 2\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When you clone the remote repository to your own computer, your local repository will look like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                        HEAD\n                          ↓\n                    MASTER BRANCH\n                          ↓\nCommit 1      &lt;--      Commit 2\n                          ↑\n                 ORIGIN/MASTER BRANCH\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That is, it has a pointer called <code>origin/master</code> that points to the latest commit on the <code>master</code> branch you have received from the remote (<code>origin</code>) repository, and a branch called <code>master</code> that keeps track of the latest commit you have on your own local <code>master</code> branch. The same is true for all other branches you have in the repository (if you had a branch called <code>test</code>, you would also have a pointer called <code>origin/test</code>, or whatever you call your remote repository).</p><p>When you then create a new commit (<code>Commit 3</code>) in your local repository on the <code>master</code> branch, it looks like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                                               HEAD\n                                                 ↓\n                                           MASTER BRANCH\n                                                 ↓\nCommit 1      &lt;--      Commit 2      &lt;--      Commit 3\n                          ↑\n                 ORIGIN/MASTER BRANCH\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That is, creating a new commit on the <code>master</code> branch does not update the <code>origin/master</code> pointer, only your own <code>master</code> pointer. Git uses these extra pointers (one for each branch) to keep track of which commits you have in your local repository that you haven&#39;t uploaded to the remote repository yet, and which commits in the remote repository you haven&#39;t downloaded yet (that has been uploaded by other programmers).</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p><code>git clone THE_URI</code> is not the only way to &quot;connect&quot; two repositories. If you already have a local repository that you want to share with the world, then you can create an empty remote repository and then &quot;connect&quot; to it from your local repository using the command <code>git remote add</code> instead of the command <code>git clone</code>. We will not cover those details here, but do be aware of the possibility.</p></div><h2 id="synching-commits" tabindex="-1"><a class="header-anchor" href="#synching-commits" aria-hidden="true">#</a> Synching commits</h2><p>So the idea is that we have one remote repository, and each programmer that wants to work on the project clones the remote repository to her own computer using the <code>git clone THE_URI</code> command, so each programmer gets their own local repository where they can modify the source code on their own computers and create commits that only exists in their own local repository. When a programmer wants the other programmers that work on the project to take part of her commits, she uploads her new local commits to the remote repository, and then the other programmers can download her commits from there.</p><h3 id="downloading-commits-pulling" tabindex="-1"><a class="header-anchor" href="#downloading-commits-pulling" aria-hidden="true">#</a> Downloading commits (pulling)</h3><p>So imagine that you clone a remote repository looking like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                    MASTER BRANCH\n                          ↓\nCommit 1      &lt;--      Commit 2\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then you get a local repository looking like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                        HEAD\n                          ↓\n                    MASTER BRANCH\n                          ↓\nCommit 1      &lt;--      Commit 2\n                          ↑\n                 ORIGIN/MASTER BRANCH\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then someone uploads a new commit (<code>Commit 3</code>) to the <code>master</code> branch on the remote repository, so the remote repository looks like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                                           MASTER BRANCH\n                                                 ↓\nCommit 1      &lt;--      Commit 2      &lt;--      Commit 3\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you want to download <code>Commit 3</code> to your local repository, then you would run the command <code>git fetch origin master</code>. This command tells Git to download the commits from the <code>master</code> branch in the remote repository that you don&#39;t yet have in your local repository. Afterwards, your local repository would look this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                        HEAD\n                          ↓\n                    MASTER BRANCH\n                          ↓\nCommit 1      &lt;--      Commit 2      &lt;--      Commit 3\n                                                 ↑\n                                        ORIGIN/MASTER BRANCH\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You usually don&#39;t just want to download the remote commits, you usually also want the remote commits on the <code>master</code> branch to be part of your own <code>master</code> branch, so you usually immediately afterwards merges the branch <code>origin/master</code> into the <code>master</code> branch by running the command <code>git merge origin/master</code>, so your local repository becomes:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                                               HEAD\n                                                 ↓\n                                           MASTER BRANCH\n                                                 ↓\nCommit 1      &lt;--      Commit 2      &lt;--      Commit 3\n                                                 ↑\n                                        ORIGIN/MASTER BRANCH\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this case, the branch <code>origin/master</code> contained all the commits the branch <code>master</code> contained, so Git simply used the fast-forward merge strategy, but if you would have created your own local commits on the <code>master</code> branch, you could here have had a merge conflicts you would now need to resolve manually.</p><p>Very often when you use <code>git fetch</code> you want to use <code>git merge</code> immediately afterwards. Therefore, Git provides another command for executing these two commands in sequence called <code>git pull</code>. So instead of first running <code>git fetch origin master</code> and then <code>git merge origin/master</code>, we could simply had run <code>git pull origin master</code>.</p><h3 id="uploading-commits-pushing" tabindex="-1"><a class="header-anchor" href="#uploading-commits-pushing" aria-hidden="true">#</a> Uploading commits (pushing)</h3><p>When you have created some commits in your own local repository and want to upload these to the remote repository you use the command <code>git push origin BRANCH_NAME</code>. This is known as <em>pushing</em>. <code>origin</code> is the name of the remote repository you want to push the commits to. This doesn&#39;t have to be <code>origin</code>, but if you only have one remote repository (which most often is the case), you should use <code>origin</code>. <code>BRANCH_NAME</code> if the name of the branch whose commits you want to push, for example <code>master</code>.</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>You can only push your own newly created commits to the remote repository if you have all the commits the remote repository contains. If you don&#39;t have that, Git will display an error message to you when you try to push. If that&#39;s the case, then you first need to download the commits from the remote repository you don&#39;t have using <code>git pull origin BRANCH_NAME</code>, resolve any merge conflicts you might get, and then you can push to the remote repository.</p></div><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Imagine that you clone a remote repository looking like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                    MASTER BRANCH\n                          ↓\nCommit 1      &lt;--      Commit 2\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then you get a local repository looking like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                        HEAD\n                          ↓\n                    MASTER BRANCH\n                          ↓\nCommit 1      &lt;--      Commit 2\n                          ↑\n                 ORIGIN/MASTER BRANCH\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then you create a new commit (<code>Commit 3</code>), so your local repository looks like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                                               HEAD\n                                                 ↓\n                                           MASTER BRANCH\n                                                 ↓\nCommit 1      &lt;--      Commit 2      &lt;--      Commit 3\n                          ↑\n                 ORIGIN/MASTER BRANCH\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To send <code>Commit 3</code> to the remote repository, you run the command <code>git push origin master</code>. If no one else has pushed any new commits to the remote repository everything will be fine, and the remote repository will become:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                                           MASTER BRANCH\n                                                 ↓\nCommit 1      &lt;--      Commit 2      &lt;--      Commit 3\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And your own local repository will become:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                                               HEAD\n                                                 ↓\n                                           MASTER BRANCH\n                                                 ↓\nCommit 1      &lt;--      Commit 2      &lt;--      Commit 3\n                                                 ↑\n                                        ORIGIN/MASTER BRANCH\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Imagine that you clone a remote repository looking like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                    MASTER BRANCH\n                          ↓\nCommit 1      &lt;--      Commit 2\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then you get a local repository looking like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                        HEAD\n                          ↓\n                    MASTER BRANCH\n                          ↓\nCommit 1      &lt;--      Commit 2\n                          ↑\n                 ORIGIN/MASTER BRANCH\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then you create a new commit (<code>Commit 3</code>), so your local repository looks like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                                               HEAD\n                                                 ↓\n                                           MASTER BRANCH\n                                                 ↓\nCommit 1      &lt;--      Commit 2      &lt;--      Commit 3\n                          ↑\n                 ORIGIN/MASTER BRANCH\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Before you push your <code>Commit 3</code> to the remote repository, someone else has pushed a commit to it (<code>Commit 4</code>), so the remote repository is:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                                           MASTER BRANCH\n                                                 ↓\nCommit 1      &lt;--      Commit 2      &lt;--      Commit 4\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you try to run <code>git push origin master</code> now, you will get an error, because the remote repository contains a commit (<code>Commit 4</code>) that your local repository does not contain. So before you can push, you need to run <code>git pull origin master</code>, but let&#39;s do this by manually running <code>git fetch origin master</code> followed by <code>git merge origin/master</code>, so you can see what happens.</p><p>So, first we run <code>git fetch origin master</code> to get <code>Commit 4</code>, and our local repository becomes:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                                               HEAD\n                                                 ↓\n                                           MASTER BRANCH\n                                                 ↓\nCommit 1      &lt;--      Commit 2      &lt;--      Commit 3\n                          ↑\n                       Commit 4\n                          ↑\n                 ORIGIN/MASTER BRANCH\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then we run the command <code>git merge origin/master</code>, and a merge commit (<code>Commit 5</code>) is created (if there were conflicts, we would need to resolve those manually before the merge commit is created), and our local repository looks like:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Commit 1      &lt;--      Commit 2      &lt;--      Commit 3                   HEAD\n                          ↑                      ↑                         ↓\n                       Commit 4      &lt;--      Commit 5      &lt;--      MASTER BRANCH\n                          ↑\n                 ORIGIN/MASTER BRANCH\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We can then run <code>git push origin master</code> to upload <code>Commit 3</code> and <code>Commit 5</code> to the remote repository, so the remote repository becomes:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Commit 1      &lt;--      Commit 2      &lt;--      Commit 3\n                          ↑                      ↑\n                       Commit 4      &lt;--      Commit 5      &lt;--      MASTER BRANCH\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And our local repository becomes:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Commit 1      &lt;--      Commit 2      &lt;--      Commit 3                   HEAD\n                          ↑                      ↑                         ↓\n                       Commit 4      &lt;--      Commit 5      &lt;--      MASTER BRANCH\n                                                 ↑\n                                        ORIGIN/MASTER BRANCH\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="practising" tabindex="-1"><a class="header-anchor" href="#practising" aria-hidden="true">#</a> Practising</h2>', 36);
const _hoisted_48 = {
  href: "http://git-school.github.io/visualizing-git/#free-remote",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_49 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "git add",
  -1
  /* HOISTED */
);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  'git commit -m "Message"',
  -1
  /* HOISTED */
);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "git branch BRANCH_NAME",
  -1
  /* HOISTED */
);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "git checkout BRANCH_NAME",
  -1
  /* HOISTED */
);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "git merge BRANCH_NAME",
  -1
  /* HOISTED */
);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "git pull origin BRANCH_NAME",
  -1
  /* HOISTED */
);
const _hoisted_55 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "git push origin BRANCH_NAME",
  -1
  /* HOISTED */
);
const _hoisted_56 = {
  href: "https://learngitbranching.js.org/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_57 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_58 = {
  href: "https://git-scm.com/book/en/v2",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_59 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "Scott Chacon",
  -1
  /* HOISTED */
);
const _hoisted_60 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "Ben Straub",
  -1
  /* HOISTED */
);
const _hoisted_61 = {
  href: "https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_62 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("The parts about using a remote repository ("),
      /* @__PURE__ */ createBaseVNode("code", null, "git clone"),
      /* @__PURE__ */ createTextVNode(", "),
      /* @__PURE__ */ createBaseVNode("code", null, "git pull"),
      /* @__PURE__ */ createTextVNode(", "),
      /* @__PURE__ */ createBaseVNode("code", null, "git push"),
      /* @__PURE__ */ createTextVNode(", ...)")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_63 = {
  href: "https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_64 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("The parts about using a remote repository ("),
      /* @__PURE__ */ createBaseVNode("code", null, "git clone"),
      /* @__PURE__ */ createTextVNode(", "),
      /* @__PURE__ */ createBaseVNode("code", null, "git pull"),
      /* @__PURE__ */ createTextVNode(", "),
      /* @__PURE__ */ createBaseVNode("code", null, "git push"),
      /* @__PURE__ */ createTextVNode(", ...)")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_65 = {
  href: "https://rogerdudler.github.io/git-guide/",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_9, [
          createTextVNode("GitHub"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_10, [
          createTextVNode("GitLab"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_11, [
          createTextVNode("And some other..."),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _hoisted_12,
    createBaseVNode("p", null, [
      createTextVNode("Play around with "),
      createBaseVNode("a", _hoisted_48, [
        createTextVNode("Visualizing Git (Free Explore with Remote)"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" to learn how branches work. With this tool, you never use "),
      _hoisted_49,
      createTextVNode("; just use "),
      _hoisted_50,
      createTextVNode(" directly to create a new commit, and then you can also use the commands "),
      _hoisted_51,
      createTextVNode(", "),
      _hoisted_52,
      createTextVNode(", "),
      _hoisted_53,
      createTextVNode(", "),
      _hoisted_54,
      createTextVNode(", "),
      _hoisted_55,
      createTextVNode(", etc. as expected.")
    ]),
    createBaseVNode("p", null, [
      createTextVNode("If you want some more practice, you can also try "),
      createBaseVNode("a", _hoisted_56, [
        createTextVNode("Learn Git Branching"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" (the parts about using a remote repository).")
    ]),
    _hoisted_57,
    createBaseVNode("p", null, [
      createTextVNode("If you want to learn more about branches in Git, read the following chapters from "),
      createBaseVNode("a", _hoisted_58, [
        createTextVNode("Pro Git"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" by "),
      _hoisted_59,
      createTextVNode(" and "),
      _hoisted_60,
      createTextVNode(" (available for free online in multiple different formats):")
    ]),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_61, [
          createTextVNode("Chapter 2: Git Basics"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _hoisted_62
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_63, [
          createTextVNode("Chapter 3: Git Branching"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _hoisted_64
      ])
    ]),
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_65, [
        createTextVNode("git - the simple guide"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" is a nice short summary of what you have learned in this small Git course.")
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
