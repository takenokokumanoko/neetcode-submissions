class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let l = 0;
        let r = nums.length - 1;
        if(nums[l] < nums[r]) {
            return nums[l];
        }
        let min = nums[r];
        while(l<=r){
            let m = Math.floor((l + r) / 2);
            //console.log(nums[m]); 
            if(min > nums[m]) {
                min = nums[m];
                r = m - 1;
            }else{
                l = m + 1;
            }
        }
        return min;
    }
}
