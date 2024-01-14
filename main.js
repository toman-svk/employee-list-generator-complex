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

    const employeeData = window.employeeGenerator.generateEmployeeData(dtoIn);

    const employeeStatistics = window.employeeAnalyzer.getEmployeeStatistics(employeeData);

    //const dtoOut = [employeeStatistics, ...employeeData];
    const dtoOut = {
      ...employeeStatistics,
      sortedByWorkload: [...employeeData]
    };

    const chartOut = getEmployeeChartContent(employeeData);

    const outputDiv = document.getElementById('output1');
    const outputString = JSON.stringify(chartOut, null, 1);
    const outputPre = document.createElement('pre');
    outputDiv.innerHTML = '<h2>employeeChart output:</h2>';
    outputPre.textContent = outputString;
    outputDiv.appendChild(outputPre);


    const outputDiv2 = document.getElementById('output2');
    const outputString2 = JSON.stringify(dtoOut, null, 2);
    const outputPre2 = document.createElement('pre2');
    outputDiv2.innerHTML = '<h2>employeeAnalyzer output:</h2>';
    outputPre2.textContent = outputString2;
    outputDiv2.appendChild(outputPre2);
  }

  // Attach the main function to a button click event
  const submitButton = document.getElementById('submitButton');
  submitButton.addEventListener('click', main);
});
