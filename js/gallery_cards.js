'user strict'
import galleryFotos from "./gallery_items.js";

const galleryContainer = document.querySelector('.js-gallery');
const galleryCards = createGalleryCards(galleryFotos);
 galleryContainer.insertAdjacentHTML('beforeend', createGalleryCards(galleryFotos))

 console.log(galleryContainer);

function createGalleryCards(galleryFotos) {
  return galleryFotos
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
      alt=${description}R
    />
  </a>
</li>
    `;
    })
    .join('');
}




