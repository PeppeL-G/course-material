# Project Grading Guidelines
This page contains guidelines for how your work will be graded. For the guidelines where it make sense, a higher grade includes the guidelines for the lower grades (for example, to be able to get `Grade 5`, you also need to follow the guidelines for `Grade 3` and `Grade 4`).

::: warning Note
This page does only contain *guidelines* for how your work will be graded. When we grade your work we'll make an assessment of your entire work, which is not limited to these guidelines, so **do not use these guidelines as a checklist for a certain grade**. Instead, rather see them as minimum requirements to be able to get a certain grade.
:::

## Indentation Convention
The convention used for indenting code (such as 2 spaces, 4 spaces, a tab, etc.). For more information, see Wikipedia's article on [Indentation style](https://en.wikipedia.org/wiki/Indentation_style)

<GradingGuideline
	gradeU="Indentation conventions have been used, or they are not always followed."
	grade3="The same indentation convention is consistently used across all files of the same type."
	grade4="-"
	grade5="-"
/>

## Coding Style
The conventions used for writing comments, (not) using optional curly brackets, maximum line lengths, white-spaces in the statements, etc. For more information, see Wikipedia's article on [Coding style](https://en.wikibooks.org/wiki/Computer_Programming/Coding_Style). [xkcd has a web comic about it.](https://xkcd.com/1513/)

<GradingGuideline
	gradeU="No coding styles have been used, or they are not always followed."
	grade3="The same coding style is consistently used across all files of the same type."
	grade4="-"
	grade5="-"
/>

## Naming Convention
The convention used when naming variables, constants, functions, classes, methods, functions, files, packages, etc. For more information, see Wikipedia's article on [naming convention](https://en.wikipedia.org/wiki/Naming_convention_(programming)).

<GradingGuideline
	gradeU="No naming conventions have been used, or they are not always followed."
	grade3="The same coding style is consistently used across all files of the same type."
	grade4="-"
	grade5="-"
/>

## Mnemonic names
The names used (on variables, functions, classes, files, tables in the database, etc.) reflect what they represent. Optimal names are short and very descriptive. For more information, see [Chapter 2.12 in Python for Everybody (Severance)](https://eng.libretexts.org/Bookshelves/Computer_Science/Book%3A_Python_for_Everybody_(Severance)/2%3A_Variables%2C_Expressions%2C_and_Statements/2.12%3A_Choosing_Mnemonic_Variable_Names).

<GradingGuideline
	gradeU="There exists names that are not mnemonic."
	grade3="All names are mnemonic."
	grade4="-"
	grade5="-"
/>

## Magic Numbers
Avoid using [magic numbers](https://en.wikipedia.org/wiki/Magic_number_%28programming%29#Unnamed_numerical_constants) in the code. Does not only apply to numbers, but all values that are better put in descriptive constants.

<GradingGuideline
	gradeU="Some magic numbers exists."
	grade3="No magic number exist."
	grade4="-"
	grade5="-"
/>

## Database Design
The quality of the design of the database. [xkcd has a web comic about storing dates.](https://xkcd.com/1883/)

<GradingGuideline
	gradeU="The design is inappropriate, for example storing all resources in the same table."
	grade3="Constraints are used properly."
	grade4="-"
	grade5="-"
/>

## Validation
Validation of resources on the website entered by a user.

<GradingGuideline
	gradeU="Not all resources are validated."
	grade3="All resources are validated when created/updated, forms are pre-filled with latest input if errors occur."
	grade4="-"
	grade5="-"
/>

## Error Handling
Handling of various errors that can occur when the user is using your website, including database errors (connection errors, unique constraint violations, foreign key constraint violations, etc.) and validation errors.

<GradingGuideline
	gradeU="Not all errors are handled."
	grade3="Errors are handled, and descriptive error messages are shown to the user."
	grade4="-"
	grade5="-"
/>

## Graphical User Interface
The logical placement and usage of components (menus, sub-menus, pagination, forms, buttons, etc.), the support for different screen sizes (small smartphones, medium tablets, large desktop screens, etc.), the support for different input methods (touch screen, mouse, keyboard, etc.), etc. Simply put, users should understand how to use the website.

<GradingGuideline
	gradeU="The website contains components users don't understand how to use/can't use."
	grade3="The placement of components is logical and users understand how to use them on a desktop computer."
	grade4="The website do to some extent have support for smartphones (for example having support for just the screen size or just the input method)."
	grade5="The website have very good support for both smartphones and desktop computers."
/>

## HTML & CSS
Proper usage of HTML and CSS (semantic, etc.).

<GradingGuideline
	gradeU="HTML and CSS are not used properly."
	grade3="HTML and CSS are used properly."
	grade4="-"
	grade5="-"
/>

## Security
Vulnerabilities such as SQL injections, XSS, CSRF, not checking authorization, storing password in plain text, improper implemented authentication, etc.

<GradingGuideline
	gradeU="3 or more security vulnerabilities exist."
	grade3="At most 2 security vulnerabilities exist."
	grade4="At most 1 security vulnerability exists."
	grade5="No security vulnerability exists."
/>

## Three-layered architecture
Implement the web application using a three-layered architecture properly (doing the right thing in each layer, don't expose implementation details, etc.).

<GradingGuideline
	gradeU="3 or more incorrect usages of a three-layered architecture exists."
	grade3="2 incorrect usages of a three-layered architecture exists."
	grade4="1 incorrect usage of a three-layered architecture exists."
	grade5="No incorrect usages of a three-layered architecture exists."
/>

## OAuth 2.0 & OpenID Connect
The web application properly implements [OAuth 2.0](https://tools.ietf.org/html/rfc6749) (Resource Owner Password Credentials Grant) & [OpenID Connect](https://openid.net/specs/openid-connect-core-1_0.html) (follow the specifications).

<GradingGuideline
	gradeU="3 or more implementation details differ from the specifications."
	grade3="2 implementation details differ from the specifications."
	grade4="1 implementation detail differs from the specifications."
	grade5="The specifications are followed."
/>

## Docker
Docker is used properly.

<GradingGuideline
	gradeU="Docker has not been used or one container is used to run multiple applications."
	grade3="All applications/components can be started just by running the command 'docker-compose up'."
	grade4="-"
	grade5="-"
/>

## Optional tasks
Complete the optional tasks required for `Grade 4` and `Grade 5`.

<GradingGuideline
	gradeU="Not applicable."
	grade3="-"
	grade4="Complete the extra task 'A fancy website' and 'A fancy SPA'."
	grade5="Complete the extra task 'Supporting third-party authentication'."
/>

## Report
The quality of the report.

<GradingGuideline
	gradeU="The reader does not get a good understanding of what the project is about (the problem and the solution), nor how the solution works/will be used/has been implemented."
	grade3="The reader gets a good understanding of what the project is about and how the solution works/will be used/has been implemented. Figures are used, they have been numbered and given descriptive captions, and they are referred to from the main text using their figure numbers. The text does not contain obvious spelling mistake nor incomprehensible sentences."
	grade4="Chapters and sub-chapters are properly used to give the report a good structure. The reader can easily find the specific information she's looking for in the expected chapter/sub-chapter."
	grade5="Everything with the report is great."
/>