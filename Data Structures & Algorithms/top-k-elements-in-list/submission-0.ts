class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const hashMap : Map<number, number> = new Map();
        // Mapに数ごとにカウントした値を入れる
        for (const num of nums) {
            hashMap.set(num, (hashMap.get(num) ?? 0) + 1);
        }
        // 並べ替え
        const sortedMap = new Map(Array.from(hashMap.entries()).sort(([, a], [, b]) => b - a));
        return Array.from(sortedMap.keys()).slice(0, k);
    }
}
