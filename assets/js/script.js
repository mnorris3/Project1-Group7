const LoTR1 = {

    section: "",
    image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpgl",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: "2001",

    chrono: "4"
}

const LoTR2 = {

    section: "",
    image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
    title: "The Lord of the Rings: The Two Towers",
    year: "2002",

    chrono: "5"
}

const LoTR3 = {

    section: "",
    image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    title: "The Lord of the Rings: The Return of the King",
    year: "2003",

    chrono: "6"
}

const Hobbit1 = {

    section: "",
    image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/yHA9Fc37VmpUA5UncTxxo3rTGVA.jpg",
    title: "The Hobbit: An Unexpected Journey",
    year: "2012",

    chrono: "1"
}

const Hobbit2 = {

    section: "",
    image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xQYiXsheRCDBA39DOrmaw1aSpbk.jpg",
    title: "The Hobbit: The Desolation of Smaug",
    year: "2013",

    chrono: "2"
}

const Hobbit3 = {

    section: "",
    image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xT98tLqatZPQApyRmlPL12LtiWp.jpg",
    title: "The Hobbit: The Battle of the Five Armies",
    year: "2014",
    chrono: "3"
}

const movies = [LoTR1, LoTR2, LoTR3, Hobbit1, Hobbit2, Hobbit3];

localStorage.setItem("movies", JSON.stringify(movies));


// Create arrays to sort out the movies (seen, plan, unsorted)

// create the remove element

// create the build element

// create the render element




// by clicking on an element, we select that element, choose where we want to put it 

// first we take the stored value from the objects, if they don't have one, set it to unsorted

// then we take where the object is being stored, and remove it, 

// we then take the selected section, and save that to the object over the previous placement

// we then build the object again, and use the newly saved section to place it where the user wants it

