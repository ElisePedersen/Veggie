// Scrollbar

const corsFix = "https://noroffcors.herokuapp.com/";
const baseUrl = corsFix + "https://elisepedersen.no/test/wp-json/wp/v2/posts?per_page=6&_embed";
const scrollbar = document.querySelector(".home-scrollbar");

async function getRecent(baseUrl){
    const response = await fetch(baseUrl);
    const recent = await response.json();
    console.log(recent);

    scrollbar.innerHTML=""
    try {
        for (let i = 0; i < recent.length; i++) {
            if (recent[i]) {
                scrollbar.innerHTML += `<a href="recipe-specific.html?id=${recent[i].id}" class=scrollbar-recipes>
                                            <img "img src='${recent[i]._embedded["wp:featuredmedia"][0].source_url}'" alt='${recent[i]._embedded["wp:featuredmedia"][0].alt_text}'>
                                            <div class=scrollbar-text>
                                            <h2>${recent[i].title.rendered}</h2>
                                            <p>${recent[i].excerpt.rendered}</p>
                                            </div>
                                            </a>`
            } else {
                scrollbar.innerHTML += "";
            }    
        }
    }catch(error) {
        console.log(error)
        scrollbar.innerHTML = '<p>An error occurred</p>'
    }

    const recipes = document.querySelectorAll(".scrollbar-recipes");
    const forward = document.querySelector(".scrollbar-forward");
    const back = document.querySelector(".scrollbar-back");

    recipes.forEach(function(recipe) {
        forward.onclick = function(event) {
            scrollbar.scrollLeft += 958;  
        }
        back.onclick = function(event) {
            scrollbar.scrollLeft += -958;
        }
    })
}

getRecent(baseUrl);               