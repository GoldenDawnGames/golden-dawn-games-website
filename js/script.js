document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll(".side-nav nav a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            links.forEach(item => {
                item.classList.remove("active");
            });

            link.classList.add("active");

        });

    });

});
