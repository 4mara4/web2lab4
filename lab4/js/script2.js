const imageContainer = document.getElementById("image-container-2");

const totalImages = 38; 
const imagePath = "images/"; 

for (let i = 1; i <= totalImages; i++) {
    const img = document.createElement("img"); 
    img.src = `${imagePath}image${i}.jpg`; 
    img.alt = `Slika ${i}`; 
    imageContainer.appendChild(img); 
}
