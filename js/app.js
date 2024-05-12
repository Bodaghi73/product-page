const searchInput = document.getElementById("search-input");
const productItem = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter");
const priceInput = document.getElementById("search-price").querySelector("input");
const priceButton = document.getElementById("search-price").querySelector("button");

const changeClass = (filter) => {
    buttons.forEach((button) => {
        if (button.dataset.filter === filter) {
            button?.classList?.add("selected")
        } else {
            button?.classList?.remove("selected")
        }
    })
}

const searchHandler = (event) => {
    const searchValue = event.target.value.toLowerCase().trim();
    productItem.forEach((product) => {
        const productName = product.children[1].innerText.toLowerCase();
        if (productName.includes(searchValue)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    })
}

const filterHandler = (event) => {
    const filter = event.target.dataset.filter;
    changeClass(filter);

    productItem.forEach((product) => {
        const productCategory = product.dataset.category;
        if (filter === "all") {
            product.style.display = "block";
        } else {
            if (productCategory === filter) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        }
    })
}

const searchPriceHandler = (event) => {
    const searchPrice = +event.target.parentElement.children[0].value;
    productItem.forEach((product) => {
        const productPrice = product.children[2].innerText;
        const price = +productPrice.split(" ")[1]
        if (!searchPrice) {
            product.style.display = "block";
        } else {
            if (price === searchPrice) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        }
    })
}

const start = () => {
    searchInput.addEventListener("keyup", searchHandler);

    buttons.forEach((button) => {
        button.addEventListener("click", filterHandler)
    })

    priceButton.addEventListener("click", searchPriceHandler)
}

window.addEventListener("load", start)