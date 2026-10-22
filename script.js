const seats = document.querySelectorAll(".seat");

const reserveForm = document.querySelector("#reserveForm");
const reserveName = document.querySelector("#reserveName");
const reserveSeat = document.querySelector("#reserveSeat");

reserveForm.addEventListener("submit",function(event) {
  event.preventDefault();
  const passengerName = reserveName.value.trim();
  const selectedSeat = reserveSeat.value;
  if (passengerName ==="" || selectedSeat === "" ) {
    altert("Veuillez saisir votre nom et choisir une place.");
    return;
  }
 for (let i=0 ;i < seats.length; i++){
  if (seats[i].textContent.trim() === selectedSeat)
  {
    if (seats[i].disabled) {
      alter("Cette place est déjà réservée !")
      return;
    }
    seats[i].style.backgroundColor = "red";
    seats[i].disabled = true;
    seats[i].disabled =true;
   alter("Réservation effectuée pour " + passengerName)
   reserveForm.reset();
   return
      }
    }
   }
  );









const modifyForm = document.querySelector("#modifyForm");
const modifyPassenger = document.querySelector("#modifyPassenger");
const modifyName = document.querySelector("#modifyName");
const modifySeat = document.querySelector("#modifySeat");

modifyName.addEventListener("submit",function(event){
  event.preventDefault();
  






const deleteForm = document.querySelector("#deleteForm");
const deletePassenger = document.querySelector("#deletePassenger");

const availableCount = document.querySelector("#availableCount");
const occupiedCount = document.querySelector("#occupiedCount");
const revenue = document.querySelector("#revenue");

const PRICE = 100
















