const decrement = (value = 1) => {
  return {
    type: "DECREMENT",
    value
  };
};

export default decrement;
