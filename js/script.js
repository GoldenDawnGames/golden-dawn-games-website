document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       SMOOTH NAVIGATION
    ===================================================== */

    const navLinks = document.querySelectorAll(
        ".side-nav nav a"
    );


    navLinks.forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");


            if (
                targetId &&
                targetId.startsWith("#")
            ) {

                const target =
                    document.querySelector(targetId);


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    const updateActiveNavigation = () => {

        let currentSection = "top";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;


            if (
                window.scrollY >= sectionTop
            ) {

                currentSection =
                    section.id;

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");


            const href =
                link.getAttribute("href");


            if (
                href === `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    };


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );


    updateActiveNavigation();


    /* =====================================================
       GAME LINK KEYBOARD ACCESS
    ===================================================== */

    const gameLinks =
        document.querySelectorAll(
            ".game-link"
        );


    gameLinks.forEach(link => {

        link.addEventListener(
            "mouseenter",
            () => {

                link.closest(".game")
                    ?.classList.add("is-hovered");

            }
        );


        link.addEventListener(
            "mouseleave",
            () => {

                link.closest(".game")
                    ?.classList.remove("is-hovered");

            }
        );

    });


});
