document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < 20; i++) {
        let petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.left = `${Math.random() * 100}vw`;
        petal.style.animationDuration = `${6 + Math.random() * 6}s`;
        document.body.appendChild(petal);
    }

    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const name = button.closest(".card").querySelector("h3").innerText;
            alert(`\u2728 ${name} added to cart!`);
        });
    });
});