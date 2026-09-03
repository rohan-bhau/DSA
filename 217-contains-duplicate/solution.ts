function containsDuplicate(nums: number[]): boolean {
    const duplicate= new Set<number>()

    for(let i =0; i<nums.length; i++){
        if(duplicate.has(nums[i])){
            return true
        }else{
            duplicate.add(nums[i])
        }
    }
    return false
};