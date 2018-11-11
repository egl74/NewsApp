const apiKey = '1f5c03e664be446b9ae05da3364ed2a6';

fetch(`https://newsapi.org/v1/sources?apiKey=${apiKey}`)
    .then(response => response.json())
    .then(data => createSourceSelect(data));

const createSourceSelect = (data) => {
    const list = document.getElementById('sourceList');
    data.sources.forEach(source => {
        var option = document.createElement("option");
        option.setAttribute("data-value", source.id);
        option.value = source.name;
        list.appendChild(option);
    });
}

const newsSourceChanged = () => {
    const select = document.getElementById('sourceSelect');
    const options = select.list.children
    for (let i = 0; i < options.length; i++) {
        let option = options[i];
        if (option.value === select.value) {
            renderNewsBySourceId(option.getAttribute("data-value"));
            break;
        }
    }
}

const renderNewsBySourceId = (sourceId) => {
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
    return post;
}

const getHeader = (article) => {
    const header = document.createElement('header');
    header.className = 'post-header';
    if (article.author) {
        const postMeta = document.createElement('p');
        postMeta.className = 'post-meta';
        postMeta.innerHTML = `${article.author ? `By ${article.author}` : ''} ${article.publishedAt}`;
        header.appendChild(postMeta);
    }
    return header;
}

const getTitle = (article) => {
    const title = document.createElement('h2');
    title.className = 'post-title';
    const link = document.createElement('a');
    link.href = article.url;
    link.innerHTML = article.title;
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
    const description = document.createElement('h2');
    description.className = 'post-description';
    const descriptionText = document.createElement('p');
    descriptionText.innerHTML = article.description;
    description.appendChild(descriptionText);
    return description;
}