const car = document.getElementById("car");
const place = document.getElementById("place");
const color = document.getElementById("color");
const sport = document.getElementById("sport");
const chcar = document.getElementById("chcar");
const chplace = document.getElementById("chplace");
const chcolor = document.getElementById("chcolor");
const chsport = document.getElementById("chsport");
const butter = document.getElementById("butty");

butter.addEventListener("click", () => {
  let chcarDescr = "";
  let chplaceDescr = "";
  let chcolorDescr = "";
  let chsportDescr = "";
  chcar.innerHTML = "Your car choice was";
  chplace.innerHTML = "Your place choice was";
  chcolor.innerHTML = "Your color choice was";
  chsport.innerHTML = "Your sport choice was";

  let carChoices = car.selectedOptions;
  chcarDescr = chcar.innerHTML;
  for (let i = 0; i < carChoices.length; i++) {
    chcarDescr += " " + carChoices[i].label;
  }
  chcar.innerHTML = chcarDescr;

  let placeChoices = place.selectedOptions;
  chplaceDescr = chplace.innerHTML;
  for (let i = 0; i < placeChoices.length; i++) {
    chplaceDescr += " " + placeChoices[i].label;
  }
  chplace.innerHTML = chplaceDescr;

  let colorChoices = color.selectedOptions;
  chcolorDescr = chcolor.innerHTML;
  for (let i = 0; i < colorChoices.length; i++) {
    chcolorDescr += " " + colorChoices[i].label;
  }
  chcolor.innerHTML = chcolorDescr;

  let sportChoices = sport.selectedOptions;
  chsportDescr = chsport.innerHTML;
  for (let i = 0; i < sportChoices.length; i++) {
    chsportDescr += " " + sportChoices[i].label;
  }
  chsport.innerHTML = chsportDescr;
});
