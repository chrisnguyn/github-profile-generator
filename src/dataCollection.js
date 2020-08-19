const fetch = require("node-fetch"); // npm install node-fetch --save, on new computer npm install and that's it :thumbsup:

// curl -H 'Authorization: token TOKEN' https://api.github.com/user/repos?visibility=public
let getPublicRepos = fetch("https://api.github.com/user/repos?visibility=public&affiliation=owner", {
    headers: {
        'Authorization': 'token TOKEN'
    }
})
    .then(resp => resp.json())
    .then(data => printData(data, 'PUBLIC'))

    // curl -H 'Authorization: token TOKEN' https://api.github.com/user/repos?visibility=private
let getPrivateRepos = fetch("https://api.github.com/user/repos?visibility=private&affiliation=owner", {
    headers: {
        'Authorization': 'token TOKEN'
    }
})
    .then(resp => resp.json())
    .then(data => printData(data, 'PRIVATE'))

function printData(data, visibility) {
    console.log('YOU HAVE: ' + data.length + " " + visibility + " REPOSITORIES!")

    data.forEach(element => {
        console.log(element["name"])
    });
}