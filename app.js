
// Delete books
const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e){
    if(e.target.className == "delete"){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})

// Add books -> submit event

const addForm = document.forms['add-book'];

// Ideally, the form is what submits the event when we click the button.

addForm.addEventListener('submit', function(e){
    e.preventDefault(); // Prevents it from refreshing the page

    // Grab whatever the user inputs
    const value = addForm.querySelector('input[type="text"]').value; // CSS Selector
    // console.log(value);

    // Create elements
    const li = document.createElement("li");
    const bookName = document.createElement("span");
    const deleteBtn = document.createElement("span");

    deleteBtn.textContent = "delete"; // Not appended properly as a button because it doesnt have a class attribute
    li.textContent = value;

    // Structure the new elements (how we append them to the DOM)
    li.appendChild(bookName); // Nest the booknName inside the li (also, name goes first in the DOM)
    li.appendChild(deleteBtn); // Same with the delete button

    // Now that the element is created and structured, we can now append to the list
    list.appendChild(li);
})