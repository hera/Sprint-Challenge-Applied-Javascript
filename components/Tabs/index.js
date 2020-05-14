// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>



function createTopic(topicData) {
    let topicElement = document.createElement('div');
    topicElement.classList.add('tab');
    topicElement.textContent = topicData;

    return topicElement;
}

function loadTopics(url, container) {
    axios.get(url)
        .then((response) => {
            let tabsContainer = document.querySelector(container);

            for (let topic of response.data.topics) {
                let topicElement = createTopic(topic);
                tabsContainer.appendChild(topicElement);
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

loadTopics('https://lambda-times-backend.herokuapp.com/topics', 'div.topics');