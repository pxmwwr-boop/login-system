const API_URL = "http://localhost:5000";

const message = document.getElementById("message");

async function register() {
    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    try {
        const response = await fetch(`${API_URL}/api/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        });

        const data = await response.json();
        message.textContent = data.message;
    } catch (error) {
        console.error(error);
        message.textContent = "Cannot connect to server";
    }
}

async function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
        const response = await fetch(`${API_URL}/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const data = await response.json();
        message.textContent = data.message;

        if (response.ok && data.token) {
            localStorage.setItem("token", data.token);
            window.location.href = "dashboard.html";
        }
    } catch (error) {
        console.error(error);
        message.textContent = "Cannot connect to server";
    }
}
