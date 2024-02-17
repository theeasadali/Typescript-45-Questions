var usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    usernames.map(function (user) { return user === "admin"
        ? console.log("Hello ".concat(user, ", would you like to see a status report?"))
        : console.log("Hello ".concat(user, ", thank you for logging in again")); });
}
