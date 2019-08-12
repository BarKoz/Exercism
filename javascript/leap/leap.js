export const isLeap = (yearNumber) => {
  if (yearNumber % 4) return false;
  else {
    if (yearNumber % 400 && yearNumber % 100) return true;
    else if (yearNumber % 400) return false;
    else return true;
  }
}