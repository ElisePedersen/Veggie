// Get recipes 
const corsFix = "https://noroffcors.herokuapp.com/";
const baseUrl = corsFix + "https://elisepedersen.no/test/wp-json/wp/v2/posts?_embed";
const recipesSection = document.querySelector(".recipes-section");

async function getPosts(baseUrl){
    const response = await fetch(baseUrl);
    const posts = await response.json();
    console.log(posts);

    recipesSection.innerHTML = "";

    try {
        for (let i = 0; i < posts.length; i++) {
            if (posts[i]) {
                recipesSection.innerHTML += `<a href="recipe-specific.html?id=${posts[i].id}" class=recipes>
                                            <img "img src='${posts[i]._embedded["wp:featuredmedia"][0].source_url}'" alt='${posts[i]._embedded["wp:featuredmedia"][0].alt_text}'>
                                            <div class=recipes-text>
                                            <h2>${posts[i].title.rendered}</h2>
                                            <p>${posts[i].excerpt.rendered}</p>
                                            </div>
                                            </a>`
            } else {
                recipesSection.innerHTML += "";
        }  
    }
    }catch(error) {
        console.log(error)
        recipesSection.innerHTML = '<p>An error occurred</p>'
    }
}

getPosts(baseUrl);

// Show more button


const newUrl = corsFix + "https://elisepedersen.no/test/wp-json/wp/v2/posts?page=2&_embed";
const showMore = document.querySelector(".show-more");

async function getMore(newUrl) {
    const response = await fetch(newUrl);
    const more = await response.json();
    console.log(more);

    function morePosts() {
        for (let i = 0; i < more.length; i++) {
            if (showMore === null) return
            recipesSection.innerHTML += `<a href="recipe-specific.html?id=${more[i].id}" class=recipes>
            <img "img src='${more[i]._embedded["wp:featuredmedia"][0].source_url}'" alt='${more[i]._embedded["wp:featuredmedia"][0].alt_text}'>
            <div class=recipes-text>
            <h2>${more[i].title.rendered}</h2>
            <p>${more[i].excerpt.rendered}</p>
            </div>
            </a>` 
        } if (showMore === null) return
            showMore.style.display = "none";
        
    } 

        showMore.addEventListener("click", morePosts);
};  

getMore(newUrl);

//Filter recipes

// const filterUrl = corsFix + "https://elisepedersen.no/test/wp-json/wp/v2/posts?_embed";
// let lunch = document.querySelector(".lunch");

// async function getFilteredPosts(filterUrl){
//     const response = await fetch(filterUrl);
//     const filter = await response.json();
//     console.log(filter);

//     recipesSection.innerHTML = "";

//     try {
//         for (let i = 0; i < filter.length; i++) {
//             if (filter[i].categories[1]) {
//                 console.log("success")
//                 recipesSection.innerHTML += `<a href="recipe-specific.html?id=${filter[i].id}" class=recipes>
//                                             <img "img src='${filter[i]._embedded["wp:featuredmedia"][0].source_url}'" alt='${filter[i]._embedded["wp:featuredmedia"][0].alt_text}'>
//                                             <div class=recipes-text>
//                                             <h2>${filter[i].title.rendered}</h2>
//                                             <p>${filter[i].excerpt.rendered}</p>
//                                             </div>
//                                             </a>`
//             } else {
//                 recipesSection.innerHTML += "";
//         }  
//     }
//     }catch(error) {
//         console.log(error)
//         recipesSection.innerHTML = '<p>An error occurred</p>'
//     }
// }

// lunch.addEventListener("click", getFilteredPosts(filterUrl));

