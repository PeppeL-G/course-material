---
sidebar: auto
navbarTitle: Using Shells
---

# Using Shells
Graphical User Interfaces are great, but using a shell/console/terminal can make you much more productive. Let's learn how to use shells so we can finish our workdays 5 minutes earlier for the rest of our lives. 

<iframe width="560" height="314" src="https://www.youtube.com/embed/Sn4tmwk4tqE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Lecture material
* [using-shells.pdf](using-shells.pdf)
* [using-shells.pptx](using-shells.pptx)

## Recommended reading
* [The Unix Shell: Summary of Basic Commands](https://swcarpentry.github.io/shell-novice/reference/) (the commands works similar in Windows PowerShell, but the flags for them might not work):
    * Introducing the Shell
    * Navigating Files and Directories
    * (if you want to learn more about shells, feel free to read the rest of the chapters as well)

## Shells

::: tip Shell or Console or Terminal?
Here the terms are used interchangeably, but they are actually not the same. See the Ask Ubuntu question [What is the difference between Terminal, Console, Shell, and Command Line?](https://askubuntu.com/q/506510/255935) if you're curios about the details. 
:::

### Files
A *file* is a collection of data, for example some text you've typed. An example of that is shown in <FigureNumber /> below.

<Figure caption="Example of text content in a file containing data about a list of things.">
```
My todo list
 - Clean garden
 - Grocery shopping
 - Feed the pet
```
</Figure>

Computers can store multiple files, and for us to be able to distinguish them from each other, we give each one a name. For example, the file with the name `my-todo-list` can contain information about what I need to do, and the file with the name `my-lecture-notes` can contain notes I've written at the lectures I've attended.

::: warning No spaces?
Filenames can contain spaces (` `), but since spaces are used to separate arguments passed to commands in shells, it's a bad idea to use spaces in filenames.

Some applications and programming libraries have difficulties handling filenames with spaces, so it's also a bit safer to never user spaces in filenames, otherwise you might get into trouble with those.

Consequently, most experienced programmers use a `-` instead of a space (` `) in filenames.
:::

::: warning No caps?
Filenames can contain capital characters, but it's easier and quicker to type only lowercase characters on a keyboard, so most experienced computer users don't use capital characters in their filenames.
:::

::: warning No special characters?
Most modern operating system can handle special characters like `å`, `ä`, `ö`, `'`, etc. in filenames without problem, but often you transfer files to other computers that might run another (e.g. older) operating system that can't handle these characters in filenames, so if you want to make sure the files works on other computers too (**which you always want!**), it's usually a bad idea to use special characters in the filenames even if it works on your computer.
:::

Most applications using files need to have the data in a more structured format than one entered by a human (as the one shown in <FigureNumber previous /> above). Therefore, when applications store data in files, they store it in special formats they understand, for example [JSON](https://en.wikipedia.org/wiki/JSON), [XML](https://en.wikipedia.org/wiki/XML) or [CSV](https://en.wikipedia.org/wiki/Comma-separated_values), etc.

When the data in a file has been written in a specific format, the filename usually ends with an extension (a `.` followed by some characters) that indicates which format the data in the file is written in. JSON format has the file extension `.json`, XML has the file extension `.xml`, etc. <FigureNumber /> below shows an example of this.

<Figure caption="todo-list.json, example of data about a list in a file written in JSON format.">

```json
{
    "title": "My todo list",
    "items": [
        "Clean garden",
        "Grocery shopping",
        "Feed the pet"
    ]
    
}
```

</Figure>


### Folders
A computer usually contains many files, and instead of having them all in a single bucket, we can place them in different buckets, known as *folders*. A folder can also contain other folders (known as sub-folders), which enables us to store files in a tree hierarchy. Just like files, each folder has a name. The root folder is usually called `/`, and the folder you create you can call whatever you want, but it's a good idea to name them using the same convention as mentioned for filenames.

<FigureNumber /> shows an example of some files and folders stored on a computer.

<Figure caption="A visualization of how files can be structured in folders. ▭ are files, ♢ are folders. Arrows point to the files and sub-folders a folder contains.">
<Mermaid>
{{`
graph TD
    root{"/"}
    d1{"school-work"}
    d2{"2019"}
    d3{"2020"}
    selfie["selfie.jpeg"]
    notes1["lecture-notes-programming.txt"]
    notes2["lecture-notes-physics.txt"]
    notes3["lecture-notes-math.txt"]
    root --> d1
    d1 --> d2
    d1 --> d3
    root --> selfie
    d2 --> notes1
    d2 --> notes2
    d3 --> notes3
`}}
</Mermaid>
</Figure>

::: tip Folder or Directory?
Here the terms are used interchangeably, but they are actually not the same. See the Stack Overflow question [What is the difference between a directory and a folder?](https://stackoverflow.com/q/5078676/2104665) if you're curios about the details. 
:::

### Paths
Since files (and folders) can be put in folders, it's not enough to just know the name of a file (or folder) to identify it. For example, two different files (or folders) can have the same name as long as they are not placed in the same folder. 

A path is an identifier for a file or a folder. These are used quite a lot when you use a shell, because the commands you execute in the shell usually operates on files and folders, and you specify which ones by passing the paths to the files and folders you want the command to operate on.

#### Absolute paths
To identify a file (or folder), you can list all the folders from the root folder (`/`) to the file (or folder). The names of the folders are usually separated by `/`, and this all together forms *the absolute path* to the file (or folder).

For example, the absolute path to the file `lecture-notes-programming.txt` in <FigureNumber previous /> above is `/school-work/2019/lecture-notes-programming.txt`.

#### Relative paths
Always when using a shell, you are standing in a folder, and that folder is known as the *Working Directory*. Often when you work with files and folders, you are only interested in the files and sub-folders in a specific folder. Then you can set that specific folder as your Working Directory, and then you can refer to the other files and folders using a *relative path* from your Working Directory, instead of using the absolute path. That is usually much more convenient. Relative paths work like this:

* `some-name` \
  Refers to the file (or folder) with the name `some-name` in the Working Directory.
* `a-sub-folder/some-name` \
  Refers to the file (or folder) with the name `some-name` in the sub folder `a-sub-folder` in the Working Directory. You can add more `/` to go into more sub folders.
* `.` \
  Refers to the folder you are standing in (the Working Directory).
* `..` \
  Refers to the parent directory of the folder you are standing in. Can be used repeatedly and together with the other notations. For example, `../..` is the parent folder to the parent folder you are standing in, and `../a-file.txt` refers to the file `a-file.txt` in the parent folder.

::: warning Do paths to folders end with /?
If a path refers to a folder, it can end with `/`, but it's not required to write that. For example, both `/a-sub-folder` and `/a-sub-folder/` would refer to the same folder. However, it can be good to add that extra slash at the end to indicate to other humans reading the path that the path leads to a folder, since they might otherwise think it leads to a file.
:::

::: tip Example
To rename the file `/school-work/2019/lecture-notes-programming.txt` to `/school-work/2019/programming-notes.txt`, you can use the `mv` command with absolute paths, like this (it doesn't matter what your Working Directory is since you use absolute paths):

```sh
mv /school-work/2019/lecture-notes-programming.txt /school-work/2019/programming-notes.txt
```

Using the Working Directory, you can first change the Working Directory to `/school-work/2019/` using an absolute path and the `cd` command, and then rename the file using relative paths and the `mv` command:

```sh
cd /school-work/2019/
mv lecture-notes-programming.txt programming-notes.txt
```
:::

### Commands
Which commands the computer can execute differs between different operating system and different shells, but some commands exists on most of them, including:

* `pwd`\
Print Working Directory, prints the path to the folder you are currently standing in.
* `ls`\
List Structure, prints the names of the files and sub folders in the Working Directory.
* `cd path`\
Change Directory, go to the folder specified in `path` (change to actual path).
* `mkdir name`\
MaKe DIRectory, creates a new folder called `name` (change to actual name) in the Working Directory. `name` can also be a path to the directory that should be created.
* `mv old_name new_name`\
MoVe, moves the file or folder called `old_name` (change to actual name) to `new_name` (change to actual name) in the Working Directory. `old_name` and `new_name` can also be paths.