
const employees = [
    {
        "gender": "male",
        "birthdate": "1997-05-01T22:00:00.000Z",
        "name": "Václav",
        "surname": "Liška",
        "workload": 10
    },
    {
        "gender": "female",
        "birthdate": "1992-11-23T23:00:00.000Z",
        "name": "Hana",
        "surname": "Němcová",
        "workload": 20
    },
    {
        "gender": "female",
        "birthdate": "1995-09-17T22:00:00.000Z",
        "name": "Veronika",
        "surname": "Bartošová",
        "workload": 30
    },
    {
        "gender": "female",
        "birthdate": "1995-09-17T22:00:00.000Z",
        "name": "Veronika",
        "surname": "Bartošová",
        "workload": 40
    },
    {
        "gender": "male",
        "birthdate": "1995-09-17T22:00:00.000Z",
        "name": "Filip",
        "surname": "Tomanka",
        "workload": 40
    }
];

function addOrUpdateName(inputObject, inputName) {
    if (inputObject.hasOwnProperty(inputName)) {
        inputObject[inputName] += 1;
    } else {
        inputObject[inputName] = 1;
    }
}

const mergeAndSumCounts = (obj1, obj2) => {
    return [...new Set([...Object.keys(obj1), ...Object.keys(obj2)])].reduce((acc, key) => {
        acc[key] = (obj1[key] || 0) + (obj2[key] || 0);
        return acc;
    }, {});
};  

function convertToChartData(names) {
    const chartData = {};
    for (const key in names) {
        chartData[key] = Object.entries(names[key]).map(([label, value]) => {
            return { label, value };
        }).sort((a, b) => b.value - a.value);
    }
    return { chartData };
}

function getEmployeeChartContent(employees) {

    const femaleFullTime = {};
    const femalePartTime = {};
    const maleFullTime = {};
    const malePartTime = {};

    employees.forEach(person => {

        if (person.gender === "female") {

            if (person.workload === 40) {
                addOrUpdateName(femaleFullTime, person.name);
            } else {
                addOrUpdateName(femalePartTime, person.name);
            }
        }
        if (person.gender === "male") {

            if (person.workload == 40) {
                addOrUpdateName(maleFullTime, person.name);
            } else {
                addOrUpdateName(malePartTime, person.name);
            }
        }
    });

    const female = mergeAndSumCounts(femalePartTime, femaleFullTime);
    const male = mergeAndSumCounts(malePartTime, maleFullTime);
    const all = mergeAndSumCounts(female, male);
    
    const names = {
        all: all,
        male: male,
        female: female,
        femalePartTime: femalePartTime,
        maleFullTime: maleFullTime
    }

    const convertedData = convertToChartData(names);
    console.log(convertedData);

    const output = {
        names: names,
        chartData: convertedData
    };

    return output;
    //console.log(JSON.stringify(output, null, 1));

}

getEmployeeChartContent(employees);



//window.employeeChart = { getEmployeeChartContent };