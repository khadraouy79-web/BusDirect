const seats = document.querySelectorAll(".seat");

const reserveForm = document.querySelector("#reserveForm");
const reserveName = document.querySelector("#reserveName");
const reserveSeat = document.querySelector("#reserveSeat");

const modifyForm = document.querySelector("#modifyForm");
const modifyPassenger = document.querySelector("#modifyPassenge");
const modifyName = document.querySelector("#modifyName");
const modifySeat = document.querySelector("#const modifySeat");

const deleteForm = document.querySelector("#deleteForm");
const deletePassenger = document.querySelector("#deletePassenger");

const availableCount = document.querySelector("#availableCount");
const occupiedCount = document.querySelector("#occupiedCount");
const revenue = document.querySelector("#revenue");



let reservations = JSON.parse(
  localStorage.getItem("busReservations")
) || [];

function saveReservations() {
  localStorage.setItem(
    "busReservations",
    JSON.stringify(reservations)
  );
}










