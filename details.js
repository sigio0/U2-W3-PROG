const param = new URLSearchParams(window.location.search);
const URL = "https://striveschool-api.herokuapp.com/api/product/";
const id = param.get("appId");
window.onload = () => {
  fetch(URL + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjFhYjJkZDZjMjA3NTAwMTk4N2ZkNDMiLCJpYXQiOjE3MTMwMjU3NTgsImV4cCI6MTcxNDIzNTM1OH0.n41WQndBhqofnLE2f1kYMbtfiMmEI0SHy6V2wmp9vy8",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })

    .then((obj) => {
      const container = document.getElementById("dettaglio");
      container.innerHTML += `
<div class="card mb-3">
<div class="row g-0 align-items-center">
  <div class="col-md-4">
    <img
      src="${obj.imageUrl}"
      class="img-fluid rounded-start"
      alt="immagine dettagliata"
    />
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${obj.name}</h5>
      <p class="card-text">
        ${obj.description}
      </p>
      <p class="card-text">
        ${obj.brand}
      </p>
      <p class="card-text">
        ${obj.price}
      </p>
      <button class="btn btn-success" onclick="changeSubmit()">MODIFICA</button>
    </div>
  </div>
</div>
</div>`;
    });
};

const changeSubmit = () => {
  window.location.href = "backoffice.html?appId=" + id;
};
