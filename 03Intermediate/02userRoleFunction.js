// create an application with following roles:
// admin - gets full access
// subadmin - gets access to create/delete courses
// testprep - gets access to create/delete tests
// user - gets access to consume content


var getUserRole = function (name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with full access`
            break; // not necessary in case of return

        case "subadmin":
            return `${name} is subadmin`
            break;

        case "testprep":
            return `${name} is testprep`
            break;

        case "user":
            return `${name} is user`
            break;

        default:
            return `${name} is Trial user`
            break;
    }
}

console.log(getUserRole(2, "abc"));
console.log(getUserRole("Hitesh", "testprep"));
console.log(getUserRole);

