const increment = () => ({
  type: "INCREMENT",
  value: 1
});
const decrement = (value = 1) => {
  return { type: "DECREMENT", value };
};

export { increment, decrement };
