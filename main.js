const email = document.getElementById("email");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
async function demo() {
    console.log("Hello " + email.value);
    await sleep(1000);
}



onsubmit = (Event) => {

};