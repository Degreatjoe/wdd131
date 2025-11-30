// Provided Product Array
const products = [
    { id: 1, name: "Garden Hose" },
    { id: 2, name: "LED Grow Lights" },
    { id: 3, name: "Ceramic Planter Set" },
    { id: 4, name: "Smart Sprinkler Controller" },
    { id: 5, name: "Soil Moisture Meter" }
];

// Populate product select field
document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("productSelect");

    products.forEach(product => {
        let opt = document.createElement("option");
        opt.value = product.name;    // required
        opt.textContent = product.name;
        select.appendChild(opt);
    });
});

// Dynamic footer data
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("modDate").textContent = document.lastModified;