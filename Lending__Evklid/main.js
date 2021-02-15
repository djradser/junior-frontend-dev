window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
  })
});



window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.accordion-item').forEach(function(li) {
    li.addEventListener('click', function() {
      li.querySelector('.svg').classList.toggle('rotate')
    })
  })
});