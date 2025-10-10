import { cardNumberRegExp, cvvRegExp, expiryDateRegExp, phoneRegExp } from './regexps';

describe('Card number regular expression', () => {
  test('Should match 16-digit card numbers', () => {
    expect(cardNumberRegExp.test('1234567812345678')).toBeTruthy();
    expect(cardNumberRegExp.test('8765432187654321')).toBeTruthy();
  });

  test('Should not match card numbers with less or more than 16 digits', () => {
    expect(cardNumberRegExp.test('123456781234567')).toBeFalsy();
    expect(cardNumberRegExp.test('12345678123456789')).toBeFalsy();
  });

  test('Should not match card numbers with non-numeric characters', () => {
    expect(cardNumberRegExp.test('1234567812345678a')).toBeFalsy();
    expect(cardNumberRegExp.test('1234 5678 1234 5678')).toBeFalsy();
  });
});

describe('Phone number regular expression', () => {
  test('Should be valid with at least 6 characters', () => {
    expect(phoneRegExp.test('123456')).toBeTruthy();
    expect(phoneRegExp.test('1234567890')).toBeTruthy();
  });

  test('Should be invalid with non-numeric symbols', () => {
    expect(phoneRegExp.test('+123456')).toBeFalsy();
    expect(phoneRegExp.test('12(34)56-78-90')).toBeFalsy();
    expect(phoneRegExp.test('some random 1234512312 text')).toBeFalsy();
  });
});

describe('Expiry date regular expression', () => {
  test('Should be valid for MM/YY', () => {
    expect(expiryDateRegExp.test('01/24')).toBeTruthy();
    expect(expiryDateRegExp.test('12/26')).toBeTruthy();
  });

  test('Should be invalid for all non-matching pattern MM/YY', () => {
    expect(expiryDateRegExp.test('13/24')).toBeFalsy();
    expect(expiryDateRegExp.test('1/24')).toBeFalsy();
    expect(expiryDateRegExp.test('01|24')).toBeFalsy();
    expect(expiryDateRegExp.test('01\x1424')).toBeFalsy();
    expect(expiryDateRegExp.test('xx/xx')).toBeFalsy();
  });
});

describe('CVV regular expression', () => {
  test('Should be valid cvv', () => {
    expect(cvvRegExp.test('0000')).toBeTruthy();
    expect(cvvRegExp.test('555')).toBeTruthy();
    expect(cvvRegExp.test('999')).toBeTruthy();
  });

  test('Should be invalid cvv', () => {
    expect(expiryDateRegExp.test('000e')).toBeFalsy();
    expect(expiryDateRegExp.test('55')).toBeFalsy();
    expect(expiryDateRegExp.test('10000')).toBeFalsy();
    expect(expiryDateRegExp.test('xxx')).toBeFalsy();
  });
});
