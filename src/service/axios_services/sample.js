const arrayOfObjects = [
     {
        "id": 1,
        "type": "general",
        "setup": "What did the fish say when it hit the wall?",
        "punchline": "Dam."
    },
    {
        "id": 2,
        "type": "general",
        "setup": "How do you make a tissue dance?",
        "punchline": "You put a little boogie on it."
    },
    {
        "id": 3,
        "type": "programming",
        "setup": "What's Forrest Gump's password?",
        "punchline": "1Forrest1"
    }
]
     
 


const filteredArray = arrayOfObjects.filter(obj => obj.type="programming")

console.log(filteredArray);

// const responseData=[
//     {
//         "id": 1,
//         "type": "general",
//         "setup": "What did the fish say when it hit the wall?",
//         "punchline": "Dam."
//     },
//     {
//         "id": 2,
//         "type": "general",
//         "setup": "How do you make a tissue dance?",
//         "punchline": "You put a little boogie on it."
//     },
//     {
//         "id": 3,
//         "type": "programming",
//         "setup": "What's Forrest Gump's password?",
//         "punchline": "1Forrest1"
//     }
// ]

// const filteredArray =responseData.filter(obj => obj.type ="programming")

// console.log(filteredArray);