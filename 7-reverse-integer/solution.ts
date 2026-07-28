function reverse(x: number): number {
    const reversed= parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x);

  const MIN_INT = -Math.pow(2, 31);      // -2147483648
  const MAX_INT = Math.pow(2, 31) - 1;   //  2147483647

  if (reversed < MIN_INT || reversed > MAX_INT) {
    return 0;
  }

  return reversed;
};