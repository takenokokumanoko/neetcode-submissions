class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        //const set:Set<string> = new Set();
        let maxCount:number = 0;
        let strs:string = "";
        for(const str of s) {
            const index:number =  strs.indexOf(str);
            if(index < 0){
                // 重複してない
                strs += str;
                maxCount = maxCount < strs.length ? strs.length : maxCount;
            }else{
                // 重複してるので保持しているstrsをslice
                strs = strs.slice(index+1);
                strs += str;
            }
        }
        return maxCount;
        //各英単語の位置を格納する
        // const map:Map<string, number> = new Map();
        // let min:number = 0;
        // let max:number = 0;
        // let maxCount:number = 0;
        // for(let i=0;i<s.length;i++) {
        //     if(!map.has(s[i])) {
        //         map.set(s[i], i);
        //         max = i;
        //         maxCount = maxCount < max-min+1 ? max-min+1 : maxCount;
        //     }else{
        //         // mapから削除
        //         for(let d=min;d<map.get(s[i]);d++) {
        //             map.delete(s[d]);
        //         }
        //         min = map.get(s[i])+1;
        //         map.set(s[i], i);
        //         max = i;
        //     }
        //     console.log(min, max);
        // }
        // return maxCount;
    }
}
