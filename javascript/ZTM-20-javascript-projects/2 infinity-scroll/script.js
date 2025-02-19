const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let photoArray = [];
let totalImages = 0;
let imagesLoaded = 0;

// Unsplash Api
let count = 5;
const apiKey = 'HRonAiyrtdul-0fhZ1PET3KRNJy7EefoAjbKRDCnz1M';
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}}&count=${count}`;

// Check If All Images Are Loaded
function imageLoaded() {
  imagesLoaded++;
  if(imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
    count = 30;
    apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}}&count=${count}`;
  }
}

// Helper Function To Set Attributes On Dom Elemnents
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// create Elements for links & photosm, add to DOM
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photoArray.length;
  // Run Function for each object in photosArray
  photoArray.forEach((photo) => {
    // Create An Anchor link to unsplash
    const item = document.createElement('a');
    setAttributes(item, {
      herf: photo.link.html,
      target: '_blank',
    });
    // create img for photo
    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    // event listeninger
    img.addEventListener('load', imageLoaded);
    // put img Inside anchor then put them both inside imageContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get Photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photoArray = await response.json();
    console.log(photoArray);
  } catch(error) {
    // Catch Error Here
  }
}

// checking If Person Is Scrolling Near The End Of the page so we can load more images
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
    ready = false;
    getPhotos();
  }
});


// On load
getPhotos();
