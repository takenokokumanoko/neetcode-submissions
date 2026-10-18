class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if(s.length % 2 != 0) return false;
        
        const bracket:Map<string, string> = new Map([[')', '('], ['}', '{'], [']', '[']]);
        const strs:string[] = [];
        for(const str of s) {
            if(!bracket.has(str)) {
                console.log("push", str);
                strs.push(str);
            }else if(bracket.has(str)) {
                const val = strs.pop();
                if(val === undefined || bracket.get(str) !== val) {
                    return false;
                }
            }else{
                return false;
            }
        }
        if(strs.length === 0) return true;
        return false;
    }
}
