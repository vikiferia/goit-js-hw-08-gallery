'user strict'
import images  from "./gallery_items.js";

const refs = {
  gallery: document.querySelector('.js-gallery'),
  image: document.createElement('img'),
  lightbox: document.querySelector('.lightbox'),
  btn: document.querySelector('[data-action="close-lightbox"]'),
  modal: document.querySelector('.lightbox__content'),
  lightbox__image: document.querySelector('.lightbox__image'),
};

function createGalleryCards(images) {
  return images
    .map(({ preview, original, description}) => {
      return `
   <li class="gallery__item">
  <a
    class="gallery__link"
    href=${original} >
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>
    `;
    })
    .join('');
  
};


refs.gallery.insertAdjacentHTML('afterbegin', createGalleryCards(images));
refs.gallery.addEventListener('click', onGallery);
refs.btn.addEventListener('click', galleryClose);
refs.modal.addEventListener('click', closeLightbox);

function onGallery(event) {
  event.preventDefault();
  
  if (event.target.nodeName !== 'IMG') {
    return;
  }

   refs.lightbox.classList.add('is-open');
    refs.lightbox__image.src = event.target.getAttribute('data-source');
    refs.lightbox__image.alt = event.target.alt;
  
}

function galleryClose(event) {
  event.preventDefault(); 
  refs.lightbox.classList.remove('is-open');
  refs.lightbox__image.src = '';
  refs.lightbox__image.alt = '';
  
}

function closeLightbox(event) {
  if (event.target === event.currentTarget) {
    galleryClose();
  }
}

