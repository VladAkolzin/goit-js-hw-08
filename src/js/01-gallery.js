import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const list = document.querySelector('.gallery');
list.insertAdjacentHTML('beforeend', createMarkUp(galleryItems));
function createMarkUp(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
   				<a class="gallery__link" href="${original}">
      			<img class="gallery__image" src="${preview}" alt="${description}" />
   				</a>
				</li>`
    )
    .join('');
}
let lightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

console.log(galleryItems);
