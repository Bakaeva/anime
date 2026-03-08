const scrollToTop = () => {
    const topBtn = document.getElementById('scrollToTopButton');
    const header = document.querySelector("header");

    topBtn.addEventListener('click', (e) => {
        e.preventDefault();
        seamless.scrollIntoView(header, {
            behavior: "smooth",
            block: "center",
            inline: "center",
        });
    });
};

scrollToTop();