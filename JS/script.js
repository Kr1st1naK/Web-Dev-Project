document.addEventListener("DOMContentLoaded", function () {
    const contentText = document.querySelector(".content-text");
    const readMore = document.getElementById("read-more");

    // Check if the content text is overflowing
    if (contentText.scrollHeight > contentText.clientHeight) {
        readMore.style.display = "inline";
    }

    readMore.addEventListener("click", function () {
        contentText.style.maxHeight = "none";
        readMore.style.display = "none";
    });
});
