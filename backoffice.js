const form = document.querySelector("form");
const param = new URLSearchParams(window.location.search);
const id = param.get("appId");
const method = id ? "PUT" : "POST";
const URL = id
  ? "https://striveschool-api.herokuapp.com/api/product/" + id
  : "https://striveschool-api.herokuapp.com/api/product/";

const btn = document.getElementById("btn");

btn.innerText = id ? "Salva modifiche" : "Carica prodotto";

if (id) {
  const btnDelete = document.getElementById("btnDelete");
  btnDelete.addEventListener("click", (e) => {
    fetch(URL, {
      method: "DELETE",
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
        alert("prodotto eliminato con successo");
      });
  });
  btnDelete.classList.remove("d-none");
  fetch(URL, {
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
      document.getElementById("nameProduct").value = obj.name;
      document.getElementById("descriptionProduct").value = obj.description;
      document.getElementById("brandProduct").value = obj.brand;
      document.getElementById("priceProduct").value = obj.price;
      document.getElementById("imgProduct").value = obj.imageUrl;
    });
}

//funzione crea oggetto al server post
const createOrSaveObj = (e) => {
  e.preventDefault();

  const Obj = {
    name: document.getElementById("nameProduct").value,
    description: document.getElementById("descriptionProduct").value,
    brand: document.getElementById("brandProduct").value,
    price: document.getElementById("priceProduct").value,
    imageUrl: document.getElementById("imgProduct").value,
  };

  fetch(URL, {
    method: method,
    body: JSON.stringify(Obj),
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
      customAlert(id);
    });
};

const customAlert = (id) => {
  if (id) {
    alert("operazione di modifica completata");
  } else alert("operazione di caricamento prodotto completata");
};

window.onload = () => {
  form.addEventListener("submit", createOrSaveObj);
};

const btnReset = document.getElementById("btnReset");

btnReset.addEventListener("click", (e) => {
  formreset();
});

const formreset = () => {
  document.getElementById("nameProduct").value = " ";
  document.getElementById("descriptionProduct").value = " ";
  document.getElementById("brandProduct").value = " ";
  document.getElementById("priceProduct").value = " ";
  document.getElementById("imgProduct").value = " ";
};
