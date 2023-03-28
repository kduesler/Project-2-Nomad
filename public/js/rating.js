const Rating = require('rating');

const container = document.querySelector('.rating');
const star = document.querySelector('.star');
star.parentNode.removeChild(star);
 
const rating = new Rating([1, 2, 3, 4, 5], {
  container: container,
  star: star
});
 
rating.on('rate', function(weight) {
  console.log('rated: ' + weight);
});
 
rating.on('select', function(weight) {
  console.log('current: ' + weight);
});