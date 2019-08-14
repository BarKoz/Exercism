import {code} from './run-length-encoding';

describe('run-length code a string', () => {
  test('code empty string', () => {
    expect(code('')).toEqual('');
  });

  test('single characters only are coded without count', () => {
    expect(code('XYZ')).toEqual('XYZ');
  });

  test('code string with no single characters', () => {
    expect(code('AABBBCCCC')).toEqual('2A3B4C');
  });

  test('code string with single characters mixed with repeated characters', () => {
    expect(code('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB')).toEqual('12WB12W3B24WB');
  });

  test('code string with multiple whitespaces', () => {
    expect(code('  hsqq qww  ')).toEqual('2 hs2q q2w2 ');
  });

  test('code string with lowercase characters', () => {
    expect(code('aabbbcccc')).toEqual('2a3b4c');
  });
});

describe('run-length code a string', () => {
  test('code empty string', () => {
    expect(code('')).toEqual('');
  });

  test('code string with single characters only', () => {
    expect(code('XYZ')).toEqual('XYZ');
  });

  test('code string with no single characters', () => {
    expect(code('2A3B4C')).toEqual('AABBBCCCC');
  });

  test('code string with single characters mixed with repeated characters', () => {
    expect(code('12WB12W3B24WB')).toEqual('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB');
  });

  test('code string with multiple whitespaces', () => {
    expect(code('2 hs2q q2w2 ')).toEqual('  hsqq qww  ');
  });

  test('code string with lowercase characters', () => {
    expect(code('2a3b4c')).toEqual('aabbbcccc');
  });
});

describe('run-length code and then code', () => {
  test('code followed by code gives original string', () => {
    expect(code(code('zzz ZZ  zZ'))).toEqual('zzz ZZ  zZ');
  });
});
