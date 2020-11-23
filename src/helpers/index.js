export const getUpdatedArr = (originArr, newValue) =>
  originArr.map(d => (d.id === newValue.id ? newValue : d))

export const getUniqId = () =>
  Math.random()
    .toString(36)
    .substr(2)
