// //const fetchPromise = fetch("http://newsapi.org/v2/everything?domains=wsj.com&apiKey=036cbd4c44034cfcbb1a7a96dcb760ba");
// fetchPromise.then(response => {
//     return response.json();
// }).then(headlines => {
//     console.log(headlines);
// });



//http://newsapi.org/v2/everything?domains=wsj.com&apiKey=036cbd4c44034cfcbb1a7a96dcb760ba


const origin = 'http://newsapi.org/v2/'
const apiKey = '036cbd4c44034cfcbb1a7a96dcb760ba'

const select = document.querySelector('#news_list')

fetch(`${origin}/everything?domains=wsj.com&apiKey=${apiKey}`)
    .then(e => e.json())
    .then(e => {
        console.log(e.articles);
        const options = e.articles.map(item => {
            return `<option value"${item.id}">${item.name}</option>`
        }).join();
        select.innerHTML = options;
    });


select.addEventListener('change', e => {
    const source = e.target.value;


    fetch(`
        ${origin}/everything?domains=wsj.com${source}&apikey=${apiKey}`)
        .then(e => e.json())
        .then(e => {
            const articles = e.articles.map(article => {
                return `
                <div>
                    <div style = 'width: 330px; height: 250px; overflow:hidden;'>
                        <img src = '${article.urlToImage}' style = 'width: 330px; height: 250px; overflow:hidden;'>
                    </div>
                    <h2>${article.title}</h2>
                    <h4>${article.author} | ${article.publishedAt}</h4>
                    <p>${article.description}</p>
                    <a href = '${article.url}' target = '_blank'>Read more...</a>
                </div>
                `
            }).join();


            document.querySelector('.news-wrapper').innerHTML = articles;
        })
})