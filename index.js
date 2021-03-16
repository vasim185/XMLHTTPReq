const container = document.querySelector("#container");
const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.eu/rest/v2/name/japan");
request.send();

request.addEventListener("load", function(){
  const [data] = JSON.parse(this.responseText);
  const HtmlData = `
  <div id= "card">
    <article class="card">
      <div class="card-body">
        <img src="${data.flag}" alt="" class="card-body-image">
        <h1 class="card-body-title">
          ${data.name}<span></span>
        </h1>
        <p class="card-body-text">
          capital : ${data.capital}
        </p>

      </div>
      <div class="card-footer">
        <div class="card-footer-social">
          <h3>${data.nativeName}</h3>
          <p>Native language      </p>
        </div>
        <div class="card-footer-social">
          <h3>${data.population}</h3>
          <p>Population</p>

        </div>
        <div class="card-footer-social">
          <h3>${data.demonym}</h3>
          <p>Denonym</p>

        </div>

      </div>

    </article>

  </div>

  `;
  container.insertAdjacentHTML("afterbegin", HtmlData);
})
