export function formatData(data: any, numData: number) {
  const numberOfFullRows = Math.floor(data.length / numData);

  let numberOfElementLast = data.length - numberOfFullRows * numData;
  while (numberOfElementLast !== numData) {
    data.push({ key: `blank-${numberOfElementLast}`, empty: true });
    numberOfElementLast = numberOfElementLast + 1;
  }

  return data;
}
