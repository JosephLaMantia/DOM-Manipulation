// 1) Select the section with an id of container without using querySelector.
function myQueryselector(selector){
    return document.getElementById(selector);
}

console.log(myQueryselector("container"));


// 2) Select the section with an id of container using querySelector.
console.log(document.querySelector("#container"));

// 3) Select all of the list items with a class of "second".
let nodeList = document.querySelectorAll("li.second");
let arr = [];
arr = Array.from(nodeList);
for(const i in arr){
    console.log(arr[i]);
}

// 4) Select a list item with a class of third, but only the list item inside of the ol tag.
console.log(document.querySelectorAll("ol li.third"));

// 5) Give the section with an id of container the text "Hello!".   NOTE: Commenting out, because it blocks #8
// document.querySelector("#container").innerText = "Hello!";

// 6) Add the class main to the div with a class of footer.
let footer = document.querySelector(".footer");
footer.className += " main";

// 7) Remove the class main on the div with a class of footer.
footer.classList.remove("main");

// 8) Create a new li element.
document.querySelector("body").innerHTML += "<li></li>";

// 9) Give the li the text "four".
document.querySelector("body>li").innerText += "four";

// 10) Append the li to the ul element.
let myList = document.querySelector("body>li");
document.querySelector("ul").append(myList);

// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".
let myOl = document.querySelector("ol");
let items = myOl.getElementsByTagName("li");
for(let i = 0; i < items.length; i++){
    items[i].style.background = "green";
}

// 13) Remove the div with a class of footer.
document.querySelector("div.footer").remove();