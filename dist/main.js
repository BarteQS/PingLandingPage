"use strict";
const inputs = document.querySelectorAll("input, select, textarea");
const errorMessage = document.getElementById("error__message");
inputs.forEach(input => {
    input.addEventListener("invalid", () => {
        input.classList.add("error");
        if (errorMessage != null) {
            errorMessage.style.display = "block";
        }
        else {
            console.warn("errorMessage == null");
        }
    }, false);
});
document.addEventListener('invalid', (function () {
    return function (e) {
        e.preventDefault();
    };
})(), true);
