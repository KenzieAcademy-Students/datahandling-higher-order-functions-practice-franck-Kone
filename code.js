// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
// console.log(users);


// Append the katas to this element:
const main = document.querySelector("main");

const printKata = function (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

// Filter the users array to show only the users with an isActive property of true.
const kata1 = users.filter(user => user.isActive);
printKata(1, kata1)

// Map over the users array to show only the email addresses of the users.
const kata2 = users.map(user=> user.email)
printKata(2, kata2)

// Kata 3: Use the.some() method
// Check whether at least one user in the users array has a company property of "OVATION".
const kata3 = users.some(user => user.company === 'OVATION');
printKata(3, kata3)

//     Kata 4: Use the.find() method
// Find the first user in the array over the age of 28.
const kata4 = users.find(user => user.age > 28)
printKata(4, kata4)

// Kata 5: Use the.filter() and.find() methods
// Find the first user in the array over the age of 28 that is active.
const kata5 = users.filter(user => user.age > 28).find(user => user.isActive)
printKata(5, kata5)

//     Kata 6: Use the.filter() and.map() methods
// Show the balance of each user in the array from the "ZENCO" company.
const kata6 = users.filter(user => user.company === "ZENCO").map(user => user.balance)
printKata(6, kata6)

//     Kata 7: Use the.filter() method with .includes() and the.map() method
// Show the age of every user with the "fugiat" tag.
const kata7 = users.filter(user => user.tags.includes('fugiat')).map(user => user.age);
printKata(7, kata7);

// Kata 8: Use the.reduce() method to calculate the total sum of every users balance
const kata8 = users.reduce((accumulator, currentUser) => accumulator + parseFloat(currentUser.balance.replace('$', '').replace(',', '')), 0);
printKata(8, kata8)


// Part Two
// Complete the following Katas.You may use whichever higher order functions you prefer.

// 💡 Note: These Katas will not render with the printKata() function like the katas above.Have each kata print to the page individually.

//     Kata 9: Display every user with brown eyes

// Create a h2 with the title "Users with Brown Eyes"

// Then, inside of an unordered list(<ul>), create a list item (<li>) for each user

//     Render both the name of the user and their image inside that list item.

//     Render each image using an <img src=""> tag, with the given url from the "picture" property.

//         You may render each user however you wish, but try to have them somewhat nicely formatted (flexbox and card layouts are always a plus).

const kata9Header = document.createElement('h2')
kata9Header.innerText = "Users with Brown Eyes";
const listOfUserWithBrownEyes = document.createElement('ul');
const kata9 = users.filter(user => user.eyeColor === "brown").map(user => 
`<li><h4>${user.name}</h4><img src ="${user.picture}" width = "150px" heigth = "200px"></li>`
).reduce((text, currentUserProfile) => text + currentUserProfile, '')

listOfUserWithBrownEyes.innerHTML = kata9
document.body.append(kata9Header)
document.body.append(listOfUserWithBrownEyes)
console.log(listOfUserWithBrownEyes)













// for(let user of users){
//     console.log(user.company)
// }


