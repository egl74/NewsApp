export const apiKey = '1f5c03e664be446b9ae05da3364ed2a6';

export const renderNewsBySourceId = (sourceId) => {
    return fetch(`https://newsapi.org/v1/articles?source=${sourceId}&apiKey=${apiKey}`)
        .then(response => response.json())
        .then(response => renderArticles(response.articles));
}

const renderArticles = (articles) => {
    const postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = '';
    articles.forEach(article => {
        postsDiv.appendChild(renderArticle(article));
    });
}

const renderArticle = (article) => {
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
        postMeta.innerHTML = `${article.author && !article.author.indexOf('http') < 0 ? `By ${article.author}` : ''} ${article.publishedAt}`;
        header.appendChild(postMeta);
    }
    return header;
}

const getTitle = (article) => {   
    const link = document.createElement('a');
    link.href = article.url;
    const title = document.createElement('p');
    title.className = 'post-title';
    title.innerHTML = article.title;
    title.appendChild(link);
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