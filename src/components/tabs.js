import axios from "axios";

const Tabs = (topics) => {

  //instantiate parent element and attach class
  const topicsDiv = document.createElement('div');
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');
  const div4 = document.createElement('div');
  const div5 = document.createElement('div');


  //using forEach loop to create divs, attach classes, add content, and appending to parent div
  // topics.forEach(topic => {
  //   const articleValues = document.createElement('div');
  //   articleValues.classList.add('.tab');
  //   articleValues.textContent = topic;
  //   topicsDiv.appendChild(articleValues);
  // })

  // //classes
  topicsDiv.classList.add('.topics');
  div1.classList.add('tab');
  div2.classList.add('tab');
  div3.classList.add('tab');
  div4.classList.add('tab');
  div5.classList.add('tab');

  //set parent/child relationships
  topicsDiv.appendChild(div1);
  topicsDiv.appendChild(div2);
  topicsDiv.appendChild(div3);
  topicsDiv.appendChild(div4);
  topicsDiv.appendChild(div5);

  //set content
  div1.textContent = topics['javascript'];
  div2.textContent = topics['bootstrap'];
  div3.textContent = topics['technology'];
  div4.textContent = topics['jquery'];
  div5.textContent = topics['node.js'];


  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}



const tabsAppender = (selector) => {
  axios.get(`http://localhost:5000/api/topics`)
  .then(topics => {
    const tabsBarItems = document.querySelector(selector);
    console.log(res.data)
    for(let i = 0; i < topics.length; i++)
    return topic
    tabsBarItems.appendChild(topicsDiv)
  })
  .catch(err => {
    console.error('Information not returned!');
  })
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

}


export { Tabs, tabsAppender }
