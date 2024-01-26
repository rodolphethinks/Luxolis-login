// Please go to the following link(https://www.figma.com/file/YyNs6VBdwMUwdPdYUfXqXl/Login-Page-design-(Community)?type=design&node-id=0-1&t=Rf3cWEMKXdqybI3y-0）
//     Please make the page responsive
// Create a dummy hardcoded test account in the frontend - username: test@luxpmsoft.com / Password: test1234!
// For the incorrect password, please show a pop - up window with a message, "the provided password is wrong"
// Please only accept a combination of letters, numbers and special character.If the user does not provide the right combination of the password, please show an alert message right below the inputfield.The alert message should be "Wrong combination" 
// The login should only work with this account since there is no integration with the backend.
// Leave the page after the login blank.
// Please provide us with a github link to the repository for the test and let us know of your desired salary.We do check for the clean code.So, please make sure that your code is neat.

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const errorMessage = document.getElementById("error-message");

const correctUser = "test@luxpmsoft.com";
const correctPwd = "test1234!";
const regex = /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/;

// When the login button is clicked, the following code is executed
loginButton.addEventListener("click", (e) => {
    // Prevent the default submission of the form
    e.preventDefault();
    // Get the values input by the user in the form fields
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (regex.test(password)) {        
        if (username === correctUser && password === correctPwd) {
            // If the credentials are valid, show an alert box and reload the page
            window.location.href = "login-success.html";
        } else {
            // Otherwise, make the login error message show (change its oppacity)
            var options = 'top=0, left=0, width=500, height=600, status=no, menubar=no, toolbar=no, resizable=no';
            window.open("login-fail.html", "Failure Pop up", options);
        }
    } else {
        errorMessage.style.opacity = 1;
        errorMessage.style.cursor = 'text';
    }
})