//Search
const openSearchModal = document.querySelector(".search-icon");
const infoSearchModal = document.querySelector(".search-modal");
const closeSearchModal = document.querySelector(".search-modal-close");
const overlay = document.querySelector(".overlay");
const hamburgerIcon = document.querySelector(".hamburger-icon");

function openSearch(modal) {
    if (openSearchModal == null) return
    openSearchModal.classList.add("active-search-modal")
    infoSearchModal.classList.add("active-search-modal")
    hamburgerIcon.classList.add("remove-hamburger")
    overlay.classList.add("active-search-modal")
};

function closeSearch(modal) {
    if (closeSearchModal == null) return
    closeSearchModal.classList.remove("active-search-modal")
    infoSearchModal.classList.remove("active-search-modal")
    hamburgerIcon.classList.remove("remove-hamburger")
    overlay.classList.remove("active-search-modal")
};

openSearchModal.addEventListener("click", openSearch);

closeSearchModal.addEventListener("click", closeSearch);

overlay.addEventListener("click", closeSearch);

//Hamburger menu

const navigation = document.querySelector(".navigation-cta");
const hamburger= document.querySelector(".hamburger");

function toggleMenu() {
  if (navigation.classList.contains("showMenu")) {
    navigation.classList.remove("showMenu");
  } else {
    navigation.classList.add("showMenu");
  }
}

hamburger.addEventListener("click", toggleMenu);

//Back button

const previousPageButton = document.querySelector(".previous-page-section");


function previousPage() {
    window.history.back();
}

previousPageButton.addEventListener(("click"), previousPage);