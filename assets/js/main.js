document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll("li");

    listItems.forEach(function (li) {
        const anchor = li.querySelector("a.active-link");
        if (anchor) {
            li.style.display = "none";
            console.log("active link found");
        }
    });
});