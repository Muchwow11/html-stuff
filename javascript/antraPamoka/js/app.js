let library = [
    {
        genre: "Life",
        books: [
            {
                name: "The Subtle Art of Not Giving a F*ck",
                author: "Mark Manson",
                year: "2017",
                pages: 192,
                ISBN: 9786098194029
            },
            {
                name: "Stipriau Uz Neapykanta",
                author: "Tim Guenard",
                year: 2015,
                pages: 278,
                ISBN: 9789955290247
            },
            {
                name: "Brajano Kirvis",
                author: "Gary Paulsen",
                year: 2008,
                pages: 192,
                ISBN: 9789955249542
            },
            {
                name: "Dievu Miskas",
                author: "Balys Sruoga",
                year: 1957,
                pages: 493,
                ISBN: 9789955236993
            }
        ]
    },
    {
        genre: "Karas",
        books: [
            {
                name: "Vakaru Fronte Nieko Naujo",
                author: "Erich Maria Remarque",
                year: 2021,
                pages: 320,
                ISBN: 9789955138594
            },
            {
                name: "SUN TZU KARO MENAS",
                author: "Sun Tzu",
                year: 2019,
                pages: 128,
                ISBN: 9786094840074
            },
            {
                name: "22-oji Islyga",
                author: "Joseph Heller",
                year: 2015,
                pages: 192,
                ISBN:  9786094441578
            },
            {
                name: "Maus",
                author: "Art Spiegelman",
                year: 1980,
                pages: 296,
                ISBN: 9786094270703
            },
        ]
    },
    {
        genre: "Fantastika",
        books: [
            {
                name: "Mirtingos Masinos",
                author: "Philip Reeve",
                year: 2004,
                pages: 255,
                ISBN: 9789955085966
            },
            {
                name: "Haris Poteris ir Isminties Akmuo",
                author: "J. K. Rowling",
                year: 1997,
                pages: 309,
                ISBN: 9986029198
            },
            {
                name: "451 Farenheito",
                author: "Ray Bradbury",
                year: 1953,
                pages: 256,
                ISBN: 9789955137085
            },
            {
                name: "Neuromancer",
                author: "William Gibson",
                year: 2021,
                pages: 271,
                ISBN: 9780441569595
            },
        ]
    }
];

    for (let list of library){
        for (genre in list){
            if (genre === "books"){
                for (let desc of list[genre]){
                    for (bookDescript in desc){
                        let year = desc["year"];
                        if (year >= 2021){
                            desc["name"] = desc["name"].concat(" (Nauja Versija)");
                            console.log(bookDescript + ": " + desc[bookDescript])
                        }else {
                            console.log(bookDescript + ": " + desc[bookDescript])
                        }
                    }
                    console.log("========")
                }
            } else {
                list["books"].Lenght;
                console.log(" ")
                console.log("Zanras: " + list[genre]);
                console.log(" ")
            }
        }
    }
