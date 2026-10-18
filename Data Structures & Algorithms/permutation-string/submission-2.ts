class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        const s1Sum:Map<string, number> = new Map();
        const checkSum:Map<string, number> = new Map();
        for(const s1str of s1) {
            s1Sum.set(s1str, (s1Sum.get(s1str) ?? 0) +1);
        }
        console.log(s1Sum);
        for(let i=0; i<=s2.length-s1.length; i++) {
            if(!s1Sum.has(s2[i])) {
                checkSum.clear();
                continue;
            }else{
                let j=i;
                while(j<=i+s1.length) {
                    console.log(j, s2[j]);
                    if((checkSum.get(s2[j]) ?? 0) + 1 > (s1Sum.get(s2[j]) ?? 0)) {
                        checkSum.clear();
                        break;
                    }
                    checkSum.set(s2[j], (checkSum.get(s2[j]) ?? 0) +1);
                    j++;
                }
                console.log("");
                if(j===i+s1.length){
                    return true;
                }
            }
        }
        return false;
    }
}
