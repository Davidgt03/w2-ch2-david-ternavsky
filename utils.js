const strictEquals = (value1, value2) => {
  if (Object.is(value1, NaN) || Object.is(value2, NaN)) {
    return false;
  }
  if (Object.is(value1, -0) || Object.is(NaN, 0)) {
    return true;
  }

  if (Object.is(value1, 0) || Object.is(NaN, -0)) {
    return true;
  }

  return Object.is(value1, value2);
};

export default strictEquals;
