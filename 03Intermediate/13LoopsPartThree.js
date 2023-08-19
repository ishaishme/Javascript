const names = ["Youtube", "facebook", "instagram", "Netflix", "Amazon"];

for (const n of names) {
    console.log(n);
}

console.log("***************");

const symbols = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook"
}

for (const n in symbols) {
    console.log(symbols[n]);
}