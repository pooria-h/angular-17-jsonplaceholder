A simple project made using Angular 17 and NGRX. It fetches 100 posts from jsonplaceholder API and show them as squares in a page.


# How to run

Run

```npm i```

Then

```npm run start```



## Backlog

- Researching on the best way to to handle the reset functionality (Using Shared Observebale vs Signal and ngOnChanges) and making a choice
- 


## QA

__Q1:__
We use JWTs a lot throughout our API. For instance, when a user logs in on our API, a JWT is issued and our web-application uses this token for every 
request for authentication. Here's an example of such a token: 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzb21lb25lQGV4YW1wbGUubmV0IiwiYWRtaW4iOmZhbHNlLCJ2YWxpZF91bnRpbCI6IldlZCBEZWMgMzEgMjM6N
Tk6NTkgQ0VTVCAxOTY5In0.4bl2puoaRetNjO1GsweKOnnQsYgwNa9bQIC-WQZkuNo
Why is it (or isn't it) safe to use this? (hint: the token is one string, the pdf might breaks it into multiple lines) 

__A1:__
 JWTs are safe to use for authentication, but there are a few things to keep in mind:
 - JWTs should always be sent over HTTPS to prevent interception by an attacker. If a JWT is intercepted, it can be used to impersonate the user.
 - On the client side, JWTs need to be stored securely. Local Storage is not recommended because it's vulnerable to XSS attacks. HttpOnly cookies are a safer option because they can't be accessed through JavaScript.
 - Sensetive data should not be stored in a JWT since it could be easily decoded.
 - JWTs should have an expiration date to reduce the damage that can be done if a JWT is stolen. The JWT in the example has an expiration date ("valid_until": "Wed Dec 31 23:59:59 CEST 1969"), but it's in the past, so this JWT is already expired.


__Q2:__
In our web-application, messages sent from one user to another, can contain HTML, which poses some security risks. Describe two attack vectors 
bad actors might try to abuse? And how would you mitigate these vectors?

__A2:__
1. Cross-Site Scripting (XSS): This is a common attack where an attacker injects malicious scripts into content that is served to other users. The script can steal sensitive data, manipulate web content, or perform actions on behalf of the user without their consent.

Mitigation: Use output encoding/escaping libraries when displaying user-generated content. These libraries ensure that any code in the content is treated as text and not executed. Also, consider implementing a Content Security Policy (CSP) to restrict where scripts can be loaded from.

2. HTML Injection: Similar to XSS, an attacker can inject malicious HTML into the content. This could be used to create fake login forms, deface the website, or trick users into downloading malicious files.

Mitigation: Again, output encoding/escaping is crucial. Additionally, consider using a safe HTML parser to sanitize user-generated content. This parser would remove any potentially harmful HTML tags. Also, limit the types of HTML tags and attributes that users can use in their messages.


__Q3:__
Explain the difference between mutable and immutable objects. 
- What is an example of an immutable object in JavaScript? 
- What are the pros and cons of immutability?
- How can you achieve immutability in your own code? 

__A3:__
In JS everything is an object!
We have primitive types like number, string, boolean, and null which are immutable. it means once they are assigned to a variable, they cannot be changed. 
On the other hand we have object and array types which are mutable. it meanns after they are assigned to a variable, you can still change their properties or cells in an array.

- Primitive values are immutable objects. For example `const a = 1`
- Pros: Predictability. it means we don't have to worry about a value of an object once it's assigned. Cons: Imagining the functions don't have side-effect and they return a new object then the code might take more memory.
- 
```
let obj = { name: "John", age: 30 };

// Freeze the object
Object.freeze(obj);

obj.name = "Jane"; // This will have no effect
```

__Q4:__
If you would have to speed up the loading of a web-application, how would you do that? (no need to actually do it, just describe the steps you would 
take)

__A4:__
- SSR might help in come cases. if there is a page that is heavily invested on the browser's memory the rendering time might increase and the solution could be server side rendering.
- Lazy loading might help. we can load the modules when they are needed. Also images could be lazy-loaded.
- Using CDN like Cloudflare. Fetching the data from the server that is closest to the user could speed up the loading.

__Q5:__
What part of a new job do you think is more important:
● Choose your own hardware, but work with a company supplied operating system image.
● You’re offered a standard piece of mediocre hardware. Free to pick your own Software

__A5:__
I think there's no right and wrong answer here but my preference is the 2nd one. Picking my own software :-)

