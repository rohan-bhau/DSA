function predictTheWinner(nums: number[]): boolean {

const n = nums.length;

    const memo: (number | undefined)[][] = Array.from(
        { length: n },
        () => Array(n).fill(undefined)
    );
    // console.log(memo)

  function solve(left:number, right:number):number{
    if(left===right){
        return nums[left]
    }

    if(memo[left][right]!==undefined){
        return memo[left][right]!
    }

    const takenLeft=nums[left]-solve(left+1, right)

    const takenRight=nums[right]-solve(left, right-1)

    memo[left][right] = Math.max(takenLeft, takenRight)

    return memo[left][right]!

  }  
  return solve(0, n-1)>=0
};