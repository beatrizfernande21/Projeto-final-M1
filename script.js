document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".item");
    const cartList = document.getElementById("cart-list");
    const toggleMode = document.getElementById("toggle-mode");
    const body = document.body;

    // Adicionar interatividade ao passar o mouse
    items.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.backgroundColor = "#f0f0f0";
        });

        item.addEventListener("mouseleave", () => {
            item.style.backgroundColor = "";
        });

        const addButton = item.querySelector(".add-to-cart");
        if (addButton) {
            addButton.addEventListener("click", () => {
                const name = item.getAttribute("data-name");
                const price = item.getAttribute("data-price");
                addToCart(name, price);
            });
        }
    });

    // Adicionar item ao carrinho
    function addToCart(name, price) {
        const li = document.createElement("li");
        li.textContent = `${name} - R$ ${price},00`;
        cartList.appendChild(li);
    }

    // Alternar modo escuro
    if (toggleMode) {
        toggleMode.addEventListener("click", () => {
            body.classList.toggle("dark-mode");
            toggleMode.textContent = body.classList.contains("dark-mode") ? "☀️ Modo Claro" : "🌙 Modo Escuro";
        });
    }
});