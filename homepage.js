const URL = "https://striveschool-api.herokuapp.com/api/product/";

window.onload = () => {
  fetch(URL, {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjFhYjJkZDZjMjA3NTAwMTk4N2ZkNDMiLCJpYXQiOjE3MTMwMjU3NTgsImV4cCI6MTcxNDIzNTM1OH0.n41WQndBhqofnLE2f1kYMbtfiMmEI0SHy6V2wmp9vy8",
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log(response);
        return response.json();
      } else {
        throw new Error("errore nella fecth");
      }
    })

    .then((oggetto) => {
      oggetto.forEach((element) => {
        const row = document.getElementById("rowcat");
        row.classList.add("gap-4");
        row.innerHTML += `
         <div class="card mb-3" style="max-width: 400px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${element.imageUrl}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <p class="card-text">${element.description}</p>
        <p class="card-text"><small class="text-body-secondary">${element.brand}</small></p>
        <p class="card-text"><small class="text-body-secondary">${element.price}</small></p>
        <a class="btn btn-primary" href="details.html?appId=${element._id}">Dettaglio</a>
       
      </div>
    </div>
  </div>
</div>`;
      });
    });
};
