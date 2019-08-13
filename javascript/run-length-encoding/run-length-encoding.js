export const encode = encodeThis => {
  let code = '';
  let repeatTimes = 1;
  for (let index = 0; index < encodeThis.length; index++) {
    if (encodeThis.charAt(index) === encodeThis.charAt(index + 1)) {
      repeatTimes++;
    } else if (repeatTimes === 1) {
      code += encodeThis.charAt(index)
    } else {
      code += repeatTimes + encodeThis.charAt(index);
      repeatTimes = 1;
    }
  }
  return code;
};
export const decode = decodeThis => {
  let code = '';
  let numberOfCharts = '';
  for (let index = 0; index < decodeThis.length; index++) {
    if (Number(decodeThis.charAt(index))) {
      numberOfCharts += decodeThis.charAt(index);
    } else if (numberOfCharts !== '') {
      code += decodeThis.charAt(index).repeat(numberOfCharts);
      numberOfCharts = '';
    } else {
      code += decodeThis.charAt(index);
    }
  }
  return code;
};