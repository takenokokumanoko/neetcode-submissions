class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let i = 0;
        let j = heights.length-1;
        let max:number = 0;
        while(i<j){
            const area = (j-i)*Math.min(heights[i],heights[j]);
            max = area > max ? area : max;
            if(heights[i]<heights[j]) {
                i++;
            }else{
                j--;
            }
        }            
        return max;
    }
}
