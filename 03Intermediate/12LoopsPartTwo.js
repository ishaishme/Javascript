const myStates = [
    "Rajasthan",
    "Delhi",
    "Assam",
    1947,
    "Goa",
    "Kerala"
];

var i = 0;

for (; ;) {
    if (i >= 5) break;
    console.log(i);
    i++;
}

myStates.forEach(s => console.log(s));