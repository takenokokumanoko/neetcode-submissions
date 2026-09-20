class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // hasDuplicate(nums: number[]): boolean {
    //     for (let i = 0; i < nums.length - 1; i++) {
    //         for (let j = i + 1; j < nums.length; j++) {
    //             if (nums[i] === nums[j]) {
    //                 return true;
    //             }
    //         }
    //     }
    //     return false;
    // }
    hasDuplicate(nums: number[]): boolean {
        const hashSet = new Set<number>;
        for (let i = 0; i < nums.length; i++) {
            if(hashSet.has(nums[i])){
                return true;
            }
            hashSet.add(nums[i]);
        }
        return false;
    }
}
