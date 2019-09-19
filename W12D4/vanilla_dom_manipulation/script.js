document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  const addLi = (e) => {
    e.preventDefault();
    const list = document.getElementById("sf-places");
    const favoritePlaceInputEl = document.getElementsByClassName("favorite-input")[0];
    const favoritePlace = favoritePlaceInputEl.value;
    favoritePlaceInputEl.value = "";
    const newLi = document.createElement("li");
    newLi.textContent = favoritePlace;
    list.appendChild(newLi);
  };

  document.querySelector(".list-container form").addEventListener("submit", addLi);



  // adding new photos

  const addImg = (e) => {
    e.preventDefault();
    const list = document.getElementsByClassName("dog-photos")[0];
    const dogPhotoInputEl = document.getElementsByClassName("photo-url-input")[0];
    const dogPhotoURL = dogPhotoInputEl.value;
    dogPhotoInputEl.value = "";
    const newLi = document.createElement("li");
    const newImg = document.createElement("img");
    newImg.src = dogPhotoURL;
    newLi.appendChild(newImg);
    list.appendChild(newLi);
  }

  const toggleForm = (e) => {
    e.preventDefault();
    const form = document.getElementsByClassName("photo-form-container")[0];
    form.className = form.className === "photo-form-container" ? "photo-form-container hidden" : "photo-form-container";
  }

  document.getElementsByClassName("photo-show-button")[0].addEventListener("click", toggleForm);
  document.querySelector(".photo-form-container form").addEventListener("submit", addImg);



});
