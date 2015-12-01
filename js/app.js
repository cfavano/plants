//create storeButton var
var storeButton = document.getElementById('store-more');

//Add event listener: click view more items in store
var showMore = storeButton.addEventListener('click', addPlants, false);

// function: unhide store row
function addPlants() {
  document.getElementsByClassName('hidden-store')[0].setAttribute('class', 'unhidden-store show');
}