class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const map:Map<string, number> = new Map();
        let length = 0;
        let maxf = 0;
        let l = 0;
        for(let r=0; r<s.length; r++) {
            map.set(s[r], 1 + (map.get(s[r]) ?? 0));
            maxf = Math.max(maxf, map.get(s[r]));
            
            if(r-l+1 - maxf > k) {
                map.set(s[l], map.get(s[l])-1);
                l++;
            }
            length = Math.max(length, r-l+1);
         }
        return length;
    }
}
