class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const result:number[] = Array(temperatures.length).fill(0);
        const tStack:number[] = [];
        for(let t=0;t<temperatures.length; t++) {
            while(tStack.length>0 && temperatures[t]>temperatures[tStack.at(-1)!]) {
                const index = tStack.pop();
                result[index] = t - index;
            }
            tStack.push(t);
        }
        return result;
    }
}
