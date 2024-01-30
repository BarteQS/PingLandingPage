"use strict";
const input = document.getElementById("email");
if (input != null) {
    console.log("OK!");
    onfocus = () => {
        input.style.border = "1px solid red";
    };
}
else {
    console.warn("Not OK!");
}
