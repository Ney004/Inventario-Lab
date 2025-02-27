function handleCredentialResponse(response) {
    console.log("ID Token:", response.credential);
    // Redirigir al usuario al index.html
    window.location.href = "index.html";
}

