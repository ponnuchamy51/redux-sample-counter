const increment = (value = 1) => {
  return {
    type: "INCREMENT",
    value
  };
};

export default increment;
