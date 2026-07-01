// 1. Define data showing which LGAs belong to each State
const lgaData = {
  Lagos: ["Ikeja", "Badagry", "Ikorodu", "Lagos Island", "Epe"],
  Kano: ["Dala", "Fagge", "Gwale", "Kano Municipal", "Nasarawa"],
  Ondo: ["Akure South", "Akure North", "Owo", "Ondo West", "Ondo East"],
  Rivers: ["Port Harcourt", "Obio-Akpor", "Okrika", "Bonny", "Eleme"],
  Kaduna: ["Kaduna North", "Kaduna South", "Zaria", "Kachia", "Igabi"],
  Oyo: ["Ibadan North", "Ibadan South", "Ibadan East", "Ibadan West", "Ibarapa"],
    Enugu: ["Enugu North", "Enugu South", "Enugu East", "Udi", "Nkanu"],
    Borno: ["Maiduguri", "Jere", "Kaga", "Bama", "Dikwa"],
    Anambra: ["Awka North", "Awka South", "Onitsha North", "Onitsha South", "Nnewi"],
    Katsina: ["Kano", "Katsina", "Dutsin-Ma", "Funtua", "Jibia"],
    Abia: ["Aba North", "Aba South", "Umuahia North", "Umuahia South", "Isiala Ngwa"],
    Adamawa: ["Yola North", "Yola South", "Demsa", "Fufore", "Girei"],
    Akwa: ["Uyo", "Eket", "Ikot Ekpene", "Oron", "Abak"],
    Bayelsa: ["Yenagoa", "Nembe", "Sagbama", "Brass", "Ogbia"],
    Benue: ["Makurdi", "Gboko", "Otukpo", "Vandeikya", "Guma"],
    Cross: ["Calabar Municipal", "Calabar South", "Akpabuyo", "Odukpani", "Biase"],
    Ebonyi: ["Abakaliki", "Afikpo North", "Afikpo South", "Onicha", "Ezza"],
    Ekiti: ["Ado Ekiti", "Ikere", "Oye", "Ise Orun", "Efon"],
    Gombe: ["Gombe", "Akko", "Balanga", "Billiri", "Kaltungo"],
    Imo: ["Owerri North", "Owerri South", "Orlu", "Okigwe", "Oguta"],
    Gigawa: ["Dutse", "Gumel", "Kazaure", "Maigatari", "Ringim"],
    Kebbi: ["Birnin Kebbi", "Argungu", "Zuru", "Yauri", "Gwandu"],
    Kogi: ["Lokoja", "Kabba/Bunu", "Ajaokuta", "Adavi", "Okehi"],
    Kwara: ["Ilorin East", "Ilorin West", "Offa", "Ekiti", "Asa"],
    Nasarawa: ["Lafia", "Akwanga", "Nasarawa Eggon", "Keffi", "Doma"],
    Niger: ["Minna", "Suleja", "Kontagora", "Bida", "Zungeru"],
    Plateau: ["Jos North", "Jos South", "Barkin Ladi", "Bassa", "Pankshin"],
    Sokoto: ["Sokoto North", "Sokoto South", "Dange Shuni", "Gudu", "Wurno"],
    Taraba: ["Jalingo", "Sardauna", "Wukari", "Takum", "Bali"],
    Yobe: ["Damaturu", "Fika", "Gujba", "Bursari", "Tarmuwa"],
    Zamfara: ["Gusau", "Kaura Namoda", "Maradun", "Shinkafi", "Zurmi"]


};




// 1. Listen for the Search button click (via form submission)
document.getElementById('searchForm').addEventListener('submit', function(event) {
  // Prevent the webpage from refreshing
  event.preventDefault(); 

  // 2. Grab the elements (Make sure these IDs match your HTML select tags)
  const stateElement = document.getElementById('stateSelect');
  const lgaElement = document.getElementById('lgaSelect');
  const wardElement = document.getElementById('wardSelect');


  
  // 3. Get the selected values
  const chosenState = stateElement ? stateElement.value : '';
  const chosenLGA = lgaElement ? lgaElement.value : '';
  const chosenWard = wardElement.value; // Your existing wardSelect from line 124

  // 4. Validation: Check if the user missed any dropdowns
  if (!chosenState || !chosenLGA || !chosenWard) {
    alert("Please select a State, LGA, and Ward before searching!");
    return;
  }

  // 5. Run your search filter logic
  console.log(`Searching polling units for: ${chosenState} -> ${chosenLGA} -> ${chosenWard}`);
  
  // Call your results display function here
  displayPollingUnits(chosenState, chosenLGA, chosenWard);
});


// 3. Listen for when the user selects a state
stateSelect.addEventListener("change", function() {
  const selectedState = this.value;
  lgaSelect.disabled = true; // Disable the LGA dropdown until we populate it
  wardSelect.disabled = true; // Disable the Ward dropdown until we populate it

  // Clear any existing LGA choices except the first placeholder option
  lgaSelect.innerHTML = '<option value="">Choose Local Government</option>';
  wardSelect.innerHTML = '<option value="">Select Ward</option>';

  if (selectedState && lgaData[selectedState]) {
    // Enable the LGA dropdown box
    lgaSelect.disabled = false;
    if (lgaData[selectedState].length > 0) {
      wardSelect.disabled = true; 
      // Enable the Ward dropdown if there are LGAs
    }

    // Loop through the array of matching LGAs and add them as options
    lgaData[selectedState].forEach(function(lgaName) {
      const option = document.createElement("option");
      option.value = lgaName;
      option.textContent = lgaName;
      lgaSelect.appendChild(option);
    });

    wardData = {
      "Ikeja": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],
      "Badagry": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],
      "Ikorodu": ["Ward 1", "Ward 2", "Ward 3", "Ward 4" ],
      "Lagos Island": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],
      "Epe": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],

      "Dala": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],
      "Fagge": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],
      "Gwale": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],
      "Kano Municipal": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],
      "Nasarawa": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],

       "Akure South": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],
       "Akure North": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],
       "Owo": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],
       "Ondo West": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],
       "Ondo East": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],

"Port Harcourt": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],
 "Obio-Akpor": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],
  "Okrika": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],
   "Bonny": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],
   "Eleme" : ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],
      
"Kaduna North": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],
"Kaduna South": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],
"Zaria": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],
"Kachia": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],
"Igabi": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],

"Ibadan North": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],
"Ibadan South": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],
"Ibadan East": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],
"Ibadan West": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],
"Ibarapa": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],

"Enugu North": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],
"Enugu South": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],
"Enugu East": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],
"Udi": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],
"Nkanu": ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],

  "Maiduguri" : ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],
  "Jere" : ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],
  "Kaga" : ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],
  "Bama" : ["Ward 1", "Ward 2", "Ward 3", "Ward 4"],
  "Dikwa" : ["Ward 1", "Ward 2", "Ward 3", "Ward 4"]
   

      // Add similar ward data for other LGAs as needed
    };

    lgaSelect.addEventListener("change", function() {
      const selectedLGA = this.value;
      wardSelect.disabled = true; // Disable the Ward dropdown until we populate it
      wardSelect.innerHTML = '<option value="">Select Ward</option>'; // Clear existing options

      if (selectedLGA && wardData[selectedLGA]) {
        wardSelect.disabled = false; // Enable the Ward dropdown if there are wards for the selected LGA

        // Loop through the array of matching wards and add them as options
        wardData[selectedLGA].forEach(function(wardName) {
          const option = document.createElement("option");
          option.value = wardName;
          option.textContent = wardName;
          wardSelect.appendChild(option);
          
        });
      }
    });
  } else {
    // If no state is selected, disable the LGA box again
    lgaSelect.disabled = true;
    // If no lga is selected, disable the Ward box again
    wardSelect.disabled = true;
  }
  

});

// 1. Mock Database organized by Wards
const pollingUnitData = {
  "Ward 1": [
    { delimiter: "02-01-06-001", name: "DWAM PARE/ PLAYING GROUND", remark: "EXISTING PU" },
    { delimiter: "02-01-06-002", name: "DWAM SAKATO/ PRY. SCH.", remark: "EXISTING PU" },
    { delimiter: "02-01-06-003", name: "KAWON DOWAYA/ PRY. SCH.", remark: "EXISTING PU" },
    { delimiter: "02-01-06-004", name: "KWALE/ KWALE PRY. SCH.", remark: "EXISTING PU" },
    { delimiter: "02-01-06-005", name: "SABON GARI/ PRY. SCH.", remark: "EXISTING PU" }
  ],
  "Ward 2": [
    { delimiter: "02-01-06-006", name: "ZURAN/ FOOTBALL PLAYING GROUND", remark: "EXISTING PU" },
    { delimiter: "02-01-06-007", name: "DAKANTA DWAM", remark: "NEW PU" },
    { delimiter: "02-01-06-003", name: "KAWON DOWAYA/ PRY. SCH.", remark: "EXISTING PU" },
    { delimiter: "02-01-06-004", name: "KWALE/ KWALE PRY. SCH.", remark: "EXISTING PU" },
    { delimiter: "02-01-06-005", name: "SABON GARI/ PRY. SCH.", remark: "EXISTING PU" },
    { delimiter: "02-01-06-001", name: "DWAM PARE/ PLAYING GROUND", remark: "EXISTING PU" },
    { delimiter: "02-01-06-002", name: "DWAM SAKATO/ PRY. SCH.", remark: "EXISTING PU" },
    { delimiter: "02-01-06-003", name: "KAWON DOWAYA/ PRY. SCH.", remark: "EXISTING PU" },
    { delimiter: "02-01-06-004", name: "KWALE/ KWALE PRY. SCH.", remark: "EXISTING PU" },
    { delimiter: "02-01-06-005", name: "SABON GARI/ PRY. SCH.", remark: "EXISTING PU" }
  ],
  "Ward 3": [
    { delimiter: "02-01-06-006", name: "ZURAN/ FOOTBALL PLAYING GROUND", remark: "EXISTING PU" },
  
  ],
  "Ward 4": [
    { delimiter: "02-01-06-006", name: "ZURAN/ FOOTBALL PLAYING GROUND", remark: "EXISTING PU" },
    { delimiter: "02-01-06-006", name: "ZURAN/ FOOTBALL PLAYING GROUND", remark: "EXISTING PU" },
    { delimiter: "02-01-06-007", name: "DAKANTA DWAM", remark: "NEW PU" },
    { delimiter: "02-01-06-003", name: "KAWON DOWAYA/ PRY. SCH.", remark: "EXISTING PU" },
    { delimiter: "02-01-06-004", name: "KWALE/ KWALE PRY. SCH.", remark: "EXISTING PU" },
    { delimiter: "02-01-06-005", name: "SABON GARI/ PRY. SCH.", remark: "EXISTING PU" },
    { delimiter: "02-01-06-001", name: "DWAM PARE/ PLAYING GROUND", remark: "EXISTING PU" },
    { delimiter: "02-01-06-002", name: "DWAM SAKATO/ PRY. SCH.", remark: "EXISTING PU" },
    { delimiter: "02-01-06-003", name: "KAWON DOWAYA/ PRY. SCH.", remark: "EXISTING PU" },
    { delimiter: "02-01-06-004", name: "KWALE/ KWALE PRY. SCH.", remark: "EXISTING PU" },
    { delimiter: "02-01-06-005", name: "SABON GARI/ PRY. SCH.", remark: "EXISTING PU" },
    { delimiter: "02-01-06-006", name: "ZURAN/ FOOTBALL PLAYING GROUND", remark: "EXISTING PU" },
    { delimiter: "02-01-06-007", name: "DAKANTA DWAM", remark: "NEW PU" },
    { delimiter: "02-01-06-003", name: "KAWON DOWAYA/ PRY. SCH.", remark: "EXISTING PU" },
    { delimiter: "02-01-06-004", name: "KWALE/ KWALE PRY. SCH.", remark: "EXISTING PU" },
    { delimiter: "02-01-06-005", name: "SABON GARI/ PRY. SCH.", remark: "EXISTING PU" },
    { delimiter: "02-01-06-001", name: "DWAM PARE/ PLAYING GROUND", remark: "EXISTING PU" },
    { delimiter: "02-01-06-002", name: "DWAM SAKATO/ PRY. SCH.", remark: "EXISTING PU" },
    { delimiter: "02-01-06-003", name: "KAWON DOWAYA/ PRY. SCH.", remark: "EXISTING PU" },
    { delimiter: "02-01-06-004", name: "KWALE/ KWALE PRY. SCH.", remark: "EXISTING PU" },
    { delimiter: "02-01-06-005", name: "SABON GARI/ PRY. SCH.", remark: "EXISTING PU" },
    { delimiter: "02-01-06-001", name: "DWAM PARE/ PLAYING GROUND", remark: "EXISTING PU" },
    { delimiter: "02-01-06-002", name: "DWAM SAKATO/ PRY. SCH.", remark: "EXISTING PU" },
    { delimiter: "02-01-06-003", name: "KAWON DOWAYA/ PRY. SCH.", remark: "EXISTING PU" },
    { delimiter: "02-01-06-004", name: "KWALE/ KWALE PRY. SCH.", remark: "EXISTING PU" },
    { delimiter: "02-01-06-005", name: "SABON GARI/ PRY. SCH.", remark: "EXISTING PU" },
    { delimiter: "02-01-06-001", name: "DWAM PARE/ PLAYING GROUND", remark: "EXISTING PU" },
    { delimiter: "02-01-06-002", name: "DWAM SAKATO/ PRY. SCH.", remark: "EXISTING PU" },
    { delimiter: "02-01-06-003", name: "KAWON DOWAYA/ PRY. SCH.", remark: "EXISTING PU" },
    { delimiter: "02-01-06-004", name: "KWALE/ KWALE PRY. SCH.", remark: "EXISTING PU" },
    { delimiter: "02-01-06-005", name: "SABON GARI/ PRY. SCH.", remark: "EXISTING PU" }
  ],


  // Add more ward arrays with data matching your dropdown selections
};

// 2. Form submission event listener
document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const chosenState = document.getElementById('stateSelect')?.value || '';
  const chosenLGA = document.getElementById('lgaSelect')?.value || '';
  const chosenWard = document.getElementById('wardSelect').value;

  if (!chosenState || !chosenLGA || !chosenWard) {
    alert("Please select a State, LGA, and Ward before searching!");
    return;
  }

  // Get matching data arrays from our database
  const units = pollingUnitData[chosenWard] || [];
  
  // Call the table generator function
  displayPollingUnitsTable(units);
});

// 3. Function that builds and prints the HTML Table dynamically
function displayPollingUnitsTable(units) {
  const container = document.getElementById('resultsContainer');
  
  // Clear any old search results
  container.innerHTML = "";

  if (units.length === 0) {
    container.innerHTML = `<p class="no-results">No Polling units found for this selection.</p>`;
    return;
  }

  // Build the entire table markup as a text string
  let tableHTML = `
    <h3>Search Result: ${units.length} Polling units found</h3>
    <table class="pu-table">
      <thead>
        <tr>
          <th>Polling Unit Delimeter</th>
          <th>Polling Unit Name</th>
          <th>Remark</th>
        </tr>
      </thead>
      <tbody>
  `;

  // Loop through every polling unit match to create rows
  units.forEach(unit => {
    tableHTML += `
      <tr>
        <td>${unit.delimiter}</td>
        <td>${unit.name}</td>
        <td>${unit.remark}</td>
      </tr>
    `;
  });

  tableHTML += `
      </tbody>
    </table>
  `;

  // Inject the completed table string into our layout container
  container.innerHTML = tableHTML;
}


