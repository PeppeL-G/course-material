---
navbarTitle: Introduction to Script Programming
---
# Laboratory Work
On this page you find information about the examination test *Laboratory Work*.

## Introduction
The Laboratory Work should be carried out individually. It consists of 6 different parts called "labs" (Lab 1, Lab 2, ..., Lab 6). Each lab contains a set of programming problems you need to solve. Each solution should be implemented in Python 3, and before you're approved on each lab you also need to orally present your solution and implementation to a teacher at a lab session. You are expected to be able to explain how your solutions (algorithms) work, and how each line of Python code you have written works. The teacher can't approve you on the lab if you can't do that.

You are expected to complete one lab each week. No deadlines exist (e.g. presenting Lab 1 four weeks after the course has started is OK), but since you need to present your work at a lab session, the last lab session in the course will in practice function as a deadline.

Re-examination of the laboratory work will be offered at the re-examination periods in February and in August (the same re-examination periods as for the written examination). A special lab session will be booked for these re-examinations periods. If you need to know when the lab session will take place in advance, email the course coordinator.

## Lab 1 - Input, output & loops

::: warning Note!
Before you attempt solving the programming problems in Lab 1 you are strongly recommended to solve the programming problems in Exercise 0 and Exercise 1.
:::

### Problem 1.1: Computing the sum of 3 numbers
Create a program that asks the user to enter a number three times and which then computes and prints the sum of those numbers. Do not use any loop.

### Problem 1.2: Computing the sum of 5 numbers
Create a program that asks the user to enter a number 5 times and which then computes and prints the sum of those numbers. Make use of a loop instead of having multiple copies of the same statements.

### Problem 1.3: Computing the average of multiple numbers
Create a program that first asks the user how many numbers she would like to enter. The program should then ask the user to enter a number that many times, and then should the program print the average value of those numbers. The average value is simply the sum of the numbers divided by the number of numbers.

### Problem 1.4: Displaying a multiplication table
Create a program that asks the user to enter a number for which the multiplication table (between 0 and 9) should be printed. The program should then print that multiplication table. It can look like as shown in <FigureNumber /> below.

<Figure caption="Sample input/output of the program.">
```
This program displays a multiplication table.
Enter the number for which the multiplication table should be shown: 5
0 * 5 = 0
1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
```
</Figure>

### Problem 1.5: Displaying a more complex multiplication table
Create a program that first asks the user to enter a number for which the multiplication table should be printed, and then asks the user to enter integers representing the lower bound and the upper bound of the multiplication table. It can look like as shown in <FigureNumber /> below.

<Figure caption="Sample input/output of the program.">
```
This program displays a multiplication table.
Enter the number for which the multiplication table should be shown: 5
Enter lower bound: 3
Enter upper bound: 7
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
```
</Figure>

### Problem 1.6: Computing products
Create a program that asks the user to enter two integers. The program should then compute and print the product of the integers between (and including) these two integers. For example, the product of the integers between `3` and `5` is `3*4*5` = `60`. Assume the user enters the lower integer first. It can look like as shown in <FigureNumber /> below.

<Figure caption="Sample input/output of the program.">
```
This program computes the product of the integers in a range.
Enter the lower number of the range: 3
Enter the upper number of the range: 5
The product of the integers between 3 and 5 is 60.
```
</Figure>

### Problem 1.7: Computing things
For this problem, students taking the programs *IT Infrastructure and Network Design* and *Sustainable Building Information Management* have a different problem to solve. If you don't take any of these program (e.g. being an exchange student), solve the problem for the program IT Infrastructure and Network Design.

<Tabs rememberSelectedKey="program">
<Tab title="IT Infrastructure and Network Design">

A company is planning on buying 5 different servers. The costs to buy the servers are 3200, 5000, 1790, 8900 and 2300 SEK respectively, and they each cost 100 SEK to run each month (power consumption, floor space, etc.). The servers will run for a number of months and then be given away for charity.

Write a program that first asks the user to enter a number of months, and then computes and prints:

* The total costs for buying and running the servers that number of months.
* The average costs (including both the initial cost and the monthly cost) each month for each server.

It can look something like what is shown in <FigureNumber /> below.

<Figure caption="Sample input/output to/from the program.">
```
Enter the number of months the servers will run: 2
The server costing 3200 costs on average 1700 each month.
The server costing 5000 costs on average 2600 each month.
The server costing 1790 costs on average 995 each month.
The server costing 8900 costs on average 4550 each month.
The server costing 2300 costs on average 1250 each month.
Total cost: 22190
```
</Figure>

</Tab>
<Tab title="Sustainable Building Information Management">

Create a program that can calculate LCC for a building using the information in <FigureNumber /> below:

<Figure caption="Slides with the LCC formula and the Present Value Factor">
<img src="/course-material/introduction-to-script-programming/labs/lab-1-lcc-formula.png" alt="The LCC formula">
<img src="/course-material/introduction-to-script-programming/labs/lab-1-present-value-factor.png" alt="The Present Value Factor.">
</Figure>

The input to the calculations should be the properties defined in the IDS below:

<Figure caption="IDS">
<img src="/course-material/introduction-to-script-programming/labs/lab-1-ids.png" alt="IDS">
</Figure>

On top of this:

* The data needed for the present value factor should be user input.
* The installation and commissioning cost are included in the initial cost.
* The environmental cost should be calculated with the compensation factor 0.72SKR/CO2eq according [https://co2kompensera.se/](https://co2kompensera.se/).
* The energy cost should be calculated using the energy price 1SKR/kWh.
* Operation cost should be calculated using the default value of 250 SKR/m2(NTA)/year.
* Costs for maintenance and repairs should be calculated using the default value of 100 SKR/m2(NTA) /year.
* The cost for the decommissioning should be calculated as 10% of the cost assessment.

</Tab>
</Tabs>

### Present your work
Present your work to a teacher at a lab session. Be prepared to explain how your solutions and implementations work, and be prepared to answer any question the teacher might have about your code. It is good to practice this in advance (alone or with a friend).

When the teacher is satisfied with your presentation, upload your Python files to [the assignment Lab 1 on Ping Pong](https://pingpong.hj.se/courseId/21445/content.do?id=16754735). The teacher will then approve you on that assignment.




## Lab 2 - Functions and Modules
sdf

### Problem 2.1: Writing lyrics
Create a program that prints the lyrics for the song *We wish you a merry Christmas*. It can look as shown in <FigureNumber /> below.

<Figure caption="The lyrics for the song We wish you a merry Christmas.">

```
We wish you a Merry Christmas
We wish you a Merry Christmas
We wish you a Merry Christmas and a Happy New Year

Good tidings we bring to you and your kin
We wish you a Merry Christmas and a Happy New Year

Now bring us some figgy pudding
Now bring us some figgy pudding
Now bring us some figgy pudding, now bring some out here

Good tidings we bring to you and your kin
We wish you a Merry Christmas and a Happy new Year

We won't go until we get some
We won't go until we get some
We won't go until we get some, so bring some out here

Good tidings we bring to you and your kin
We wish you a Merry Christmas and a Happy New Year

We wish you a Merry Christmas
We wish you a Merry Christmas
We wish you a Merry Christmas and a Happy New Year
```
</Figure>

Use loops and functions as much as possible to avoid writing the same statement multiple times. Use at least:

* One function to print the part `We wish you...`.
* One function to print the part `Good tiding...`.
* One function to print the part `Now bring...` and the part `We won't...` (use parameters and arguments).

::: tip Note!
You should create at least three different functions, but you should call them many more times.
:::

### Problem 2.2: Computing averages
Create a program that contains a function named `average()` which receives a sequence with numbers (a list or a range) as argument and returns the average number in the range. The average number is the sum of the numbers divided by the number of numbers.

Sample usage:

* `average([1, 4, 4])` → `3`
* `average([4, 4, 4, 4])` → `4`
* `average([-2, 2])` → `0`

### Problem 2.3: Computing sums
Create a program that contains a function named `sum_of_ints()` which receives two sequences of integers as two different arguments and computes and returns the sum of all the integers.

Sample usage:

* `sum_of_ints([1, 4, 2], [2, -1])` → `8`
* `sum_of_ints([4, 4, 4, 4], [])` → `16`
* `sum_of_ints([4, 4], [4, 4])` → `16`

### Problem 2.4: Practising multiplication
Create a program that asks the user to enter a number for which the user would like to practice the multiplication table, and then ask the user how many questions it would like to have. Your program should then generate that many random questions and ask the user to enter the correct number as answer to the question, and then print the correct answer. It can look as shown in <FigureNumber /> below.

<Figure caption="Sample input/output to/from the program.">
```
Enter multiplication table: 5
Enter number of questions: 3
What is 5 * 6?
Enter answer: 20
Correct answer is 30.
What is 5 * 2?
Enter answer: 10
Correct answer is 10.
What is 5 * 8?
Enter answer: 45
Correct answer is 40.
```
</Figure>

### Problem 2.5: String with numbers
Based on the sample input/output below, create the function `string_with_numbers()`.

Sample usage:

* `string_with_numbers(3)` → `'1_2_3'`
* `string_with_numbers(5)` → `'1_2_3_4_5'`

::: tip Tips!
Start with a string containing only `1`, and then use a loop to add the rest.
:::

### Problem 2.6: A different sum
Based on the sample usage below, create the function `xxx()`. You can assume the argument is a positive integer.

Sample usage:

* `xxx(1)` → `1`
* `xxx(2)` → `1 + 2+2` → `5`
* `xxx(3)` → `1 + 2+2 + 3+3+3` → `14`
* `xxx(4)` → `1 + 2+2 + 3+3+3 + 4+4+4+4` → `30`

::: tip Tips!
Two for loops (one inside the other) can be used to implement this function. If you're clever you might be able to implement it using only one for loop.
:::

## Lab 3 - Conditions
sdf

### Problem 3.1: Absolute value
Create the function `abs()`, which receives a number as argument and returns the absolute value for that number (the absolute value is the number in its positive form).

Sample usage:

* `abs(5)` → `5`
* `abs(-5)` → `5`
* `abs(0)` → `0`

### Problem 3.2: Closest to zero
Create the function `closest_to_zero()`, which receives two numbers as arguments and returns the number that is closest to 0.

Sample usage:

* `closest_to_zero(5, 9)` → `5`
* `closest_to_zero(3, -2)` → `-2`
* `closest_to_zero(2, 2)` → `2`

::: warning Note!
Sometimes it is hard to know what the return value should be. For example, should `closest_to_zero(-2, 2)` return `-2` or `2`? They are both equally far from 0! In this case we don't care about which of them we return.
:::

### Problem 3.3: Closest to zero (again)
Create the function `closest_to_zero_4()`, which receives four numbers as arguments and returns the number that is closest to 0.

Sample usage:

* `closest_to_zero_4(5, 9, 2, 11)` → `2`
* `closest_to_zero_4(0, 3, -2, 4)` → `0`
* `closest_to_zero_4(2, 2, -2, 1)` → `1`

::: tip Tips!
Try avoid using too many if statements. Instead, can you not use `closest_to_zero()` in your solution?
:::

### Problem 3.4: Finding the highest value
Create the function `highest()`, which receives a list with numbers as argument and returns the highest number in that list.

Sample usage:

* `highest([5, 3])` → `5`
* `highest([2, 8, 4, 3])` → `8`
* `highest([-2, -5])` → `-2`
* `highest([42])` → `42`

::: danger Note!
It is not allowed to use the built-in function `max()` in the solution to this problem.
:::

::: tip Tips!
When implementing this function, you somehow need to iterate through all the elements in the list and keep track of which element is the highest you have come across so far. you can store that in a variable.
:::

### Problem 3.5: Counting occurrences
Create the function `count()`, which receives a list with strings and another string as argument and returns the number of times that other string occurs in the list.

Sample usage:

* `count(["a", "b", "c"], "b")` → `1`
* `count(["a", "b", "c"], "e")` → `0`
* `count(["a", "a", "a"], "a")` → `3`

### Problem 3.6: Summarizing even integers
Create a program that asks the user to enter two integers. The first one should be lower than the second one. The program should then compute and display the sum of the even integers between those two integers. To check if `an_integer` is even you can use the expression `an_integer % 2 == 0`.

### Problem 3.7: A simple calculator
Create a small program that functions as a simple calculator with a number stored in memory which you can add, subtract, multiply and divide other integers to/from.

When you're done it can look like as shown in <FigureNumber /> below.

<Figure caption="Sample input/output to/from the program.">
```
Enter initial memory value: 0
Enter operation (add/sub/mul/div/quit): add
Enter operand: 20
20 is stored in memory.
Enter operation (add/sub/mul/div/quit): mul
Enter operand: 3
60 is stored in memory.
Enter operation (add/sub/mul/div/quit): quit
The program finished with 60 stored in memory.
```
</Figure>






## Lab 4 - Lists & Dicts
sdf

### Problem 4.1: Comparing two lists
Create the function `are_equal()`, which receives two lists with numbers as arguments and returns `True` if the number at each index in the two lists are equal, otherwise `False`.

Sample usage:

* `are_equal([1, 2, 3], [1, 2, 3])` → `True`
* `are_equal([1, 2, 3], [1, 2, 2])` → `False`
* `are_equal([1, 2, 3], [1, 2])` → `False`
* `are_equal([1, 2], [1, 2, 3])` → `False`

::: danger Don't!
It is not allowed to use the `==` operator nor the `!=` operator to compare lists in the solution to this problem (but they may be used to compare numbers).
:::

::: tip Tips!
When implementing this function, you somehow need to compare the elements pairwise. The simplest way to do that is by iterating over the indexes in the lists, but that can get you into trouble if the two lists do not contain the same number of elements.
:::

### Problem 4.2: Changing a list
Create the function `change_to_highest()`, which receives a list as argument. The received list will contain lists with numbers, and the function should change the received list so it contains the highest number from each nested list.

A sample usage is shown in <FigureNumber /> below.

<Figure caption="Sample usage of the function.">
```python
the_list = [
    [1, 2, 3],
    [5, 4, 3],
    [2, 7, 6]
]
change_to_highest(the_list) # → None (no return value!).
# the_list should now be [3, 5, 7].
```
</Figure>

::: danger Don't!
The function should not return anything (`None` is returned implicitly), and you should not create a new list in the function, but make changes to the list you receive.
:::

::: tip Tips!
When implementing this function, you need to iterate through all the inner lists in the outer list and replace them by the highest number in each of them. Creating a separate function to compute which the highest number is might be helpful.
:::

### Problem 4.3: Computing sums
Create the function `sums()`, which receives a list of integers as argument and returns a dictionary where the key `"odd"` contains the sum of all the odd integers in the list, the key `"even"` contains the sum of all the even integers in the list, and the key `"all"` contains the sum of all the integers in the list.

The expression `the_number % 2 == 0` can be used to check if `the_number` is an even number.

Sample usage:

* `sums([1, 2, 3, 4, 5])` → `{"odd": 9, "even": 6, "all": 15}`
* `sums([2, 4, 6])` → `{"odd": 0, "even": 12, "all": 12}`

::: warning Note!
In dictionaries, the order of the keys does not matter, e.g. the dictionary `{"a": 1, "b": 2}` is the same as `{"b": 2, "a": 1}`.
:::

::: tip Tips!
Start by initializing the directory you should return, then iterate through all the numbers in the list and add them to the appropriate keys in the dictionary.
:::

### Problem 4.4: A less simple calculator
This problem is a continuation on Problem 37. Feel free to continue on your solution to that problem to solve this problem.

Add the operation *undo* to your calculator. It should (if possible) undo the user's previous operation by restoring the value in memory to what it was before the previous operation. Repeated usage of the undo operation should be supported.

When you're done it can look like as shown in <FigureNumber /> below.

<Figure caption="Sample input/output to/from the program.">
```
Enter initial memory value: 0
Enter operation (add/sub/mul/div/undo/quit): undo
There is nothing to undo.
Enter operation (add/sub/mul/div/undo/quit): add
Enter operand: 1
1 is stored in memory.
Enter operation (add/sub/mul/div/undo/quit): add
Enter operand: 2
3 is stored in memory.
Enter operation (add/sub/mul/div/undo/quit): undo
1 is stored in memory.
Enter operation (add/sub/mul/div/undo/quit): undo
0 is stored in memory.
Enter operation (add/sub/mul/div/undo/quit): undo
There is nothing to undo.
Enter operation (add/sub/mul/div/undo/quit): quit
The program finished with 0 in memory.
```
</Figure>

::: tip Tips
Have an empty list in the beginning that is used to store all memory values, and when applying the next mathematical operation entered by the user, push the new memory value to the end of this list. When the user wants to undo an operation, simply remove the last value from this list.
:::

### Problem 4.5: Verifying strings
For this problem, students taking the programs *IT Infrastructure and Network Design* and *Sustainable Building Information Management* have a different problem to solve. If you don't take any of these program (e.g. being an exchange student), solve the problem for the program IT Infrastructure and Network Design.

<Tabs rememberSelectedKey="program">
<Tab title="IT Infrastructure and Network Design">

Create a program that asks the user to enter a path to a directory on the file system. Your program should then check if that directory only contains files with the following names:

* `config.xml`
* `backup-config-YYYY-MM-DD.xml`

There may exists several files with the name `backup-config-YYYY-MM-DD.xml`, and `YYYY-MM-DD` should of course be a date for when the backup of the `config.xml` was created (e.g. `2018-11-12`). Your program should print text telling the user if all the files were named in one of these two formats, or if there exist files that doesn't follow these formats (in which case you should print the name of these files that don't follow the formats).

</Tab>
<Tab title="Sustainable Building Information Management">

Develop a program that checks if the files in a directory have been named according to the description below. The path to the directory should be given as input.

**Naming for model files and drawings**<br>
In <FigureNumber /> below you can see the naming principles of files that are related to CAD.

<Figure caption="">
<img src="/course-material/introduction-to-script-programming/labs/lab-4-naming-model.png">
</Figure>

The file name consists of six different parts. Symbols that can be used are characters (a-z/A-Z), numbers (0-9), dots (.), and dashes (-).

**Project Name**<br>
Name of the project should be `BIM3HUS4`.

**Responsible Party**<br>
Consists of one letter and one number. The letter is used to classify the discipline while the number is used to distinguish between different actors within the same discipline.

* A: Architect
* E: Electrical
* V: HVAC
* W: Plumbing
* K: Structural
* P: Projects Common

**Content**<br>
Numerical identification of the building component according to BSAB 96.

**Presentation**<br>
One letter or number used for explaining how the information is presented according to SS 32271 or BH90:8.

**Models and Base Files**<br>
* V: 3D models
* P: Plans
* S: Sections
* F: Facades
* U: Interior elevations
* D: Details
* X: Non-Graphical Models
* C: Schedules

**Drawings and Drawing Definitions**<br>
* 0: Composite Drawings
* 1: Plan Drawings
* 2: Sectional Drawings
* 3: Façade Drawings
* 4: Layout Drawings
* 5: List Drawings
* 6: Detail Drawings
* 7: Collaboration Drawings
* 8: Schematic Drawings
* 9: Text

**Building Number**<br>
Two numbers for identifying the building. For example: building number one is called `01` and building ten is called building `10`. For multiple buildings, `00` are to be used.

**Level**<br>
The level of the building. Level `01` is the first usable level. For multiple floors, `00` are to be used.

**Consecutive Numbers**<br>
Should follow a systematic principle according to BSAB 96.

**File Type**<br>
The extension for the file used. For example, a Revit file is called `.rvt` and the.

The different allowed formats should be defined in the different IDS in the project. A part of an IDS is shown in <FigureNumber /> below.

<Figure caption="">
<img src="/course-material/introduction-to-script-programming/labs/lab-4-delivery-content.png">
</Figure>

</Tab>
</Tabs>

## Lab 5 - Working with files
sdfd

### Problem 5.1: Counting things
Create a file named `text.txt` with the content shown in <FigureNumber /> below. Then write a program that computes and prints:

* The number of words in the file.
* The number of sentences in the file.
* The number of paragraphs in the file.
* Which of the letters (a-z) that appears most times (count upper case letters as lower case letters) and how many times that is.

<Figure>

```
Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum tempus egestas sed. Accumsan in nisl nisi scelerisque eu ultrices. Nunc sed velit dignissim sodales ut eu sem integer vitae. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Ultrices eros in cursus turpis massa tincidunt dui. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Viverra nibh cras pulvinar mattis nunc sed. Ultricies mi quis hendrerit dolor magna eget. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Dui sapien eget mi proin sed libero enim sed faucibus. Sit amet est placerat in egestas.

Libero enim sed faucibus turpis in. In est ante in nibh mauris cursus mattis molestie a. Ac tortor dignissim convallis aenean. Consectetur adipiscing elit pellentesque habitant. Habitant morbi tristique senectus et. Erat nam at lectus urna duis convallis convallis tellus. Elementum pulvinar etiam non quam lacus suspendisse faucibus. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Euismod nisi porta lorem mollis aliquam. Rutrum quisque non tellus orci ac. Elit pellentesque habitant morbi tristique senectus et netus et. Metus dictum at tempor commodo ullamcorper a. Tincidunt augue interdum velit euismod in pellentesque. Tortor pretium viverra suspendisse potenti nullam ac. Dui sapien eget mi proin. Sed faucibus turpis in eu mi bibendum. Auctor elit sed vulputate mi. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Sed cras ornare arcu dui vivamus arcu felis.

Venenatis tellus in metus vulputate eu scelerisque. Elementum sagittis vitae et leo. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Elementum eu facilisis sed odio. Tellus mauris a diam maecenas sed enim ut sem. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Vitae et leo duis ut diam quam nulla porttitor. Auctor eu augue ut lectus arcu bibendum at varius vel. Libero justo laoreet sit amet cursus sit amet dictum sit. Lorem sed risus ultricies tristique. Viverra accumsan in nisl nisi. Nulla posuere sollicitudin aliquam ultrices sagittis. Feugiat nibh sed pulvinar proin gravida hendrerit. Blandit libero volutpat sed cras ornare. Tristique senectus et netus et malesuada fames ac. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. At urna condimentum mattis pellentesque id nibh tortor id. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Ultrices sagittis orci a scelerisque purus semper eget duis at.

Nisl rhoncus mattis rhoncus urna neque viverra. Cursus eget nunc scelerisque viverra mauris in. Pretium quam vulputate dignissim suspendisse. Et ultrices neque ornare aenean. Volutpat est velit egestas dui id ornare arcu odio ut. Morbi tristique senectus et netus et malesuada fames ac. Purus sit amet luctus venenatis. Urna molestie at elementum eu facilisis sed odio morbi quis. Integer enim neque volutpat ac tincidunt vitae semper. Turpis egestas pretium aenean pharetra magna ac. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Vulputate enim nulla aliquet porttitor lacus luctus. Mattis enim ut tellus elementum sagittis. Lacinia quis vel eros donec. In est ante in nibh mauris cursus.

Facilisi nullam vehicula ipsum a. Neque egestas congue quisque egestas diam in arcu cursus euismod. Enim tortor at auctor urna. Nibh sed pulvinar proin gravida hendrerit. Posuere sollicitudin aliquam ultrices sagittis orci a. Malesuada bibendum arcu vitae elementum curabitur vitae. Maecenas sed enim ut sem viverra. In iaculis nunc sed augue. Facilisis sed odio morbi quis commodo odio aenean. Diam phasellus vestibulum lorem sed risus. Habitant morbi tristique senectus et netus et malesuada fames ac. Ornare lectus sit amet est. Eget aliquet nibh praesent tristique magna. Sed cras ornare arcu dui vivamus arcu felis. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Sem nulla pharetra diam sit amet nisl. Egestas erat imperdiet sed euismod nisi. Non enim praesent elementum facilisis. Tortor at auctor urna nunc id cursus. Vel fringilla est ullamcorper eget nulla facilisi etiam.
```
</Figure>

You can presume the text only contains the following characters:

* a-z
* A-Z
* spaces (`" "`),
* line breaks (`"\n"`)
* dots (`.`)

Feel free to use whichever functions/methods you want in your solution. You probably especially want to take a look at string methods you can use (run `help("")` in a Python REP-loop).

### Problem 5.2: Improving the calculator
This problem is a continuation of Problem 4.4 (the calculator).

Add the operation `store`, which saves the entire state of the calculator program (i.e. the list of memory values) in XML format in an XML file of your choice.

Add the operation `load`, which sets the state of the calculator program to a previous state that has been stored in a file through the store operation.

It should not be possible to undo the store or load operation, i.e.:

* Running `undo` after running `store` should not delete the file, but instead undo the previous add/subtract/multiply/divide operation.
* Running `undo` after running `load` should not restore the list with memory values used before the load operation, but instead undo the previous add/subtract/multiply/divide operation on the list loaded from the file (i.e. just delete the last value from the list).

### Problem 5.3: Doing things
For this problem, students taking the programs *IT Infrastructure and Network Design* and *Sustainable Building Information Management* have a different problem to solve. If you don't take any of these program (e.g. being an exchange student), solve the problem for the program IT Infrastructure and Network Design.

<Tabs rememberSelectedKey="program">
<Tab title="IT Infrastructure and Network Design">

Write a default configuration for a Cisco router in a file called `configuration-template.config`. In this file, you should be able to use placeholders that later will be replaced with the actual values that should be used. The file can look like the one shown in <FigureNumber /> below. In this case, placeholders are all words surrounded with curly brackets, `{like_this}`.

<Figure caption="Sample of the configuration template file. The parts with curly brackets are placeholders.">
```
!
! BASIC CONFIGURATION FOR CISCO ROUTERS
!
hostname {HOSTNAME}
enable password {ENABLEPASSWORD}
!
no ip domain lookup
ipv6 unicast-routing
!
interface {INT0}
 description {DESCINT0}
 ip address {IPINT0} {NETMASKINT0}
 ipv6 address {LINKLOCALINT0} link-local
 ipv6 address {IPV6INT0ANDPREFIX}
 {SHUTDOWNEMPTYORNOINT0} shutdown
!
interface {INT1}
 description {DESCINT1}
 ip address {IPINT1} {NETMASKINT1}
 ipv6 address {LINKLOCALINT1} link-local
 ipv6 address {IPV6INT1ANDPREFIX}
 {SHUTDOWNEMPTYORNOINT1} shutdown
!
banner motd ^C {BANNERMOTD} ^C
!
line con 0
 password {CONSOLEPASSWORD}
 logging synchronous
 login
line vty 0 4
 password {VTYPASSWORD}
 login
 transport input {TRANSPORTINPUTVTY}
!
end
```
</Figure>

Then create another file called `configuration-values.csv`, that contains the value for each placeholder in the configuration template. Furthermore, it does not only contain one value for each placeholder, but a list of them. It can look like the one shown in <FigureNumber /> below, in this case 5 values for each placeholder (the name of the placeholder is the first value on each line).

<Figure caption="Sample of the configuration template file. The parts with curly brackets are placeholders.">
```
HOSTNAME,R1,R2,R3,R4,R5
ENABLEPASSWORD,cisco,cisco,cisco,cisco,cisco
INT0,gi0/0,gi0/0,gi0/0,s0/0/0,s0/0/1
DESCINT0,Link to Client Network,Link to HR  Network,Link-net to R1,Link to Telia-WAN,Link to SUNET-WAN
IPINT0,192.168.10.1,10.0.25.1,10.0.1.1,86.42.125.1,192.55.65.1
NETMASKINT0,255.255.255.0,255.255.255.0,255.255.255.252,255.255.255.252,255.255.255.252
LINKLOCALINT0,fe80::1,fe80::2,fe80::3,fe80::4,fe80::5
IPV6INT0ANDPREFIX,2001:db8:acad:1::1/64,2001:db8:acad:2::1/64,2001:db8:acad:3::1/64,2001:db8:acad:4::1/64,2001:db8:acad:5::1/64
SHUTDOWNEMPTYORNOINT0,no,no,no,no,no
INT1,gi0/1,gi0/1,gi0/1,gi0/1,gi0/1
DESCINT1,Link-net to R3,Link-net to R4,Link to IP Only-WAN,Link-net to R2,Link to Economy Network
IPINT1,10.1.1.2,10.10.25.1,65.42.52.65,10.10.25.2,172.16.0.1
NETMASKINT1,255.255.255.252,255.255.255.252,255.255.255.252,255.255.255.252,255.255.255.0
LINKLOCALINT1,fe80::1,fe80::2,fe80::3,fe80::4,fe80::5
IPV6INT1ANDPREFIX,2001:db8:acad:3::2/64,2001:db8:acad:10::1/64,2001:abcd:beef::2/64,2001:db8:acad:10::2/64,2001:db8:acad:abcd::2/64
SHUTDOWNEMPTYORNOINT1,no,no,no,no,no
BANNERMOTD,You shall not pass!,You shall not pass!,You shall not pass!,You shall not pass!,You shall not pass!
CONSOLEPASSWORD,cisco1,cisco2,cisco3,cisco4,cisco5
VTYPASSWORD,cisco1,cisco2,cisco3,cisco4,cisco5
TRANSPORTINPUTVTY,telnet,telnet,telnet,ssh,ssh
```
</Figure>

Instead of manually creating the CSV file yourself, you can easily create and maintain it using Microsoft Excel, as shown in <FigureNumber /> below. When saving the file, just save it as *CSV UTF-8 (Comma Delimited)* instead of *Excel Workbook*.

<Figure caption="Saving an Excell document as a CSV file.">
<img src="/course-material/introduction-to-script-programming/labs/lab-5-csv-in-excell.png" alt="Saving an Excell document as a CSV file.">
</Figure>

Your task is to create a program that reads the placeholder values from `configuration-values.csv` and then generates new configuration files based on the template in `configuration-template.config`, but where the placeholders have been replaced with the values.

With the two files given above, your program should generate 5 new configuration files, the first one looking like the one shown in <FigureNumber /> below.

<Figure caption="Sample of what the first generated configuration file can look like.">
```
!
! BASIC CONFIGURATION FOR CISCO ROUTERS
!
hostname R1
!
enable password cisco
!
no ip domain lookup
ipv6 unicast-routing
!
interface gi0/0
 description Link to Client Network
 ip address 192.168.10.1 255.255.255.0
 ipv6 address fe80::1 link-local
 ipv6 address 2001:db8:acad:1::1/64
 no shutdown
!
interface gi0/1
 description Link-net to R3
 ip address 10.1.1.2 255.255.255.252
 ipv6 address fe80::1 link-local
 ipv6 address 2001:db8:acad:3::2/64
 no shutdown
!
banner motd ^C You shall not pass! ^C
!
line con 0
 password cisco1
 logging synchronous
 login
line vty 0 4
 password cisco1
 login
 transport input telnet
!
end
```
</Figure>

::: tip Tips!
You can start by reading the values from `configuration-values.csv` and store them in a dictionary like the following:

```python
placeholders = {
  "HOSTNAME": ["R1", "R2", "R3", "R4", "R5"],
  "ENABLEPASSWORD": ["cisco", "cisco", "cisco", "cisco", "cisco"],
  # ...
}
```

Then you loop 5 times (since each placeholder has five different values), and each time you:

1. Read the content from `configuration-template.config` into a string called `template`.
2. Use a new loop to iterate through all the placeholders, and for each placeholder you find it in `template` and replace it with its value. To replace a placeholder with a value, you can use the string method called `replace("old substring", "new substring")`: `"hostname {HOSTNAME}".replace("{HOSTNAME}", "R1")` → `"hostname R1"`.
3. Store `template` in a new file.
:::

</Tab>
<Tab title="Sustainable Building Information Management">

Create a file named `house.xml` with the XML code shown in <FigureNumber /> below. The XML code contains information about a house with a set of rectangular rooms.

<Figure caption="The XML code in house.xml.">
```
<house>
  <room>
    <name>Living Room</name>
    <side-length-1>5</side-length-1>
    <side-length-2>5</side-length-2>
  </room>
  <room>
    <name>Kitchen</name>
    <side-length-1>3</side-length-1>
    <side-length-2>6</side-length-2>
  </room>
</house>
```
</Figure>

Then write a program that computes and prints the total area of the house (the sum of the area of the rooms) in the XML file. Your program should still work if one add/remove rooms to the XML file.

</Tab>
</Tabs>

## Lab 6 - Object-oriented programming
sdf

### Problem 6.1: Using the `ConnectFour` class
In this problem, you should practice on using a class we have created for you. The class is called `ConnectFour`, and it can be used to play the game [Connect Four](https://en.wikipedia.org/wiki/Connect_Four). Instead of red and yellow bricks, we will use `X` and  `O` to represent the different players.

The file [ConnectFour.py](...) contains the `ConnectFour` class you should use. Add the code in that file to your own Python file. Then create a new instance of the class (the object that stores the state of the game) by calling the constructor of the class, e.g.:

```python
game = ConnectFour(7)
```

When you call the constructor, you pass it the number of rows the game should have (in this case `7`). The game will always have 10 columns.

To use the game object, you can call different methods on it. The different methods will tell the object to do different things. To tell the object to print itself to the console, call the `print_game()` method:

```python
game.print_game()
```

This method prints the game as shown in <FigureNumber /> below.

<Figure caption="What the game looks like printed to the console/terminal/shell. The numbers at the bottom identify the different columns (the first column is 0).">
<img src="/course-material/introduction-to-script-programming/labs/lab-6-connect-four-empty.png">
</Figure>

As you can see, the columns are identified through the digits 0-9.

To tell the object that a player would like to make a move in the game, call the method `make_move(column)`, and pass it the column into which the `X` or `O` (whoever the next player is) should be dropped:

```python
game.make_move(0)
game.make_move(2)
game.make_move(3)
game.make_move(3)
game.make_move(2)
game.print_game()
```

What the game looks like after the code above has been executed is shown in Figure 2 below. As you can see, `X` starts.

<Figure caption="What the game looks like after some moves have been made.">
<img src="/course-material/introduction-to-script-programming/labs/lab-6-connect-four-with-moves.png">
</Figure>

`print_game()` and `make_move(column)` are not the only methods in the class. The table below lists the methods you can use on the game object, and what they do.

| Method | Description |
|---|---|
| `print_game()` | Prints the game to the console/shell/terminal. |
| `make_move(column)`| Drops an `X` or `O` (the next player) in the specified `column`. The first (left most) column is `0`. |
| `get_winner()` | Returns `"X"` if 4 crosses in a row is found in the game. <br> Returns `"O"` if 4 circles in a row is found in the game. <br> Returns `" "` (a string with a space) otherwise. |
| `is_column_full(column)`| Returns `True` if the given `column` is full. <br> Returns `False` otherwise. |
| `does_column_exist(column)` | Returns `True` if the game contains the given `column`. <br> Returns `False` otherwise. |

Given the `ConnectFour` class, your task is to implement the main application loop for the game. This loop should simply keep asking the user to enter which column to drop the next `X` or `O` in until there is a winner (the user will enter the digit of the column).

::: tip Tips!
To pass, you don't have to use the methods `is_column_full(column`) nor `does_column_exist(column)`, but it is good if you do. These can be used to verify that the user doesn't try to make a move in a column that is full or a column that doesn't exists (such as column `12`).
:::

### Problem 6.2: Implementing a `Calculator` class
This problem is about implementing a calculator program as described in problem 4.4, but this time using a class to represent the calculator. Write all your code in a file named `lab_06_calculator.py`. When you are done, running the code in `lab_06_calculator.py` should have the very same effect as running the code you wrote for problem 4.4 (the output/input should be the same).

We recommend you to implement the class piece by piece by following the steps below. If you want to do it in another way, feel free to do so, but the class you create should have the same functionality (name/constructor/methods) as described in the steps below.

#### 6.2.1 Adding a constructor
Create a class named `Calculator` with a constructor that is called with no arguments. Inside the constructor you can, for now, simply write `pass` (a statement in Python doing nothing).

Although your `Calculator` class is quite useless at the moment, you should still be able to create new instances of it using the code below:

```python
my_calculator = Calculator()
```

#### 6.2.2 Keeping track of memory values
In the constructor, add a parameter (in addition to the `self` parameter) which contains the calculator's initial memory value. The constructor should store this initial memory value in a list in the `self` object.

In the class, add a method called `get_memory_value()`, which should return the calculator's current memory value (i.e. the last value in the list stored in the `self` object).

When you are done, your Calculator class should work with the following code:

```python
my_calculator = Calculator(12)
twelve = my_calculator.get_memory_value()
```

#### 6.2.3 Adding mathematical operations
In the class, add the method `add()`, which should be called with a single number as argument. When it is called, the calculator should store a new memory value which should be the sum of the previously stored memory value and the number in the parameter. You can simply store the new memory value at the end of the list in the `self` object.

Then add the methods `subtract()`, `multiply()` and `divide()`, which should work in a similar way as the `add()` method, but instead carry out subtraction, multiplication and division respectively.

When you are done, your `Calculator` class should work with the following code:

```python
my_calculator = Calculator(0) # Create a new calculator with 0 in memory.
my_calculator.add(2) # Add 2 to the calculator's memory.
my_calculator.multiply(6) # Multiply the calculator's memeory by 6.
my_calculator.subtract(2) # Subtract 2 from the calculator's memory.
my_calculator.divide(2) # Divide the calculator's memory by 2.
five = my_calculator.get_memory_value() # Give us the calculator's memmory.
```

#### 6.2.4 Adding the undo operation
In the class, add the method `undo()`, which should restore the calculator's memory value to the memory value it had before the previous `add()`, `subtract()`, `multiply()` or `divide()` operation, i.e. remove the last value from the list in the `self` object.

When you are done, your `Calculator` class should work with the following code:

```python
my_calculator = Calculator(0)
my_calculator.add(1)
my_calculator.add(2)
my_calculator.add(3)
my_calculator.undo()
my_calculator.undo()
one = my_calculator.get_memory_value()
```

#### 6.2.5 Checking if the `undo` operation can be used
In the class, add the method `can_undo()`, which should return `True` if the calculator can go back to a previous memory value, otherwise `False`, if there is nothing to undo. I.e., check whether the list in the `self` object only contains the initial memory value or not.

When you are done, the class should work with the following code.

```python
my_calculator = Calculator(1)
i_should_be_false = my_calculator.can_undo()
my_calculator.add(2)
my_calculator.multiply(3)
my_calculator.subtract(4)
while my_calculator.can_undo():
   my_calculator.undo()
one = my_calculator.get_memory_value()
```

#### 6.2.6 Using the `Calculator` class
If you have implemented your `Calculator` class correctly, it should work well with the code found in <FigureNumber /> below, which contains the main application loop for the calculator program.

<Figure caption="The main application loop for the calculator program implemented with the Calculator class.">

```python
initial_memory_value = int(input("Enter initial memory value: "))
calculator = Calculator(initial_memory_value)

operation = ""

while operation != "quit":
	
	operation = input("Enter operation (add/sub/mul/div/undo/quit): ")
	
	if operation == "undo":
		if calculator.can_undo():
			calculator.undo()
			print(str(calculator.get_memory_value())+" is stored in memory.")
		else:
			print("There is nothing to undo.")
	elif operation != "quit":
		
		operand = int(input("Enter operand: "))
		
		if operation == "add":
			calculator.add(operand)
		elif operation == "sub":
			calculator.subtract(operand)
		elif operation == "mul":
			calculator.multiply(operand)
		elif operation == "div":
			calculator.divide(operand)
		
		print(str(calculator.get_memory_value())+" is stored in memory.")

print("The program finished with "+str(calculator.get_memory_value())+" in memory.")
```
</Figure>

