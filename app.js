const btnToday = document.querySelector("#btn-today");

btnToday.onclick = function () {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;
  document.querySelector("#date").textContent = today;
  setTimeout(() => {
    document.querySelector("#date").textContent = "";
  }, 3000);
};
