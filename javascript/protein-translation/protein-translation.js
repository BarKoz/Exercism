import {
  breakStatement
} from "@babel/types";

export const translate = (RNAstr = '') => {
  let RNAWords = [];
  const breakWords = ['UAA', 'UAG', 'UGA'];
  const specialWords = {
    'Methionine': ['AUG'],
    'Phenylalanine': ['UUU', 'UUC'],
    'Leucine': ['UUA', 'UUG'],
    'Serine': ['UCU', 'UCC', 'UCA', 'UCG'],
    'Tyrosine': ['UAU', 'UAC'],
    'Cysteine': ['UGU', 'UGC'],
    'Tryptophan': ['UGG']
  }
  for (let index = 0; index < RNAstr.length; index += 3) {
    const RNAWord = RNAstr.slice(index, index + 3);
    if (breakWords.includes(RNAWord)) {
      break;
    } else {
      const word = Object.keys(specialWords).find(key => specialWords[key].includes(RNAWord))
      if (word === undefined) throw new Error("Invalid codon");
      else {
        RNAWords[index / 3] = word;
      }
    }
  }
  return RNAWords;
}