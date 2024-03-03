function insert_Row() {
    //Write your code here
	var newRow = document.createElement('tr');
    var cell1 = document.createElement('td');
    var cell2 = document.createElement('td');
    cell1.innerHTML = 'New Cell1';
    cell2.innerHTML = 'New Cell2';
    var table = document.getElementById('sampleTable');
	var newRow = table.insertRow(0);
	newRow.appendChild(cell1);
    newRow.appendChild(cell2);
}
