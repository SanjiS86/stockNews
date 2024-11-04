document.addEventListener('DOMContentLoaded', (event) => {
    const apiKey = '';
    const url = `https://financialmodelingprep.com/api/v3/fmp/articles?page=0&size=5&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('newsContainer');
            data.content.forEach(article => {
                const newsItem = document.createElement('div');
                newsItem.className = 'news-item';
                newsItem.innerHTML = `
                    <h2>${article.title}</h2>
                    <p class="date">${article.date}</p>
                    <div class="content">${article.content}</div>
                    <p class="author">By ${article.author} from ${article.site}</p>
                    <a href="${article.link}" target="_blank">Read more</a>
                `;
                newsContainer.appendChild(newsItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});