
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
    }
];

function addOrUpdateName(inputObject, inputName) {
    if (inputObject.hasOwnProperty(inputName)) {
        inputObject[inputName] += 1;
    } else {
        inputObject[inputName] = 1;
    }
}

function getEmployeeChartContent(employees) {

    const femaleFullTime = {};
    const femalePartTime = {};
    const maleFullTime = {};
    const malePartTime = {};

    employees.forEach(person => {

        if (person.gender === "female") {
            console.log(person.name + " is female.");

            if (person.workload === 40) {
                addOrUpdateName(femaleFullTime, person.name);
            } else {
                addOrUpdateName(femalePartTime, person.name);
            }
        }
        if (person.gender === "male") {
            console.log(person.name + " is male.");

            if (person.workload == 40) {
                addOrUpdateName(maleFullTime, person.name);
            } else {
                addOrUpdateName(malePartTime, person.name);
            }
        }
    });

    const female = {
        ...femalePartTime,
        ...femaleFullTime
        };

    const male = {
        ...malePartTime,
        ...maleFullTime
        };

    console.log(female);
    console.log(male);


}

getEmployeeChartContent(employees);



// window.employeeChart = { getEmployeeChartContent };