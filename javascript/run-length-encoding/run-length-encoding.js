export const code = codeThis => {
  let code = '';
  let numberOfCharts = '';
  let repeatTimes = 1;
  if (codeThis.match(/[0-9]/)) {
    for (let i = 0; i < codeThis.length; i++) {
      if (Number(codeThis.charAt(i))) {
        numberOfCharts += codeThis.charAt(i);
      } else if (numberOfCharts !== '') {
        code += codeThis.charAt(i).repeat(numberOfCharts);
        numberOfCharts = '';
      } else {
        code += codeThis.charAt(i);
      }
    }
    return code;
  }
  for (let i = 0; i < codeThis.length; i++) {
    if (codeThis.charAt(i) === codeThis.charAt(i + 1)) {
      repeatTimes++;
    } else if (repeatTimes === 1) {
      code += codeThis.charAt(i)
    } else {
      code += repeatTimes + codeThis.charAt(i);
      repeatTimes = 1;
    }
  }
  return code;
}