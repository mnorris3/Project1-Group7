const LoTR1 = {

    section: "unsorted",
    image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpgl",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: "2001",
    synopsis: "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
    chrono: "4"
}

const LoTR2 = {

    section: "unsorted",
    image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
    title: "The Lord of the Rings: The Two Towers",
    year: "2002",
    synopsis: "Frodo Baggins and the other members of the Fellowship continue on their sacred quest to destroy the One Ring--but on separate paths. Their destinies lie at two towers--Orthanc Tower in Isengard, where the corrupt wizard Saruman awaits, and Sauron's fortress at Barad-dur, deep within the dark lands of Mordor. Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard.",
    chrono: "5"
}

const LoTR3 = {

    section: "unsorted",
    image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    title: "The Lord of the Rings: The Return of the King",
    year: "2003",
    synopsis: "As armies mass for a final battle that will decide the fate of the world--and powerful, ancient forces of Light and Dark compete to determine the outcome--one member of the Fellowship of the Ring is revealed as the noble heir to the throne of the Kings of Men. Yet, the sole hope for triumph over evil lies with a brave hobbit, Frodo, who, accompanied by his loyal friend Sam and the hideous, wretched Gollum, ventures deep into the very dark heart of Mordor on his seemingly impossible quest to destroy the Ring of Power.​",
    chrono: "6"
}

const Hobbit1 = {

    section: "unsorted",
    image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/yHA9Fc37VmpUA5UncTxxo3rTGVA.jpg",
    title: "The Hobbit: An Unexpected Journey",
    year: "2012",
    synopsis: "Bilbo Baggins, a hobbit enjoying his quiet life, is swept into an epic quest by Gandalf the Grey and thirteen dwarves who seek to reclaim their mountain home from Smaug, the dragon.",
    chrono: "1"
}

const Hobbit2 = {

    section: "unsorted",
    image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xQYiXsheRCDBA39DOrmaw1aSpbk.jpg",
    title: "The Hobbit: The Desolation of Smaug",
    year: "2013",
    synopsis: "The Dwarves, Bilbo and Gandalf have successfully escaped the Misty Mountains, and Bilbo has gained the One Ring. They all continue their journey to get their gold back from the Dragon, Smaug.",
    chrono: "2"
}

const Hobbit3 = {

    section: "unsorted",
    image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xT98tLqatZPQApyRmlPL12LtiWp.jpg",
    title: "The Hobbit: The Battle of the Five Armies",
    year: "2014",
    synopsis: "Immediately after the events of The Desolation of Smaug, Bilbo and the dwarves try to defend Erebor's mountain of treasure from others who claim it: the men of the ruined Laketown and the elves of Mirkwood. Meanwhile an army of Orcs led by Azog the Defiler is marching on Erebor, fueled by the rise of the dark lord Sauron. Dwarves, elves and men must unite, and the hope for Middle-Earth falls into Bilbo's hands.",
    chrono: "3"
}

const movies = [LoTR1, LoTR2, LoTR3, Hobbit1, Hobbit2, Hobbit3];

// localStorage.setItem("movies", JSON.stringify(movies));


// Create arrays to sort out the movies (seen, plan, unsorted)

// create the remove element

// create the build element

// create the render element




// by clicking on an element, we select that element, choose where we want to put it 

// first we take the stored value from the objects, if they don't have one, set it to unsorted

// then we take where the object is being stored, and remove it, 

// we then take the selected section, and save that to the object over the previous placement

// we then build the object again, and use the newly saved section to place it where the user wants it

