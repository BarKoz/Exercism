export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  kind(a = this.a, b = this.b, c = this.c) {
    if (a <= 0 || b <= 0 || c <= 0) throw "";
    else if (a+b < c || a+c < b || b+c < a) throw "";
    else if (b === c && a === c && a === b) return 'equilateral';
    else if (a === b || a === c || b === c) return 'isosceles';
    else if (a !== b && a !== c && b !== c) return 'scalene';
  }
}
//not optimal ugly solution with added two tests