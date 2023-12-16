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

    const dtoOut = window.employeeGenerator.generateEmployeeData(dtoIn);

    const dtoOutStatistics = window.employeeAnalyzer.getEmployeeStatistics(dtoOut);
    const statisticsDiv = document.getElementById('dtoOutStatistics');
    const statisticsString = JSON.stringify(dtoOutStatistics,null,2);
    const statisticsPre = document.createElement('pre');
    statisticsDiv.innerHTML = '<h2>Employees Statistics:</h2>';
    statisticsPre.textContent = statisticsString;
    statisticsDiv.appendChild(statisticsPre);

    const outputDiv = document.getElementById('output');
    const outputString = JSON.stringify(dtoOut, null, 2);
    const outputPre = document.createElement('pre');
    outputDiv.innerHTML = '<h2>Generated Employees:</h2>';
    outputPre.textContent = outputString;
    outputDiv.appendChild(outputPre);
  }

  // Attach the main function to a button click event
  const submitButton = document.getElementById('submitButton');
  submitButton.addEventListener('click', main);
});
