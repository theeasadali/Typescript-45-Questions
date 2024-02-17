const usernames = ["admin", "asad", "azhar", "amjad", "tahir"];
usernames.map(
    user => user === "admin" 
        ? console.log(`Hello ${user}, would you like to see a status report?`) 
        : console.log(`Hello ${user}, thank you for logging in again`)
);