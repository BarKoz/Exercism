const RNA = {
  'G': 'C',
  'C': 'G',
  'A': 'U',
  'T': 'A',
}
export const toRna = DNA => {
  let DNAarray = DNA.split('');
  return DNAarray.map(x => x = RNA[x]).join('');
};