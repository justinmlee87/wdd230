
const jsonData = {
    "rentals": [
        {"type": "Honda Metro Scooter", "persons": 1, "reservations": {"halfDay": "$20", "fullDay": "$30"}, "walkIn": {"halfDay": "$25", "fullDay": "$35"}},
        {"type": "Honda Dio Scooter", "persons": 2, "reservations": {"halfDay": "$30", "fullDay": "$40"}, "walkIn": {"halfDay": "$35", "fullDay": "$45"}},
        {"type": "Honda PCX150 Scooter", "persons": 2, "reservations": {"halfDay": "$40", "fullDay": "$50"}, "walkIn": {"halfDay": "$45", "fullDay": "$55"}},
        {"type": "Honda Pioneer ATV", "persons": 4, "reservations": {"halfDay": "$50", "fullDay": "$70"}, "walkIn": {"halfDay": "$60", "fullDay": "$80"}},
        {"type": "Jeep Wrangler - 4 Door - With A/C", "persons": 5, "reservations": {"halfDay": "$70", "fullDay": "$100"}, "walkIn": {"halfDay": "$85", "fullDay": "$125"}},
        {"type": "Jeep Wrangler - 2 Door", "persons": 4, "reservations": {"halfDay": "$60", "fullDay": "$85"}, "walkIn": {"halfDay": "$70", "fullDay": "$90"}},
    ]
};

// Function to populate the table with data
function populateTable() {
    const tableBody = document.getElementById("rentalsTableBody");

    jsonData.rentals.forEach(rental => {
        const row = document.createElement("tr");

        const typeCell = document.createElement("td");
        typeCell.textContent = rental.type;

        const personsCell = document.createElement("td");
        personsCell.textContent = rental.persons;

        const reservationsCell = document.createElement("td");
        reservationsCell.textContent = `${rental.reservations.halfDay}/${rental.reservations.fullDay}`;

        const walkInCell = document.createElement("td");
        walkInCell.textContent = `${rental.walkIn.halfDay}/${rental.walkIn.fullDay}`;

        row.appendChild(typeCell);
        row.appendChild(personsCell);
        row.appendChild(reservationsCell);
        row.appendChild(walkInCell);

        tableBody.appendChild(row);
    });
}

// Call the function to populate the table
populateTable();