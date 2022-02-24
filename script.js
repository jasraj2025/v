let menu_btn = document.getElementById("menu");
let main = document.getElementById("nav_menu");

menu_btn.addEventListener("click", () => {
    if (main.style.left == "0px") {
        main.style.left = "-170px"
    } else {
        main.style.left = "0px"
    }
})
