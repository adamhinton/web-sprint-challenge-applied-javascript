const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  const divTopics = document.createElement('div');
    divTopics.classList.add('topics');
  // const  divTabZero= document.createElement('div');
  //   divTabZero.classList.add('tab');
  // const divTabOne = document.createElement('div');
  //   divTabOne.classList.add('tab');
  // const  divTabTwo = document.createElement('div');
  //   divTabTwo.classList.add('tab');

  //   divTopics.appendChild(divTabZero);
  //   divTopics.appendChild(divTabOne);
  //   divTopics.appendChild(divTabTwo);

topics.forEach(function(item){
  const newTab = document.createElement('div');
    newTab.classList.add('tab');
    newTab.textContent = item;
   return divTopics.appendChild(newTab)
})

return divTopics

  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

}

console.log(Tabs(['foo', 'bar', 'baz', 'jimmy']))
console.log('afdsjiofji')

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
