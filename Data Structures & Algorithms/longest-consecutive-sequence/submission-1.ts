class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numSet: Set<number> = new Set(nums);
        let maxLength = 0;
        for (const num of nums) {
            // 今見ている値が連続する数値の中で最小であることを確かめる
            if (!numSet.has(num - 1)) {
                let count = 0;
                while(numSet.has(num + count)) {
                    count++;
                }
                maxLength = Math.max(maxLength, count);
            }
        }
        return maxLength;
    }
}
