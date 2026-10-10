class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);
        const result: number[][] = [];
        for (let i = 0; i<nums.length-2; i++) {
            let j = i+1;
            let k = nums.length-1;
            
            if(nums[i-1] === nums[i]){
                continue;
            }
            while(j<k){
                const sum = nums[i]+nums[j]+nums[k];
                if(sum == 0){
                    result.push([nums[i],nums[j],nums[k]]);
                    j++;
                    k--;
                    while(nums[j]===nums[j-1] && j<k) {
                        j++;
                    }
                }else if(sum > 0) {
                    k--;
                }else{
                    j++;
                }
            }
        }
        return [...result];
    }
}
