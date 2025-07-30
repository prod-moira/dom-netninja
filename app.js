var banner = document.getElementById('page-banner');
var titles = document.getElementsByClassName('title');
var lis = document.getElementsByTagName('li');

for(let i = 0; i < titles.length; i++){
    console.log(titles[i]);
}

Array.from(titles).forEach(function(item){
    console.log(item)
})

let wmf = document.querySelector('#book-list li:nth-child(2) .name');
console.log(wmf);

var books = document.querySelectorAll('#book-list li .name')
console.log(books);

books.forEach(function(book){
    console.log(book)
});