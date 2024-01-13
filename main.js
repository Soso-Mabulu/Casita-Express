function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
    
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    // Load the "aboutUs" component
    loadComponent('aboutus.html', 'aboutUs');

    // Load the "contactUs" component
    loadComponent('contactus.html', 'contactUs');
});

function loadComponent(component, targetElementId) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(targetElementId).innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", component, true);
    xhttp.send();
}
