const resistorColors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
const colorCode = color => resistorColors.indexOf(color);
export const value = colors => Number(colors.map(n => colorCode(n.toLowerCase())).join(''));