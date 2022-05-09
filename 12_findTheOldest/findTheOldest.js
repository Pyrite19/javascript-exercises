const findTheOldest = function (array) {
	return array.reduce((oldest, currentPerson) => {
		oldestAge = AgeSolver(oldest.yearOfBirth, oldest.yearOfDeath);
		currentAge = AgeSolver(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
		if (oldestAge < currentAge) {
			return currentPerson;
		} else {
			return oldest;
		}
	});
};

const AgeSolver = function (birth, death) {
	if (death == undefined) {
		death = new Date().getFullYear();
	}
	return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
