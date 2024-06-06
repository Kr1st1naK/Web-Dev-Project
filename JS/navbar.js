class Navbar extends HTMLElement {
    connectedCallback() {
        this.loadNavbar();
    }

    loadNavbar() {
        fetch('navbar.html')
            .then(response => response.text())
            .then(data => {
                this.innerHTML = data;
            })
            .catch(error => console.error('Error fetching navbar:', error));
    }
    }
    document.addEventListener('DOMContentLoaded', () => {
        const menuBar = document.getElementById('menuBar');
        const menu = document.getElementById('menu');
    
        menuBar.addEventListener('click', () => {
            console.log("clicked")
            menu.classList.toggle('active');
        });
    });
    
customElements.define('custom-navbar', Navbar);