export const validate = (inputNum) => {
  let inputString = inputNum.toString().split("");
  let armstrong = 0;
  for (let index = 0; index < inputString.length; index++) {
    armstrong += Math.pow(Number(inputString[index]), inputString.length);
  }
  return (armstrong === inputNum);
}