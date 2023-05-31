import "./style.css";

window.addEventListener("DOMContentLoaded", () => {
  // Define your product card data
  const products = [
    {
      artist: "Dorte Juul",
      artName: "Feminism",
      category: "abstract",
      size: "40x40 cm",
      price: "5000 DKK",
    },
    // Add more product card objects
  ];

  // Bind the products array to the Alpine.js data
  Alpine.data("products", () => ({
    products,
  }));
});
