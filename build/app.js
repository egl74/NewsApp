"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var goButton = document.getElementById('loadNewsButton');
  goButton.addEventListener('click', function () {
    newsSourceChanged();
  });
});

var getNewsSources = function getNewsSources() {
  return fetch("https://newsapi.org/v1/sources?apiKey=".concat(apiKey)).then(function (response) {
    return response.json();
  }).then(function (data) {
    return createSourceSelect(data);
  });
};

getNewsSources();

var createSourceSelect = function createSourceSelect(data) {
  var list = document.getElementById('sourceSelect');
  data.sources.forEach(function (_ref) {
    var id = _ref.id,
        name = _ref.name;
    var option = document.createElement("option");
    option.value = id;
    option.innerHTML = name;
    list.appendChild(option);
  });
};

var newsSourceChanged = function newsSourceChanged() {
  var select = document.getElementById('sourceSelect');
  renderNewsBySourceId(select.value);
};