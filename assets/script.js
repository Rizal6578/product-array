// script.js
import products from '.data.js';

document.addEventListener('DOMContentLoaded', function () {
    const productContainer = document.getElementById('product-list');

    // Loop melalui data produk dan tampilkan di halaman
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-card');
        productElement.innerHTML = `
            <img src="${product.imageSrc}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
        `;
        productContainer.appendChild(productElement);
    });
});
console.log(products); // Untuk memeriksa apakah data produk sudah diambil dengan benar

fetch('data.js')
  .then(response => response.json())
  .then(data => {
    // Gunakan data produk di sini
    console.log(data); // Untuk memeriksa apakah data berhasil diambil
  })
  .catch(error => console.error(error));
