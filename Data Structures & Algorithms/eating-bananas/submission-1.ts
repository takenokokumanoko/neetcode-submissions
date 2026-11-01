class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let l:number = 0;
        let r:number = Math.max(...piles);
        let result:number = 1;
        while(l<=r) {
            let m = Math.floor((r + l)/2);
            let sumH = 0;
            for(const pile of piles) {
                sumH += Math.ceil(pile / m);
            }
            if(sumH > h) {
                l = m + 1;
            }else if(sumH <= h) {
                r = m - 1;
                result = m;
                //console.log(m);
            }
        }
        return result;
    }
}
