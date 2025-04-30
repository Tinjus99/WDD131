let selectelement = document.querySelector("select");
let logo = document.querySelector("img");

selectelement.addEventListener("change", changeTheme);

function changeTheme() {
    let theme = selectelement.value;
    if (theme == "dark") {
        document.body.className = "dark";
        logo.src = "byui-logo_white.png";
        logo.alt = "Logo Dark";
    }
    else {
        document.body.className = "light"
        logo.src = "byui-logo_blue.webp";
        logo.alt = "Logo Light";
    }
    }