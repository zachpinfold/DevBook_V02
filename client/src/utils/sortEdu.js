const sortEduArray = education => {
  const currentEdu = [];

  const sort = education.sort((a, b) => new Date(b.to) - new Date(a.to));

  const sortedArray = sort.map(edu => {
    if (edu.current === true) currentEdu.push(edu);
    return edu;
  });

  if (currentEdu.length > 0) {
    sortedArray.pop();
    sortedArray.unshift(currentEdu[0]);
  }

  return sortedArray;
};

export default sortEduArray;
