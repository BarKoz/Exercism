import {
  isNumber, isString
} from "util";

export const encode = encodeThis => {
  let code = "";
  let chartIndex = 0;
  for (let index = 0; index <= encodeThis.length + 1; index++) {
    let chart = encodeThis.charAt(index);
    let chart1 = encodeThis.charAt(index + 1);
    if (chart === chart1) chartIndex++;
    else {
      if (chartIndex > 0) {
        code += ++chartIndex + chart;
        chartIndex = 0;
      } else code += chart;
    }
  }
  return code;
};

export const decode = decodeThis => {
  let code = '';
  for (let index = 0; index < decodeThis.length; index++) {
    let chart = decodeThis.charAt(index);
    let chart1 = decodeThis.charAt(index+1);
    if (isString(chart) && isString(chart1)) {code += chart+chart1;
    index++;}

    
  }
  return code;
};