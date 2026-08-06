function smallestNumber(n: number, t: number): number {
    let num = n;

    while(true){

    // product of n
    const product = String(num)
  .split('')
  .reduce((acc, digit) => acc * Number(digit), 1);

//   console.log(typeof(product))
    
    if(product%t===0){
        return num
    }
        num++
    }

};