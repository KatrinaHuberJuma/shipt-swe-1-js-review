// /* eslint-disable no-restricted-globals */
// alert('Message to pop up');

// const confirmed = confirm('Hey, user, is this ok?');

// const promptAnswer = prompt('Enter a string');

console.log(`Confirmed? ${confirmed}`);

console.log(`Entered in ${promptAnswer}`);

const mainContent = document.querySelector('#main-content');

console.log('mainContent', mainContent);

// mainContent.innerHTML = 'Something else';

const catPhoto = document.querySelector('img');

catPhoto.getAttribute('src'); // => 'cat.jpg'

// catPhoto.setAttribute('src', 'cat2.gif');

// document.querySelector('#main-content').classList.add('fancy');

const paragraphs = document.querySelectorAll('p');

// for (const p of paragraphs) {
//   p.classList.add('fancy');
// }

// document.querySelector('a').innerHTML = 'About Me';

// document.querySelector('ul').insertAdjacentHTML('beforeend', '<li>Finish homework</li>');

// document.querySelector('ul').insertAdjacentHTML('afterbegin', '<li>Learn about the DOM</li>');
