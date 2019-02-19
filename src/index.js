import makeImageTemplate from './make-image-template.js';
import images from '../data/images.js';

const imageList = document.getElementById('image-list');

for(let index = 0; index < images.length; index++) {
    const image = images[index];
    const dom = makeImageTemplate(image);
    imageList.appendChild(dom);
}