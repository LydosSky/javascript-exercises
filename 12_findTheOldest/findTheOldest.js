const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();

  const getAge = function (person) {
    return person.yearOfDeath !== undefined
      ? person.yearOfDeath - person.yearOfBirth
      : currentYear - person.yearOfBirth;
  };

  return people.reduce((oldestPerson, currentPerson) =>
    getAge(currentPerson) >= getAge(oldestPerson)
      ? currentPerson
      : oldestPerson,
  );
};

// Do not edit below this line
module.exports = findTheOldest;
