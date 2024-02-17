const usernames = [];
if(usernames.length === 0) {
    console.log("We need to find some users!")
} else {
    usernames.map( user => user === "admin" 
        ? console.log(`Hello ${user}, would you like to see a status report?`) 
        : console.log(`Hello ${user}, thank you for logging in again`)
    );
}