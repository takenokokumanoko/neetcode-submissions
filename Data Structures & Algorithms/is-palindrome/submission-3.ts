class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const convertedStr:string = s.toLowerCase().replace(/[^0-9a-z]/g, "");
        let r = convertedStr.length-1;
        for(let l=0;l<convertedStr.length/2;l++) {
            console.log(convertedStr[l], convertedStr[r]);
            if(convertedStr[l] != convertedStr[r]) {
                return false;
            }
            r--;
        }
        return true;
    }
}
