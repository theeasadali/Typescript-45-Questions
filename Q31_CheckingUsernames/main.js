var currentUsers = ["admin", "asad", "azhar", "amjad", "tahir"];
var newUsers = ["Ibrar", "Mueez", "fahad", "Tahir", "asad"];
for (var i = 0; i < newUsers.length; i++) {
    for (var j = 0; j < currentUsers.length; j++) {
        if (newUsers[i].toLowerCase() === currentUsers[j].toLowerCase()) {
            console.log("Enter a new username");
        }
    }
    console.log("Username is available");
}
