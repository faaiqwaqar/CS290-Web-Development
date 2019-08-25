/*
 * Add the contents of your index.js file from Assignment 3 here to see the
 * interactions you implemented.  This is not required for your grade on this
 * assignment, but it'll allow you to have the full experience of the site
 * as we've implemented it so far.
 */

alert('JS successfully loaded.');
var buttonSelect = document.getElementById('create-twit-button');
var modalSelect = document.getElementById('modal-backdrop');
var modalTwitSelect = document.getElementById('create-twit-modal');
var cloneNodes = [];

//modal Variables
var modalCancel = document.getElementsByClassName('modal-cancel-button');
var modalClose = document.getElementsByClassName('modal-close-button');
var modalAccept = document.getElementsByClassName('modal-accept-button');
var modalText = document.getElementById('twit-text-input');
var modalAuthor = document.getElementById('twit-attribution-input');

//search Variables
var twitSearch = document.getElementsByClassName('twit');
var inputSearch = document.getElementById('navbar-search-input');
var itemSearch = document.querySelector('input[type="text"]');
var formSearch = document.querySelector('form');
var twitTextSearch = document.getElementsByClassName('twit-text');
var twitAuthorSearch = document.getElementsByClassName('twit-author');
var filterSearch = inputSearch.value.toUpperCase();

//twit Addition Variables
var containerTwit = document.getElementById('twit-container-div');

//external Event Listeners
buttonSelect.addEventListener('click',openModal);

//modal Event Listeners
modalCancel[0].addEventListener('click',closeModal);
modalClose[0].addEventListener('click',closeModal);
modalAccept[0].addEventListener('click',createTwit);

//searching Event Listeners
 itemSearch.addEventListener('input', searchTwits);

function openModal(){
  modalSelect.classList.remove("hidden");
  modalTwitSelect.classList.remove("hidden");
}

function closeModal(){
  modalSelect.classList.add("hidden");
  modalTwitSelect.classList.add("hidden");
  modalText.value = "";
  modalAuthor.value = "";
}

function createTwit(){
  if(modalText.value == "" || modalAuthor.value == ""){
    alert("Please Enter All Values");
  }

  else{
    var newTextValue = modalText.value;
    var newAuthorValue = modalAuthor.value;

    var newText = document.createElement('p');
    var newAuthor = document.createElement('p');
    var newHlnk = document.createElement('a');
    var newArticle = document.createElement('article');
    var newDiv = document.createElement('div');
    var newIcon = document.createElement('i');
    var newContent = document.createElement('div');

    var twitContainer = document.getElementsByClassName('twit-container');

    modalSelect.classList.add("hidden");
    modalTwitSelect.classList.add("hidden");
    modalText.value = "";
    modalAuthor.value = "";

    newText.setAttribute('class','twit-text');
    newAuthor.setAttribute('class','twit-author');
    newArticle.setAttribute('class','twit');
    newDiv.setAttribute('class','twit-icon');
    newIcon.setAttribute('class','fas fa-bullhorn');
    newContent.setAttribute('class','twit-content');

    newHlnk.setAttribute('href','#');

    newHlnk.textContent = newAuthorValue;
    newText.textContent = newTextValue;

    newAuthor.append(newHlnk);
    newContent.append(newText);
    newContent.append(newAuthor);
    newDiv.append(newIcon);
    newArticle.append(newDiv);
    newArticle.append(newContent);
    twitContainer[0].append(newArticle);

  }
}

function searchTwits(){
  // console.log("searching");
  // console.log(inputSearch);
  // console.log(itemSearch);
  resetSearch();

  for(var i = 0; i < twitTextSearch.length; i++){
    // console.log(twitTextSearch.length);
    if(!twitTextSearch[i].innerText.includes(inputSearch.value) && !twitAuthorSearch[i].innerText.includes(inputSearch.value)){
      var clone = twitSearch[i].cloneNode(true);
      cloneNodes.push(twitSearch[i]);
      // console.log(cloneNodes);
       twitSearch[i].parentNode.removeChild(twitSearch[i]);
       i--;
      // twitSearch[i].classList.add("hidden");
    }
  }
}

function resetSearch(){
  // console.log("resetting");
  // var hiddenTwits = document.getElementsByClassName('hidden');
  // console.log(hiddenTwits);
  var twitContainer = document.getElementsByClassName('twit-container');

  for(var i = 0; i < cloneNodes.length; i++){
    // twitSearch[i].classList.remove("hidden");
    twitContainer[0].append(cloneNodes[i]);
  }
  cloneNodes = [];
}
