function calculateAge(birthdate, currentDate) {
    const birthDateObj = new Date(birthdate);
    let age = currentDate.getFullYear() - birthDateObj.getFullYear();
  
    // Check if the birthdate has occurred this year
    const currentMonth = currentDate.getMonth();
    const birthMonth = birthDateObj.getMonth();
    const currentDay = currentDate.getDate();
    const birthDay = birthDateObj.getDate();
  
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
      age--;
    }
  
    return age;
}

function addToOrderedArray(orderedArray, newValue) {

    if (orderedArray.length === 0 || newValue >= orderedArray[orderedArray.length - 1]) {
        orderedArray.push(newValue);
    } else {
        let indexToInsert = orderedArray.length - 1;
        while (indexToInsert >= 0 && newValue < orderedArray[indexToInsert]) {
          indexToInsert--;
        }
        orderedArray.splice(indexToInsert + 1, 0, newValue);
    }

}

function getMedian(orderedArray) {

    const isEven = orderedArray.length % 2 === 0;
    const middleOfArray = orderedArray.length/2;

    if (isEven) {
        return ((orderedArray[(middleOfArray-1)] + orderedArray[middleOfArray])/2);
    } else {
        return (orderedArray[Math.floor(middleOfArray)]);
    }
}

// main function of the module
function getEmployeeStatistics(employees) {

    // define output structure
    const statistics = {
        total:0,
        workload10:0,
        workload20:0,
        workload30:0,
        workload40:0,
        averageAge:0,
        minAge:0,
        maxAge:0,
        medianAge:0,
        medianWorkload:0,
        averageWomenWorkload:0
    };

    // define other variables
    let womenWorkload = 0;
    let womenCount = 0; 
    let totalAge = 0;
    const orderedWorkloads = [];
    const currentDate = new Date();
    const orderedAges = [];

    // loop through employees data and gather info for further calculations
    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];
        const workload = employee.workload;

        switch (workload) {
            case 10:
              statistics.workload10++;
              break;
            case 20:
              statistics.workload20++;
              break;
            case 30:
              statistics.workload30++;
              break;
            case 40:
              statistics.workload40++;
              break;
        }

        addToOrderedArray(orderedWorkloads, workload);

        if (employee.gender === 'female') {
            womenWorkload += workload;
            womenCount++;
        }

        const age = calculateAge(employee.birthdate, currentDate);
        totalAge += age;
        addToOrderedArray(orderedAges, age);
    }

    // populate statistics object
    statistics.total = employees.length;
    statistics.averageAge = (totalAge / employees.length).toFixed(1);
    statistics.averageWomenWorkload = womenWorkload / womenCount;
    statistics.medianWorkload = getMedian(orderedWorkloads);
    statistics.medianAge = getMedian(orderedAges);
    statistics.minAge = orderedAges[0];
    statistics.maxAge = orderedAges[orderedAges.length-1];

    return statistics;
};

window.employeeAnalyzer = { getEmployeeStatistics };