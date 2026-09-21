class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
    //     for(let i=0; i<nums.length-1; i++) {
    //         for(let j=i+1; j<nums.length; j++) {
    //             if(nums[i] + nums[j] === target) {
    //                 return [i, j];
    //             }
    //         }
    //     }
    //     return [];
    
        const prevMap = new Map<number, number>;
        for(let i=0; i<nums.length; i++) {
            const diff = target - nums[i];
            if (prevMap.has(diff)) {
                return [prevMap.get(diff)!, i];
            }
            prevMap.set(nums[i], i);
        };
        return [];
    }
}
