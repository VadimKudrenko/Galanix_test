// script counts blocks in gallery, so I guess, 
// if needed add new photos I will not break the structure and add new 
// .gallery-item block with children elements (which includes image)

const imagesCounter = document.getElementById('gallery').getElementsByClassName('gallery-item').length;
const newDate = new Date();

const DATE_GET_DAYS = newDate.getDate();
const DATE_GET_MONTH = newDate.getMonth();
const DATE_GET_YEAR = newDate.getFullYear();
const DATE_GET_HOURS = newDate.getHours();
const DATE_GET_MINUTES = newDate.getMinutes();

document.getElementById('counter').innerHTML = 'Number of images in galery: ' + imagesCounter;
document.getElementById('date').innerHTML = `Today: ${DATE_GET_DAYS}/${DATE_GET_DAYS}/${DATE_GET_YEAR} Time:${DATE_GET_HOURS}:${DATE_GET_MINUTES}`;


let modal = document.getElementById('modal');
let modalImg = document.getElementById("modal-content");

for(let i = 0; i < document.getElementsByClassName("gallery-item__image").length; i++) {
  document.getElementsByClassName("gallery-item__image")[i].addEventListener("click", (e) => {
    modal.style.display = "block";
    modalImg.src = e.target.src;
    captionText.innerHTML = e.target.alt;
  })
}

const captionText = document.getElementById("modal__caption");
const span = document.getElementById("modal__close-btn");

span.onclick = function() {
  modal.style.display = "none";
}