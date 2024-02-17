var usernames = ["admin", "asad", "azhar", "amjad", "tahir"];
usernames.map(function (user) { return user === "admin"
    ? console.log("Hello ".concat(user, ", would you like to see a status report?"))
    : console.log("Hello ".concat(user, ", thank you for logging in again")); });
