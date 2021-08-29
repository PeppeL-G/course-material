---
sidebar: auto
---
<SetTitle title="Introduction to Script Programming" />

# Exam 2021-08-17
Here you find sample answers and grading guidelines to the questions on the exam 2021-08-17.

## Question 1 (1p)
<ExamQuestion>
<template v-slot:question>

Place the following lines of code in such order they can be executed (read underscores as white-spaces/indentation (Inspera doesn't allow text to begin with white-spaces)).

* `___return number_1`
* `______return number_2`
* `___if number_1 < number_2:`
* `def get_big(number_1):`
* `big = get_big(5)`
* `___number_2 = int(input("Enter number: "))`

**Note**: All code lines must be in correct order to get any points.

</template>
<template v-slot:sample-answer>

```python
def get_big(number_1):
	number_2 = int(input("Enter number: "))
	if number_1 < number_2:
		return number_2
	return number_1
big = get_big(5)
```

</template>
<template v-slot:marking-guidelines>

* 1 point for all in correct order.

</template>
</ExamQuestion>




## Question 2 (2p)
<ExamQuestion>
<template v-slot:question>

How many statements and expressions does the following code contain?

```python
x = 4
y = 12
if x < y:
    difference = y - x
else:
    difference = x - y
```

**Note**: You'll get 1 point for each correct answer.

</template>
<template v-slot:sample-answer>

Number of statements: `6` \
Number of expressions: `11`

</template>
<template v-slot:marking-guidelines>

* 1 point for correct number of statements.
* 1 point for correct number of expressions.

</template>
</ExamQuestion>




## Question 3 (1p)
<ExamQuestion>
<template v-slot:question>

What type of error does the code below contain? The purpose of the function is to compute the average value of the two numbers it receives (e.g. `average(4, 6)` → `5`).

```python
def average(number1, number2):
    return (number1 + numberb) / 2
```

Alternatives:

* Logical error
* Runtime error
* No error at all
* Syntax error

</template>
<template v-slot:sample-answer>

Runtime error

</template>
<template v-slot:marking-guidelines>

* 1 point for correct alternative.

</template>
</ExamQuestion>




## Question 4 (1p)
<ExamQuestion>
<template v-slot:question>

What values are stored in the variables after the following code has been executed?

```python
i = 1
x = 1
for number in [2, 3, 1]:
    print(str(i)+": "+str(number))
    i = i + 1
    x = x * number
```

**Note**: Both answers must be correct to get any points.

</template>
<template v-slot:sample-answer>

The variable `i` will store the number `4`.

The variable `x` will store the number `6`.

</template>
<template v-slot:marking-guidelines>

* 1 point for both correct.

</template>
</ExamQuestion>




## Question 5 (1p)
<ExamQuestion>
<template v-slot:question>

What is what in the code below?

```python
def add(x, y):
    return x + y
sum = add(6, 2)
```

Pair each code piece with its corresponding name.

Code pieces:

* `2`
* `x`
* `sum`
* `x + y`

Names:

* Expression
* Variable
* Argument
* Parameter

**Note**: Some code pieces may match multiple names, but there is only one way to get all 4 pairs right.

**Note**: All pairs must be correct to get any points.

</template>
<template v-slot:sample-answer>

* Expression - `x + y`
* Variable - `sum`
* Argument - `2`
* Parameter - `x`

</template>
<template v-slot:marking-guidelines>

* 1 point for all pairs correct.

</template>
</ExamQuestion>




## Question 6 (1p)
<ExamQuestion>
<template v-slot:question>

Which one of the following statements is a bad suggestion on how to represent data?

* To represent the countries in Europe, one can use a list containing dictionaries, e.g.:
    ```python
    countries = [
        {"name": "Sweden"},
        {"name": "Norway"},
        # ...
    ]
    ```
* To represent the name of a country, one can use a string, e.g. `country_name = "Finland"`.
* To represent the population of a country, one can use a string, e.g. `country_population = "10 500 238"`.
* To represent the name of the colors a country's flag contains, one can use a list of strings, e.g. `flag_colors = ["blue", "yellow"]`.
* To represent the number of books in a library, one can use an integer, e.g. `number_of_books = 120000`.

</template>
<template v-slot:sample-answer>

To represent the population of a country, one can use a string, e.g. `country_population = "10 500 238"`.

</template>
<template v-slot:marking-guidelines>

* 1 point for correct statement.

</template>
</ExamQuestion>




## Question 7 (1p)
<ExamQuestion>
<template v-slot:question>

The following expression:

```python
range(2, 5, 2)
```

Creates a range containing some integers. What is the sum of the integers in that range?

</template>
<template v-slot:sample-answer>

The sum of the integers the range contains is `6`.

</template>
<template v-slot:marking-guidelines>

* 1 points for correct answer.

</template>
</ExamQuestion>




## Question 8 (1p)
<ExamQuestion>
<template v-slot:question>

Below is a program that should:

1. Ask the user to enter her current age (in years).
2. Ask the user to enter at which age (in years) she plans to retire.
3. Print the number of years left until she wants to retire.

```python
current_age = input("Enter your current age: ")
retirement_age = input("Enter your desired retirement age: ")

years_remaining = retirement_age - current_age

print("You want to retire in "+years_remaining+" years from now.")
```

When Carl runs the program, it does not work as intended. Explain why the program doesn't work they way it should, and suggest a solution to make it work (no need to write any Python code, describing the changes to make it work using words is enough, but be detailed).

</template>
<template v-slot:sample-answer>

**First problem**\
Even if the user enters numbers, `retirement_age` and `current_age` will contain the numbers as strings, so `retirement_age - current_age` won't work as desired. These two strings needs to be converted to numbers before the subtraction takes place, for example by using the `int()` function: `int(retirement_age) - int(current_age)`.

**Second problem**\
Since `years_remaining` will be an integer, you can't directly concatenate it with strings. First it needs to be converted to a string, for example by using the `str()` function: `"..."+str(years_remaining)+"..."`.

</template>
<template v-slot:marking-guidelines>

* 0.25 points for first problem explanation.
* 0.25 points for correct solution to first problem.
* 0.25 points for second problem explanation.
* 0.25 points for correct solution to second problem.

</template>
</ExamQuestion>




## Question 9 (1p)
<ExamQuestion>
<template v-slot:question>

What integers should be assigned to the variables `a` and `b` to slice out the values `"q"` and `"r"` in the code below?

```python
my_list = ["p", "q", "r", "s", "t", "u", "v"]
a = ?
b = ?
my_new_list = my_list[a:b]
# my_new_list should now be ["q", "r"]
```

**Note**: Both integers needs to be correct to get any points.

</template>
<template v-slot:sample-answer>


The variable `a` should be assigned the integer `1`.

The variable `b` should be assigned the integer `3`.

</template>
<template v-slot:marking-guidelines>

* 1 point for both correct.

</template>
</ExamQuestion>




## Question 10 (1p)
<ExamQuestion>
<template v-slot:question>

Write the following code:

```python
my_list = []
for n in [4, 5, 2, 1]:
    my_list.append(n*n)
```

As a list comprehension expression. Your own code should have the exact same meaning as the code above.

</template>
<template v-slot:sample-answer>

```python
my_list = [n*n for n in [4, 5, 2, 1]]
```

</template>
<template v-slot:marking-guidelines>

* 1 point for correct answer.

</template>
</ExamQuestion>




## Question 11 (1p)
<ExamQuestion>
<template v-slot:question>

Write the following code:

```python
my_list = []
for x in "12345":
    if is_big(int(x)):
        my_list.append(int(x))
```

As a list comprehension expression. Your own code should have the exact same meaning as the code above.

</template>
<template v-slot:sample-answer>

```python
my_list = [int(x) for x in "12345" if is_big(int(x))]
```

</template>
<template v-slot:marking-guidelines>

* 1 point for correct answer.

</template>
</ExamQuestion>




## Question 12 (1p)
<ExamQuestion>
<template v-slot:question>

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

Given this structure, write an expression that evaluates to the name of the country with the population  `5233000`, i.e. `Norway`.

**Note**: Do not write a statement, and simply writing `"Norway"` is of course not OK; the value needs to be retrieved from the structure.

</template>
<template v-slot:sample-answer>

```python
populations["countries"][2]["name"]
```

</template>
<template v-slot:marking-guidelines>

* 1 point for correct answer.

</template>
</ExamQuestion>




## Question 13 (1p)
<ExamQuestion>
<template v-slot:question>

Suggest how the following data in Python:

```python
school = {"name": "JTH", "city": "Jönköping"}
```

Can be written in XML code instead.

</template>
<template v-slot:sample-answer>

```xml
<school>
    <name>JTH</name>
    <city>Jönköping</city>
</school>
```

</template>
<template v-slot:marking-guidelines>

* 1 point for correct answer.

</template>
</ExamQuestion>




## Question 14 (1p)
<ExamQuestion>
<template v-slot:question>

Suggest how the following data in Python:

```python
schools = [
   {"name": "JTH", "city": "Jönköping"},
   {"name": "JIBS", "city": "Jönköping"}
]
```

Can be written in CSV format. Do not write any extra characters not needed, but use as few characters as possible.

</template>
<template v-slot:sample-answer>

```
JTH,Jönköping
JIBS,Jönköping
```

</template>
<template v-slot:marking-guidelines>

* 1 point for correct answer.

</template>
</ExamQuestion>




## Question 15 (1p)
<ExamQuestion>
<template v-slot:question>

Explain the difference between a function printing a value, and a function returning a value. When you implement your own functions, is it better if they print the value they compute, or if they return the value they compute? Justify your answer.

</template>
<template v-slot:sample-answer>

When a function prints a value, the value is shown on the screen for the user. When a function returns a value, it is sent back to the one calling the function, and can be further processed there.

When implementing your own function that computes a value it is better if the function returns the value instead of printing it. If the function prints the value, then the function can only be used to compute the value and printing it. If the function instead computes and returns the value, then the value can be further processed by the caller, and the function can be used in other cases than just computing and printing it (for example saved in a file).

</template>
<template v-slot:marking-guidelines>

* 0.25 points for explaining the difference.
* 0.75 points for justifying which often is better to use.

</template>
</ExamQuestion>




## Question 16 (1p)
<ExamQuestion>
<template v-slot:question>

What will be stored in the variable `sum` after the following code has been executed?

```python
def a(number):
    number = number + 2
def b(list):
    for number in list:
        number = number + 1
def c(list):
    for i in range(len(list)):
        list[i] = list[i] + 3
my_list = [1, 1]
a(my_list[0])
b(my_list)
c(my_list)
sum = my_list[0] + my_list[1]
```

</template>
<template v-slot:sample-answer>

The variable `sum` will store the integer `8`.

</template>
<template v-slot:marking-guidelines>

* 1 point for correct answer.

</template>
</ExamQuestion>




## Question 17 (1p)
<ExamQuestion>
<template v-slot:question>

Implement the function `get_human_type(age)`, which receives a number representing a human's age in years, and should return a string with the word:

* `child`, if the age is less than `13`.
* `teenager`, if the age is `13` or higher and less than `20`.
* `adult` otherwise.

Sample usage:

```
get_human_type(5)   →   "child"
get_human_type(13)   →   "teenager"
get_human_type(20.5)   →   "adult"
```

</template>
<template v-slot:sample-answer>

```python
def get_human_type(age):
    if age < 13:
        return "kid"
    elif age < 20:
        return "teenager"
    else:
        return "adult"
```

</template>
<template v-slot:marking-guidelines>

* 1 points for almost correct solution.
* -0.25 points for using `str("kid")`, and similar.
* -0.1 points for each unnecessary complicated conditions in if/elif.
* -0.25 points for having unnecessary code outside the function.
* -0.25 points complicating things with list.

</template>
</ExamQuestion>




## Question 18 (2p)
<ExamQuestion>
<template v-slot:question>

Write a program that keeps asking the user to enter an integer until she enters `stop`. The program should then print how many percentages of the entered numbers that were higher than 10, and how many percentages of the numbers that were even. To check if `a_number` is even, one can use the expression `a_number % 2 == 0`. When running the program, it can look like this (bold text represents text entered by the user).

<pre><code>Enter an integer or stop: <b>13</b>
Enter an integer or stop: <b>5</b>
Enter an integer or stop: <b>12</b>
Enter an integer or stop: <b>stop</b>
66.66 percentages of the entered integers are higher than 10.
33.33 percentages of the entered integers are even.</code></pre>

**Note**: The output should look precisely as in the example above (including white-spaces, but with the exception of the boldness from the input, and the variation in the output, of course). It is OK to display computed numbers as `33` or `33.33333333...` instead of `33.33`, and similar.

**Note**: You can expect the user to actually enter a number or `stop` (no error handling needed).

**Note**: You can expect the user to enter at least one number.

</template>
<template v-slot:sample-answer>

```python
# Read all the numbers
entered_text = ""
number_of_numbers = 0
number_of_even_numbers = 0
number_of_big_numbers = 0
while entered_text != "stop":
    entered_text = input("Enter an integer or stop: ")
    if entered_text != "stop":
        number = int(entered_text)
        number_of_numbers += 1
        if number % 2 == 0:
            number_of_even_number += 1
        if 10 < number:
            number_of_big_numbers += 1

big_percentages = number_of_big_numbers / number_of_numbers * 100
even_percentages = number_of_even_numbers / number_of_numbers * 100

print(str(big_percentages)+" percentages of the entered integers are higher than 10.")
print(str(even_percentages)+" percentages of the entered integers are even.")
```

</template>
<template v-slot:marking-guidelines>

* 2 points for almost correct implementation.
* -0.5 points for code crashing when `stop` is entered.
* -0.25 points for not taking into account that the entered numbered can be both even and bigger than 10.
* -0.25 points for computing fraction/ratio instead of percentage (i.e. missing multiplication by 100).

OR

* 0.25 points for only correctly reading numbers into list.

</template>
</ExamQuestion>




## Question 19 (2p)
<ExamQuestion>
<template v-slot:question>

Implement the function `contains_name`, which receives a list of names and a specific name as arguments, and returns:

* `True` if the specific name is in the list.
* `False` otherwise.

Write two different implementations of the function: one using (at least) one while loop, and another one using (at least) one for loop.

Sample usage:

```
contains_name(["alice", "bob", "claire"], "peter")   →  False
contains_name(["alice", "bob", "claire"], "alice")   →  True
```

</template>
<template v-slot:sample-answer>

```python
def contains_name(names, name_looking_for):
    for name in names:
        if name == name_looking_for:
            return True
    return False
```

```python
def contains_name(names, name_looking_for):
    i = 0
    while i < len(names):
        if names[i] == name_looking_for:
            return True
        i += 1
    return False
```

</template>
<template v-slot:marking-guidelines>

* 1 point for each correct implementation.
* -0.1 points for each poorly named variable.

OR

* 0 points for implementing wrong function (e.g. missing a parameter).

</template>
</ExamQuestion>




## Question 20 (2p)
<ExamQuestion>
<template v-slot:question>

Implement the function `map_strings_to_dicts`, which receives a list of strings as argument, and should return a list with dicts with information about each string according to the sample usage below.

Sample usage:

```python
map_strings_to_dicts(["alice", "bob", "carl"])   →  [
    {"firstLetter": "a", "length": 5},
    {"firstLetter": "b", "length": 3},
    {"firstLetter": "c", "length": 4}
]
map_strings_to_dicts(["link", "zelda"])   →  [
    {"firstLetter": "l", "length": 4},
    {"firstLetter": "z", "length": 5}
]
```

</template>
<template v-slot:sample-answer>

```python
def map_strings_to_dicts(strings):
    dicts = []
    for string in strings:
        dicts.append({
            "firstLetter": string[0],
            "length": len(string)
        })
    return dicts
```

</template>
<template v-slot:marking-guidelines>

* 2 points for correct solution.

</template>
</ExamQuestion>




## Question 21 (2p)
<ExamQuestion>
<template v-slot:question>

Given the following data about some houses:

```python
houses = [
   {"owner": "Alice", "name": "Alice's Palace", "size": 320, "number_of_rooms": 9},
   {"owner": "Alice", "name": "Alice's Home",   "size": 84,  "number_of_rooms": 3},
   {"owner": "Alice", "name": "Alice's Cabin",  "size": 30,  "number_of_rooms": 1},
   {"owner": "Bob",   "name": "Bob's Home",     "size": 94,  "number_of_rooms": 4},
   {"owner": "Bob",   "name": "Bob's Cabin",    "size": 30,  "number_of_rooms": 1}
]
```

Write code that computes and prints the name of the human that owns the most number of rooms in total.

**Note**: Your code should still work as expected if one adds/removes houses to/from the list. Alice and Bob are not the only ones who can own a house.

</template>
<template v-slot:sample-answer>

```python
# Compute how many rooms each owner has.
sum_of_rooms = {} # Key is name of owner, value is sum of rooms, e.g. sum_of_rooms["Alice"] = 13, etc.

for house in houses:
    
    # Check if we haven't seen this owner before.
    if house["owner"] not in sum_of_rooms:
        sum_of_rooms[house["owner"]] = 0
    
    sum_of_rooms[house["owner"]] += house["number_of_rooms"]

# Find the owner with most rooms.
most_rooms_name = ""
most_rooms_count = -1
for owner in sum_of_rooms:
    if most_rooms_count < sum_of_rooms[owner]:
        most_rooms_name = owner
        most_rooms_count = sum_of_rooms[owner]

print(most_rooms_name+" has most rooms.")
```

</template>
<template v-slot:marking-guidelines>

* 2 points for correct solution.

</template>
</ExamQuestion>




## Question 22 (2p)
<ExamQuestion>
<template v-slot:question>

The class `BookCollection` represents a collection of books. It has the following constructor/methods:

| Constructor/Method | Description |
|---|---|
| `BookCollection()` | Creates a new empty `BookCollection`. |
| `add(title, number_of_pages, minutes_to_read_one_page)` | Adds the book with the given `title` and `number_of_pages` to the collection. `minutes_to_read_one_page` is the number of minutes it takes to read one page in the book. |
| `get_minutes_to_read_all()` | Returns the number of minutes it takes to read all the books in the collection. |

Write a program making use of the class. In the program, you should continue to ask the user to enter the title, number of pages and how many minutes it takes to read a page in a book to be added to the `BookCollection` until the user doesn't want to add any more. Then you should display the time it takes to read all the books in the collection on the screen.

Sample usage:

<pre><code>Enter one more book? <b>Yes</b>
Enter title: <b>Once upon a time</b>
Enter number of pages: <b>10</b>
Enter minutes to read one page: <b>2</b>
Enter one more book? <b>Yes</b>
Enter title: <b>It's complicated...</b>
Enter number of pages: <b>13</b>
Enter minutes to read one page: <b>3</b>
Enter one more book? <b>No</b>
It takes 59 minutes to read all the books in the collection.</code></pre>

</template>
<template v-slot:sample-answer>

```python
book_collection = BookCollection()
one_more_answer = "yes"

while one_more_answer == "yes":
    
    one_more_answer = input("Enter one more book? ")
    
    if one_more_answer == "yes":
        title = input("Enter title: ")
        number_of_pages = int(input("Enter number of pages: "))
        minutes_to_read_one_page = int(input("Enter minutes to read one page: "))
        book_collection.add(title, number_of_pages, minutes_to_read_one_page)

print("It takes "+str(book_collection.get_minutes_to_read_all())+" minutes to read all the books in the collection.")
```

</template>
<template v-slot:marking-guidelines>

* 2 points for correct solution.

</template>
</ExamQuestion>




## Question 23 (2p)
<ExamQuestion>
<template v-slot:question>

The class `BookCollection` represents a collection of books. It has the following constructor/methods:

| Constructor/Method | Description |
|---|---|
| `BookCollection()` | Creates a new empty `BookCollection`. |
| `add(title, number_of_pages, minutes_to_read_one_page)` | Adds the book with the given `title` and `number_of_pages` to the collection. `minutes_to_read_one_page` is the number of minutes it takes to read one page in the book. |
| `get_minutes_to_read_all()` | Returns the number of minutes it takes to read all the books in the collection. |

Implement the `BookCollection` class per the description above.

</template>
<template v-slot:sample-answer>

```python
class BookCollection:

    def __init__(self):
        self.books = []
    
    def add(self, title, number_of_pages, minutes_to_read_one_page):
        self.movies.append({
            "title": title,
            "number_of_pages": number_of_pages,
            "minutes_to_read_one_page": minutes_to_read_one_page
        })
    
    def get_minutes_to_read_all(self):
        minutes = 0
        for book in self.books:
            minutes += book['number_of_pages'] * book['minutes_to_read_one_page']
        return minutes
```

</template>
<template v-slot:marking-guidelines>

* 2 points for correct solution.

</template>
</ExamQuestion>