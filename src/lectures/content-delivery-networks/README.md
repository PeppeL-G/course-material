---
sidebar: auto
navbarTitle: Content Delivery Networks
---

# Content Delivery Networks
It's important that static files clients request (images, videos, CSS files, client-side JS files, etc.) are delivered fast to the clients, because users don't want to wait. What's the fastest way to deliver them? Probably by using a *Content Delivery Network* (CDN), so let's go through what that is.

---

First, let's make it clear that there exists many different companies that host content delivery networks. The website [TrustRadius has a list of some of them](https://www.trustradius.com/content-delivery-networks-cdn). One of them, *Cloudflare*, has some really good pages describing what a content delivery network is. The content of this lecture will simply be the content on those pages:

* [What is a CDN? | How do CDNs work?](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/)
* [CDN Performance](https://www.cloudflare.com/learning/cdn/performance/)
* [CDN Reliability & Redundancy](https://www.cloudflare.com/learning/cdn/cdn-load-balance-reliability/)

The rest of this lecture will contain some complimentary information related to content delivery networks.

## A CDN do not run your web application
You can't use a CDN to run your web application, such as an Express application. CDNs do not execute any of your application's code. You can only use a CDN to distribute files, such as images, videos, CSS files, etc.

If your website only consists of static files, then you don't really need a web application at all. In these cases, a content delivery network is all you need to "run" your website. This is an extremely cheap way of "running" a single-page application, and clients will be able to retrieve your single-page application very fast. If you need to have some code that runs on a server, you can run that as a separate web application on another server your single-page application sends requests to.

## CSS frameworks and client-side JavaScript libraries
Many CSS frameworks and client-side JavaScript libraries are distributed through content delivery networks. For example, the CSS framework [Spectre is distributed through a content delivery network](https://picturepan2.github.io/spectre/getting-started/installation.html#install-cdn) called [unpkg](https://unpkg.com/). These can be loaded very fast to your webpages by using the `<link>` tag and the `<script>` tag as usual, especially if your user has already visited another website loading the framework/library from the same content delivery network, because then the user already have the file in the web browser's cache. The drawback with this solution is that your webpages are now dependent on the content delivery network. If the content delivery network for some reason is down, your webpages will not be displayed correct.

If you want you can host the CSS files for the CSS framework and the JavaScript files for the client-side JavaScript library in your own web application instead. This way, as long as your web application is up and running, you can be sure all webpages on it will be displayed correct. The drawback is that we lose the benefits with using a content delivery network, (shorter loading times, less requests to handle for our own web application, etc.). 

Can we somehow get the best of both worlds? Yes! We can try to load the files from the content delivery network, and if that fails we fallback to loading them from our own web application. This can be achieved with client-side JavaScript.

::: tip Example
The client-side JavaScript library [jQuery](https://jquery.com/) can be loaded from the content delivery network [cdnjs](https://cdnjs.com/). The `<script>` tag on Line 1 in the code below will first tell the web browser to load the jQuery library from the content delivery network. The JavaScript code in the next `<script>` tag will then check if the library was loaded successfully, and if not it will add another `<script>` element to the document, telling the web browser to load the library from the web application instead. After these lines, we can be sure the jQuery library has been loaded.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
	window.jQuery || document.write('<script src="/static/libs/jquery/3.5.1/jquery.min.js"><\/script>')
</script>
```
:::

## Subresource Integrity
Fetching and executing client-side JavaScript code from other servers can be dangerous. You probably trust the code in the client-side JavaScript library you load from a content delivery network, but if you're unlucky, you might not get the code you want! Maybe a hacker has managed to hack the content delivery network, and he has programmed the network to always send back his own evil client-side JavaScript code whenever the network receives a request for a JavaScript file. That can end really dangerous for your users.

To protect websites from this vulnerability, a security feature was added to web browsers called *Subresource Integrity* (SRI). Whenever you load a file using the `<script>` tag or `<link>` tag, you can also add the `integrity` attribute to it, and it's value should be:

* The name of a hash algorithm, and
* The hash value of the file you want to load using that algorithm

When the web browser has downloaded the file, it will compute the hash value of the file using the hash algorithm and see if it matches the hash value in the attribute, and it will only use the file if they match. If they don't match it means someone has made changes to the file you intended to download.

Most content delivery network hosting JavaScript and CSS files will also provide you with a hashing algorithm and hash value you can use, so mostly you just need to copy-paste to make use of this security feature.

::: tip Example
The client-side JavaScript library [Moment](https://momentjs.com/) can be downloaded from the content delivery network [cdnjs](https://cdnjs.com) with an integrity check using the code below.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js" integrity="sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ=="></script>
```
:::