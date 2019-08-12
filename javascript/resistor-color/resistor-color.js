import { equal } from "assert";
export const COLORS = ['black','brown','red','orange','yellow','green','blue','violet','grey','white'];
export const colorCode = (color) => {
color = color.toLowerCase(); //all input to lower case and add test capital letters
let colorKey = Object.keys(COLORS).find(key => COLORS[key].includes(color));
return Number(colorKey);
};