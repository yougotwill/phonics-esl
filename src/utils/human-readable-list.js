const humanReadableList = (strArray) => {
  const humanList = strArray.map((item, index) => {
    if (index < strArray.length - 1) {
      item += ', ';
    }
    return item;
  });
  return humanList;
};

export default humanReadableList;
