import { renderNewsBySourceId, apiKey } from './newsRenderer.js'

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', () => {
        newsSourceChanged();
    });
})

const getNewsSources = async () => fetch(`https://newsapi.org/v1/sources?apiKey=${apiKey}`)
    .then(response => response.json())
    .then(data => createSourceSelect(data));

getNewsSources();

const createSourceSelect = (data) => {
    const list = document.getElementById('sourceSelect');
    data.sources.forEach(({id, name}) => {
        var option = document.createElement("option");
        option.value = id;
        option.innerHTML = name;
        list.appendChild(option);
    });
}

export const newsSourceChanged = () => {
    const select = document.getElementById('sourceSelect');
    renderNewsBySourceId(select.value);
}