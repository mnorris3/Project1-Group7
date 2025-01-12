const mainEl = document.getElementById("unsorted")

const target = document.getElementById("unsorted");



// function readLocalStorage() {
//     return JSON.parse(localStorage.getItem("movies"));
// }

// function storeLocalStorage(data) {
//     const movieInfo = readLocalStorage();
//     movieInfo = data;
//     localStorage.setItem("movies", JSON.stringify(movieInfo))
// }

function buildElement (type, title, parent) {
    const element = document.createElement(type);

    if (type === "img") {
        element.setAttribute("src", title);
        element.setAttribute("class", "card-img-top");
    } else if (type === "section"){
        element.setAttribute("class", "card");
    } else {
        element.textContent = title;
        element.setAttribute("class", "card-title");
    }
    

    parent.appendChild(element);
    
    return element;
};

function renderMovies () {
    for (let index = 0; index < movies.length; index++) {
        const section = buildElement("section", "", mainEl);
        const img = buildElement("img", movies[index].image, section);
        const h5 = buildElement("h5", movies[index].title, section);
        
    }
};

renderMovies();
// console.log(movies);

// target.addEventListener("click", () => {
//     console.log(event.target); 
// });



// Create arrays to sort out the movies (seen, plan, unsorted)

// create the remove element

// create the build element

// create the render element



// by clicking on an element, we select that element, choose where we want to put it 

// first we take the stored value from the objects, if they don't have one, set it to unsorted

// then we take where the object is being stored, and remove it, 

// we then take the selected section, and save that to the object over the previous placement

// we then build the object again, and use the newly saved section to place it where the user wants it