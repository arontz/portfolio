document.addEventListener("DOMContentLoaded", function() {
    const techGrid = document.querySelector(".tech-grid");
    const techIcons = Array.from(document.querySelectorAll(".tech-icon"));

    function createTiledBackground() {
        const gridWidth = techGrid.offsetWidth;
        const gridHeight = techGrid.offsetHeight;

        const iconWidth = techIcons[0].offsetWidth;
        const iconHeight = techIcons[0].offsetHeight;

        const cols = Math.ceil(gridWidth / iconWidth);
        const rows = Math.ceil(gridHeight / iconHeight);

        for (let i = 0; i < rows * cols; i++) {
            const icon = techIcons[i % techIcons.length].cloneNode();
            const randomDelay = Math.random() * 5;
            icon.style.animationDelay = `${randomDelay}s`;
            techGrid.appendChild(icon);
        }
    }

    createTiledBackground();

    window.addEventListener('resize', () => {
        techGrid.innerHTML = '';
        createTiledBackground();
    });
});
