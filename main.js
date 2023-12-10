const namesMale = [
  "Jan", "Tomáš", "Petr", "Pavel", "Martin",
  "Jakub", "Lukáš", "Jiří", "Adam", "Josef",
  "Miroslav", "Zdeněk", "Jaroslav", "Michal", "František",
  "Václav", "Ondřej", "Karel", "David", "Robert",
  "Radek", "Vladimír", "Aleš", "Richard", "Stanislav"
];

const namesFemale = [
  "Eva", "Jana", "Marie", "Lenka", "Anna",
  "Hana", "Kateřina", "Ivana", "Zuzana", "Petra",
  "Veronika", "Lucie", "Markéta", "Barbora", "Martina",
  "Alžběta", "Simona", "Michaela", "Elena", "Tereza",
  "Adéla", "Monika", "Nikola", "Eliška", "Kristýna"
];

const surnamesMale = [
  "Novák", "Svoboda", "Novotný", "Dvořák", "Černý",
  "Procházka", "Kučera", "Veselý", "Horák", "Němec",
  "Pospíšil", "Marek", "Kovář", "Král", "Jelínek",
  "Liška", "Malý", "Bartoš", "Šimek", "Kříž",
  "Ševčík", "Hájek", "Urban", "Nešpor", "Beneš"
];

const surnamesFemale = [
  "Nováková", "Svobodová", "Novotná", "Dvořáková", "Černá",
  "Procházková", "Kučerová", "Veselá", "Horáková", "Němcová",
  "Pospíšilová", "Marková", "Kovářová", "Králová", "Jelínková",
  "Lišková", "Malá", "Bartošová", "Šimková", "Křížová",
  "Ševčíková", "Hájková", "Urbanová", "Nešporová", "Benešová"
];

const genders = ["male", "female"];
const workloads = [10,20,30,40];



const getRandomMaleName = () => namesMale[Math.floor(Math.random() * namesMale.length)];
const getRandomFemaleSurname = () => surnamesFemale[Math.floor(Math.random() * surnamesFemale.length)];
const getRandomMaleSurname = () => surnamesMale[Math.floor(Math.random() * surnamesMale.length)];
const getRandomGender = () => genders[Math.floor(Math.random() * genders.length)];
const getRandomWorkload = () => workloads[Math.floor(Math.random() * workloads.length)];

const getRandomBirthdate = (minAge, maxAge) => {
  const currentDate = new Date();
  const randomYear = currentDate.getFullYear() - Math.floor(Math.random() * (maxAge - minAge + 1)) - minAge;
  const randomMonth = Math.floor(Math.random() * 12) + 1;
  const randomDay = Math.floor(Math.random() * 28) + 1;  // tu predpokladam max 28 dni v mesici. Pardon, nestihal som to upravit na presny pocty
  return new Date(randomYear, randomMonth - 1, randomDay).toISOString();
};

const generateEmployees = (dtoIn) => {
  const dtoOut = [];

  for (let i = 0; i < dtoIn.count; i++) {
    const gender = getRandomGender();
    const employee = {
      gender: gender,
      birthdate: getRandomBirthdate(dtoIn.age.min, dtoIn.age.max),
      name: gender === "male" ? getRandomMaleName() : getRandomFemaleName(),
      surname: gender === "male" ? getRandomMaleSurname() : getRandomFemaleSurname(),
      workload: getRandomWorkload()
    };

    dtoOut.push(employee);
  }

  return dtoOut;
};

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

  const dtoOut = generateEmployees(dtoIn);

  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = '<h2>Generated Employees:</h2>';
  
  const outputString = JSON.stringify(dtoOut, null, 2); // Convert the output array to a nicely formatted JSON string
  const outputPre = document.createElement('pre');
  outputPre.textContent = outputString;
  outputDiv.appendChild(outputPre);
}
