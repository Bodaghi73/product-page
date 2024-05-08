const searchInput = document.getElementById("search-input");
const productItem = document.querySelectorAll(".product-item");

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

searchInput.addEventListener("keyup", searchHandler);
