const fetch = require("node-fetch");


const getPublicRepos = (token, pageNo=1) => {
    request = fetch(`https://api.github.com/user/repos?visibility=public&affiliation=owner&page=${pageNo}`, {
        headers: {
            'Authorization': `token ${token}`
        }
    }).then(response => {
        return response.json();
    }).then(data => {
        printData(data, 'PUBLIC')
        
        if (data.length == 30) {
            getPublicRepos(token, ++pageNo)
        }
    }).catch(error => console.log(error))
}


const getPrivateRepos = (token, pageNo=1) => {
    request = fetch(`https://api.github.com/user/repos?visibility=private&affiliation=owner&page=${pageNo}`, {
        headers: {
            'Authorization': `token ${token}`
        }
    }).then(response => {
        return response.json();
    }).then(data => {
        printData(data, 'PRIVATE')
        
        if (data.length == 30) {
            getPrivateRepos(token, ++pageNo)
        }
    }).catch(error => console.log(error))
}


const printData = (data, visibility) => {
    console.log('YOU HAVE: ' + data.length + " " + visibility + " REPOSITORIES!")

    data.forEach(element => {
        console.log(element["name"])
    });
}


getPublicRepos('token')
getPrivateRepos('token')