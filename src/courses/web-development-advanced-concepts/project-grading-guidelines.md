# Project Grading Guidelines
This page contains guidelines for how your work will be graded. For the guidelines where it make sense, a higher grade includes the guidelines for the lower grades (for example, to be able to get `Grade 5`, you also need to follow the guidelines for `Grade 3` and `Grade 4`).

::: warning Note
This page does only contain *guidelines* for how your work will be graded. When we grade your work we'll make an assessment of your entire work, which is not limited to these guidelines, so **do not use these guidelines as a checklist for a certain grade**. Instead, rather see them as minimum requirements to be able to get a certain grade.
:::

Most of [the guidelines for the project work in Web Development Fundamentals](../web-development-fundamentals/project-grading-guidelines/) applies to the project work in this course as well, but in this course there are also some additional guidelines.

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