(function (){
let library = [
    {
        genre: "Life",
        books: [
            {
                name: '"The Subtle Art of Not Giving a F*ck"',
                author: "Mark Manson",
                year: "2017",
                pages: 192,
                price: 9,
                ISBN: 9786098194029
            },
            {
                name: '"Stipriau Uz Neapykanta"',
                author: "Tim Guenard",
                year: 2015,
                pages: 278,
                price: 30,
                ISBN: 9789955290247
            },
            {
                name: '"Brajano Kirvis"',
                author: "Gary Paulsen",
                year: 2008,
                pages: 192,
                price: 2,
                ISBN: 9789955249542
            },
            {
                name: '"Dievu Miskas"',
                author: '"Balys Sruoga"',
                year: 1957,
                pages: 493,
                price: 3,
                ISBN: 9789955236993
            }
        ]
    },
    {
        genre: "Karas",
        books: [
            {
                name: '"Vakaru Fronte Nieko Naujo"',
                author: "Erich Maria Remarque",
                year: 2021,
                pages: 320,
                price: 19,
                ISBN: 9789955138594
            },
            {
                name: '"SUN TZU KARO MENAS"',
                author: "Sun Tzu",
                year: 2019,
                pages: 128,
                price: 16,
                ISBN: 9786094840074
            },
            {
                name: '"22-oji Islyga"',
                author: "Joseph Heller",
                year: 2015,
                pages: 192,
                price: 5,
                ISBN:  9786094441578
            },
            {
                name: "Maus",
                author: '"Art Spiegelman"',
                year: 1980,
                pages: 296,
                price: 18,
                ISBN: 9786094270703
            },
        ]
    },
    {
        genre: "Fantastika",
        books: [
            {
                name: '"Mirtingos Masinos"',
                author: "Philip Reeve",
                year: 2004,
                pages: 255,
                price: 9,
                ISBN: 9789955085966
            },
            {
                name: '"Haris Poteris ir Isminties Akmuo"',
                author: "J. K. Rowling",
                year: 1997,
                pages: 309,
                price: 10,
                ISBN: 9986029198
            },
            {
                name: '"451 Farenheito"',
                author: "Ray Bradbury",
                year: 1953,
                pages: 256,
                price: 15,
                ISBN: 9789955137085
            },
            {
                name: '"Neuromancer"',
                author: "William Gibson",
                year: 2021,
                pages: 271,
                price: 5,
                ISBN: 9780441569595
            },
        ]
    },
];


    for (let list of library){
        for (let genre in list){
            if (genre === "books"){
                for (let desc of list[genre]){
                    for (let bookDescript in desc){
                        let year = desc["year"];
                        if ( year >= 2021){
                            desc["name"] = desc["name"].concat(" |Nauja Versija|");
                            console.log(bookDescript + ": " + desc[bookDescript])
                        }else{
                            console.log(bookDescript + ": " + desc[bookDescript])
                        }

                    }
                    console.log("========")
                }
            } else {
                console.log(" ")
                console.log("Zanras: " + list[genre]);
                console.log(" ")
            }
        }
    }


    // let library = [
    //     {
    //         Life: [
    //             {
    //                 name: '"The Subtle Art of Not Giving a F*ck"',
    //                 author: "Mark Manson",
    //                 year: "2017",
    //                 pages: 192,
    //                 price: 9,
    //                 ISBN: 9786098194029
    //             },
    //             {
    //                 name: '"Stipriau Uz Neapykanta"',
    //                 author: "Tim Guenard",
    //                 year: 2015,
    //                 pages: 278,
    //                 price: 30,
    //                 ISBN: 9789955290247
    //             },
    //             {
    //                 name: '"Brajano Kirvis"',
    //                 author: "Gary Paulsen",
    //                 year: 2008,
    //                 pages: 192,
    //                 price: 2,
    //                 ISBN: 9789955249542
    //             },
    //             {
    //                 name: '"Dievu Miskas"',
    //                 author: '"Balys Sruoga"',
    //                 year: 1957,
    //                 pages: 493,
    //                 price: 3,
    //                 ISBN: 9789955236993
    //             }
    //         ]
    //     },
    //     {
    //         Karas: [
    //             {
    //                 name: '"Vakaru Fronte Nieko Naujo"',
    //                 author: "Erich Maria Remarque",
    //                 year: 2021,
    //                 pages: 320,
    //                 price: 19,
    //                 ISBN: 9789955138594
    //             },
    //             {
    //                 name: '"SUN TZU KARO MENAS"',
    //                 author: "Sun Tzu",
    //                 year: 2019,
    //                 pages: 128,
    //                 price: 16,
    //                 ISBN: 9786094840074
    //             },
    //             {
    //                 name: '"22-oji Islyga"',
    //                 author: "Joseph Heller",
    //                 year: 2015,
    //                 pages: 192,
    //                 price: 5,
    //                 ISBN: 9786094441578
    //             },
    //             {
    //                 name: "Maus",
    //                 author: '"Art Spiegelman"',
    //                 year: 1980,
    //                 pages: 296,
    //                 price: 18,
    //                 ISBN: 9786094270703
    //             },
    //         ]
    //     },
    //     {
    //         Fantastika: [
    //             {
    //                 name: '"Mirtingos Masinos"',
    //                 author: "Philip Reeve",
    //                 year: 2004,
    //                 pages: 255,
    //                 price: 9,
    //                 ISBN: 9789955085966
    //             },
    //             {
    //                 name: '"Haris Poteris ir Isminties Akmuo"',
    //                 author: "J. K. Rowling",
    //                 year: 1997,
    //                 pages: 309,
    //                 price: 10,
    //                 ISBN: 9986029198
    //             },
    //             {
    //                 name: '"451 Farenheito"',
    //                 author: "Ray Bradbury",
    //                 year: 1953,
    //                 pages: 256,
    //                 price: 15,
    //                 ISBN: 9789955137085
    //             },
    //             {
    //                 name: '"Neuromancer"',
    //                 author: "William Gibson",
    //                 year: 2021,
    //                 pages: 271,
    //                 price: 5,
    //                 ISBN: 9780441569595
    //             },
    //         ]
    //     },
    // ];


// function lowprice(){
//     let cheap = []
//
//     for (let books of library){
//         for (let genre in books){
//             for (let each of books[genre]){
//                 for(let desc in each){
//                     cheap.push(each)
//                 }
//             }
//         }
//     }
//     let cheap2 = cheap.sort(function (a,b){
//         return a.price - b.price;
//     });
//
//     return cheap2[0]
//
// }
//
// console.log(lowprice())

    // console.log(highPrice())
    //
    // function highPrice() {
    //     let cheap = []
    //
    //     for (let books of library) {
    //         for (let genre in books) {
    //             for (let each of books[genre]) {
    //                 for (let desc in each) {
    //                     cheap.push(each)
    //                 }
    //             }
    //         }
    //     }
    //     let cheap2 = cheap.map(x => (x.price * 1.1).toFixed());
    //
    //     return cheap2;
    // }



    // function highPrice() {
    //     let cheap = []
    //     for (let books of library) {
    //         for (let genre in books) {
    //             for (let each of books[genre]) {
    //                 for (let desc in each) {
    //                     cheap.push(each)
    //                 }
    //             }
    //         }
    //     }
    //     let cheap2 = cheap.reduce(function (a, b){
    //         return Math.max(a.price, b.price);
    //     });
    //
    //     return cheap2;
    // }
    //
    // console.log(highPrice())


})();