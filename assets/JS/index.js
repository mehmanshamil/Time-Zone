let product = document.getElementById("product")
let btn = document.getElementById("btn")
let page = 1;
let limit = 3;

btn.addEventListener("click", getData)
async function getData() {
    let skip = (page - 1) * limit;
    axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/products?page=${page}&limit=${limit}&skip=${skip}`)
        .then((res) => {
            db = res.data;
            db.forEach((item) => {
                let div = document.createElement('div');
                div.className = "box";
                div.innerHTML = `
            <img src="${item.image}" alt="">
            <p>${item.title}</p>
            <h3>${item.price}$</h3>
            <button onclick="addToCart(${item.id})"> <i class="fa-solid fa-cart-shopping"></i> Add To cart</button>
            `
                product.appendChild(div)
            })
        })
}
getData()
function addToCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(db.find((item) => item.id == index));
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
}

let head = document.getElementById("head");
function getscroll() {
    return window.scrollY;
}
window.addEventListener("scroll", () => {
    let scrooll = getscroll();
    if (scrooll > 300) {
        head.style.position = "fixed"
    } else {
        head.style.position = ""
    }
})