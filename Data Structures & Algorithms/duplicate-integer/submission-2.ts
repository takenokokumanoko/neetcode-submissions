class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numSet: Set<number> = new Set();
        for (const num of nums) {
            if (numSet.has(num)) {
                return true;
            }
            numSet.add(num);
        }
        return false;
    }
}
