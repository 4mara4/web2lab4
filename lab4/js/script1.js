const imageContainer = document.getElementById("image-container-1");
const textContainer = document.getElementById("text-container");

const totalImages = 38; 
const imagePath = "images/"; 


for (let i = 1; i <= totalImages; i++) {
    const img = document.createElement("img"); 
    img.src = `${imagePath}image${i}.png`; 
    img.alt = `Slika ${i}`; 
    imageContainer.appendChild(img); 
}
function loadTextFiles() {
    textFiles.forEach(file => {
        fetch(file) 
            .then(response => {
                if (!response.ok) throw new Error(`Error loading ${file}`);
                return response.text(); 
            })
            .then(data => {
                const paragraph = document.createElement("p"); 
                paragraph.textContent = data; 
                textContainer.appendChild(paragraph); 
            })
            .catch(error => {
                console.error("Error fetching file:", error); 
            });
    });
}
