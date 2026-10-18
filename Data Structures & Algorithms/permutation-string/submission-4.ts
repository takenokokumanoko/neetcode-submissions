class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if(s1.length > s2.length) return false;

        const s1Array = new Array(26).fill(0);
        const s2Array = new Array(26).fill(0);
        const charCodeA = 'a'.charCodeAt(0);
        let matches: number = 0;

        for(let i=0; i<s1.length; i++) {
            s1Array[s1.charCodeAt(i) - charCodeA]++;
            s2Array[s2.charCodeAt(i) - charCodeA]++;
        }
        for(let j=0; j<26; j++) {
            if(s1Array[j] === s2Array[j]) matches++;   
        }

        let l = 0;
        for(let r=s1.length; r<s2.length; r++) {
            
            if (matches === 26) return true;

            // s2[r]が指す文字の番号
            const index_r = s2.charCodeAt(r) - charCodeA;
            s2Array[index_r]++;
            console.log(index_r, s1Array[index_r], s2Array[index_r]);
            if(s2Array[index_r] === s1Array[index_r]){
                matches++;
            // 元々一致していたものがずれた場合
            }else if(s2Array[index_r] === s1Array[index_r] + 1) {
                matches--;
            }

            // s2[l]が指す文字の番号
            const index_l = s2.charCodeAt(l) - charCodeA;
            s2Array[index_l]--;
            if(s2Array[index_l] === s1Array[index_l]){
                matches++;
            // 元々一致していたものがずれた場合
            }else if(s2Array[index_l] === s1Array[index_l] - 1) {
                matches--;
            }
            l++;
        }
        return matches === 26;


    //     const s1Sum:Map<string, number> = new Map();
    //     const checkSum:Map<string, number> = new Map();
    //     for(const s1str of s1) {
    //         s1Sum.set(s1str, (s1Sum.get(s1str) ?? 0) +1);
    //     }
    //     console.log(s1Sum);
    //     for(let i=0; i<=s2.length-s1.length; i++) {
    //         if(!s1Sum.has(s2[i])) {
    //             checkSum.clear();
    //             continue;
    //         }else{
    //             let j=i;
    //             while(j<=i+s1.length) {
    //                 console.log(j, s2[j]);
    //                 if((checkSum.get(s2[j]) ?? 0) + 1 > (s1Sum.get(s2[j]) ?? 0)) {
    //                     checkSum.clear();
    //                     break;
    //                 }
    //                 checkSum.set(s2[j], (checkSum.get(s2[j]) ?? 0) +1);
    //                 j++;
    //             }
    //             console.log("");
    //             if(j===i+s1.length){
    //                 return true;
    //             }
    //         }
    //     }
    //     return false;
    }
}