export const ArticleCol = [
  {
    id: "300",
    date: "10 AUG 2023",
    title:
      "Understanding JavaScript Microtask Queue: A Deep Dive with Examples",
    link: "/articles/300",
    content: `
  # Understanding JavaScript Microtask Queue: A Deep Dive with Examples

JavaScript is a single-threaded, non-blocking programming language designed to handle asynchronous tasks efficiently. To achieve this, it uses an event loop, which consists of two main queues: the **task queue** (or macro task queue) and the **microtask queue**. Understanding the microtask queue is crucial for writing performant and predictable asynchronous JavaScript code.

---

## What is the Microtask Queue?

The microtask queue is a special queue in JavaScript that holds **microtasks**, which are short-lived, high-priority tasks. Examples of microtasks include:

- Callbacks for promises (e.g., \`.then\`, \`.catch\`, \`.finally\`).
- The \`MutationObserver\` API.
- Explicitly queued microtasks using \`queueMicrotask\`.

The microtask queue is processed **immediately after the currently executing JavaScript code completes** and before any tasks from the task queue are executed. This ensures that microtasks are executed as soon as possible, making them highly predictable.

---

## Event Loop and Microtask Queue in Action

Here’s how the event loop processes tasks:

1. Execute the current script.
2. Process all microtasks in the microtask queue.
3. Handle one task from the task queue (macro task).
4. Repeat.

This ensures that microtasks always get priority over tasks in the macro task queue.

---

## Examples

Let’s dive into some examples to understand the microtask queue better.

### Example 1: Promises and the Microtask Queue

\`\`\`javascript
console.log("Script start");

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve()
  .then(() => console.log("Promise 1"))
  .then(() => console.log("Promise 2"));

console.log("Script end");
\`\`\`

**Output:**

\`\`\`
Script start
Script end
Promise 1
Promise 2
setTimeout
\`\`\`

**Explanation:**

1. \`console.log("Script start")\` and \`console.log("Script end")\` execute synchronously.
2. The promise callbacks (\`.then\`) are added to the microtask queue.
3. \`setTimeout\` is added to the task queue.
4. The microtask queue is processed, logging \`Promise 1\` and \`Promise 2\`.
5. Finally, the task queue is processed, logging \`setTimeout\`.

---

### Example 2: Using \`queueMicrotask\`

\`\`\`javascript
console.log("Start");

queueMicrotask(() => console.log("Microtask 1"));

setTimeout(() => console.log("Timeout"), 0);

queueMicrotask(() => console.log("Microtask 2"));

console.log("End");
\`\`\`

**Output:**

\`\`\`
Start
End
Microtask 1
Microtask 2
Timeout
\`\`\`

**Explanation:**

1. \`console.log("Start")\` and \`console.log("End")\` execute synchronously.
2. \`queueMicrotask\` adds callbacks to the microtask queue.
3. The microtask queue processes \`Microtask 1\` and \`Microtask 2\` before the \`setTimeout\` callback.

---

### Example 3: Nested Microtasks

\`\`\`javascript
Promise.resolve()
  .then(() => {
    console.log("Promise 1");
    return Promise.resolve();
  })
  .then(() => console.log("Promise 2"));

console.log("End of Script");
\`\`\`

**Output:**

\`\`\`
End of Script
Promise 1
Promise 2
\`\`\`

**Explanation:**

1. The first \`.then\` adds its callback to the microtask queue.
2. \`console.log("End of Script")\` executes synchronously.
3. \`Promise 1\` logs, and another microtask is created for \`Promise 2\`.
4. The microtask queue processes \`Promise 2\`.

---

## Key Takeaways

1. Microtasks are executed before any tasks from the task queue.
2. Promises and \`queueMicrotask\` are key players in the microtask queue.
3. The microtask queue allows for responsive and predictable asynchronous programming.

---

## Conclusion

Understanding the microtask queue gives you more control over asynchronous operations and ensures your code behaves as expected. By leveraging promises, \`queueMicrotask\`, and other microtask APIs, you can write clean, efficient, and non-blocking JavaScript applications.

Happy coding!

  `,
  },
  {
    id: "200",
    date: "23 JAN 2022",
    title: "Angular Micro frontend with Webpack fedarated Modules",
    link: "/articles/200",
    content: `
# Implementing Micro Frontend in Angular Using Webpack Federated Modules

Micro frontends have become a popular approach for developing large-scale applications by splitting them into smaller, independent pieces. Each piece is a micro frontend that can be developed, tested, and deployed independently. In this article, we'll explore how to implement micro frontends in Angular using Webpack 5's Federated Modules.

## What Are Micro Frontends?

Micro frontends are a way to extend the microservices pattern to the frontend. They allow teams to work on separate parts of a web application independently. Micro frontends are self-contained and provide their functionality as independent units that can be combined to form a complete application.

In a traditional single-page application (SPA), you might have one large Angular project with different modules and components. However, with a micro frontend architecture, the frontend is broken down into separate applications that communicate with each other. These applications can be developed and deployed by different teams using various technologies.

## Why Use Webpack 5's Module Federation?

Webpack 5 introduced a powerful feature called Module Federation, which allows different applications to share modules at runtime. This is the backbone of implementing micro frontends in Angular. It enables the loading of shared components, services, or libraries across different applications without bundling them into each individual build.

## Setting Up the Micro Frontend Architecture in Angular

### Step 1: Set Up the Host Angular Application

The first step is to create the host Angular application that will load and manage the micro frontends.

\`\`\`bash
ng new host-app --routing --style=scss
cd host-app
ng add @angular/elements
\`\`\`

Once the host application is created, you will need to install the necessary Webpack packages.

\`\`\`bash
npm install webpack webpack-cli webpack-dev-server --save-dev
\`\`\`

Create a webpack.config.js file in the root of the project. This file will configure Module Federation.


\`\`\`javascript
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const path = require('path');

module.exports = {
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.ts', '.js', '.html'],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'hostApp',
      remotes: {
        microFrontendApp: 'microFrontendApp@http://localhost:4201/remoteEntry.js',
      },
      shared: ['@angular/core', '@angular/common', '@angular/router'],
    }),
  ],
};
\`\`\`

This configuration defines a hostApp that will load the remote microFrontendApp from the given URL.

### Step 2: Set Up the Micro Frontend Application

Now, you need to create the micro frontend application.

\`\`\`
ng new micro-frontend-app --routing --style=scss
cd micro-frontend-app
ng add @angular/elements

\`\`\`

After the micro frontend is created, install Webpack and Module Federation plugin.

\`\`\`
npm install webpack webpack-cli webpack-dev-server --save-dev

\`\`\`

In the micro frontend app, create the webpack.config.js file. This will expose the module you want to share with the host app.

\`\`\`
// webpack.config.js
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const path = require('path');

module.exports = {
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.ts', '.js', '.html'],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'microFrontendApp',
      filename: 'remoteEntry.js',
      exposes: {
        './AppComponent': './src/app/app.component.ts',
      },
      shared: ['@angular/core', '@angular/common', '@angular/router'],
    }),
  ],
};

\`\`\`

This configuration exposes the AppComponent from the micro frontend to be consumed by the host app.

### Step 3: Update Angular CLI Configuration

You need to modify the Angular build and serve configurations to integrate Webpack. Update angular.json to include the custom Webpack config.

\`\`\`
"projects": {
  "host-app": {
    "architect": {
      "build": {
        "options": {
          "customWebpackConfig": {
            "path": "./webpack.config.js"
          }
        }
      }
    }
  },
  "micro-frontend-app": {
    "architect": {
      "build": {
        "options": {
          "customWebpackConfig": {
            "path": "./webpack.config.js"
          }
        }
      }
    }
  }
}

\`\`\`

### Step 4: Consuming the Micro Frontend in the Host Application

In the host application, you can now consume the exposed module from the micro frontend. First, import the component from the remote app.


\`\`\`
// app.component.ts in host app
import { Component, Injector, ViewContainerRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \<div #microFrontendContainer></div>\`,
})
export class AppComponent {
  @ViewChild('microFrontendContainer', { read: ViewContainerRef })
  container: ViewContainerRef;

  constructor(private injector: Injector) {}

  ngOnInit() {
    import('microFrontendApp/AppComponent')
      .then(({ AppComponent }) => {
        const componentRef = this.container.createComponent(AppComponent);
      })
      .catch((err) => console.error('Error loading micro frontend:', err));
  }
}

\`\`\`

This code dynamically loads the AppComponent from the microFrontendApp and renders it inside the host app.

### Step 5: Running the Applications 

Finally, run both the host and micro frontend applications.

Serve the micro frontend application:

\`\`\`
ng serve --port 4201
\`\`\`

Serve the host application:

\`\`\`
ng serve --port 4200

\`\`\`

Now, you should be able to see the micro frontend loaded dynamically into the host application.

## Conclusion
By using Webpack 5's Module Federation, we can implement a robust micro frontend architecture in Angular. Each application or module can be developed, tested, and deployed independently. This allows for better scalability, flexibility, and easier maintenance of large-scale applications.

In this guide, we demonstrated the steps to create a host and micro frontend application, expose components via Webpack Federation, and consume them in the host app. With this architecture in place, your Angular applications can leverage the power of micro frontends for greater modularity and team autonomy.

`,
  },
  {
    id: "100",
    date: "02 JAN 2022",
    title: "Understanding Tagged Template Literals in JavaScript",
    link: "/articles/100",
    content: `
# Understanding Tagged Template Literals in JavaScript

Template literals are a powerful feature in JavaScript, allowing you to work with strings in a more
flexible and readable way. They provide a clean syntax for embedding expressions, multi-line strings, and more. But did you know you can also use template literals in a more advanced way by using tagged template literals?

In this article, we'll dive into tagged template literals, explain how they work, and provide some examples to demonstrate their usage.

## What Are Tagged Template Literals?
A tagged template literal is a function call that can process template literals. Instead of simply returning a string, the tagged function can manipulate the template literal's parts before returning the final result. The function is called with the string fragments and any expressions embedded within the template.

The basic syntax for a tagged template literal looks like this:

\`\`\`
tag\`template string\`

\`\`\`

Where:

- tag is a function that processes the template literal.
- \`template string\` is the template literal.

## How Do Tagged Template Literals Work?
When you use a tagged template literal, the template string is divided into two parts:

- The static text: This is the string between the \${} placeholders.
- The expressions: These are the JavaScript expressions inside \${} that are evaluated and inserted into the string.
  
Let's look at a simple example:

\`\`\`
function simpleTag(strings, ...expressions) {
  console.log(strings);       // Array of static parts of the template
  console.log(expressions);   // Array of expressions
}

let name = "Alice";
let age = 25;

simpleTag\`My name is \${name} and I am \${age} years old.\`;

\`\`\`

### Output

\`\`\`
["My name is ", " and I am ", " years old."]
["Alice", 25]

\`\`\`

### Explanation:

- strings contains the static text parts of the template.
- expressions contains the evaluated expressions (in this case, name and age).

## Real-World Example: Formatting a String

Let's create a tag function that formats a string in a custom way. For example, we'll create a tag that converts the text to uppercase:
   
\`\`\`
function upperCaseTag(strings, ...expressions) {
  let result = '';
  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
    if (i < expressions.length) {
      result += expressions[i].toUpperCase();
    }
  }
  return result;
}

let name = "Alice";
let city = "Paris";

let message = upperCaseTag\`Hello, my name is \${name} and I live in \${city}.\`;

console.log(message);

\`\`\`

### Output:

\`\`\`
HELLO, MY NAME IS ALICE AND I LIVE IN PARIS.

\`\`\`

## Conclusion

Tagged template literals are a powerful feature of JavaScript, allowing you to extend the capabilities of template literals by processing the static text and dynamic expressions before returning a result. From formatting strings and numbers to creating more complex string manipulation, the possibilities are endless.

Here’s a quick recap of the key concepts:

- Tagged template literals allow you to define a function that processes the template literal.
- The function receives the static text and expressions separately.
- You can manipulate the expressions, format the output, or perform custom transformations.

With tagged template literals, you can take full control over string interpolation and enhance your JavaScript applications.

`,
  },
];
