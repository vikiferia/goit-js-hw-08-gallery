'user strict'
import images  from "./gallery_items.js";
import refs from "./refs.js"
import {createGalleryCards} from "./createGalleryCards.js"


refs.gallery.insertAdjacentHTML('afterbegin', createGalleryCards(images));
refs.gallery.addEventListener('click', onGallery);
refs.btn.addEventListener('click', galleryClose);
refs.modal.addEventListener('click', closeLightbox);

function gallerySrc(src) {
  return (refs.lightbox__image.src = src);
}
function galleryAlt(alt) {
  return (refs.lightbox__image.alt = alt);
}

function onGallery(event) {
  event.preventDefault();
  
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  refs.lightbox.classList.add('is-open');
  gallerySrc(event.target.getAttribute('data-source'));
  galleryAlt(e.target.alt);
    
  
}

function galleryClose(event) {
  event.preventDefault(); 
  refs.lightbox.classList.remove('is-open');  
  
}



function closeLightbox(event) {
  if (event.target === event.currentTarget) {
    galleryClose();
  }
}

