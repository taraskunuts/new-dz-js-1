  const galleryContainer = document.querySelector('.js-gallery');
  const lightbox = document.querySelector('.js-lightbox');
  const lightboxImage = document.querySelector('.lightbox__image');
  const closeButton = document.querySelector('[data-action="close-lightbox"]');
  const overlay = document.querySelector('.lightbox__overlay');
  const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  }).join('');
  galleryContainer.innerHTML = galleryMarkup;
  document.addEventListener('click', function (event) {
    if (event.target.closest('.gallery__link')) {
      event.preventDefault();
      const img = event.target.closest('a').querySelector('img');
      lightbox.classList.add('is-open');
      lightboxImage.src = img.dataset.source;
      lightboxImage.alt = img.alt;
    } else if (event.target === closeButton || event.target === overlay) {
      closeModal();
    }
  });
  window.addEventListener('keydown', keyPress);
  function closeModal() {
    lightbox.classList.remove('is-open');
    lightboxImage.src = '';
    lightboxImage.alt = '';
  }
