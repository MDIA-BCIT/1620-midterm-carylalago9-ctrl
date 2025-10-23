function checkPassword(password, userInput) {
    if (password.length < 5) {
        console.log("Your password is too short!");
    }

    if (userInput === "forgot") {
        console.log("Here is a hint");
        return;
    }

    if (userInput === "reset") {
        console.log("Let's reset your account");
        return;
    }

    if (userInput === password) {
        console.log("Access Granted!");

        if (password === "forgot" || password === "reset") {
            console.log(
                "This password you set should not be used because it glitches the system"
            );
        }
    } else {
        console.log("Access Denied!");
    }
}
