module.exports = function createDreamTeam(members) {

  if (!Array.isArray(members)) return false;

  if (members.length === 0) {
    return false;
  }

  const letters = members.map(name => {
    if (typeof name === 'string') {
      return name.trim()[0].toUpperCase();
    }
  });

  return letters.sort().join('');
};
