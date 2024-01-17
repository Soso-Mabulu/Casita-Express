function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
    const menuBtn = document.querySelector('.menu-btn');
    menuBtn.style.display = 'none';
    
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    const menuBtn = document.querySelector('.menu-btn');
    menuBtn.style.display = 'flex';
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

document.addEventListener('DOMContentLoaded', function () {
    const learnMoreButtons = document.querySelectorAll('.learn-more');
    const closeButtons = document.querySelectorAll('.close');
    const modals = document.querySelectorAll('.modal');

    learnMoreButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent the default behavior of the anchor tag
            event.preventDefault();
            const targetModal = document.querySelector(button.getAttribute('data-modal-target'));
            targetModal.style.display = 'block';
        });
    })

    closeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Prevent the default behavior of the anchor tag
            event.preventDefault();
            const modal = button.closest('.modal');
            modal.style.display = 'none';
        });
    });

    modals.forEach(modal => {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const openMenuModalButton = document.getElementById('openMenuModal');
    const closeMenuModalButton = document.getElementById('closeMenuModal');
    const menuModal = document.getElementById('menuModal');

    openMenuModalButton.addEventListener('click', function () {
        menuModal.style.display = 'block';
    });

    closeMenuModalButton.addEventListener('click', function () {
        menuModal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === menuModal) {
            menuModal.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const heroButton = document.getElementById('heroBtn');

    heroButton.addEventListener('click', function () {
        // Get the target element by ID
        const targetElement = document.getElementById('aboutUs');

        // Scroll to the target element
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const contactUsButton = document.getElementById('contactUsBtn');

    contactUsButton.addEventListener('click', function () {
        // Get the target element by ID
        const targetElement = document.getElementById('contactUs-part');

        // Scroll to the target element
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
