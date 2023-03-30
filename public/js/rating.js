
var Rating = require('../../models/Rating');    
var insertCSS = require('insert-css');
var style = require('./style.css.js');


const submitcity = async (event) => {
    event.preventDefault();

var star = document.createElement('span');
star.innerHTML = '★';
star.className = 'star';

var rating = new Rating([1, 2, 3, 4, 5], {
  container: container,
  star: star,
  readOnly: false
});

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('.cityform')
document.addEventListener('submit', submitcity);

rating.on('select', function (weight) {
  current.innerHTML = 'current: ' + weight;
});