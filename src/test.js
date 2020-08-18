const fetch = require("node-fetch");

// want to mock curl https://api.github.com/users/chrisngyn
// let basicUserStats = fetch("https://api.github.com/users/chrisngyn")
//     .then(response => response.json())
//     .then(data => console.log(data))


// want to mock curl -i https://api.github.com/users/chrisngyn
// let test1 = fetch("https://api.github.com/users/chrisngyn")
//     .then(response => response.headers.raw())
//     .then(data => console.log(data))


// curl -u "username" https://api.github.com
// let test2 = fetch("https://api.github.com", {
//     headers: {
//         'Authorization': 'chrisngyn'
//     }
// }).then(response => response.json())
//   .then(data => console.log(data))


// curl https://api.github.com/chrisngyn/repos
// let userPublicRepos = fetch("https://api.github.com/users/chrisngyn/repos")  // [ {}, {}, {} ]
//     .then(response => response.json())
//     .then(data => cleanData(data))

// function cleanData(data) {
//     console.log('You have: ' + length(data) + " public repositories!")

//     data.forEach(element => {
//         console.log(element["name"])
//     });
// }


// curl -H 'Authorization: token TOKEN' https://api.github.com/chrisngyn/repos
let userPrivateRepos = fetch("https://api.github.com/users/chrisngyn/repos", {
    headers: {
        "Authorization": "token "
    }
})
    .then(response => response.json())
    .then(data => cleanData2(data))

function cleanData2(data) {
    console.log('You have: ' + length(data) + " private repositories!")

    data.forEach(element => {
        console.log(element["name"])
    });
}