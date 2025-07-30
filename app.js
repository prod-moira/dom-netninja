var btns = document.querySelectorAll(`#book-list .delete`);

btns.forEach(function(button){
    button.addEventListener('click', function(e){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    })
})