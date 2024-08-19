'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// FUNCTIONS

// const getCountryData = function (country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();

//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);

//         const languages = Object.values(data.languages);
//         const currencies = Object.values(data.currencies);

//         const html = `
//         <article class="country">
//             <img class="country__img" src="${data.flags.png}" />
//             <div class="country__data">
//                 <h3 class="country__name">${data.name.official}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
//                 <p class="country__row"><span>🗣️</span>${languages[0]}</p>
//                 <p class="country__row"><span>💰</span>${currencies[0].name}</p>
//             </div>
//         </article>
//     `;

//         countriesContainer.insertAdjacentHTML('beforeend', html);
//         countriesContainer.style.opacity = 1;
//     }); 
// };

// const getCountryAndNeighbor = function (country) {

//     // AJAX call country 1
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();

//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);

//         // Render country 1
//         renderCountry(data);

//         // Get neighbour country
//         const [neighbor] = data.borders;

//         if(!neighbor) return;

//         // AJAX call country 2
//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`);
//         request2.send();

//         request2.addEventListener('load', function(){
//             const [data2] = JSON.parse(this.responseText);
//             console.log(data2);

//             renderCountry(data2, 'neighbour');
//         });
//     }); 
// };

// getCountryAndNeighbor('canada');

// getCountryData('portugal');
// getCountryData('canada');
// getCountryData('philippines');

// const getCountryData = function (country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then(function (response) {
//             console.log(response);
//             return response.json();
//         }).then(function ([data]) {
//             console.log(data);
//             renderCountry(data);
//         });
// };

const renderError = function(msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
    const languages = Object.values(data.languages);
    const currencies = Object.values(data.currencies);

    console.log(languages);

    const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flags.png}" />
            <div class="country__data">
                <h3 class="country__name">${data.name.official}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
                <p class="country__row"><span>🗣️</span>${languages}</p>
                <p class="country__row"><span>💰</span>${currencies[0].name}</p>
            </div>
        </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    // countriesContainer.style.opacity = 1;
}

const getCountryData = function (country) {
    // Country 1
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => response.json())
        .then(data => {
            renderCountry(data[0]);
            const neighbour = data[0].borders;

            if(!neighbour) return;

            // Country 2
            return neighbour.forEach(code => {
                fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
                    .then(response => response.json())
                    .then(data => renderCountry(data[0] ,'neighbour'));
        });
    })
    .catch(err => renderError(err.message))
    .finally(() => {
        countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function(){
    getCountryData('portugal');
});

