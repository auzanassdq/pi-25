// Function to fetch Digimon data
async function fetchDigimon() {
    try {
        const response = await fetch('https://digimon-api.vercel.app/api/digimon');
        const data = await response.json();
        displayDigimon(data);
    } catch (error) {
        console.error('Error fetching Digimon:', error);
    }
}

// Function to display Digimon data
function displayDigimon(digimons) {
    const container = document.getElementById('digimonContainer');
    
    digimons.forEach(digimon => {
        const card = document.createElement('div');
        card.className = 'digimon-card';
        
        card.innerHTML = `
            <img src="${digimon.img}" alt="${digimon.name}">
            <h3>${digimon.name}</h3>
            <p>Level: ${digimon.level}</p>
        `;
        
        container.appendChild(card);
    });
}

// Call the fetch function when the page loads
document.addEventListener('DOMContentLoaded', fetchDigimon);