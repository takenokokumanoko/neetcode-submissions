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
            if(str === '(' || str === '{' || str === '[') {
                console.log("push", str);
                strs.push(str);
            }else if(str === ')' || str === '}' || str === ']') {
                const val = strs.pop();
                console.log(val, str);
                if(val === undefined || bracket.get(str) !== val) {
                    return false;
                }
            }else{
                return false;
            }
        }
        if(strs.length === 0) return true;
        return false;

        // const center = Math.floor(s.length/2);
        // let l = 1;
        // let r = 0;
        // while(center+r<s.length) {
        //     console.log(s[center-l], s[center+r]);
        //     if(s[center+r] === ')') {
        //         if(s[center-l] !== '(') {
        //             return false;
        //         }
        //     }else if(s[center+r] === '}') {
        //         if(s[center-l] !== '{') {
        //             return false;
        //         }
        //     }else if(s[center+r] === ']') {
        //         if(s[center-l] !== '[') {
        //             return false;
        //         }
        //     }else{
        //         return false;
        //     }
        //     r++;
        //     l++;
        // }
        // return true;


        // for(let i=center;i<s.length;i++) {
        //     console.log(s[center-i], s[i]);
        //     if(s[i] === ')') {
        //         if(s[center-i] !== '(') {
        //             return false;
        //         }
        //     }else if(s[i] === '}') {
        //         if(s[center-i] !== '{') {
        //             return false;
        //         }
        //     }else if(s[i] === ']') {
        //         if(s[center-i] !== '[') {
        //             return false;
        //         }
        //     }else{
        //         return false;
        //     }
        // }
        // return true;
    }
}
