 // Callbacks

 // Callbacks are a functions that are passed to other functions as Parameters - so they will call that functions
 // after they finish doing their other staffs.


 // Callbacks exmaple

 function firstFunction (parameters, callback) {
    // do staff
    callback()

 }

 // AKA callback hell
//  firstFunction(parameter, function() {

//     secondFunction(para, function(){
//         thirdFunction(para, function(){

//         })
//     })
//  })

// Fetch Api, returns a PROMISE !
 // Promises
 // We have 3 states: Pending, Fullfiled, Rejected , promises delivers async code, while js is mostly synchronous

//  const myPromise = new Promise((resolve, reject) => {
//     const error = false
//     if(!error) {
//         resolve("Yes! resloved the promise!")
//     }
//     else {
//         reject("No! rejected the promise")
//     }
//  })


//  myPromise
//  .then(value => {
//     return value + 1
//  })
//  .then(newValue => {
//         console.log(newValue)
//  })
//  .catch(err => {
//     console.log(err)
//  })



//  const myNextPromise = new Promise((resolve, reject) => {
//     setTimeout(function() {
//             resolve("myNextPromise resolved!")
//     }, 3000);
//  })

//  myNextPromise
//  .then(value => {
//     console.log(value)
//  })

//  myPromise
//  .then(value => {
//     console.log(value)
//  })


//  const users = fetch("https://jsonplaceholder.typicode.com/users")

// pending



// const users = fetch("https://jsonplaceholder.typicode.com/users")
//  .then(response => {
//     console.log(response)
//     return response.json()
//  })
//  .then(data => {
//     data.forEach(user => {
//         console.log(user)
//     })
//  })

 
// console.log(users)



// Async/Await

// const myUsers = { 
//     userList : []
// }


// const myCoolFunction = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const jsonUserData = await response.json()
//     return jsonUserData;
// }



// const anotherFunction = async () => {
//     const data = await myCoolFunction();
//     console.log(data)
//     myUsers.userList = data
// }

// anotherFunction()
// console.log(myUsers.userList)

// const users = fetch("https://jsonplaceholder.typicode.com/users")
//  .then(response => {
//     console.log(response)
//     return response.json()
//  })
//  .then(data => {
//     data.forEach(user => {
//         console.log(user)
//     })
//  })

// 2nd parameter of fetch is a object

// headers are nested objecets

// const jokeObj = 
// {
//     id: 'JeVDI6EBIe', 
//     joke: "I've just written a song about a tortilla. Well, it is more of a rap really."

// }



// const postDadJoke = async (jokeObj) => {
//     const reponse = await fetch("https://httpbin.org/post", {
//         method: 'POST',
//         headers: {
//             "Content-type" : "application/json"
//         },
//         body: JSON.stringify(jokeObj)
//     })

//     const jsonReponse = await reponse.json()
//     console.log(jsonReponse)

// }

// postDadJoke(jokeObj)




// & -- chains parameters together

// abstract into functions


const getDatafromForm = () => {
    const requestObject = {
        firstName: 'Bruce',
        lastName: 'Lee',
        categoties: ["nerdy"]
    }

    return requestObject
}

const buildRequstUrl = (requestData) => {
    return `http://api.icndb.com/jokes/random?firstname=${requestData.firstName}&lastname=${requestData.lastName}&limitTo=${requestData.categoties}`
}

const requestJoke = async (url) => {
    const reponse = await fetch(url)
    const jsonReponse = await reponse.json()
    const jokeArray = jsonReponse.value
    postJokeToPage(jokeArray)
}

const postJokeToPage = (joke) => {
    console.log(joke)
}

// procedural workflow function

const processJokeRequest = async () => {
    const requestData = getDatafromForm()
    const buildRequstUrl = buildRequstUrl(requestData)
    await requestJoke(url)
    console.log("finished !")
}



















// const getDadJoke = async (jokeObj) => {
//     const response = await fetch("https://icanhazdadjoke.com", {
//         method: 'GET',
//         headers: {
//             Accept: "application/json"
//         }
//     })
//     const jsonJokeData = await response.json()
//     console.log(jsonJokeData);

// }

// getDadJoke()




// const getAllUserEmails = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const jsonUserData = await response.json()

//     const userEmailArray = jsonUserData.map(user => {
//         return user.email
//     })

//     postToWebPage(userEmailArray)
// }

// const postToWebPage = (data) => {

//     console.log(data)

// }

// getAllUserEmails()