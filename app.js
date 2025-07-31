
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
    console.log(value);
})