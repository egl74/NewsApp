(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const newsRenderer = require("./newsRenderer.js");

document.addEventListener("DOMContentLoaded", () => {
  const goButton = document.getElementById("loadNewsButton");
  goButton.addEventListener("click", () => {
    newsSourceChanged();
  });
});

const getNewsSources = async () => {
  await fetch(`https://newsapi.org/v1/sources?apiKey=${newsRenderer.apiKey}`)
    .then(async response => await response.json())
    .then(data => createSourceSelect(data))
    .catch(err => alert(err))
    .finally(() => console.log("fetched"));
};

getNewsSources();

const createSourceSelect = data => {
  const list = document.getElementById("sourceSelect");
  data.sources.forEach(source => {
    var option = document.createElement("option");
    const keyValues = Object.entries(source);
    option.value = keyValues.filter(keyValue => keyValue[0] == "id")[0][1];
    option.innerHTML = keyValues.filter(
      keyValue => keyValue[0] == "name"
    )[0][1];
    list.appendChild(option);
  });
};

const newsSourceChanged = () => {
  const select = document.getElementById("sourceSelect");
  for (const option of select.options) {
    if (option.value === select.value) {
      newsRenderer.renderNewsBySourceId(select.value);
    }
  }
};

},{"./newsRenderer.js":2}],2:[function(require,module,exports){
const apiKey = '1f5c03e664be446b9ae05da3364ed2a6';

const renderNewsBySourceId = async (sourceId) => {
    return await fetch(`https://newsapi.org/v1/articles?source=${sourceId}&apiKey=${apiKey}`)
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
    apiKey: apiKey,
    renderNewsBySourceId: renderNewsBySourceId
}
},{}]},{},[1]);
