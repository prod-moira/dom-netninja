var books = document.querySelectorAll('#book-list li .name')

books.forEach(function(book){
    console.log(book.textContent += ' (Book Title)')
}); 

const bookList = document.querySelector('#book-list');
console.log(bookList.innerHTML);