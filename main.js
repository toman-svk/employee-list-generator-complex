document.addEventListener('DOMContentLoaded', function () {
  function main() {
    const inputData = document.getElementById('inputData').value;

    if (!inputData) {
      alert('Please enter input data.');
      return;
    }

    let dtoIn;
    try {
      dtoIn = JSON.parse(inputData);
    } catch (error) {
      alert('Invalid JSON format. Please enter data in the correct format.');
      return;
    }

    const dtoOut = window.employeeGenerator.generateEmployees(dtoIn);

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<h2>Generated Employees:</h2>';
    
    const outputString = JSON.stringify(dtoOut, null, 2);
    const outputPre = document.createElement('pre');
    outputPre.textContent = outputString;
    outputDiv.appendChild(outputPre);
  }

  // Attach the main function to a button click event
  const submitButton = document.getElementById('submitButton');
  submitButton.addEventListener('click', main);
});
