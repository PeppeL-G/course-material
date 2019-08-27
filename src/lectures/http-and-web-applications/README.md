---
sidebar: auto
navbarTitle: HTTP and Web Applications
---

# HTTP and Web Applications
The web is built on a protocol called *HyperText Transfer Protocol* (HTTP). To build proper web applications, it is essential to understand how this protocol works. [The HTTP specification](https://tools.ietf.org/html/rfc2616) explains it all, but since it is a specification it can be quite hard to read, so let me give you a quick introduction to HTTP before you read the details in the HTTP specification.

<iframe width="560" height="314" src="https://www.youtube.com/embed/kuTKFoU5v7k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Recommended reading
* [Introduction to HTTP](https://launchschool.com/books/http) by Launch School
    * Up to (including) the chapter HTTP --> Processing Responses
* [HTTP/1.1 specification](https://tools.ietf.org/html/rfc2616)
    * Don't read and learn everything by heart, but just enough so you get comfortable looking up things (methods, status codes, etc.) in it.

<!--

WORK IN PROGRESS HERE, DON'T BOTHER ABOUT IT ^^'

Clients and Servers
The HTTP protocol is built on a *client-server* architecture. That means that some computers on the web acts as *servers*, and all other computers acts as *clients*. When you browse the web through a web browser, you act as a client. 

A client can send an HTTP request to a server, asking the server to do something for it. When a server receives the HTTP request, it should carry out the request, and then send back an HTTP response to the client. This is visualized in XXX below. Having a server on it own is useless; servers exist to serve clients (that's why we call them servers).

IMAGE

For example, when you click on a link in your web browser, your web browser sends an HTTP request to a server, requesting the server to send back the webpage the link leads to. When the server receives this request it send back the webpage in an HTTP response, and when your web browser receives the HTTP response it displays the webpage on the screen.

In general, any computer can act as a client or a server. It is also possible for a computer to be both a client and a server at the same time. For example, when you (acting as a client) send an HTTP request to a server, that server might in turn send an HTTP request to another server to handle your request. The server you sent your request to then acts as both a server and a client at the same time. This is for example used when you login with your Google account on a website that doesn't belong to Google. Then the website you send your request to sends its own requests to Google to check which Google account that belongs to you (this example is a bit simplified; in practise it is a bit more complicated than this).

Resources and URIs
Servers in HTTP are expected to contain resources. It is up to each server to decide what type of resources it should contain, but some resources commonly found on websites includes:

- Images (PNG files, JPEG files, ...)
- Videos ()
- Documents (PDF files, DOCX files, TXT files, ...)
- Static webpages (HTML files, CSS files, JS files, ...)
- General data, such as:
	- Accounts
	- Blogposts
	- Guestbook posts
	- Articles
	- Private Messages
	- Comments
	- ...

Some resources (images, videos, documents, etc.) are simply stored as files on the server, while other resources can be stored in a database, or some other way. For now, we don't really care about how the resources are being stored on the server, as long as they are stored somehow.

When a client wants to work with a resource, it sends an HTTP requests to the server, asking the server to do something with the resource. There are primarilly four different types of requests clients can send. These are known as CRUD operations, and they are: 

- <u>C</u>reate (ask the server to create a new resource)
- <u>R</u>etrieve/<u>R</u>ead (ask the server to send back a resource)
- <u>U</u>pdate (ask the server to change a resource)
- <u>D</u>elete (ask the server to delete a reosurce)

In English, an HTTP request could say something like:

- *Send back the contact page to me*
- *Delete the last comment I wrote*
- *Change the title of the blog post I wrote yesterday to Congratulations* (the client sends the new title to the server)
- *Create a new friend relationship with the user Alice for me* (the client sends a new resource representing the friend relationship to the server)

For example, when you create a new account on a website, your web browser sends an HTTP request to the server asking the server to create a new resource representing your account containing your username and password (and possibly additional information).

Each request sent to a server is about doing something with a resource. The client tells the server which that resource is through a *Uniform Resource Identifier* (URI). Each resource on the server should have a URI that uniquely identifies it, and it is the server that decides which URI each resource should have. Each time you view a webpage (webpage = resource) in a web browser, you can see the URI that uniquely identifies that webpage in the adress bar at the top of the web browser.

For example, [Wikipedia's article/webpage about Mathematics](https://en.wikipedia.org/wiki/Mathematics) has the URI `/wiki/Mathematics`, while their [article/webpage about Computer Science](https://en.wikipedia.org/wiki/Computer_science) has the URI `/wiki/Computer_science`.

The [URI specification](https://tools.ietf.org/html/rfc3986) specifies the format of URIs. Simply put, it is a sequence of characters, where the slash character `/` is used to group relevant resources together. URIs also include the protocol used to access the resource (e.g. HTTP) and an identifier indicating which server that stores the resource (a domain or an IP adress), so a complete URI could for example be `https://en.wikipedia.org/wiki/Mathematics`, where `https` indicates that the HTTPS protocol should be used to access the resource, and the computer containing the resource is the one with the IP address the domain name `wikipedia.org` maps to.

URIs usually identifies a single resource or a collection of multiple resources. It is quite common that the beginning of a URI identifies a collection of resources, and the end of the URI identifies a specific resource within that collection. For example, the URI `/accounts` could identify the collection of all accounts on a website, and the URI `/accounts/Alice` identifies the specific account with the username *Alice*. We can also see this pattern in the example before with URIs on Wikipedia.


Requests
So, a client can send an HTTP request to a server to request the server to do something for it. The HTTP specification have specified the structure of these HTTP requests, so it is very important that clients send HTTP requests using the structure specified in the HTTP specification. If they don't, servers will not understand the requests, because servers expect to only receive HTTP requests using the structure specified in the HTTP specification.

So, let's go through the structure of an HTTP request.

```http
GET /the-uri HTTP/1.1
Accept: application/json
```

The first line in an HTTP request, `GET /the-uri HTTP/1.1`, is called the *request line*. It consists of three parts.

The second part on the header line, `/the-uri`, is called the *Uniform Resource Identifier* (URI). It is used to identify which resource the request is about. Web applications may use whichever URIs they want as long as they 

The first part on the header line is called the *method*. It is also known as the *verb*, but the HTTP specification calls it method, so it is better to stick with that. The method indicates what the client wants to do with the resource identified by the URI. For example, the GET method indicates that the client wants to retrieve the resource, so the server should send back the resource in the HTTP request. The DELETE method indicates that the client wants the server to delete the resource, so the server should delete the resource before it sends back an HTTP response.

The third part on the header line, `HTTP/1.1`, indicates which version of HTTP the client is using, so the server can use the same version.

Responses

-->