export const getUpdatedArr = (originArr, newValue) =>
  originArr.map(d => (d.id === newValue.id ? newValue : d))
