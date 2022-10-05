# Project Grading Guidelines
This page contains guidelines for how your work will be graded. For the guidelines where it make sense, a higher grade includes the guidelines for the lower grades (for example, to be able to get `Grade 5`, you also need to follow the guidelines for `Grade 3` and `Grade 4`).

::: warning Guidelines only
This page does only contain *guidelines* for how your work will be graded. When we grade your work we'll make an assessment of your entire work, which is not limited to these guidelines, so **do not use these guidelines as a checklist for a certain grade**. Instead, rather see them as **minimum requirements** to be able to get a certain grade.
:::

::: danger Not average
To get grade `X`, the student is expected to obtain at least grade `X` on all guidelines. Small exceptions to this might be made, but that is nothing the students should count on.
:::

## Indentation Convention
The convention used for indenting code (such as 2 spaces, 4 spaces, a tab, etc.). For more information, see [Wikipedia's article on indentation style](https://en.wikipedia.org/wiki/Indentation_style)

<GradingGuideline
	gradeU="No indentation convention has been used."
	grade3="Each file use an indentation convention, but it hasn't been used correctly at at most 3 places (in total)."
	grade4="Each file correctly use an indentation convention."
	grade5="All files of the same type use the same indentation convention."
/>

## Coding Style
The conventions used for writing comments, (not) using optional curly brackets, maximum line lengths, white-spaces in the statements, etc. For more information, see [Wikipedia's article on coding style](https://en.wikibooks.org/wiki/Computer_Programming/Coding_Style). [xkcd has a web comic about it.](https://xkcd.com/1513/)

<GradingGuideline
	gradeU="No coding style has been used."
	grade3="Each file use a coding style, but it hasn't been used correctly at at most 3 places (in total)."
	grade4="Each file correctly use a coding style."
	grade5="All files of the same type use the same coding style."
/>

## Naming Convention
The convention used when naming variables, constants, functions, classes, methods, functions, files, packages, etc. For more information, see [Wikipedia's article on naming convention](https://en.wikipedia.org/wiki/Naming_convention_(programming)).

<GradingGuideline
	gradeU="No naming convention has been used."
	grade3="Each file use a naming convention, but it hasn't been used correctly at at most 3 places (in total)."
	grade4="Each file correctly use a naming convention."
	grade5="All files of the same type use the same naming convention."
/>

## Mnemonic names
The names used (on variables, functions, classes, files, tables in the database, etc.) reflect what they represent. Optimal names are short and very descriptive. For more information, see [Chapter 2.12 in Python for Everybody (Severance)](https://eng.libretexts.org/Bookshelves/Computer_Science/Book%3A_Python_for_Everybody_(Severance)/2%3A_Variables%2C_Expressions%2C_and_Statements/2.12%3A_Choosing_Mnemonic_Variable_Names).

<GradingGuideline
	gradeU="6 or more names are not mnemonic."
	grade3="At most 5 names are not mnemonic."
	grade4="At most 3 names are not mnemonic."
	grade5="At most 1 name is not mnemonic."
/>

## Magic Numbers
Avoid using [magic numbers](https://en.wikipedia.org/wiki/Magic_number_%28programming%29#Unnamed_numerical_constants) in the code. Does not only apply to numbers, but all values that are better put in descriptive constants.

<GradingGuideline
	gradeU="3 or more magic numbers exist."
	grade3="At most 2 magic numbers exist."
	grade4="At most 1 magic number exists."
	grade5="No magic numbers exist."
/>

## Implementation
When a solution can be implemented in different ways, the most preferred implementation is used. If statements VS switches, arrays VS switches, for loops VS while loops VS do-while loops, iteration over indexes VS iteration over values, etc. Use functions instead of code duplication. Eliminate unnecessary if statements. Solutions aren't overcomplicated.

<GradingGuideline
	gradeU="Solutions have not been implemented at all."
	grade3="The solutions are often not implemented the preferred way."
	grade4="The solutions are often implemented the preferred way."
	grade5="The solutions are always implemented the preferred way."
/>

## Resources
The quality of the resources on the website.

<GradingGuideline
	gradeU="It is not possible to apply CRUD operations on at least 3 different type of resources stored in a relational database."
	grade3="The resources are validated so the database does not contain resources in bad state (such as a guestbook post with an empty message)."
	grade4="The resources are not 'minimal', but 'rich'. If a resource represents a guestbook post, it does not only consist of the message the user entered, but also other fields (which could be optional for the user to enter), such as the user's signature, the user's email, the time it was created, etc."
	grade5="Not applicable."
/>


## Database Design
The quality of the design of the database. [xkcd has a web comic about storing dates.](https://xkcd.com/1883/)

<GradingGuideline
	gradeU="The design is inappropriate, for example storing all resources in the same table."
	grade3="Primary keys are properly used."
	grade4="Constraints (such as unique constraints and foreign key constraints) are used correctly where suitable."
	grade5="Data is stored using appropriate data types (especially important for booleans and dates/unix timestamps)."
/>

## Validation
Validation of resources on the website entered by a user.

<GradingGuideline
	gradeU="No validation is carried out."
	grade3="All fields on all resources are validated (at least checking that the expected fields exists on the resource), and the user is notified that something is wrong, and what the user had written in the form before is still there."
	grade4="All fields are properly validated, e.g. checking lower and upper bounds for a number, the length of strings, etc., and all validation errors are displayed to the user."
	grade5="Not applicable."
/>

## Error Handling
Handling of various errors that can occur when the user is using your website, including such as database errors.

<GradingGuideline
	gradeU="Errors are not handled, or error messages are not displayed, or the error messages displayed are confusing to the user (remember: users are not programmers)."
	grade3="At most 5 errors that can occur are not handled."
	grade4="At most 3 errors that can occur are not handled."
	grade5="At most 1 error that can occur is not handled."
/>

## Graphical User Interface
The logical placement and usage of components (menus, sub-menus, pagination, forms, buttons, etc.), the support for different screen sizes (small smartphones, medium tablets, large desktop screens, etc.), the support for different input methods (touch screen, mouse, keyboard, etc.), etc. Simply put, users should understand how to use the website.

<GradingGuideline
	gradeU="The website contains components users don't understand how to use/can't use."
	grade3="The placement of components is logical and users understand how to use them on a desktop computer."
	grade4="The website do to some extent have support for smartphones (for example having support for just the screen size or just the input method)."
	grade5="The website have very good support for both smartphones and desktop computers."
/>

## Semantic HTML
Proper usage of HTML tags. Very important for applications (instead of humans) trying to understand your website, such as search engines and screen readers.

<GradingGuideline
	gradeU="The HTML syntax is not followed."
	grade3="The HTML syntax is followed. XHTML is not used."
	grade4="HTML tags are used for semantic, not visual appearance (e.g. don't use the br tag)."
	grade5="Extra code has been written to give the website semantically better structure (such as using the label element, the alt attribute for images, etc.)."
/>

## CSS
Custom CSS code (if used, not mandatory).

<GradingGuideline
	gradeU="The HTML style attribute is used when not needed."
	grade3="The HTML style element and the HTML link element are used appropriately."
	grade4="CSS selectors are used appropriately (for example id VS class, combining selectors, etc.)."
	grade5="Not applicable."
/>

## Security
Vulnerabilities such as SQL injections, XSS, CSRF, not checking authorization, storing password in plain text, improper implemented authentication, etc.

<GradingGuideline
	gradeU="3 or more security vulnerabilities exist."
	grade3="At most 2 security vulnerabilities exist."
	grade4="At most 1 security vulnerability exists."
	grade5="No security vulnerability exists."
/>

## Report
The quality of the report.

<GradingGuideline
	gradeU="The reader does not get a good understanding of what the project is about (the problem and the solution), nor how the solution works/will be used/has been implemented."
	grade3="The reader gets a good understanding of what the project is about and how the solution works/will be used/has been implemented. Figures are used, they have been numbered and given descriptive captions, and they are referred to from the main text using their figure numbers. The text does not contain obvious spelling mistake nor incomprehensible sentences. At most 5 mistakes mentioned in the lecture Report Writing exists."
	grade4="Chapters and sub-chapters are properly used to give the report a good structure. The reader can easily find the specific information she's looking for in the expected chapter/sub-chapter. At most 3 mistakes mentioned in the lecture Report Writing exists."
	grade5="Everything with the report is great. At most 1 mistake mentioned in the lecture Report Writing exists."
/>

## Optional Tasks
Complete [the optional tasks described in the Project Instructions](project-work.html#part-9-optional-tasks).

<GradingGuideline
	gradeU="Not applicable."
	grade3="No extra tasks need to be completed."
	grade4="The extra task Search or Pagination has been completed."
	grade5="The extra task Uploading Files has been completed."
/>