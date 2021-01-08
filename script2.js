
// 1. Create an HTML page with two buttons that argue with each other. 
// When one button is clicked, the text "I'm right" should be placed next to it. 
// When the other button is clicked, the text is replaced with, "No, I'm right!"

let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");

button1.addEventListener('click', event =>{
    document.querySelector("#firstButton").innerHTML += "<text id='right'>I'm right!</text>";
})

button2.addEventListener('click', event =>{
    document.querySelector("#secondButton").innerHTML += "<text id='right'>No, I'm right!</text>";
})

// 2. Create an HTML page with a large element on the page that says "Don't hover over me" inside of it.
//  When you hover over the element, send an alert to the user that says, "Hey, I told you not to hover over me!

//NOTE: Commenting out because it alerts too often when doing other parts of assignment. (but it works!)

// let largeElement = document.querySelector("#largeElement");

// largeElement.addEventListener('mouseover', event =>{
//     alert("Hey, I told you not to hover over me!");
// })

// 3. Create an HTML page with a form. It should include inputs for a username, email, and password. Also a submit button.

let form = document.querySelector("#usernameAndPassword");

let username = document.createElement("input");
username.type = "text";
username.className = "username";
form.innerHTML += "<text>Username: </text>";
form.appendChild(username);

let password = document.createElement("input");
password.type = "text";
password.className = "password";
form.innerHTML += "<text>Password: </text>";
form.appendChild(password);

let submitButton = "<button>Submit</button>"
form.innerHTML += submitButton;

// 4. In a Javascript file, write a program which checks the following things:
// a. checks that the password is 12345678
// b. if the password is incorrect, send an alert message
// c. Your page should also include an <h1> tag. If the information in the form is correct, have Javascript change the text in the <h1>.HTML page.

let correctPassword = "12345678";
form.querySelector("button").addEventListener('click', event =>{
    if(!form.querySelector(".password").value.match(correctPassword)){
        alert("Incorrect password!");
        document.querySelector("h1").innerText = "ACCESS DENIED";
    }
})

//  5. Add a CSS stylesheet that styles all of your pages. -- (Done: see "styles2.css")

//  6. BONUS: (Current status: incomplete -- Will do if time permits.)
//  Create an HTML page with a form that asks the user to input the value of a sphere's radius. 
//  Write Javascript that gives them back the volume of the sphere. 
//  (There are many different ways to execute this. 
//  You can give the user information back in another input box on the page, 
//  as an alert, or any other way you can think of. 
//  You can look up how to use the Javascript Math object to simplify your calculations.)