// Price List Data
const priceListItems = [
  {
    status: "New",
    age: "Masters",
    program: "Full year",
    cost: 1950,
    discount: 300,
    price: 1650,
    payment1a: 495,
    payment1b: 495,
    payment2a: 0,
    payment2b: 300,
    payment3: 660,
    payment4: 495
  },
  {
    status: "New",
    age: "Open",
    program: "Full year",
    cost: 1950,
    discount: 300,
    price: 1650,
    payment1a: 495,
    payment1b: 495,
    payment2a: 0,
    payment2b: 300,
    payment3: 660,
    payment4: 495
  },
  {
    status: "New",
    age: "U16",
    program: "Full year",
    cost: 0,
    discount: 0,
    price: 0,
    payment1a: 0,
    payment1b: 0,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  },
  {
    status: "New",
    age: "U18",
    program: "Full year",
    cost: 1950,
    discount: 300,
    price: 1650,
    payment1a: 495,
    payment1b: 495,
    payment2a: 0,
    payment2b: 300,
    payment3: 660,
    payment4: 495
  },
  {
    status: "New",
    age: "U20",
    program: "Full year",
    cost: 1950,
    discount: 300,
    price: 1650,
    payment1a: 495,
    payment1b: 495,
    payment2a: 0,
    payment2b: 300,
    payment3: 660,
    payment4: 495
  },
  {
    status: "New",
    age: "Masters",
    program: "NextGen",
    cost: 600,
    discount: 150,
    price: 450,
    payment1a: 450,
    payment1b: 450,
    payment2a: 0,
    payment2b: 150,
    payment3: 0,
    payment4: 0
  },
  {
    status: "New",
    age: "Open",
    program: "NextGen",
    cost: 600,
    discount: 150,
    price: 450,
    payment1a: 450,
    payment1b: 450,
    payment2a: 0,
    payment2b: 150,
    payment3: 0,
    payment4: 0
  },
  {
    status: "New",
    age: "U14",
    program: "NextGen",
    cost: 600,
    discount: 150,
    price: 450,
    payment1a: 450,
    payment1b: 450,
    payment2a: 0,
    payment2b: 150,
    payment3: 0,
    payment4: 0
  },
  {
    status: "New",
    age: "U16",
    program: "NextGen",
    cost: 600,
    discount: 150,
    price: 450,
    payment1a: 450,
    payment1b: 450,
    payment2a: 0,
    payment2b: 150,
    payment3: 0,
    payment4: 0
  },
  {
    status: "New",
    age: "U18",
    program: "NextGen",
    cost: 600,
    discount: 150,
    price: 450,
    payment1a: 450,
    payment1b: 450,
    payment2a: 0,
    payment2b: 150,
    payment3: 0,
    payment4: 0
  },
  {
    status: "New",
    age: "U20",
    program: "NextGen",
    cost: 600,
    discount: 150,
    price: 450,
    payment1a: 450,
    payment1b: 450,
    payment2a: 0,
    payment2b: 150,
    payment3: 0,
    payment4: 0
  },
  {
    status: "New",
    age: "Masters",
    program: "Outdoor",
    cost: 700,
    discount: 150,
    price: 550,
    payment1a: 550,
    payment1b: 700,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  },
  {
    status: "New",
    age: "Open",
    program: "Outdoor",
    cost: 700,
    discount: 150,
    price: 550,
    payment1a: 550,
    payment1b: 700,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  },
  {
    status: "New",
    age: "U10",
    program: "Outdoor",
    cost: 600,
    discount: 150,
    price: 450,
    payment1a: 450,
    payment1b: 600,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  },
  {
    status: "New",
    age: "U12",
    program: "Outdoor",
    cost: 600,
    discount: 150,
    price: 450,
    payment1a: 450,
    payment1b: 600,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  },
  {
    status: "New",
    age: "U14",
    program: "Outdoor",
    cost: 600,
    discount: 150,
    price: 450,
    payment1a: 450,
    payment1b: 600,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  },
  {
    status: "New",
    age: "U16",
    program: "Outdoor",
    cost: 700,
    discount: 150,
    price: 550,
    payment1a: 550,
    payment1b: 700,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  },
  {
    status: "New",
    age: "U18",
    program: "Outdoor",
    cost: 700,
    discount: 150,
    price: 550,
    payment1a: 550,
    payment1b: 700,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  },
  {
    status: "New",
    age: "U20",
    program: "Outdoor",
    cost: 700,
    discount: 150,
    price: 550,
    payment1a: 550,
    payment1b: 700,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  },
  {
    status: "New",
    age: "Masters",
    program: "X-Country",
    cost: 275,
    discount: 0,
    price: 275,
    payment1a: 275,
    payment1b: 275,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  },
  {
    status: "New",
    age: "Open",
    program: "X-Country",
    cost: 275,
    discount: 0,
    price: 275,
    payment1a: 275,
    payment1b: 275,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  },
  {
    status: "New",
    age: "U10",
    program: "X-Country",
    cost: 200,
    discount: 0,
    price: 200,
    payment1a: 200,
    payment1b: 200,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  },
  {
    status: "New",
    age: "U12",
    program: "X-Country",
    cost: 200,
    discount: 0,
    price: 200,
    payment1a: 200,
    payment1b: 200,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  },
  {
    status: "New",
    age: "U14",
    program: "X-Country",
    cost: 200,
    discount: 0,
    price: 200,
    payment1a: 200,
    payment1b: 200,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  },
  {
    status: "New",
    age: "U16",
    program: "X-Country",
    cost: 275,
    discount: 0,
    price: 275,
    payment1a: 275,
    payment1b: 275,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  },
  {
    status: "New",
    age: "U18",
    program: "X-Country",
    cost: 275,
    discount: 0,
    price: 275,
    payment1a: 275,
    payment1b: 275,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  },
  {
    status: "New",
    age: "U20",
    program: "X-Country",
    cost: 275,
    discount: 0,
    price: 275,
    payment1a: 275,
    payment1b: 275,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  },
  {
    status: "Returning",
    age: "Masters",
    program: "Full year",
    cost: 1950,
    discount: 300,
    price: 1650,
    payment1a: 495,
    payment1b: 495,
    payment2a: 0,
    payment2b: 300,
    payment3: 660,
    payment4: 495
  },
  {
    status: "Returning",
    age: "Open",
    program: "Full year",
    cost: 1950,
    discount: 300,
    price: 1650,
    payment1a: 495,
    payment1b: 495,
    payment2a: 0,
    payment2b: 300,
    payment3: 660,
    payment4: 495
  },
  {
    status: "Returning",
    age: "U16",
    program: "Full year",
    cost: 1950,
    discount: 300,
    price: 1650,
    payment1a: 495,
    payment1b: 495,
    payment2a: 0,
    payment2b: 300,
    payment3: 660,
    payment4: 495
  },
  {
    status: "Returning",
    age: "U18",
    program: "Full year",
    cost: 1950,
    discount: 300,
    price: 1650,
    payment1a: 495,
    payment1b: 495,
    payment2a: 0,
    payment2b: 300,
    payment3: 660,
    payment4: 495
  },
  {
    status: "Returning",
    age: "U20",
    program: "Full year",
    cost: 1950,
    discount: 300,
    price: 1650,
    payment1a: 495,
    payment1b: 495,
    payment2a: 0,
    payment2b: 300,
    payment3: 660,
    payment4: 495
  },
  {
    status: "Returning",
    age: "Masters",
    program: "NextGen",
    cost: 600,
    discount: 150,
    price: 450,
    payment1a: 450,
    payment1b: 450,
    payment2a: 0,
    payment2b: 150,
    payment3: 0,
    payment4: 0
  },
  {
    status: "Returning",
    age: "Open",
    program: "NextGen",
    cost: 600,
    discount: 150,
    price: 450,
    payment1a: 450,
    payment1b: 450,
    payment2a: 0,
    payment2b: 150,
    payment3: 0,
    payment4: 0
  },
  {
    status: "Returning",
    age: "U14",
    program: "NextGen",
    cost: 600,
    discount: 150,
    price: 450,
    payment1a: 450,
    payment1b: 450,
    payment2a: 0,
    payment2b: 150,
    payment3: 0,
    payment4: 0
  },
  {
    status: "Returning",
    age: "U16",
    program: "NextGen",
    cost: 600,
    discount: 150,
    price: 450,
    payment1a: 450,
    payment1b: 450,
    payment2a: 0,
    payment2b: 150,
    payment3: 0,
    payment4: 0
  },
  {
    status: "Returning",
    age: "U18",
    program: "NextGen",
    cost: 600,
    discount: 150,
    price: 450,
    payment1a: 450,
    payment1b: 450,
    payment2a: 0,
    payment2b: 150,
    payment3: 0,
    payment4: 0
  },
  {
    status: "Returning",
    age: "U20",
    program: "NextGen",
    cost: 600,
    discount: 150,
    price: 450,
    payment1a: 450,
    payment1b: 450,
    payment2a: 0,
    payment2b: 150,
    payment3: 0,
    payment4: 0
  },
  {
    status: "Returning",
    age: "Masters",
    program: "Outdoor",
    cost: 700,
    discount: 150,
    price: 550,
    payment1a: 550,
    payment1b: 700,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  },
  {
    status: "Returning",
    age: "Open",
    program: "Outdoor",
    cost: 700,
    discount: 150,
    price: 550,
    payment1a: 550,
    payment1b: 700,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  },
  {
    status: "Returning",
    age: "U10",
    program: "Outdoor",
    cost: 600,
    discount: 150,
    price: 450,
    payment1a: 450,
    payment1b: 600,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  },
  {
    status: "Returning",
    age: "U12",
    program: "Outdoor",
    cost: 600,
    discount: 150,
    price: 450,
    payment1a: 450,
    payment1b: 600,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  },
  {
    status: "Returning",
    age: "U14",
    program: "Outdoor",
    cost: 600,
    discount: 150,
    price: 450,
    payment1a: 450,
    payment1b: 600,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  },
  {
    status: "Returning",
    age: "U16",
    program: "Outdoor",
    cost: 700,
    discount: 150,
    price: 550,
    payment1a: 550,
    payment1b: 700,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  },
  {
    status: "Returning",
    age: "U18",
    program: "Outdoor",
    cost: 700,
    discount: 150,
    price: 550,
    payment1a: 550,
    payment1b: 700,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  },
  {
    status: "Returning",
    age: "U20",
    program: "Outdoor",
    cost: 700,
    discount: 150,
    price: 550,
    payment1a: 550,
    payment1b: 700,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  },
  {
    status: "Returning",
    age: "Masters",
    program: "X-Country",
    cost: 275,
    discount: 0,
    price: 275,
    payment1a: 275,
    payment1b: 275,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  },
  {
    status: "Returning",
    age: "Open",
    program: "X-Country",
    cost: 275,
    discount: 0,
    price: 275,
    payment1a: 275,
    payment1b: 275,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  },
  {
    status: "Returning",
    age: "U10",
    program: "X-Country",
    cost: 200,
    discount: 0,
    price: 200,
    payment1a: 200,
    payment1b: 200,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  },
  {
    status: "Returning",
    age: "U12",
    program: "X-Country",
    cost: 200,
    discount: 0,
    price: 200,
    payment1a: 200,
    payment1b: 200,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  },
  {
    status: "Returning",
    age: "U14",
    program: "X-Country",
    cost: 200,
    discount: 0,
    price: 200,
    payment1a: 200,
    payment1b: 200,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  },
  {
    status: "Returning",
    age: "U16",
    program: "X-Country",
    cost: 275,
    discount: 0,
    price: 275,
    payment1a: 275,
    payment1b: 275,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  },
  {
    status: "Returning",
    age: "U18",
    program: "X-Country",
    cost: 275,
    discount: 0,
    price: 275,
    payment1a: 275,
    payment1b: 275,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  },
  {
    status: "Returning",
    age: "U20",
    program: "X-Country",
    cost: 275,
    discount: 0,
    price: 275,
    payment1a: 275,
    payment1b: 275,
    payment2a: 0,
    payment2b: 0,
    payment3: 0,
    payment4: 0
  }
];

// Function to format currency
function formatCurrency(amount) {
  return amount === 0 ? '-' : `$${amount.toLocaleString()}`;
}

// Function to populate the table
function populateTable() {
  const tableBody = document.getElementById('priceTableBody');
  
  priceListItems.forEach((item, index) => {
    const row = document.createElement('tr');
    
    // Add alternating row colors
    if (index % 2 === 0) {
      row.classList.add('even-row');
    }
    
    // Add status-specific styling
    const statusClass = item.status === 'New' ? 'status-new' : 'status-not-new';
    
    row.innerHTML = `
      <td class="${statusClass}">${item.status}</td>
      <td>${item.age}</td>
      <td>${item.program}</td>
      <td class="cost-column">${formatCurrency(item.cost)}</td>
      <td id="discount-${index}" class="vcd-yes-column">${formatCurrency(item.discount)}</td>
      <td class="price-highlight">${formatCurrency(item.price)}</td>
      <td id="payment1a-${index}" class="vcd-yes-column">${formatCurrency(item.payment1a)}</td>
      <td id="payment1b-${index}" class="vcd-no-column">${formatCurrency(item.payment1b)}</td>
      <td id="payment2a-${index}" class="vcd-yes-column">${formatCurrency(item.payment2a)}</td>
      <td id="payment2b-${index}" class="vcd-no-column">${formatCurrency(item.payment2b)}</td>
      <td>${formatCurrency(item.payment3)}</td>
      <td>${formatCurrency(item.payment4)}</td>
    `;
    
    tableBody.appendChild(row);
  });
}

// Function to toggle VCD columns visibility
function toggleVCDColumns(vcdValue) {
  const vcdYesColumns = document.querySelectorAll('.vcd-yes-column');
  const vcdNoColumns = document.querySelectorAll('.vcd-no-column');
  
  if (vcdValue === 'No') {
    // Hide VCD Yes columns (Discount, Payment1a, Payment2a)
    vcdYesColumns.forEach(column => {
      column.style.display = 'none';
    });
    // Show VCD No columns (Payment1b, Payment2b)
    vcdNoColumns.forEach(column => {
      column.style.display = '';
    });
  } else {
    // Show VCD Yes columns (Discount, Payment1a, Payment2a)
    vcdYesColumns.forEach(column => {
      column.style.display = '';
    });
    // Hide VCD No columns (Payment1b, Payment2b)
    vcdNoColumns.forEach(column => {
      column.style.display = 'none';
    });
  }
}

function toggleTableVisbility(count){
  let results = document.getElementById('searchResults');
  if (count === 0) {
    results.style.display = 'none';
	oops.style.display = '';
  } else {
    results.style.display = '';
	oops.style.display = 'none';
  }
}

// Aggregated filtering function
function applyAllFilters() {

  // Get status checkboxes
  const statusFilter = document.querySelector('input[name="status"]:checked').value;
  
  // Get age checkboxes
  const ageFilter = document.querySelector('input[name="age"]:checked').value;
  
  // Get program radio buttons
  const programFilter = document.querySelector('input[name="program"]:checked').value;
  
  // Get VCD radio buttons
  const vcdFilter = document.querySelector('input[name="vcd"]:checked').value;
  
  const nextgenChecked = document.getElementById('nextgen-check').checked;
  const outdoorChecked = document.getElementById('outdoor-check').checked;
  const xcountryChecked = document.getElementById('xcountry-check').checked;
  
  const rows = document.querySelectorAll('#priceTableBody tr');
  
  let visibleCount = 0;

  rows.forEach(row => {
    const statusCell = row.cells[0].textContent;
    const ageCell = row.cells[1].textContent;
    const programCell = row.cells[2].textContent;
    
    // Status matching
    let statusMatch = false;
    if (statusFilter === 'New') {
      statusMatch = (statusCell === 'New');
    } else {
      statusMatch = (statusCell === 'Returning');
    }
        
    // Age matching
    let ageMatch = false;
    if (ageFilter === 'U10') ageMatch = (ageCell === 'U10');
    if (ageFilter === 'U12') ageMatch = (ageCell === 'U12');
    if (ageFilter === 'U14') ageMatch = (ageCell === 'U14');
    if (ageFilter === 'U16') ageMatch = (ageCell === 'U16');
    if (ageFilter === 'U18') ageMatch = (ageCell === 'U18');
    if (ageFilter === 'U20') ageMatch = (ageCell === 'U20');
    if (ageFilter === 'Open') ageMatch = (ageCell === 'Open');
    if (ageFilter === 'Masters') ageMatch = (ageCell === 'Masters');
    
    // Program matching logic
    let programMatch = false;
    if (programFilter === 'Full') {
      programMatch = (programCell === 'Full year');
    } else { // programFilter === 'Specific seasons'
      if (programCell === 'NextGen' && nextgenChecked) programMatch = true;
      if (programCell === 'Outdoor' && outdoorChecked) programMatch = true;
      if (programCell === 'X-Country' && xcountryChecked) programMatch = true;
    }
    
    if (statusMatch && ageMatch && programMatch) {
      row.style.display = '';
      visibleCount++;
    } else {
      row.style.display = 'none';
    }
  });
  
  // Handle VCD column visibility
  toggleVCDColumns(vcdFilter);

  // Handle table visibility
  toggleTableVisbility(visibleCount);
}

// Updated individual filter functions to call aggregated filter
function filterByStatus(status) {
  applyAllFilters();
}

function filterByAge(age) {
  applyAllFilters();
}

function filterBySeason() {
  applyAllFilters();
}

function filterByProgram(programFilter) {
  const seasonFilter = document.getElementById('seasonFilter');
  
  // Show/hide season filter
  if (programFilter === 'Partial') {
    seasonFilter.style.display = '';
  } else {
    seasonFilter.style.display = 'none';
  }
  
  applyAllFilters();
}

// Initialize the table when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  populateTable();
  applyAllFilters();
  // Set default VCD filter to "No" and hide columns
  toggleVCDColumns('No');
});