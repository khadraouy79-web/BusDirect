const seats = document.querySelectorAll(".seat");
let reservations = JSON.parse(
  localStorage.getItem("reservations")
) || [];

const modifyMessage = document.querySelector("#modifyMessage");


const reserveForm = document.querySelector("#reserveForm");
const reserveName = document.querySelector("#reserveName");
const reserveSeat = document.querySelector("#reserveSeat");

reserveForm.addEventListener("submit",function(event) {
  event.preventDefault();
  const passengerName = reserveName.value.trim();
  const selectedSeat = reserveSeat.value;
  if (passengerName ==="") {
    alert("Veuillez saisir votre nom.");
    return;
  }
 for (let i=0 ;i < seats.length; i++){
  if (seats[i].textContent.trim() === selectedSeat)
  {
    if (seats[i].disabled) {
      alert("Cette place est déjà réservée !")
      return;
    }
    seats[i].style.backgroundColor = "red";
    seats[i].disabled = true;
    seats[i].disabled =true;
   alert("Réservation effectuée pour " + passengerName)
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



modifyForm.addEventListener("submit",function(event){
  event.preventDefault();
  const passenger = modifyPassenger.value;
  const newName = modifyName.value.trim();
  const newSeat = modifySeat.value;
  if (passenger === "" || newName === ""){
    modifyMessage.textContent = "Veuillez remplir les champs.";
    return;
  }
  for (let i=0 ; i < seats.length ; i++){
    if (seats[i].textContent.trim() === selectedSeat) {
      if(seats[i].disabled) {
         alert("Cette place est déjà réservée !");
                return;

      }
      seats[i].style.backgroundColor = "red" ;
      seats[i].disabled = true;

      alert("Réservation effectuée pour" + passengerName);
      reserveForm.reset();
      return;
    }
  }
  alert("Place introuvable !");

});
    const oldSeat = document.querySelector(
       `.seat[data-passenger="${passenger}"]`
    );

    if (!oldSeat) {
        modifyMessage.textContent = "Passager introuvable.";
        return;
    }



function updateModifySeats() {
  modifySeat.innerHTML =
    '<option value="">Garder le siège actuel</option>';

  seats.forEach(function(seat) {
    const number = Number(seat.textContent.trim());

    const option = document.createElement("option");
    option.value = number;
    option.textContent = number;

    modifySeat.appendChild(option);
  });
}





//delete area
const deleteForm = document.querySelector("#deleteForm");
const deletePassenger = document.querySelector("#deletePassenger");

const availableCount = document.querySelector("#availableCount");
const occupiedCount = document.querySelector("#occupiedCount");
const revenue = document.querySelector("#revenue");

const PRICE = 100








