# Travlr Getaways – Full Stack Web Application

## Project Overview

Travlr Getaways is a full stack web application that I developed throughout CS 465. The project includes a customer-facing website where users can view travel packages and an administrative single-page application that allows authorized users to manage trip information. Throughout the project, I worked with technologies including HTML, CSS, JavaScript, Node.js, Express, Angular, MongoDB, Mongoose, RESTful APIs, JSON, and authentication.

## Architecture

### Frontend Development

During this project, I worked with different types of frontend development, including Express HTML, JavaScript, and a single-page application (SPA). The customer-facing side used Express and HTML templates to display information to users. Express handled requests from the browser and returned rendered pages containing the requested information.

JavaScript added functionality to the application and was also important for connecting different parts of the project. The administrative side used an Angular SPA. Unlike the traditional Express website, the SPA can update parts of the page without requiring the browser to reload the entire page. This provides a smoother experience for administrators managing trip information.

Using both approaches helped me understand the differences between server-side rendering and client-side applications. Express performs more of the work on the server before sending a page to the browser, while the Angular SPA performs more of the user interface work in the browser and communicates with the backend through API requests.

### Why MongoDB Was Used

The backend used MongoDB, which is a NoSQL database. MongoDB was a good choice because the application's trip information could be stored as flexible documents rather than requiring traditional relational database tables.

MongoDB documents also work well with JavaScript-based applications because the structure of the data is similar to JSON. Mongoose provided schemas and models that allowed the application to interact with MongoDB in a structured way. This made it easier to store, retrieve, and manage trip information from the Node.js and Express backend.

## Functionality

### JSON and JavaScript

JavaScript is a programming language used to create application logic and interactive functionality. JSON, or JavaScript Object Notation, is a data format used to organize and exchange information. Although JSON looks similar to a JavaScript object, JSON is primarily used for storing and transferring data rather than executing instructions.

JSON helped connect the frontend and backend of the Travlr application. For example, the frontend could send an API request to the backend, and the backend could retrieve trip information from MongoDB and return the information as JSON. The frontend could then use that data to display trip information to the user.

### Refactoring and Reusable Components

Throughout the project, I refactored the application as new functionality was added. One important example was separating the API functionality from the customer-facing website. Instead of placing all of the database and application logic together, I created separate routes, controllers, and models. This improved the separation of concerns and made the application easier to understand and maintain.

I also moved from using static trip data to retrieving trip information from MongoDB through the API. On the administrative side, reusable UI components helped reduce duplicated code. A component can be created once and reused whenever the same type of information or functionality is needed. This makes the application more consistent and makes future changes easier because developers do not have to update the same functionality in multiple places.

## Testing

Testing was an important part of developing the full stack application. An endpoint is a specific location provided by an API where the frontend or another client can request or modify information. HTTP methods describe what action should be performed at an endpoint. For example, GET can retrieve information, POST can create information, PUT can update existing information, and DELETE can remove information.

During development, I tested API endpoints to make sure requests returned the expected responses and that information was being correctly retrieved from MongoDB. Testing also helped me identify problems between the routes, controllers, database, and frontend.

Security added another layer to the testing process. The administrative side of the application required authentication so that protected functionality could not be accessed by unauthorized users. This meant testing both successful and unsuccessful authentication attempts and making sure protected endpoints required valid authentication. This helped me understand that testing a secure full stack application involves more than checking whether an endpoint works. It also requires confirming that users only have access to the resources they are authorized to use.

## Reflection

This course helped me develop a better understanding of how the different parts of a full stack application work together. Before completing this project, I understood individual concepts such as databases, networking, and security, but this project gave me experience connecting the frontend, backend, database, API, and authentication into one working application.

I developed skills with Node.js, Express, MongoDB, Mongoose, Angular, RESTful APIs, JSON, routing, controllers, reusable components, and authentication. I also gained more experience troubleshooting problems between different layers of an application. One of the most valuable skills I developed was learning how to follow the flow of information from the user interface, through an API, into the database, and back to the user.

This project also supports my professional goals because it combines software development with concepts that are important in networking and cybersecurity. Understanding APIs, databases, authentication, and web application architecture gives me a broader technical background and helps me understand how applications communicate across networks. The troubleshooting and security experience from this project will also help make me a more well-rounded candidate for technical roles.

## Technologies Used

* HTML and CSS
* JavaScript
* Node.js
* Express.js
* Angular
* MongoDB
* Mongoose
* RESTful APIs
* JSON
* Authentication and authorization
* Git and GitHub

## Repository

GitHub Repository: **[Insert your GitHub repository link here]**
