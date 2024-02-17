const currentUsers = ["admin", "asad", "azhar", "amjad", "tahir"];
const newUsers = ["Ibrar", "Mueez", "fahad", "Tahir", "asad"];

for(let i = 0; i < newUsers.length; i++) {
    for(let j = 0; j < currentUsers.length; j++) {
        if(newUsers[i].toLowerCase() === currentUsers[j].toLowerCase()) {
            console.log("Enter a new username")
        }
    }
    console.log("Username is available")
}