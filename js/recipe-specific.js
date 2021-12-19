// Fetch correct id

const specificRecipe = document.querySelector(".specific-recipe");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const corsFix = "https://noroffcors.herokuapp.com/";
const baseUrl = corsFix + "https://elisepedersen.no/test/wp-json/wp/v2/posts/" + id + "?_embed";


async function fetchRecipe() {
    try {
        const response = await fetch(baseUrl);
        const recipe = await response.json();

        console.log(recipe);

        document.title = `Veggie | ${recipe.title.rendered}`;

        specificRecipe.innerHTML = "";

        specificRecipe.innerHTML = `<h1>${recipe.title.rendered}</h1>
                                    <div class=recipe-information>
                                    <img "img src='${recipe._embedded["wp:featuredmedia"][0].source_url}'" alt='${recipe._embedded["wp:featuredmedia"][0].alt_text}' id=recipe-image>

                                    <div id=image-modal>
                                    <img "img src='${recipe._embedded["wp:featuredmedia"][0].source_url}'" alt='${recipe._embedded["wp:featuredmedia"][0].alt_text}'>
                                    </div>
                                    <div id=image-overlay image-modal-close></div>

                                    <p class=recipe-introduction>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <h2>What to do</h2>
                                    <p>${recipe.content.rendered}</p>
                                    </div>`
    } catch {
        specificRecipe.innerHTML = "<p>An error occured</p>"
    }  

    //Image modal
    const openImageModal = document.querySelector("#recipe-image");
    const infoImageModal = document.querySelector("#image-modal");
    const closeImageModal = document.querySelector("#image-overlay");
    const imageOverlay = document.querySelector("#image-overlay");

    function openImage() {
        if (openImageModal == null) return
        openImageModal.classList.add("active-image")
        infoImageModal.classList.add("active-image")
        imageOverlay.classList.add("active-image")
    };

    function closeImage() {
        if (closeImageModal == null) return
        closeImageModal.classList.remove("active-image")
        infoImageModal.classList.remove("active-image")
        imageOverlay.classList.remove("active-image")
    };

    openImageModal.addEventListener("click", openImage);

    closeImageModal.addEventListener("click", closeImage);

    imageOverlay.addEventListener("click", closeImage);
}

fetchRecipe();

