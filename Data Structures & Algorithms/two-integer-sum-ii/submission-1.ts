class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        const numSet: Set<number> = new Set(numbers);
        for (let i=0;i<numbers.length;i++) {
            const tNum = target - numbers[i];
            if(numSet.has(tNum)) {
                let j = i+1;
                while(tNum!==numbers[j] && j<numbers.length) {
                    j++;
                }
                return [i+1, j+1];
            }
        }
    }
}
