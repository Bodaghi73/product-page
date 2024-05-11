const searchInput = document.getElementById("search-input");
const productItem = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter");

const changeClass = (filter) => {
    console.log(filter);
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

searchInput.addEventListener("keyup", searchHandler);

buttons.forEach((button) => {
    button.addEventListener("click", filterHandler)
})
