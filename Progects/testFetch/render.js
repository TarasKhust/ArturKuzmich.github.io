export const select = document.querySelector('#news_list');
export const data = document.querySelector('.news-wrapper');



export const renderOptionList = (articles) => {
	select.innerHTML = articles.map(( { source }) => (
			`<option value"${source.id}">${source.name}</option>`
	)).join()

}

export const renderData = (articles) => {
	data.innerHTML = articles.map(article => (
			`
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
	)).join();
}
