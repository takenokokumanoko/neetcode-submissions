class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let i = 0;
        let j = numbers.length - 1;
        while (i<j) {
            const sum = numbers[i] + numbers[j];
            if(sum === target) {
                return [i+1, j+1];
            }else if(sum > target) {
                j--;
            }else{
                i++;
            }
        }
        return [];
        // const numSet: Set<number> = new Set(numbers);
        // for (let i=0;i<numbers.length;i++) {
        //     const tNum = target - numbers[i];
        //     if(numSet.has(tNum)) {
        //         let j = i+1;
        //         while(tNum!==numbers[j] && j<numbers.length) {
        //             j++;
        //         }
        //         return [i+1, j+1];
        //     }
        // }
    }
}
