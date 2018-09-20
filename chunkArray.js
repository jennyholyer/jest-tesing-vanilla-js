const chunkArray = (arr, len) => {
  const checkedArray = [];

  arr.forEach(element => {
    // Get last element
    const last = checkedArray[checkedArray.length - 1];

    // Check if last and if last length is equal to the chunk len
    !last || last.length === len
      ? checkedArray.push([element])
      : last.push(element);
  });
  return checkedArray;
};

module.exports = chunkArray;
