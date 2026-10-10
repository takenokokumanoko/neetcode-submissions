class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const prevMap:Map<number, number> = new Map();
        for (let i = 0; i<nums.length; i++) {
            const tNum = target - nums[i];
            if(prevMap.has(tNum)) {
                return [prevMap.get(tNum),i];
            }
            prevMap.set(nums[i], i);
        }
    }
}
