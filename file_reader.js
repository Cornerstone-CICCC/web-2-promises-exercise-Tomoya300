const fs = require("fs").promises;

function result(val1, val2, val3, val4, val5, callbackFn) {
    callbackFn(`${val1} ${val2} is ${val3} and his hobbies are ${val4} and ${val5}.`)
}

// THEN-CATCH SOLUTION BELOW THIS LINE

//firstname.txt contains John
//lastname.txt contains Smith
//age.txt contains 50
//hobbies.txt contains ["swimming", "dancing"]

fs.readFile("./firstname.txt", "utf-8")
.then((data1) => {
    let firstN = data1
    return fs.readFile("./lastname.txt", "utf-8")
    .then((data2) => {
        let lastN = data2
        return fs.readFile("./age.txt", "utf-8")
        .then((data3) => {
            let cAge = data3
            return fs.readFile("./hobbies.txt", "utf-8")
            .then((data4) => {
                let arrayHb = JSON.parse(data4)
                let hb1 = arrayHb[0]
                let hb2 = arrayHb[1]
                result(firstN, lastN, cAge, hb1, hb2, show => {
                    console.log(show)
                })
            })
        })
    })
})


Promise.all([
    fs.readFile("./firstname.txt", "utf-8"),
    fs.readFile("./lastname.txt", "utf-8"),
    fs.readFile("./age.txt", "utf-8"),
    fs.readFile("./hobbies.txt", "utf-8"),
])

.then(([firsName, lastName, age, hobbies]) => {
    let arrHobbies = JSON.parse(hobbies)
    let hobby1 = arrHobbies[0]
    let hobby2 = arrHobbies[1]
    console.log(firsName)
    console.log(lastName)
    console.log(age)
    console.log(hobby1)
    console.log(hobby2)
    result(firsName, lastName, age, hobby1, hobby2, introduce => {
        console.log(introduce)
    })
})
.catch((err) => {
    console.log(err)
})

// ASYNC/AWAIT SOLUTION BELOW THIS LINE
let person = async() => {
    try {
        let [fName, lName, crrAge, hobbies] = await Promise.all([
            fs.readFile("./firstname.txt", "utf-8"),
            fs.readFile("./lastname.txt", "utf-8"),
            fs.readFile("./age.txt", "utf-8"),
            fs.readFile("./hobbies.txt", "utf-8"),
        ])
        let newHobbies = JSON.parse(hobbies)
        let hbs1 = newHobbies[0]
        let hbs2 = newHobbies[1]
        result(fName, lName, crrAge, hbs1, hbs2, sentence => {
            console.log(sentence)
        })
    } catch (error) {
        console.error(error)
    }
}

console.log(person)
person()

async function sample() {
    try {
        let file1 = await fs.readFile("./firstname.txt", "utf-8")
        let file2 = await fs.readFile("./lastname.txt", "utf-8")
        let file3 = await fs.readFile("./age.txt", "utf-8")
        let file4 = await fs.readFile("./hobbies.txt", "utf-8")
        let arrHb = JSON.parse(file4)
        let hisHb1 = arrHb[0]
        let hisHb2 = arrHb[1]
        result(file1, file2, file3, hisHb1, hisHb2, func => {
            console.log(func)
        }) 
    } catch(err) {
        console.log(err)
    }
}

sample()