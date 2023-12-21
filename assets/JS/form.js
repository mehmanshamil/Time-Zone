let form = document.getElementById("form");
form.addEventListener("submit", formget);


function formget(e) {
    e.preventDefault()
    let password = document.getElementById("password");
    let email = document.getElementById("email");
    let data = {
        password: `${password.value}`,
        email: `${email.value}`
    }
    console.log(data);

    axios.post("https://655f2b37879575426b44b8f7.mockapi.io/basket", data)

}