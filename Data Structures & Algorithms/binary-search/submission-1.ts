class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let r = nums.length - 1;
        let l = 0;
        while(l<=r) {
             let m = Math.floor((r + l) / 2);
            if(nums[m] < target) {
                l = m + 1;
            }else if(nums[m] > target) {
                r = m - 1;
            }else{
                return m;
            }
        }
        return -1;
    }
}
