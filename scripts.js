document.addEventListener("DOMContentLoaded", function() {
    const pimg2 = document.querySelector(".pimg2");
    const techGrid = document.querySelector(".tech-grid");
    const techIcons = [
        'src/laravel.jpg',
        'src/mongodb.png',
        'src/mysql.png',
        'src/nestjs.png',
        'src/nodejs.png'
    ];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function getRandomTile() {
        if (Math.random() < 0.65) {
            const emptyTile = document.createElement('div');
            emptyTile.classList.add('empty-tile');
            return emptyTile;
        } else {
            const img = document.createElement('img');
            img.src = techIcons[Math.floor(Math.random() * techIcons.length)];
            img.classList.add('tech-icon');
            return img;
        }
    }

    function createTiledBackground() {
        const gridWidth = pimg2.offsetWidth;
        const gridHeight = pimg2.offsetHeight;

        const iconWidth = 100;
        const iconHeight = 100;

        const cols = Math.ceil(gridWidth / iconWidth);
        const rows = Math.ceil(gridHeight / iconHeight);

        techGrid.innerHTML = ''; // Clear existing icons

        for (let i = 0; i < rows * cols; i++) {
            const tile = getRandomTile();
            const randomDelay = Math.random() * 8;
            tile.style.animationDelay = `${randomDelay}s`;
            tile.addEventListener('animationiteration', () => {
                const newTile = getRandomTile();
                const randomDelay = Math.random() * 8;
                newTile.style.animationDelay = `${randomDelay}s`;
                tile.replaceWith(newTile);
                newTile.addEventListener('animationiteration', replaceTile);
            });
            techGrid.appendChild(tile);
        }
    }

    function replaceTile(event) {
        const tile = event.target;
        const newTile = getRandomTile();
        const randomDelay = Math.random() * 8;
        newTile.style.animationDelay = `${randomDelay}s`;
        tile.replaceWith(newTile);
        newTile.addEventListener('animationiteration', replaceTile);
    }

    createTiledBackground();

    window.addEventListener('resize', () => {
        createTiledBackground();
    });
});