const apiKey = 'f131e01e-d96a-45ce-b17f-49ebed67622e';
const apiUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=' + apiKey;
const headerElement = document.querySelector('.navbar');

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    headerElement.innerHTML = `<h1>${data.response.docs.length} articles found on NY Times</h1>`;
  })
  .catch(error => {
    console.error('Error fetching data from NY Times API:', error);
    headerElement.innerHTML = '<h1>Error fetching data</h1>';
  });
