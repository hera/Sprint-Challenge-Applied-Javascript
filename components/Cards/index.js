// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.


function createCard(cardData) {
    let card = document.createElement('div');
    card.classList.add('card');

    let headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = cardData.headline;
    card.appendChild(headline);

    let author = document.createElement('div');
    author.classList.add('author');
    
    let imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    let img = document.createElement('img');
    img.setAttribute('src', cardData.authorPhoto);
    imgContainer.appendChild(img);
    author.appendChild(imgContainer);
    let authorName = document.createElement('span');
    authorName.textContent = cardData.authorName;
    author.appendChild(authorName);

    card.appendChild(author);

    return card;
}


function loadCards(url, container) {
    axios.get(url)
        .then((response) => {
            let categories = Object.keys(response.data.articles);
            let articleContainer = document.querySelector(container);

            for (let category of categories) {
                for (let articleData of response.data.articles[category]) {
                    let article = createCard(articleData);
                    articleContainer.appendChild(article);
                }
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

loadCards('https://lambda-times-backend.herokuapp.com/articles', '.cards-container');