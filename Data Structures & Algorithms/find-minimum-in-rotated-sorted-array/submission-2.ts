class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let l = 0;
        let r = nums.length - 1;

        let min = nums[0];

        while(l<=r) {
            if(nums[l]<nums[r]) {
                min = Math.min(min, nums[l]);
                break;
            }
            let m = Math.floor((l + r) / 2);
            min = Math.min(min, nums[m]);
            if(nums[l]<=nums[m]) {
                l = m + 1;
            }else{
                r = m - 1;
            }
        }
        return min;
        // if(nums[l] < nums[r]) {
        //     return nums[l];
        // }
        // let min = nums[r];
        // while(l<=r){
        //     let m = Math.floor((l + r) / 2);
        //     //console.log(nums[m]); 
        //     if(min > nums[m]) {
        //         min = nums[m];
        //         r = m - 1;
        //     }else{
        //         l = m + 1;
        //     }
        // }
        // return min;
    }
}
