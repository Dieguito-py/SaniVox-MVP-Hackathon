document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        window.location.href = "dashboardPedagogico.html";
    });
});
