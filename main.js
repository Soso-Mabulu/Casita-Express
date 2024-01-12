function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    loadComponent('aboutus.html');
});

function loadComponent(component) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('aboutUs').innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", component, true);
    xhttp.send();
}