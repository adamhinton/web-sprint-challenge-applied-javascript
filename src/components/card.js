import axios from 'axios';
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.

  const divCard = document.createElement('div');
    divCard.classList.add('card')
  const  divHeadline = document.createElement('div');
    divHeadline.classList.add('headline');
    divHeadline.textContent = `${article['headline']}`
  const divAuthor = document.createElement('div');
    divAuthor.classList.add('author');
      const divImgContainer = document.createElement('div');
        divImgContainer.classList.add('img-container');
          const imgAuthorPhoto = document.createElement('img');
            imgAuthorPhoto.src = article['authorPhoto']
  const  spanAuthorName = document.createElement('span');
    spanAuthorName.textContent = `By ${article['authorName']}`

    divCard.appendChild(divHeadline);
    divCard.appendChild(divAuthor);
    divAuthor.appendChild(divImgContainer);
    divAuthor.appendChild(spanAuthorName)
    divImgContainer.appendChild(imgAuthorPhoto);

    divCard.addEventListener('click', function(){
      console.log(article.headline)
    });
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
// return console.log(divCard);
return divCard
}



console.log(Card('fjiadosj'))

const cardAppender = (selector) => {
  axios.get('http://localhost:5000/api/articles')
  .then(res =>{
   const articleStuff = res.data.articles.javascript;
   const selected = document.querySelector(selector)
   const lotsOfCards = articleStuff.forEach(function(item){
     // return Card(item)
   })
   // return selected.appendChild(lotsOfCards)
 // return console.log('lots of cards:', lotsOfCards)
  .catch(error =>{
    console.log(error)
  })
  })
  
   // TASK 6
   // ---------------------
   // Implement this function that takes a css selector as its only argument.
   // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
   // However, the articles do not come organized in a single, neat array. Inspect the response closely!
   // Create a card from each and every article object in the response, using the Card component.
   // Append each card to the element in the DOM that matches the selector passed to the function.
   //
 }
 
export { Card, cardAppender }
