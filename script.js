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



function makeBioActive(bio) {
    var bio = document.getElementById("bio_link");
    bio.classList.add("active");
    var portfolio = document.getElementById("port_link");
    var tools = document.getElementById("tool_link");
    portfolio.classList.remove("active");
    tools.classList.remove("active");
}

function makePortfolioActive() {
    var portfolio = document.getElementById("port_link");
    portfolio.classList.add("active");
    var bio = document.getElementById("bio_link");
    var tools = document.getElementById("tool_link");
    bio.classList.remove("active");
    tools.classList.remove("active");
}

function makeToolsActive() {
    var tools = document.getElementById("tool_link");
    tools.classList.add("active");
    var bio = document.getElementById("bio_link");
    var portfolio = document.getElementById("port_link");
    bio.classList.remove("active");
    portfolio.classList.remove("active");
}

function makeThemAllInvisible() {
    var tools = document.getElementById("tool_link");
    var portfolio = document.getElementById("port_link");
    var bio = document.getElementById("bio_link");
    portfolio.classList.remove("active");
    tools.classList.remove("active");
    bio.classList.remove("active");
}

function makeItSnapy(){
    var body = document.getElementById('body');
    body.classList.add("snappyY");
    var project = document.getElementById("projects");
    project.classList.add("snappyX");
    var toolsIUSE = document.getElementById('toolsIUse');
    toolsIUSE.classList.add("snappyX");
}