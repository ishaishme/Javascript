// user is only allowed to make a purchase when he is:
// logged in
// email verified
// cardInfo - Valid
// If any one is missing, stop purchase

var isLoggedIn = true;
var isEmailVerified = false
    ;
var cardInfo = true;

// if (isLoggedIn) {
//     console.log("Logged In Success");
//     if (isEmailVerified) {
//         console.log("Email is Verified");
//         if (cardInfo) {
//             console.log("You can make apurchase");
//         }
//     }
// }

if (isLoggedIn && isEmailVerified && cardInfo) {
    console.log("Allow user to make a purchase");
}
else {
    console.log("You are not allowed to do that");
}