const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const galleryEl = document.querySelector('.gallery')
// const imagesEl=document.createElement('li');
// imagesEl.classList.add('gallery-image');
// const imgEl = document.createElement('img');
// imgEl.classList.add('imageItem');
// imgEl.textContent = `src="${images.url}" alt="${images.alt}`
// console.log(imagesEl);
// console.log(imgEl);
// imagesEl.append(imgEl)
// galleryEl.append(imagesEl)


const galleryElement = document.querySelector(".gallery");
galleryElement.style.display = 'flex'
galleryElement.style.flexDirection = 'column-reverse'
galleryElement.style.rowGap ='60px'
const galleryMarkup = images.reduce((markup, image) => {
  return (
    markup +
    `<li class="gallery-item"><img src="${image.url}" alt="${image.alt}" class="gallery-image"></li>`
  );
}, "");


galleryElement.insertAdjacentHTML("beforeend", galleryMarkup);

