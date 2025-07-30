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