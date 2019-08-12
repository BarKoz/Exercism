const resistorColors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
const colorCode = color => resistorColors.indexOf(color);
/* first working code is ugly
export const value = colors => {
  return Number(colorCode(colors[0]).toString() + colorCode(colors[1]));
}
*/
export const value = colors => Number(colors.map(n => colorCode(n.toLowerCase())).join(''));