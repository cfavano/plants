//create storeButton var
var storeButton = document.getElementById('store-more');

//Add event listener: click 
var showMore = storeButton.addEventListener('click', addPlants, false);

function addPlants() {
  document.getElementsByClassName('hidden-store')[0].setAttribute('class', 'unhidden-store show');
}