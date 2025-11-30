document.addEventListener("DOMContentLoaded", () => {
    let counter = localStorage.getItem("reviewCounter");

    if (!counter) {
        counter = 0;
    }

    counter++;
    localStorage.setItem("reviewCounter", counter);

    document.getElementById("reviewCount").textContent = counter;
});

// Dynamic footer data
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("modDate").textContent = document.lastModified;