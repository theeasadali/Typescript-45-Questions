// old guest list
const guestList = ["Sajjad Gachal", "Maqbool Ali Panhwar", "Abdur Rehman Ali Brohi", "Anwar Ali Noonari"];

// Guest not coming
console.log(`Sir ${guestList[guestList.length - 1]}, Unforunately will not be able to make it for dinner.\n`);

// Replacing the guest not coming with the alternate guest
guestList.splice(guestList.length-1, 1, "Muhammad Idrees")

// Resending guests a new invitation
guestList.map(guest => console.log(`Dear Sir ${guest}, It's been a while since we had our get together, I'm arranging a dinner tonight specially for the teachers and mentors who have made huge impact in my life. It'll be an owner for me, if you could appriciate my invitation.\n`))