---
sidebar: auto
navbarTitle: Running Node.js on Lightsail
---

# Running Node on Lightsail
So, you have implemented a great web application in Node.js, and now you want to have it up and running on the Internet, but how? Let's see how we can make that happen using [Amazon Lightsail](https://aws.amazon.com/lightsail/).

<iframe width="560" height="314" src="https://www.youtube.com/embed/2ovu_lYLN9w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Lecture material
* [running-node-js-on-lightsail.pdf](running-node-js-on-lightsail.pdf)
* [running-node-js-on-lightsail.pptx](running-node-js-on-lightsail.pptx)

::: tip The configuration
If you need to run just one web application, use the following in you configuration file (or whichever port number you use):

```
ProxyPass / http://127.0.0.1:8080/
ProxyPassReverse / http://127.0.0.1:8080/
```
:::

## Recommended reading


* [AWS Lightsail | BitnBitratedeJs) | Let’s Encrypt](https://medium.com/@sharmasha2nk/aws-lightsail-bitnami-nodejs-letsencrypt-cf653573b8a1)
    * The reading I used to learn how to do it, but it covers more than we need in this course, and it configures the Apache server in a more complicated/structured way.
