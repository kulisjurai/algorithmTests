const retrunNextStruct = (arr) => {
  const values = arr.map((item) => item.value).sort((a, b) => a - b);
  const doublers = values.filter(
    (item, index) => values.indexOf(item) !== index
  );
  if (doublers[0] === values[values.length - 1]) {
    return { id: values.length + 1, value: doublers[0] + 1 };
  }
  if (doublers.length) {
    for (let i = values.lastIndexOf(doublers[0]); i < values.length; i++) {
      if (values[i] + 1 < values[i + 1]) {
        return { id: values.length + 1, value: values[i] + 1 };
      } else if (values[i + 1] === undefined) {
        return { id: values.length + 1, value: values[i] + 1 };
      }
    }
  }
  return -1;
};

let arr = [
  { id: 1, value: 1 },
  { id: 2, value: 3 },
  { id: 3, value: 2 },
  { id: 4, value: 4 },
  { id: 5, value: 8 },
  { id: 6, value: 8 },
  { id: 7, value: 5 },
];

console.log(retrunNextStruct(arr));
