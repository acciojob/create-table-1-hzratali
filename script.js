function insert_Row() {
    //Write your code here
	var newRow = document.createElement('tr');
    // Create new cell elements
    var cell1 = document.createElement('td');
    var cell2 = document.createElement('td');
    // Set innerHTML of cell1 and cell2
    cell1.innerHTML = 'New Cell1';
    cell2.innerHTML = 'New Cell2';
    // Append cell1 and cell2 to the new row
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    // Get reference to the table
    var table = document.getElementById('sampleTable');
    // Insert the new row at the top of the table
    if (table.rows.length > 0) {
        table.insertBefore(newRow, table.rows[0]);
    } else {
        table.appendChild(newRow);
    }
}
