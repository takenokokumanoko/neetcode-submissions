class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // 文字列を小文字数字のみに変換
        const str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        let i=0;
        let j=str.length-1;
        console.log(j);

        while(i<j) {
            console.log(str[i], str[j]);
            if(str[i] !== str[j]){
                return false;
            }
            i++;
            j--;
        }
        return true;
    //     const sum = s.length -1;
    //     console.log(sum);
    //     for (let i=0;i<sum/2 -1;i++) {
    //         if(s[i] === "") {
    //             continue;
    //         }
    //         if(s[sum-i] !== s[i]){
    //             return false;
    //         }
    //     }
    //     return true;
    }
}
