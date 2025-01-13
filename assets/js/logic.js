const target = document.getElementById("unsorted");

const myModal = document.getElementById('myModal');
const modal = new bootstrap.Modal(myModal); // Pass the element directly

const planButton = document.getElementById("planButton");
const seenButton = document.getElementById("seenButton");



// function readLocalStorage() {
//     return JSON.parse(localStorage.getItem("movies"));
// }

// function storeLocalStorage(data) {
//     const movieInfo = readLocalStorage();
//     movieInfo = data;
//     localStorage.setItem("movies", JSON.stringify(movieInfo))
// }

function buildElement (type, title, parent, attr, hasTextContent, isModal) {
    const element = document.createElement(type);

    Object.entries(attr).forEach(([key, value]) => {
        element.setAttribute(key, value);
    });

    if (hasTextContent) {
        element.textContent = title;
    }

    if (isModal) {       
        element.addEventListener("click", (event) => {
            const target = event.target;
            const movieTitle = document.querySelector(".modal-title");
            
            const dataMovie = target.parentElement.getAttribute("data-movie");
            
            modal.show();
            console.log(dataMovie)
            movieTitle.textContent = dataMovie;

            return dataMovie;
        });
    }
    
    parent.appendChild(element);
    
    return element;
};

function renderMovies () {
    for (let index = 0; index < movies.length; index++) {
        const imageURL = movies[index].image;
        const sectionEl = document.getElementById(movies[index].section);
        const title = movies[index].title;

        const section = buildElement("section", "", sectionEl, {"class": "card", "data-movie": title}, false, true);
        const img = buildElement("img", imageURL, section, {"src": imageURL}, false, false);
        const h5 = buildElement("h5", title, section, {"class": "card-title"}, true, false);
        
    }
};

function setSection (section) {
    for (let index = 0; index < movies.length; index++) {
        if (movies[index].title === dataMovie) {
            localStorage.setItem("section", movies)
        }
        
    }
}

renderMovies();
// console.log(movies);

planButton.addEventListener("click", function(event) {
    // localStorage.setItem
    console.log("Plan");
    modal.hide();
});

seenButton.addEventListener("click", function(event) {
    console.log("Seen");
    modal.hide();
})

// planButton.addEventListener("click", function(event) {
//     console.log("Plan");
// });

// seenButton.addEventListener("click", function(event) {
//     console.log("Seen");
// })


// Create arrays to sort out the movies (seen, plan, unsorted)

// create the remove element

// create the build element

// create the render element



// by clicking on an element, we select that element, choose where we want to put it 

// first we take the stored value from the objects, if they don't have one, set it to unsorted

// then we take where the object is being stored, and remove it, 

// we then take the selected section, and save that to the object over the previous placement

// we then build the object again, and use the newly saved section to place it where the user wants it