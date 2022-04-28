// Create an object and an array which we will use in our facebook exercise. 
// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
// 2. Create an array which contains the object you have made above and name the array "database".
// 3. Create an array called "newsFeed" which contains 3 objects with properties "username" and "timeline".

let database = [{
        username: "Brandon",
        password: "123",
    },

    {
        username: "Miranda",
        password: "apollo",
    },

    {
        username: "Kyle",
        password: "kids",
    }
];

let newsFeed = [{
        username: 'Bobby',
        timeline: "Practicing JavaScript today"
    },
    {
        username: 'Sally',
        timeline: "Going on a hike!"
    },
    {
        username: 'Mitch',
        timeline: "Work is going to be fun today..."
    },
];

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
            return true;
        }
    }
    return false;
};

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password");
    }
};

let userNamePrompt = prompt("What's your username?");
let passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);
