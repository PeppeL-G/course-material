---
sidebar: auto
---
<SetTitle title="Introduction to Script Programming" />

# Exam 2020-12-13
Here you find sample answers and grading guidelines to the questions on the exam 2020-12-13.

::: danger Removed Question
Question 15 contained an error making it very confusing. Therefore that question has been removed from the test, which in turn changes the max score to 29 points, giving the following new thresholds for the grades:

* For grade 3, 40% of max score (11.6 points) is required.
* For grade 4, 60% of max score (17.4 points) is required.
* For grade 5, 80% of max score (23.2 points) is required.
:::

## Question 8
::: warning Question
Below is a program that should:

* Ask the user to enter a positive integer.
* Print that integer as many times as the integer (e.g. if the user enters the integer 3, 3 should be printed three times).

```python
entered_integer = input("Enter a positive integer: ")
for i in range(entered_integer):
   print(i)
```

When Bob runs the program, it does not work as intended. Explain why the program doesn't work they way it should, and suggest a solution to make it work (no need to write any Python code, describing the changes using words is enough, but be detailed).
:::

::: tip Sample Answer
There are two problems with the code:

1. `range(entered_integer)` will crash, since `entered_integer` will be a string containing the integer the user entered.
2. Inside the loop, `i` is not what should be printed, but the number the user entered.

Changes needed to be made to make the code work:

1. Change `range(entered_integer)` to `range(int(entered_integer))`.
2. Change `print(i)` to `print(entered_integers)`.
:::

::: danger Marking Guidelines
* Each problem: 0.25 points.
* Each required change: 0.25 points.
:::



## Question 10
::: warning Question
Write the following code:

```python
my_list = []
for n in [2, 5, 4, 1]:
    my_list.append(list(range(n)))
```

As a list comprehension expression instead. Your own code should have the exact same meaning as the code above.
:::

::: tip Sample Answer
```python
my_list = [list(range(n)) for n in [2, 5, 4, 1]]
```
:::

::: danger Marking Guidelines
* Correct answer: 1 point.
* Correct syntax, one wrong expression: 0.5 points.
* `my_list` not created: -0.25 points.
* `my_list` named wrong: -0.1 points.
* Small syntax error (1 character): -0.25 points.
:::

## Question 11
::: warning Question
Write the following code:

```python
list = []
for c in range(13):
    if c % 2 != 0:
        list.append(str(c)+"_"+str(c))
```

As a list comprehension expression instead. Your own code should have the exact same meaning as the code above.
:::

::: tip Sample Answer
```python
list = [str(c)+"_"+str(c) for c in range(13) if c % 2 != 0]
```
:::

::: danger Marking Guidelines
* Correct answer: 1 point.
* Correct syntax, one wrong expression: 0.5 points.
* `list` not created: -0.25 points.
* `list` named wrong: -0.1 points.
* `if` and `for` wrong order: -0.5 points.
:::

## Question 12
::: warning Question
Here is a quite complex structure with information about the population in different areas:

```python
populations = {
    "countries": [
        {"name": "Sweden", "population": 9903000},
        {"name": "Finland", "population": 5495000},
        {"name": "Norway", "population": 5233000}
    ],
    "cities": [
        {"name": "Stockholm", "population": 789024},
        {"name": "Jönköping", "population": 122952}
    ]
}
```

Given this structure, write **an expression** that evaluates to the population of the country with the name `Norway`, i.e. `5233000`.

**Note**: Do not write a statement, and simply writing `5233000` is of course not OK; the value needs to be retrieved from the structure.
:::

::: tip Sample Answer
`populations["countries"][2]["population"]`
:::

::: danger Marking Guidelines
* Correct answer: 1 point.
* Keys are not strings: 0.5 points.
* Each name variable/key spelled wrong: -0.25 points.
:::

## Question 13
::: warning Question
Suggest how the following data in Python:

```python
movie = {"title": "Catch me if you can", "rating": 4}
```

Can be written in XML code instead.
:::

::: tip Sample Answer
```xml
<movie>
    <title>Catch me if you can</title>
    <rating>4</rating>
</movie>
```
:::

::: danger Marking Guidelines
* Correct answer: 1 point.
* Each unnecessary extra element: -0.5 points.
* Each character wrong in the data: -0.1 points.
* Each syntax error: -0.5 points.
:::

## Question 14
::: warning Question
Suggest how the following data in Python:

```python
countries = [
   {"name": "Sweden", "population": 9903000},
   {"name": "Finland", "population": 5495000},
   {"name": "Norway", "population": 5233000}
]
```

Can be written in CSV format. Do not write any extra characters not needed, but use as few characters as possible.
:::

::: tip Sample Answer
```
Sweden,9903000
Finland,5495000
Norway,5233000
```
:::

::: danger Marking Guidelines
* Correct answer: 1 point.
* Uses extra characters not needed: -0.25 points.
:::

## Question 15
::: warning Question
The function login below should check if the username and password passed to it are the correct username (`Alice`) and password `abc123`. If they are, it should return `True`, otherwise it should return `False`.

```python
def check_if_username_is_wrong(username):
   if username != "Alice":
      return False

def check_if_password_is_wrong(password):
   if password != "abc123":
      return False

def login(username, password):
    check_if_username_is_wrong(username)
    check_if_password_is_wrong(password)
    return True
```

At the moment, it does not work as it should. Explain why it does not work as it should, and explain what changes that needs to be made to make it work (do not write an entirely different solution (do not delete any function, and login should make use of the two other functions (feel free to change them); just describe the changes that needs to be made, but be detailed). There's no need to write any Python code, but if you think that makes your answer more readable, feel free to do that.
:::

::: tip Sample Answer
This question is wrong, and has therefor not been marked (all students got 0 points on it).
:::

::: danger Marking Guidelines
This question is wrong, and has therefor not been marked (all students got 0 points on it).
:::

## Question 17
::: warning Question
Implement the function `letter_to_digit`, which receives a string with a letter (`"a"`, `"b"` or `"c"`, and so on, all the way up to `"f"`) and returns the position of the digit in the alphabet (i.e. `1`, `2`, `3`, and so on, all the way up to `6`). If the received string does not consists of a single letter, or if the letter is not between `"a"` and `"f"` in the alphabet, return `-1`.

Sample usage:

```
letter_to_digit("a")   →   1
letter_to_digit("e")   →   5
letter_to_digit("ab")  →  -1
letter_to_digit("r")   →  -1
```

:::

::: tip Sample Answer
```python
letter_positions = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6
}
def letter_to_digit(letter):
    if letter in letter_positions:
        return letter_positions[letter]
    else:
        return -1

```
:::

::: danger Marking Guidelines
* Correct solution: 1 point.
* Each bad parameter/variable name: -0.1 points.
* Does not handle the -1 return cases: -0.5 points.
* Use () instead of {} to read from dict: -0.25 points.
* Initiliazes dict wrong: -0.25 points.
:::

## Question 18
::: warning Question
Write a program that keeps asking the user to enter an integer until the user enters `stop`. The program should then print the sum of all integers the user has entered, as well as the average number of these integers. When running the program, it can look like this (bold text represents text entered by the user).

Enter an integer or stop: **2**\
Enter an integer or stop: **6**\
Enter an integer or stop: **4**\
Enter an integer or stop: **stop**\
The sum of all integers is 12, and the average number is 4.

**Note**: The output should look precisely as in the example above (including white-spaces, but with the exception of the boldness from the input, of course).

**Note**: You can expect the user to actually enter a number or stop (no error handling needed).
:::

::: tip Sample Answer
```python
sum = 0
count = 0
entered_text = ""

while entered_text != "stop":
    
    entered_text = input("Enter an integer or stop: ")

    if entered_text != "stop":

        sum += int(entered_text)
        count += 1

average = sum / count

print("The sum of all integers is "+str(sum)+", and the average number is "+str(average)+".")
```
:::

::: danger Marking Guidelines
* Correct solution: 2 points.
* Problem with int() input: -0.5 points.
* Each poorly named variable: -0.1 points.
* Indentation error: -0.5 points.
:::

## Question 19
::: warning Question
Implement the function `sign_of_product`, which receives a list of numbers (containing at least one number), and returns:

* `-1` if the product of all the numbers is negative.
* `0` if the product of all the numbers is 0.
* `1` if the product of all the numbers is positive.

Write two different implementations of the function: one using (at least) one while loop, and another one using (at least) one for loop.

Sample usage:

```
sign_of_product([4, -7, -3])        →    1
sign_of_product([4, -7, 3, 5, 2])   →   -1
sign_of_product([5, 0, 5])          →    0
```
:::

::: tip Sample Answer
```python
def sign_of_product(numbers):
    
    product = 1
    
    for number in numbers:
        product *= number
    
    if product == 0:
        return 0
    elif product < 0:
        return -1
    else:
        return 1

```
```python
def sign_of_product(numbers):
    
    product = 1
    i = 0

    while i < len(numbers):
        product *= numbers[i]
        i += 1
    
    if product == 0:
        return 0
    elif product < 0:
        return -1
    else:
        return 1

```
:::

::: danger Marking Guidelines
* Correct solution with for loop: 1 point.
* Correct solution with while loop: 1 point.
* Each function computing sum instead of product: -0.5 points.
* In for loop, iterate over indexes instead of numbers: -0.25 points.
:::

## Question 20
::: warning Question
Implement the function `string_to_characters`, which receives a string, and returns a new list containing the characters of the received string.

Sample usage:

```
string_to_characters("Abba")    →  ["A", "b", "b", "a"]
string_to_characters("Python")  →  ["P", "y", "t", "h", "o", "n"]
```
:::

::: tip Sample Answer
```python
def string_to_characters(string):
    
    characters = []
    
    for c in string:
        characters.append(c)
    
    return characters

```
:::

::: danger Marking Guidelines
* Correct solution: 2 points.
* Each bad variable name: -0.1 points.
* Use [] instead of (): -0.5 points.
* List to send back initialized wrong: -0.25 points.
:::

## Question 21
::: warning Question
Given the following data about some movies:

```python
movies = [
    {"title": "GoldenEye",  "year": 1995, "length_in_minutes": 130},
    {"title": "Titanic",    "year": 1997, "length_in_minutes": 195},
    {"title": "Braveheart", "year": 1995, "length_in_minutes": 178},
    {"title": "I Robot",    "year": 2004, "length_in_minutes": 115},
    {"title": "Shrek",      "year": 2001, "length_in_minutes":  90}
]
```

Write code that computes and print the title of the longest and shortest movie between the years 1993 (inclusive) and 2001 (exclusive) in minutes.

**Note**: Your code should still work as expected if one adds a movie to or remove a movie from the list.
:::

::: tip Sample Answer
```python

shortest_movie = -1 # -1 means we haven't found a candidate movie yet.
longest_movie = -1

for movie in movies:

    if 1993 <= movie["year"] and movie["year"] < 2001:

        if shortest_movie == -1 or movie["length_in_minutes"] < shortest_movie["length_in_minutes"]:
            shortest_movie = movie
        
        if longest_movie == -1 or movie["length_in_minutes"] > longest_movie["length_in_minutes"]:
            longest_movie = movie

print("The shortest movie is "+shortest_movie["title"]+".")
print("The longest movie is "+longest_movie["title"]+".")
        

```
:::

::: danger Marking Guidelines
Correct solution: 2 points.
Does not handle the case where it's only one movie between the years: -0.25 points.
Uses () instead of []: -0.5 points.
Year conditions is wrong: -0.25 points.
length_in_minutes condition wrong: -0.25 points
Each unecesary variable: -0.25 points.
Indentation wrong: -0.25 points.
Poorly named variable: -0.1 points.
Each shortest/longest variable not initilzed properly: -0.25 points.
Uses the wrong keys: -0.25 points.
:::

## Question 22
::: warning Question
The class `Program` represents a collection of students in a study program. It has the following constructor/methods:

| Constructor/Method          | Description |
|-----------------------------|-------------|
| `Program()`                 | Creates a new `Program` with 0 students. |
| `add_student(student_name)` | Adds the student with the name `student_name` to the program.  |
| `get_number_of_students()`  | Returns the number of students that has been added to the program. |
| `get_student_name(index)`   | Returns the student in the program that was added at index `index` (the first student added to the program gets index 0, the second one index 1, and so one). |

Write a program making use of the class. In the program, you should continue to ask the user to enter the name of a student to be added to the `Program`, until the user enters `stop` as the name. Then you should write the name of all students that has been added to the `Program`, as well as how many students that is.

Sample usage:

<div style="font-family: monospace;">

Enter student name or stop: **Alice**\
Enter student name or stop: **Bob**\
Enter student name or stop: **Claire**\
Enter student name or stop: **stop**\
These 3 students are in the program:\
 \- Alice\
 \- Bob\
 \- Claire

</div>
:::

::: tip Sample Answer
```python
program = Program()
entered_text = ""

while entered_text != "stop":
    
    entered_text = input("Enter student name or stop: ")

    if entered_text != "stop":
        program.add_student(entered_text)

print("These "+str(program.get_number_of_students())+" students are in the program:")
for i in range(program.get_number_of_students):
    print(" - "+program.get_student_name(i))
```
:::

::: danger Marking Guidelines
* Correct solution: 2 points.
* Poorly named variable: -0.1 points.
* Missing the if statement: -0.5 points.
* Do not print the name of students: -0.75 points.
:::

## Question 23
::: warning Question
The class `Program` represents a collection of students in a study program. It has the following constructor/methods:

| Constructor/Method          | Description |
|-----------------------------|-------------|
| `Program()`                 | Creates a new `Program` with 0 students. |
| `add_student(student_name)` | Adds the student with the name `student_name` to the program.  |
| `get_number_of_students()`  | Returns the number of students that has been added to the program. |
| `get_student_name(index)`   | Returns the student in the program that was added at index `index` (the first student added to the program gets index 0, the second one index 1, and so one). |

Implement the `Program` class per the description above.
:::

::: tip Sample Answer
```python
class Program:

    def __init__(self):
        self.student_names = []
    
    def add_student(self, student_name):
        self.student_names.append(student_name)
    
    def get_number_of_students(self):
        return len(self.student_names)
    
    def get_student_name(self, index):
        return self.student_names[index]
```
:::

::: danger Marking Guidelines
* 0.5 points for each correct implemented constructor/method.
* Poorly named instance variable: -0.1 points.
* Misspelled constructor/method name: -0.1 points.
* Mispelled instance variable name: -0.1 ponts.
:::