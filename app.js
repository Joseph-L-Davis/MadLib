// import functions and grab DOM elements
import { sync } from './dom-utilities.js';

const madlibButton = document.getElementById('button');

// initialize state

// const syncInit = () => {
//     for (let i = 1; i < 11; i++) {
//         const inputElement = document.getElementById(`input-${i}`);
//         const spanElement = document.getElementById(`display-${i}`);
//         inputElement.value = spanElement.textContent;
//     }
// };

// syncInit();

// set event listeners to update state and DOM

madlibButton.addEventListener('click', () => {
    for (let i = 1; i < 11; i++) {
        const inputElement = document.getElementById(`input-${i}`);
        const spanElement = document.getElementById(`display-${i}`);
        sync(inputElement, spanElement);
    };
    console.log('button clicked');
    const hidden = document.getElementById('hidden');
    if (hidden.style.display === 'none') {
        hidden.style.display = 'none';
    } else {
        hidden.style.display = 'block';
    }
});



// const pluralNoun = document.getElementById('plural-noun-1-input');
// const nounPlace = document.getElementById('noun-2-place-input');
// const verb1 = document.getElementById('verb-1-input');
// const adjective1 = document.getElementById('adjective-1-input');
// const pronoun1 = document.getElementById('pronoun-1-input');
// const verb2 = document.getElementById('verb-2-input');
// const noun3 = document.getElementById('noun-3-input');
// const kid = document.getElementById('kid-input');
// const pronoun2 = document.getElementById('pronoun-2-input');
// const adjective2 = document.getElementById('adjective-2-input');


// const madlibButton = document.getElementById('button');

// // FOR DISPLAY FUNC
// const lyricDisplay1 = document.getElementById('plural-noun-1');
// const lyricDisplay2 = document.getElementById('noun-2-place');
// const lyricDisplay3 = document.getElementById('verb-1');
// const lyricDisplay4 = document.getElementById('adjective-1');
// const lyricDisplay5 = document.getElementById('pronoun-1');
// const lyricDisplay6 = document.getElementById('verb-2');
// const lyricDisplay7 = document.getElementById('noun-3');
// const lyricDisplay8 = document.getElementById('kid');
// const lyricDisplay9 = document.getElementById('pronoun-2');
// const lyricDisplay10 = document.getElementById('adjective-2');



// madlibButton.addEventListener('click', () => {
//   //when btn click do this
//     console.log('button clicked');
//     lyricDisplay1.textContent = pluralNoun.value;
//     lyricDisplay2.textContent = nounPlace.value;
//     lyricDisplay3.textContent = verb1.value;
//     lyricDisplay4.textContent = adjective1.value;
//     lyricDisplay5.textContent = pronoun1.value;
//     lyricDisplay6.textContent = verb2.value;
//     lyricDisplay7.textContent = noun3.value;
//     lyricDisplay8.textContent = kid.value;
//     lyricDisplay9.textContent = pronoun2.value;
//     lyricDisplay10.textContent = adjective2.value;
//     const hidden = document.getElementById('hidden');
//     if (hidden.style.display === 'none') {
//         hidden.style.display = 'none';
//     } else {
//         hidden.style.display = 'block';
//     }

// });