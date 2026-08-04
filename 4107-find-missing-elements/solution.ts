function findMissingElements(nums: number[]): number[] {
  let sortedArray = nums.sort((a,b)=>a-b)

  let smallInt = sortedArray[0]
  const largeInt= sortedArray[sortedArray.length-1]  
//   console.log(smallInt, largeInt)

let missingElements:number[] = []

let i = 0;
let current = smallInt

  while(current<=largeInt){
    if(sortedArray[i]===current){
        i++;
        current++
    }else{
        missingElements.push(current)
        current++
    }
  }

  return missingElements;
};