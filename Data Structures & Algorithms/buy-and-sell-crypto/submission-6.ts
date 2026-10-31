class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let result:number=0;
        for(let l=0; l<prices.length - 1; l++) {
            for(let r=l+1; r<prices.length; r++) {
                if(prices[l] < prices[r]) {
                    result = Math.max(result, prices[r] - prices[l]); 
                }else{
                    l=r;
                }
            }
        }
        return result;
    }
}
