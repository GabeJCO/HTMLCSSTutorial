// catfacts.js

// Function to fetch a cat fact and display it on the page
async function fetchCatFact() {
    try {
        const response = await fetch('https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/fact');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayCatFact(data.text);
    } catch (error) {
        console.error('Error fetching cat fact:', error);
    }
}

// Function to display the cat fact in the index.html file
function displayCatFact(fact) {
    const factContainer = document.getElementById('cat-fact');
    if (factContainer) {
        factContainer.textContent = fact;
    } else {
        console.error('Element with id "cat-fact" not found in the document.');
    }
}

// Call the function to fetch and display the cat fact
fetchCatFact();