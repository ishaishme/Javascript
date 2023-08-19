sayHello(); // This works because of global context: once any var or function is written, it's getting registered in global context

// For Browser window is global context

function sayHello() {
    console.log("hello");
}

var myName = "hitesh";

if (myName === window.myName) { // ReferenceError: window is not defined
    console.log("True condition");
}