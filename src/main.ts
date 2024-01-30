const input = document.getElementById("email");
if (input != null) {
  console.log("OK!");
  onfocus = () => {
    input.style.border = "1px solid red"; // ! Placeholder
  };
} else {
  console.warn("Not OK!");
}
