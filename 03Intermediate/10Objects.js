var user = {
    firstname: "Isha",
    lastName: "Ish",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstname} is enrolled in total of ${this.courseList.length} courses`
    },
    getInfo: function () {
        return `
    firstname: ${this.firstname},
    lastName: ${this.lastName},
    role: ${this.role},
    loginCount: ${this.loginCount},
    facebookSignedIn: ${this.facebookSignedIn},
    courseList: ${this.courseList}  
    `}
}

console.log(user.firstname);
console.log(user["lastName"]);

console.log(user);
user.loginCount = 44;

console.log(user);

console.table(user);

console.log(user.getCourseCount());

user.buyCourse("React JS Course")
user.buyCourse("JS Course")
console.log(user.getCourseCount());

console.log(user.getInfo());
