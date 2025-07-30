var banner = document.getElementById('page-banner');
var titles = document.getElementsByClassName('title');
var lis = document.getElementsByTagName('li');

for(let i = 0; i < titles.length; i++){
    console.log(titles[i]);
}

Array.from(titles).forEach(function(item){
    console.log(item)
})