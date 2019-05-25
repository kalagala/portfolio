function show_menu() {
    var nav_panel = document.getElementById("mobile");
    nav_panel.style.display = "block";
    document.getElementById("menu").style.display = "none";
}

function hide_menu() {
    var nav_panel = document.getElementById("mobile");
    nav_panel.style.display = "none";
    document.getElementById("menu").style.display = "block";
}

function checkMenu() {
    var width = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
    );
    if (width > 430) {
        document.getElementById("mobile").style.display = "none";
    }
}
