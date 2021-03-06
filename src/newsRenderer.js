const sharedConstants = require('./sharedConstants.js');

const renderNewsBySourceId = async (sourceId) => {
    return await fetch(`https://newsapi.org/v1/articles?source=${sourceId}&apiKey=${sharedConstants.apiKey}`)
        .then(async (response) => await response.json())
        .then(response => renderArticles(response.articles));
}

const renderArticles = (articles,) => {
    const posts = document.getElementById('posts');
    const postsDiv = document.createElement('div');
    postsDiv.innerHTML = '';
    articles.forEach(article => {
        postsDiv.appendChild(renderArticle(article));
    });
    posts.innerHTML = '';
    posts.appendChild(postsDiv);
}

const renderArticle = (article,) => {
    const post = document.createElement('section');
    post.className = 'post';
    const header = getHeader(article);
    const postImage = getImage(article);
    const title = getTitle(article);
    header.appendChild(title);
    post.appendChild(header);
    const description = getDescription(article);
    description.appendChild(postImage);
    post.appendChild(description);
    post.appendChild(document.createElement("br"));
    return post;
}

const getHeader = (article) => {
    const header = document.createElement('header');
    header.className = 'post-header';
    if (article.author) {
        const postMeta = document.createElement('p');
        postMeta.className = 'post-meta';
        postMeta.innerHTML = `${article.author && !article.author.includes('http') ? `By ${article.author}` : ''} ${article.publishedAt}`;
        header.appendChild(postMeta);
    }
    return header;
}

const getTitle = (article) => {   
    const title = document.createElement('a');
    title.href = article.url;
    const titleText = document.createElement('p');
    titleText.className = 'post-title';
    titleText.innerHTML = article.title;
    title.appendChild(titleText);
    return title;
}

const getImage = (article) => {
    const postImage = document.createElement('div');
    postImage.className = 'post-images';
    var img = document.createElement('img');
    img.className = 'pure-img-responsive';
    img.src = article.urlToImage;
    postImage.appendChild(img);
    return postImage;
}

const getDescription = (article) => {
    const descriptionText = document.createElement('p');
    descriptionText.className = 'post-description';
    descriptionText.innerHTML = article.description;
    return descriptionText;
}

module.exports = {
    renderNewsBySourceId: renderNewsBySourceId
}