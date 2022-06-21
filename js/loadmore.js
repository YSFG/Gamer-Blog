// Loadmore Button
var loadMore = document.getElementById('loadmore');
var hid = [...document.querySelectorAll('.news-item.hidden')];

hid.splice(0, 6).forEach(
  elem => elem.classList.remove('hidden')
);

loadMore.addEventListener('click', function(e) {
  e.preventDefault();
  
  hid.splice(0, 6).forEach(
    elem => elem.classList.remove('hidden')
  )
  
  if (hid.length == 0) {
    loadMore.classList.add('hidden');
  }
});