document.addEventListener("DOMContentLoaded", () => {
  const goButton = document.getElementById("loadNewsButton");
  goButton.addEventListener("click", () => {
    newsSourceChanged();
  });
});

const getNewsSources = async () => {
  try {
    await fetch(`https://newsapi.org/v1/sources?apiKey=${apiKey}`)
      .then(response => response.json())
      .then(data => createSourceSelect(data));
  } catch (err) {
    alert(err);
  }
};

getNewsSources();

const createSourceSelect = data => {
  const list = document.getElementById("sourceSelect");
  data.sources.forEach(({ id, name }) => {
    var option = document.createElement("option");
    option.value = id;
    option.innerHTML = name;
    list.appendChild(option);
  });
};

const newsSourceChanged = () => {
  const select = document.getElementById("sourceSelect");
  renderNewsBySourceId(select.value);
};
