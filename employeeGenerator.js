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

function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const getRandomBirthdate = (minAge, maxAge) => {
  const currentDate = new Date();
  const randomYear = currentDate.getFullYear() - Math.floor(Math.random() * (maxAge - minAge + 1)) - minAge;
  const randomMonth = Math.floor(Math.random() * 12) + 1;
  const randomDay = Math.floor(Math.random() * 28) + 1;  // tu predpokladam max 28 dni v mesici. Pardon, nestihal som to upravit na presny pocty
  return new Date(randomYear, randomMonth - 1, randomDay).toISOString();
};

const generateEmployeeData = (dtoIn) => {
  const dtoOut = [];

  for (let i = 0; i < dtoIn.count; i++) {
    const gender = getRandom(genders);
    const employee = {
      gender: gender,
      birthdate: getRandomBirthdate(dtoIn.age.min, dtoIn.age.max),
      name: gender === "male" ? getRandom(namesMale) : getRandom(namesFemale),
      surname: gender === "male" ? getRandom(surnamesMale) : getRandom(surnamesFemale),
      workload: getRandom(workloads)
    };

    dtoOut.push(employee);
  }

  return dtoOut;
};

window.employeeGenerator = { generateEmployeeData };