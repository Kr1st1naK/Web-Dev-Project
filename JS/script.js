document.addEventListener("DOMContentLoaded", function () {
    const contentText = document.querySelector(".content-text");
    const readMore = document.getElementById("read-more");
    const menuBar = document.querySelector('.menuBar');
    const nav_links = document.querySelector('.nav_links');

    // Check if the content text is overflowing
    if (contentText.scrollHeight > contentText.clientHeight) {
        readMore.style.display = "inline";
    }

    readMore.addEventListener("click", function () {
        contentText.style.maxHeight = "none";
        readMore.style.display = "none";
    });

    menuBar.addEventListener('click', () => {
        nav_links.classList.toggle('active');
    });

    searchButton.addEventListener('click', performSearch);

});
function performSearch() {
    const query = document.querySelector('.search__input').value;
    if (query) {
        alert(`Searching for: ${query}`);
    } else {
        alert('Please enter a search term.');
    }
}
