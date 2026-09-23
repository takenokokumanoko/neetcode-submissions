class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result: number[] = [nums.length];
        let prefix = 1;
        let postfix = 1;
        for (let i=0; i<nums.length; i++) {
            result[i] = prefix;
            prefix *= nums[i];
        }

        for (let j=nums.length-1; j>=0; j--) {
            result[j] *= postfix;
            postfix *= nums[j];
        }
        return result;
    }
}
