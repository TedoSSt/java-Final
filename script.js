// Initialize the table data array
let tableData = [];



// Get reference to the add button element
const add = document.getElementById('add-page');

// Retrieve data from local storage, if available
if (localStorage.getItem('data')) {
  tableData = JSON.parse(localStorage.getItem('data'));
} else {
  localStorage.setItem('data', JSON.stringify(tableData));
}

// Add a click event listener to the add button
add.addEventListener('click', () => {
  window.location = 'addpage.html';
});

// Get references to the name, profile, and phone rows
var table = document.getElementById('table');
var nameRow = table.rows[0];
var profRow = table.rows[1];
var phoneRow = table.rows[2];
var emailRow = table.rows[3];
var dat1Row = table.rows[4];
var dat2Row = table.rows[5];
var datLRow = table.rows[6];
var MtorRow = table.rows[10];
var res1Row = table.rows[11];
var res2Row = table.rows[12];
var fTaskRow = table.rows[7];
var sTaskRow = table.rows[8];
var departmentRow = table.rows[9];
var taskimgRow = table.rows[13];


// Function to fill the table with data
function fillTable() {
  // Loop through the data and insert new td elements
  for (let i = 0; i < tableData.length; i++) {
    const tr = table.insertRow(-1);
    const arrayKeys = Object.keys(tableData[i]);
  
    for (let j = 0; j < arrayKeys.length; j++) {
      const td = tr.insertCell(-1);
  
      if (arrayKeys[j] === 'profile') {
        const img = document.createElement('img');
  img.src = tableData[i][arrayKeys[j]];
 img.classList.add('imgClass');
  td.appendChild(img); // Append img to new td cell
  profRow.appendChild(td); // Append new td cell to profile row
      } else if (arrayKeys[j] === 'name') {
        td.innerHTML = tableData[i][arrayKeys[j]];
        nameRow.appendChild(td); // Append to name row
      } else if (arrayKeys[j] === 'phone') {
        td.innerHTML = tableData[i][arrayKeys[j]];
        phoneRow.appendChild(td); // Append to phone row
      } else if (arrayKeys[j] === 'email') {
        td.innerHTML = tableData[i][arrayKeys[j]];
        emailRow.appendChild(td); // Append to email row
      } else if (arrayKeys[j] === 'sDate') {
        td.innerHTML = tableData[i][arrayKeys[j]];
        dat1Row.appendChild(td); // Append to sDate row
      } else if (arrayKeys[j] === 'eDate') {
        td.innerHTML = tableData[i][arrayKeys[j]];
        dat2Row.appendChild(td); // Append to eDate row
      } else if (arrayKeys[j] === 'dleft') {
        var dleft = tableData[i][arrayKeys[j]];
        
        if (dleft < 10) {
          td.style.color = 'red';
        }
      td.innerHTML = dleft;
      datLRow.appendChild(td);
      
        td.innerHTML = tableData[i][arrayKeys[j]];
        datLRow.appendChild(td); // Append to dleft row
      } else if (arrayKeys[j] === 'metnorT') {
        var metnorT = tableData[i][arrayKeys[j]];
       
        td.innerHTML = metnorT;
        MtorRow.appendChild(td);
        td.classList.add('metnorT');
      } else if (arrayKeys[j] === 'result1') {
        td.innerHTML = tableData[i][arrayKeys[j]];
        res1Row.appendChild(td); // Append to result1 row
      } else if (arrayKeys[j] === 'result2') {
        td.innerHTML = tableData[i][arrayKeys[j]];
        res2Row.appendChild(td); // Append to result2 row
      } else if (arrayKeys[j] === 'firstTask') {
        td.innerHTML = tableData[i][arrayKeys[j]];
        fTaskRow.appendChild(td); // Append to firstTask row
      } else if (arrayKeys[j] === 'secondTask') {
        td.innerHTML = tableData[i][arrayKeys[j]];
        sTaskRow.appendChild(td); // Append to secondTask row
      } else if (arrayKeys[j] === 'department') {
        td.innerHTML = tableData[i][arrayKeys[j]];
        departmentRow.appendChild(td); // Append to department row
      } else if (arrayKeys[j] === 'taskBox') {
        const timg = document.createElement('img');
        timg.classList.add('imgClass');
        timg.src = tableData[i][arrayKeys[j]];
        td.appendChild(timg);
        taskimgRow.appendChild(td); // Append to department row
        
          
      }

    }
  }
} 




// Call the function to fill the table with data
fillTable();