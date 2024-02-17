// old guest list
const guestList = ["Sajjad Gachal", "Maqbool Ali Panhwar", "Abdur Rehman Ali Brohi", "Anwar Ali Noonari"];

// Guest not coming
console.log(`Sir ${guestList[guestList.length - 1]}, Unforunately will not be able to make it for dinner.\n`);

// Replacing the guest not coming with the alternate guest
guestList.splice(guestList.length-1, 1, "Muhammad Idrees")

// // Resending guests a new invitation
// guestList.map(guest => console.log(`Dear Sir ${guest}, It's been a while since we had our get together, I'm arranging a dinner tonight specially for the teachers and mentors who have made huge impact in my life. It'll be an owner for me, if you could appriciate my invitation.\n`));

// Bigger Table Statement
// console.log("Just found out a bigger table for our prestigious guests!")

// Guest at the beginning
guestList.unshift("Asghar Ali");

// Guest in the middle
guestList.splice(3, 0, "Muhammad Ali");

// Guest in the end
guestList.push("Muhammad Saleh")

// Bigger Table Announcement to the New Guest and other previous
// guestList.map(guest => console.log(`Dear Sir ${guest}, It's been a while since we had our get together, I'm arranging a BIG TABLE dinner tonight specially for the teachers and mentors who have made huge impact in my life. It'll be an owner for me, if you could appriciate my invitation.\n`));

// Table won't be able to arrive on time
console.log("Unfortunately, Big TABLE won't be able to arrive on time, so I've to appologies to almost all the guests except two of you, Really Sorry.\n")

//Taking apologies to all the guest except 2
let i = guestList.length;
while(i > 2) {
    const notComingGuest = guestList.pop();
    console.log(`Dear ${notComingGuest}, We're really sorry to say that It's almost impossible for us to meet tonight due to mismanagement of the event.\n`)
    i--
}

guestList.map(guest => console.log(`Dear Sir ${guest}, You're invited for the dinner tonight. Thanks for accepting this invitation\n`));

guestList.pop();
guestList.pop();

console.log(guestList)