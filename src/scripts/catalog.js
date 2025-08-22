const fetchVases = async () => {
    try {
        const response = await fetch('./data/vases.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const vases = await response.json();
        displayVases(vases);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};

const displayVases = (vases) => {
    const catalogContainer = document.getElementById('catalog');
    vases.forEach(vase => {
        const vaseElement = document.createElement('div');
        vaseElement.classList.add('vase');

        vaseElement.innerHTML = `
            <h2>${vase.name}</h2>
            <p>Size: ${vase.size}</p>
            <p>Price: $${vase.price.toFixed(2)}</p>
        `;

        catalogContainer.appendChild(vaseElement);
    });
};

document.addEventListener('DOMContentLoaded', fetchVases);