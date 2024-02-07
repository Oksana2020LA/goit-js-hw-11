// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';


// const form = document.querySelector(".form");
// const gallery = document.querySelector(".gallery");
// const container = document.querySelector("div");
// const inputDate = document.querySelector("input");



// const showLoader = () => {
//   const loader = document.createElement('span');
//   loader.classList.add('loader');
//   container.append(loader);
// };

// const hideLoader = () => {
//   const loader = document.querySelector('.loader');
//   if (loader) {
//     loader.remove();
//   }
// };

// form.addEventListener("submit", (event) => {
//   showLoader();
//    gallery.innerHTML = "";
//    event.preventDefault();
//    const searchTerm = inputDate.value;
//    searchImages(searchTerm);
    
// });

// function searchImages(searchTerm) {
//   const apiKey = '42179520-d47d5bd3a5ac50ed017a72958';
//   const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15`;
//   fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       } else {
//         return response.json();
//       }
//     })
//     .then(data => {
//       if (data.hits.length === 0) {
//         iziToast.error({
//           message: 'Sorry, there are no images matching your search query.<br>Please try again!</br>',
//           position: 'center',
//           transitionIn: "fadeInLeft",
//         });
//         hideLoader()
//       } else {
        
//         const markup = data.hits
//           .map(data => {
//             return `
//             <li class="gallery-item"><a href="${data.largeImageURL}">
//           <img class="gallery-image" src="${data.webformatURL}" alt="${data.tags}"></a>
//           <p><b>Likes: </b>${data.likes}</p>
//           <p><b>Views: </b>${data.views}</p>
//           <p><b>Comments: </b>${data.comments}</p>
//           <p><b>Downloads: </b>${data.downloads}</p>
//           </li>`;
//           }).join('');
        
//         gallery.insertAdjacentHTML("beforeend", markup);
//         const lightbox = new SimpleLightbox('.gallery a', {
//           captions: true,
//           captionType: 'attr',
//           captionsData: 'alt',
//           captionPosition: 'bottom',
//           fadeSpeed: 150,
//           captionSelector: "img",
//           captionDelay: 250,
//         });

//         lightbox.on('show.simplelightbox').refresh();
//         hideLoader();
//       }
//     })
//     .catch((error) => console.log(error));
   
// };

// function makeMarkup(arr) {
//   return arr
//     .map(
//       ({
//         webformatURL,
//         largeImageURL,
//         tags,
//         likes,
//         views,
//         comments,
//         downloads,
//         id,
//       }) => `<a class="gallery__link" href="${largeImageURL}">
//   <div class="gallery-item" id="${id}">
//     <img class="gallery-item__img" src="${webformatURL}" alt="${tags}" loading="lazy">
//     <div class="info">
//       <p class="info-item"><b>Likes</b>${likes}</p>
//       <p class="info-item"><b>Views</b>${views}</p>
//       <p class="info-item"><b>Comments</b>${comments}</p>
//       <p class="info-item"><b>Downloads</b>${downloads}</p>
//     </div>
//   </div>
// </a>`
//     )
//     .join('');
// }


// //Імпорти бібліотек
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// //Посилання на форму та галерею
// const form = document.querySelector('.search-form');
// const gallery = document.querySelector('.gallery');
// const loader = document.querySelector('.loader');
// //Прослуховування "сабміту" форми
// form.addEventListener('submit', onFormSuccess);
// let counter = 0;
// loader.style.display = 'none';

// //Отримання і відмальовка фото
// function onFormSuccess(e) {
//   e.preventDefault();
//   gallery.innerHTML = '';
//   loader.style.display = 'block';

//   searchImage(e.target.elements.searchQuery.value);
//   e.target.elements.searchQuery.value = '';
// }

// //Функція запиту данних по пошуковому слову
// function searchImage(searchWord) {
//   fetch(
//     `https://pixabay.com/api/?key=42179520-d47d5bd3a5ac50ed017a72958&q=${searchWord}&image_type=photo&orientation=horizontal&safesearch=true`
//   )
//     .then(r => {
//       if (!r.ok) {
//         throw new Error(r.status);
//       }
//       return r.json();
//     })
//     .then(r => {
//       if (r.total === 0) {
//         iziToast.warning({
//           title: 'Wrong request',
//           message:
//             'Sorry, there are no images matching your search query. Please try again!',
//         });
//         return;
//       }
//       gallery.innerHTML = makeMarkup(r.hits);
//       counter += 1;
//       let lightbox = new SimpleLightbox('.gallery a');
//       lightbox.refresh();
//       loader.style.display = 'none';
//     })
//     .catch(error =>
//       iziToast.error({
//         title: 'Error',
//         message: `Oh, we have problem: ${error}`,
//       })
//     );
// }

// //Створення розмітки з масиву

// function makeMarkup(arr) {
//   return arr
//     .map(
//       ({
//         webformatURL,
//         largeImageURL,
//         tags,
//         likes,
//         views,
//         comments,
//         downloads,
//         id,
//       }) => `<a class="gallery__link" href="${largeImageURL}">
//   <div class="gallery-item" id="${id}">
//     <img class="gallery-item__img" src="${webformatURL}" alt="${tags}" loading="lazy">
//     <div class="info">
//       <p class="info-item"><b>Likes</b>${likes}</p>
//       <p class="info-item"><b>Views</b>${views}</p>
//       <p class="info-item"><b>Comments</b>${comments}</p>
//       <p class="info-item"><b>Downloads</b>${downloads}</p>
//     </div>
//   </div>
// </a>`
//     )
//     .join('');
// }

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const API_KEY = '42179520-d47d5bd3a5ac50ed017a72958';
const BASE_URL = 'https://pixabay.com/api/';

const form = document.querySelector('.form');
const galery = document.querySelector('.gallery');
const spinner = document.querySelector('.loader');

spinner.style.display = 'none';



form.addEventListener('submit', onFormSubmit);

function onFormSubmit(ev) {
    ev.preventDefault();
    spinner.style.display = 'block';
    galery.innerHTML = '';
    const selectedPicture = ev.target.image.value;
    fetchImages(selectedPicture).then(images => {
        handleWithResponce(images);
    }).catch(error => console.log(error))
}

function fetchImages(image) {
    const searchParams = new URLSearchParams({
        key: API_KEY,
        image_type: "photo",
        orientation: 'horizontal',
        safesearch: true,
    });

    return fetch(`${BASE_URL}?${searchParams}&q=${image}`).then(response => {
        if (!response.ok) {
            throw new Error(response.status)
        }
        return response.json();
    })
}

function handleWithResponce(images) {
    if (!images.total) {
        iziToast.error({
            position: 'topRight',
            message: 'Sorry, there are no images matching your search query. Please try again!',
        });
        spinner.style.display = 'none';
        return
    }
    iziToast.success({
        position: 'topRight',
        message: `Congratulations! We found ${images.total} images`,
        timeout: 2000,
    });
    renderGallery(images.hits);
    spinner.style.display = 'none';
    const galleryLightBox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
    galleryLightBox.refresh();
}


function renderGallery(images) {
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, comments, downloads, views }) => `<li class='gallery-item'>
    <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
        <div class="gallery-description">
      <span class='gallery-span'>
        <div class="upper-text">Likes</div>
        <div class="lower-text">${likes}</div>
      </span>
      <span class='gallery-span'>
        <div class="upper-text">Views</div>
        <div class="lower-text">${views}</div>
      </span>
      <span class='gallery-span'>
        <div class="upper-text">Comments</div>
        <div class="lower-text">${comments}</div>
      </span>
      <span class='gallery-span'>
        <div class="upper-text">Downloads</div>
        <div class="lower-text">${downloads}</div>
      </span>
      </div>
        </a>
</li>`).join('');
    galery.insertAdjacentHTML('beforeend', markup);
}