# Net Ninja | Javascript DOM Manipulation:
[ ] Course by Net Ninja

## 01: Vid 1 • Introduction
- DOM stands for **Document Object Model**
- It is created by the browser when a web page is loaded
- In graphical form, it looks like a tree of elements/nodes
- Programatically, we can use JS read, change, or interact with the DOM
- Added the course files (`index.html`, `styles.css`, and `app.js`)

## 02: Vid 2 • getElementById
- `document` is a built-in JavaScript object that represents the web page. You can access it directly in the browser's `Console` tab via Developer Tools.
- To select an element by its ID in the DOM, use the method `getElementById()`, passing the element's ID as a string argument.
- You can also store the selected element in a variable for easier access. For example:
    - `var banner = document.getElementById('page-banner')`
    - You can now access and interact with this variable (`banner`) through the console.

## 03: Vid 3 • getElementsByClassName & getElementsByTagName
- To select multiple elements that share the same class, use the `getElementsByClassName()` method.
- This method returns an HTMLCollection, which is array-like but not a true array.
- You can store the returned collection in a variable and access individual elements using bracket notation:
    - `var titles = document.getElementsByClassName('title');`
    - `console.log(titles[0]);`
- To select multiple elements by their HTML tag name (e.g. all <li> or <h1> elements), use `getElementsByTagName()`.
- It also returns an HTMLCollection, and you can access its items the same way.
- You can loop through an HTMLCollection using a for loop. However, if you want to use array methods like `forEach()`, you'll need to convert it to an actual array first:
    - `Array.from(titles).forEach(function(item) { console.log(item); });`
- **Note**: All related code, including the for loop, is written in app.js.

## 04: Vid 4 • querySelector & querySelectorAll
- When we want to access any element using their CSS Selector, we use `querySelector()`
- If no match is found, it returns null.
    - `const title = document.querySelector('.main-title');` // First element with class "main-title"
- While `querySelector` only returns the first match, `querySelectorAll` returns all matching elements as a NodeList (which is like an array, but not exactly).
- A **NodeList** is a collection of DOM nodes (usually element nodes when using `querySelectorAll`). It’s similar to an array, but not exactly the same.
- You can’t use array methods like `.map()`, `.filter()`, or `.reduce()` unless you convert it to an array.
- You can loop through it using `forEach()`.
    - ` var books = document.querySelectorAll('#book-list li .name')` // All elements with class "name" inside list items
    - `books.forEach(book => console.log(book));`

## 05: Vid 5 • innerHTML & textContent
- When we want to get or change the HTML content inside an element, we use `innerHTML`.
- It reads or writes HTML tags as well as text.
    - `element.innerHTML = '<em>Hi there</em>';` // Inserts HTML markup
    - `console.log(element.innerHTML);` // Might return something like <strong>Hello</strong>
- Be careful: setting `innerHTML` can make your site vulnerable if you insert user-generated content.
- If we want to get or change only the text (ignoring any HTML tags), we use `textContent`.
- It reads or writes plain text only.
    - `element.textContent = '<em>Hi there</em>';` // Displays exactly: <em>Hi there</em>
    - `console.log(element.textContent);` // Returns just the text, e.g. Hello
- `textContent` is safer for handling user input or when you don't want to deal with HTML.
- `innerHTML` is more powerful when injecting dynamic markup, but should be used carefully.
- When we want to add to the existing content instead of replacing it, we use the `+=` operator.

## 06: Vid 6 • DOM Nodes & Node Types
- In the DOM (Document Object Model), everything in an HTML document is a node.
- A node is a single point in the document tree — it can be an element, a piece of text, a comment, etc.
- When we access elements using JavaScript (like with `querySelector()`), we're working with these DOM nodes.
    - Common node types:
        - **Element Node** → nodeType 1
        - **Text Node** → nodeType 3
        - **Comment Node** → nodeType 8
        - **Document Node** → nodeType 9
- `.nodeType` returns a number that tells you what type of node it is.
    - Example: console.log(node.nodeType); // 1 for element, 3 for text, etc.
- `.nodeName` returns the name of the node as a string.
    - For elements: the tag name in all caps (e.g. DIV, SPAN)
    - For text nodes: #text
- `.hasChildNodes()` returns true if the node has any child nodes (including text, comments, or elements), otherwise false.
- `.cloneNode()` creates a copy of the node.
    - Use .cloneNode(true) to deeply clone the node and all its children.
    - Use .cloneNode(false) to only copy the node itself (no children).