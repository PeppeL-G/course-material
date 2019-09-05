---
navbarTitle: Web Development Fundamentals
---
# Project Grading Guidelines
This page contains guidelines for how your work will be graded. For the guidelines where it make sense, a higher grade includes the guidelines for the lower grades (for example, to be able to get `Grade 5`, you also need to follow the guidelines for `Grade 3` and `Grade 4`).

::: warning Note
This page does only contain *guidelines* for how your work will be graded. When we grade your work we'll make an assessment of your entire work, which is not limited to these guidelines, so **do not use these guidelines as a checklist for a certain grade**. Instead, rather see them as minimum requirements to be able to get a certain grade.
:::

## Indentation Convention
The convention used for indenting code (such as 2 spaces, 4 spaces, a tab, etc.). For more information, see [Wikipedia's article on indentation style](https://en.wikipedia.org/wiki/Indentation_style)

<GradingGuideline
	gradeU="No indentation convention has been used or there exists too many places where the convention has not been followed."
	grade3="The same indentation convention is mostly used, but at a few places the convention has not been followed."
	grade4="Each file correctly use an indentation convention, but different conventions are used in different files, and there's no consistency in when to use which one."
	grade5="The same indentation convention is consistently used across all files of the same type."
/>

## Coding Style
The conventions used for writing comments, (not) using optional curly brackets, maximum line lengths, white-spaces in the statements, etc. For more information, see [Wikipedia's article on coding style](https://en.wikibooks.org/wiki/Computer_Programming/Coding_Style).

<GradingGuideline
	gradeU="No coding style has been used or there exists too many places where the style has not been followed."
	grade3="The same coding style is mostly used, but at a few places the style has not been followed."
	grade4="The same coding style is consistently used in each file, although individual files (even of the same type) use different coding styles."
	grade5="The same coding style is consistently used across all files of the same type."
/>

## Naming Convention
The convention used when naming variables, constants, functions, methods, files, etc. For more information, see [Wikipedia's article on naming convention](https://en.wikipedia.org/wiki/Naming_convention_(programming)).

<GradingGuideline
	gradeU="No naming convention has been used or there exists too many places where the convention has not been followed."
	grade3="The same naming convention is mostly used, but at a few places the convention has not been followed."
	grade4="The same naming convention is consistently used in each file, although individual files (even of the same type) use different naming conventions."
	grade5="The same naming convention is consistently used across all files of the same type."
/>

## Mnemonic names
The names used (on variables, functions, files, tables in the database, etc.) reflect what they represent. Optimal names are short and very descriptive. For more information, see [Chapter 2.12 in Python for Everybody (Severance)](https://eng.libretexts.org/Bookshelves/Computer_Science/Book%3A_Python_for_Everybody_(Severance)/2%3A_Variables%2C_Expressions%2C_and_Statements/2.12%3A_Choosing_Mnemonic_Variable_Names).

<GradingGuideline
	gradeU="Many names are not mnemonic."
	grade3="Many names (at least 90%) are mnemonic."
	grade4="Almost all names (at least 95%) are mnemonic."
	grade5="All names (100%) are mnemonic."
/>

## Magic Numbers
Avoid using [magic numbers](https://en.wikipedia.org/wiki/Magic_number_%28programming%29#Unnamed_numerical_constants) in the code. Does not only apply to numbers, but all values that are better put in descriptive constants.

<GradingGuideline
	gradeU="3 or more magic numbers exist."
	grade3="At most 2 magic numbers exist."
	grade4="At most 1 magic number exists."
	grade5="No magic numbers exist."
/>

## Resources
The quality of the resources on the platform.

<GradingGuideline
	gradeU="It is not possible to apply CRUD operations on at least accounts + 1 other type of resource stored in a relational database."
	grade3="The resources are validated so the database does not contain resources in bad state (such as an account with an empty username)."
	grade4="The resources are not 'minimal', but 'rich'. For example, if a resource represents an account, it does not only consist of a username and a password, but also of more relevant information that make sense (email, city, date of birth, date signing up, whatever...)."
	grade5="Not applicable."
/>

## Database Design
The quality of the design of the database.

<GradingGuideline
	gradeU="The design is inappropriate, for example storing all resources in the same table."
	grade3="Primary keys are properly used."
	grade4="Constraints (such as unique constraints and foreign key constraints) are used correctly where suitable."
	grade5="Data is stored using appropriate data types (especially important for booleans and dates/unix timestamps)."
/>

## REST API Design
The quality of the design of the database.

<GradingGuideline
	gradeU="Not possible to apply CRUD operations on at least accounts + 1 other type of resource."
	grade3="Possible to apply CRUD operations on at least accounts + 1 other type of resource."
	grade4="Methods and URIs are properly used."
	grade5="The report fully describes the design of the REST API, including which methods, URIs, headers, body, etc. that can be used, and what the possible responses (status code, headers, body, etc.) are."
/>

## Error Handling
Handling of various errors that can occur when the user is using your platform, including validation errors and database errors (both on the fronend and the backend).

<GradingGuideline
	gradeU="Errors are not handled or the error messages are confusing to the user (remember: users are not programmers)."
	grade3="Handles and display error messages for at least 90% of the errors that can occur."
	grade4="Handles and display error messages for at least 95% of the errors that can occur."
	grade5="Handles and display error messages for all errors that can occur."
/>

## Graphical User Interface
The logical placement and usage of components (menus, sub-menus, pagination, forms, buttons, etc.), the support for different screen sizes (small smartphones, medium tablets, large desktop screens, etc.), the support for different input methods (touch screen, mouse, keyboard, etc.), etc.

<GradingGuideline
	gradeU="The frontend contains components users don't understand how to use/can't use."
	grade3="The placement of components is logical and users understand how to use them on a desktop computer."
	grade4="The frontend do to some extent have support for smartphones (for example having support for just the screen size or just the input method)."
	grade5="The frontend have very good support for both smartphones and desktop computers."
/>

## Security
Vulnerabilities such as SQL injections, not checking authorization, storing password in plain text, improper implemented authentication, etc.

<GradingGuideline
	gradeU="3 or more security vulnerabilities exist."
	grade3="At most 2 security vulnerabilities exist."
	grade4="At most 1 security vulnerability exists."
	grade5="No security vulnerability exists."
/>

## Report
The quality of the report.

<GradingGuideline
	gradeU="The reader does not get a good understanding of what the project is about (the problem and the solution) nor how the solution works/will be used/has been implemented."
	grade3="The readers gets a good understanding of what the project is about and how the solution works/will be used/has been implemented. Figures are used, they have been numbered and given descriptive captions, and they are referred to from the main text using their figure numbers. The text does not contain obvious spelling mistake nor incomprehensible sentences."
	grade4="Chapters and sub-chapters are properly used to give the report a good structure. The reader can easily find the specific information she's looking for in the expected chapter/sub-chapter."
	grade5="Everything with the report is great."
/>

## Optional Tasks
Complete [the optional tasks described in the Project Instructions](./project-instructions.html#part-10-grade-4-and-5).

<GradingGuideline
	gradeU="Not applicable."
	grade3="No extra tasks need to be completed."
	grade4="The extra tasks SDK and Supporting Multiple Data Formats needs to be completed."
	grade5="The extra task Third-Party Authentication needs to be completed."
/>