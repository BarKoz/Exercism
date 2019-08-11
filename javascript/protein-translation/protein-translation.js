import {
  breakStatement
} from "@babel/types";

export const translate = (RNAstr = '') => {
  //variable to hold array with Codons/Protein
  let RNAWords = [];
  // if RNA is empty brake loop and return empty string
  if (RNAstr === '') {
    return RNAWords;
  }
  //a loop that creates three-letter words and translate Codon into Protein
  for (let index = 0; index < RNAstr.length; index += 3) {
    //checking if the next protein is the stop protein if yes break loop
    if (RNAstr[index] + RNAstr[index + 1] + RNAstr[index + 2] == 'UAA' || RNAstr[index] + RNAstr[index + 1] + RNAstr[index + 2] == 'UAG' || RNAstr[index] + RNAstr[index + 1] + RNAstr[index + 2] == 'UGA') {
      break;
    } else {
      RNAWords[index / 3] = (RNAstr[index] + RNAstr[index + 1] + RNAstr[index + 2]);
      //switch translate Codons to Protein
      switch (RNAWords[index / 3]) {
        case 'AUG':
          RNAWords[index / 3] = "Methionine";
          break;
        case 'UGG':
          RNAWords[index / 3] = "Tryptophan";
          break;
        case 'UGU':
        case 'UGC':
          RNAWords[index / 3] = "Cysteine";
          break;
        case 'UAU':
        case 'UAC':
          RNAWords[index / 3] = "Tyrosine";
          break;
        case 'UCU':
        case 'UCC':
        case 'UCA':
        case 'UCG':
          RNAWords[index / 3] = "Serine";
          break;
        case 'UUA':
        case 'UUG':
          RNAWords[index / 3] = "Leucine";
          break;
        case 'UUU':
        case 'UUC':
          RNAWords[index / 3] = "Phenylalanine";
          break;
        default:
          var err = true;
          break;
      }
    }
  }
  //Return Protein translated
  if (err) {
    throw new Error("Invalid codon");
  } else return RNAWords;
}