var name = "Hitesh";

console.log("Line number 3", name);

function sayName() {
    var name = "my H"
    console.log("Line number 7", name);
    saynametwo()
    function saynametwo() {
        var name = "my Hc"
        console.log("Line number 11", name);
    }
}

// {

// }

sayName()