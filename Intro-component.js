function emailValid() {
    const email = document.querySelector("#email");
    var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!(pattern.test(email.value))) {
        alert("Enter a valid email")
    }
}