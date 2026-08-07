function containsDuplicate(nums: number[]): boolean {
    let numbers = new Set();
for(let i = 0; i < nums.length; i++){
    if(numbers.has(nums[i])){
        return true
    }
    numbers.add(nums[i])
}
return false
};