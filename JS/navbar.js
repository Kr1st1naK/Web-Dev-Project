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

customElements.define('custom-navbar', Navbar);


