   // Function to fetch JSON data
   async function fetchRentalsData() {
    try {
        const response = await fetch('./data/rentals.json');
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to populate the table with data
async function populateTable() {
    const tableBody = document.getElementById("rentalsTableBody");
    const jsonData = await fetchRentalsData();

    jsonData.rentals.forEach(rental => {
        const row = document.createElement("tr");

        const imageCell = document.createElement("td");
        const image = document.createElement("img");
        image.src = rental.image; // Add the path to the image in your JSON data
        image.alt = rental.type;
        imageCell.appendChild(image);

        const typeCell = document.createElement("td");
        typeCell.textContent = rental.type;

        const personsCell = document.createElement("td");
        personsCell.textContent = rental.persons;

        const reservationsCell = document.createElement("td");
        reservationsCell.textContent = `${rental.reservations.halfDay}/${rental.reservations.fullDay}`;

        const walkInCell = document.createElement("td");
        walkInCell.textContent = `${rental.walkIn.halfDay}/${rental.walkIn.fullDay}`;

        row.appendChild(imageCell);
        row.appendChild(typeCell);
        row.appendChild(personsCell);
        row.appendChild(reservationsCell);
        row.appendChild(walkInCell);

        tableBody.appendChild(row);
    });
}

// Call the function to populate the table
populateTable();