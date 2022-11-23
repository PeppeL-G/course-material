# Repetition Exercises
On this page you find the repetition exercises Eveline has in the course.

## 2022-11-01
```python
### PRINT PERSONAL INFORMATION ###

print("This program prints your name, age and email.\n")

name = input("Enter your name: ")
age = input("Enter you age: ")
email = input("Enter your email: ")

print("Your name is " + name)
print("Your age is " + age)
print("Your email is " + email)
```

```python
### AREA OF A RECTANGLE ###

print("This program computes the area of a rectangle.")

length = int(input("Enter the length: "))
width = int(input("Enter the width: "))

area = length * width

print("The area is " + str(area) + " cm squared.")
```

```python
### USD TO SEK ###

print("This program converts USD to SEK.\n")

usd_to_convert = int(input("Enter the number of USD that you want to convert to SEK: "))
exchange_rate = 10

amount_of_sek = usd_to_convert * exchange_rate

print(str(usd_to_convert) + " USD is " + str(amount_of_sek) + " SEK.")
```

```python
### PRINT NUMBERS FROM 0 TO 5 ###

print("This program prints the numbers from 0 to 5.\n")

for number in range(3, 9):
    print(number)
```

```python
### CALCULATE 1, 2, 3, 4, 5 SQUARED ###

print("This program calculates 1, 2, 3, 4, 5 squared.\n")

for i in range(1, 6):
    result = i*i
    print(str(i) + " squared is equal to " + str(result))
```

```python
### AREA OF MANY RECTANGLES ###

print("This program calculates the area of many rectangles.\n")

number_of_areas = int(input("Enter the number of areas that you want to compute: "))

for i in range(number_of_areas):
    length = float(input("Enter the length of a rectangle: "))
    width = float(input("Enter the width of the rectangle: "))
    area = length * width

    print("The area of the rectangle is " + str(area) + " cm squared.")
```





## 2022-11-08
```python
### CALCULATE AVERAGE OF TWO RANDOM NUMBERS ###

import random

print("This program calculates the average of two random numbers.\n")

number_1 = random.randint(0, 100)
number_2 = random.randint(0, 100)

average = (number_1 + number_2) / 2

print("The average of " + str(number_1) + " and " + str(number_2) + " is " + str(average))
```

```python
### CALCULATE THE AVERAGE OF THE NUMBERS IN A LIST ###

print("This program calculates the average of the numbers in a list.\n")

list = [2, 5, 7, 8]
sum = 0

for number in list:
    sum += number

average = sum / len(list)

print("The average of " + str(list) + " is " + str(average))
```

```python
### CALCULATE THE PRODUCT OF NUMBERS IN A LIST USING A FUNCTION ###

print("This program calculates the product \nof numbers using a function.\n")

def product_of_numbers(numbers):
    product = 1
    for number in numbers:
        product *= number
    return product

result = product_of_numbers(range(1, 4))
print(result)
```

```python
### CALCULATE THE AREA OF A RECTANGLE USING A FUNCTION ###

print("This program calculates the area \nof a rectangle using a function.\n")

def area_of_rectangle(width, length):
    area = width * length
    return area

print(area_of_rectangle(10, 5))
```







## 2022-11-15
```python
### CHECKING IF TWO NUMBERS ARE THE SAME ###

print("This program checks if two numbers are \nthe same and returns true or false.\n")

def same_numbers(num1, num2):
  if num1 == num2:
    return True
  else:
    return False

print(same_numbers(4, 4))
```

```python
### CHECKING IF A NUMBER IS NEGATIVE ###

print("This program checks if a number is\nnegative and prints true or false.\n")

def is_negative(number):
  if number < 0:
    return True
  return False

print(is_negative(-8))
```

```python
### COUNTING EVEN NUMBERS ###

print("This program counts even numbers in a list.\n")

def even_numbers(numbers):
  result = 0
  for number in numbers:
    if number % 2 == 0:
      result += 1
  return result

print(even_numbers([1, 2, 3, 4, 5]))
```

```python
### RETURNING THE SMALLEST NUMBER IN A LIST ###

print("This program returns the \nsmallest number in a list.\n")

def smallest_number(numbers):
  smallest_number = numbers[0]
  for number in numbers:
    if number < smallest_number:
      smallest_number = number
  return smallest_number

print(smallest_number([3, 1, -4, 5, 10]))
```

```python
### WHILE LOOP WITH RANDOM NUMBERS ###

import random

print("This program prints random \nnumbers until the user enters stop.\n")

entered_text = ""

while entered_text != "stop":
  entered_text = input("Type continue or stop to exit the program: ")
  if entered_text == "stop":
    break # Takes us out of the loop
  elif entered_text == "continue":
    print(random.randint(1, 100))
  else:
    continue # Takes us back to the beginning of the loop

print("The program has ended.")



### Alternative solution ###

import random

print("This program prints random \nnumbers until the user enters stop.\n")

entered_text = ""

while entered_text != "stop":
  entered_text = input("Type continue or stop to exit the program: ")
  if entered_text != "stop":
    print(random.randint(1, 100))

print("The program has ended.")
```






## 2022-11-23
```python
### ADDING THE NUMBERS 1-5 TO A LIST ###

print("This program adds the numbers \n1, 2, 3, 4, 5 to a list.\n")

list = []

for i in range(1, 6):
  list.append(i)

print(list)
```

```python
### REMOVING ALL STRINGS IN A LIST ###

print("This program removes all strings consisting of letters in a list.\n")

list = [1, "two", 4, "five", 6, 7, "eight"]

for value in list:
  if not str(value).isdigit():
    list.remove(value)

print(list)
```

```python
### CREATING A LIST WITH REVERSED ORDER OF VALUES ###

print("This program creates a list with \nthe reversed values of another list.\n")

list = [1, 2, 3, 4, 5]
reversed_list = [] # 5, 4, 3, 2, 1

for i in range(len(list)):
  last_value = list.pop(-1)
  reversed_list.append(last_value)

print(reversed_list)
```

```python
### ADDING VALUES FROM A DICT TO A LIST ###

print("This program adds values from a dict to a list.\n")

dict = {"one": 1, "two": 2, "three": 3, "four": 4}
list = []

for key in dict:
  list.append(dict[key])

print(list)
```