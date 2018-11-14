import { renderNewsBySourceId, apiKey } from './newsRenderer.js'

fetch(`https://newsapi.org/v1/sources?apiKey=${apiKey}`)
    .then(response => response.json())
    .then(data => createSourceSelect(data));

const createSourceSelect = (data) => {
    const list = document.getElementById('sourceSelect');
    data.sources.forEach(source => {
        var option = document.createElement("option");
        option.value = source.id;
        option.innerHTML = source.name;
        list.appendChild(option);
    });
}

export const newsSourceChanged = () => {
    const select = document.getElementById('sourceSelect');
    renderNewsBySourceId(select.value);
}