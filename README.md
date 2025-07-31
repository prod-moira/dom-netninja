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
- To select multiple elements by their HTML tag name (e.g. all < li > or < h1 > elements), use `getElementsByTagName()`.
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
    - Example: `console.log(node.nodeType);` // 1 for element, 3 for text, etc.
- `.nodeName` returns the name of the node as a string.
    - For elements: the tag name in all caps (e.g. DIV, SPAN)
    - For text nodes: #text
- `.hasChildNodes()` returns true if the node has any child nodes (including text, comments, or elements), otherwise false.
- `.cloneNode()` creates a copy of the node.
    - Use `.cloneNode(true)` to deeply clone the node and all its children.
    - Use `.cloneNode(false)` to only copy the node itself (no children).

## 07: Vid 7 • Traversing the DOM (Part 1)
- `.parentNode` returns the parent *node* of an element (can be an element, document, or comment).
- `.parentElement` returns the parent *only if it’s an element*; otherwise, it returns `null`.
- Use `.parentElement` when you only want to work with actual HTML elements.
- `.childNodes` returns a *NodeList* of all child nodes, including text nodes, comment nodes, and element nodes.
- `.children` returns an *HTMLCollection* of only element nodes (ignores text and comment nodes).
- Use `.children` when you only care about HTML elements and want to ignore whitespace or comments.
- Use `.childNodes` if you want to include everything inside the parent node.

## 08: Vid 8 • Traversing the DOM (Part 2)
- `.nextSibling` returns the *next node* in the DOM, which can be an element, text node (like whitespace), or comment.
- `.nextElementSibling` returns the *next sibling that is an element* (ignores text and comments).
- Use `.nextElementSibling` when you want to move to the next actual HTML element in the DOM.
- `.previousSibling` returns the *previous node* (can include whitespace or comment nodes).
- `.previousElementSibling` returns the *previous sibling that is an element only*.
- Use `.previousElementSibling` to safely move to the previous HTML element without hitting text nodes.

## 09: Vid 9 • Events
- In `app.js`:
- `var btns = document.querySelectorAll('#book-list .delete');`
    - Selects all elements with the class `.delete` inside the `#book-list` container.
    - Returns a **NodeList** of delete buttons.
- `btns.forEach(function(button) { ... })`
    - Loops through each delete button using `forEach()`.
    - The **callback function** runs once for every button in the NodeList.
- `button.addEventListener('click', function(e) { ... })`
    - Adds a **click event listener** to each delete button.
    - The first argument `'click'` is the event type.
        - Other common events include: `'mouseover'`, `'mouseout'`, `'keydown'`, `'submit'`, etc.
    - The second argument is a **callback function** that runs when the event is triggered.
    - `e` is the **event object** containing details about the interaction.
- `const li = e.target.parentElement;`
    - `e.target` refers to the **actual element that was clicked** (the delete `<span>`).
    - `.parentElement` accesses the `<li>` containing both the book name and the delete button.
- `li.parentNode.removeChild(li);`
    - `li.parentNode` gets the `<ul>` element that holds the list items.
    - `.removeChild(li)` removes the clicked `<li>` from the DOM.
- `e.preventDefault();`: Prevents the default behavior of an element. Commonly used to stop forms from submitting and reloading the page.
- Overall: Clicking a delete button removes its entire parent list item from the document.

## 10: Vid 10 • Event Bubbling
- **Event bubbling** is how events travel up the DOM tree.
- When you click an element, like a `button` inside a `li`, the event starts at the clicked element, then *bubbles up* to its parent, then its grandparent, and so on — all the way up to the `html` element.
- You can use event bubbling for event delegation — adding one listener to a parent instead of many to individual children.
- In `app.js`:
    - `const list = document.querySelector('#book-list ul');`
        - Selects the `<ul>` element inside the `#book-list` container.
        - Stores it in the `list` variable to attach a single event listener.
    - `list.addEventListener('click', function(e) { ... })`
        - Adds a *click event listener* to the entire `<ul>` list.
        - This is an example of *event delegation*.
        - `e` is the *event object*, automatically passed to the callback function.
    - `if(e.target.className == "delete") { ... }`
        - `e.target` refers to the *specific element that was clicked* — ideally the delete button.
        - Checks if the clicked element has the class `"delete"` before doing anything.
        - `.className` gets the value of the `class` attribute of that element
    - `const li = e.target.parentElement;`
        - Gets the parent `<li>` of the clicked delete button.
        - This is the book item we want to remove.
    - `list.removeChild(li);`
        - Removes the `<li>` element from the list.
        - This effectively deletes the book item from the DOM.

## 11: Vid 11 • Interacting with Forms
- This handles the process of *adding a new book* to a list using a form input.  
  When the user types a book title and submits the form, the app captures the input value without refreshing the page.
- In `app.js`:
    - `const addForm = document.forms['add-book'];`
        - Selects the `<form name="add-book">` element from the DOM.
        - `document.forms` is a collection of all `<form>` elements on the page, accessible by their `name` attribute.
        - Stores the form element in the `addForm` variable so you can attach an event listener to it.
    - `addForm.addEventListener('submit', function(e) { ... })`
        - Adds a *submit event listener* to the form.
        - The `'submit'` event fires when the user presses Enter or clicks the submit button.
        - `e` is the event object that gets passed to the callback.
    - `e.preventDefault();`
        - Prevents the default behavior of the form, which would normally reload the page.
        - This allows you to handle the form submission entirely with JavaScript.
    - `const value = addForm.querySelector('input[type="text"]').value;`
        - Selects the text input field inside the form using a CSS selector.
        - `.value` gets the current content the user typed into the input field.
        - Stores that value in a variable so it can be logged, added to a list, or otherwise used.
    - `console.log(value);`
        - Logs the user's input to the console.
        - Useful for debugging or confirming the input was successfully retrieved.