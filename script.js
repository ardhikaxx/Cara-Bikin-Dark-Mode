const DarkModeToggle = document.getElementById("DarkModeToggle");
const body = document.body;

DarkModeToggle.addEventListener("change",() => {
    if(DarkModeToggle.checked) {
        body.classList.add("dark-mode")
    } else {
        body.classList.remove("dark-mode")
    }
})