const sortEduArray = education => {
  const sort = education.sort((a, b) => new Date(b.to) - new Date(a.to));

  const oldEduExp = sort.filter(edu => {
    return edu.current === false;
  });

  const currentEduExp = sort.filter(edu => {
    return edu.current === true;
  });

  const sortedCurrentEduExp = currentEduExp.sort(
    (a, b) => new Date(b.from) - new Date(a.from)
  );

  const sortedArray = sortedCurrentEduExp.concat(oldEduExp);

  console.log(sortedCurrentEduExp);

  // if (currentEduExp.length > 0) {
  //   sortedArray.pop();
  //   sortedArray.unshift(currentEduExp[0]);
  // }

  return sortedArray;
};

export default sortEduArray;
