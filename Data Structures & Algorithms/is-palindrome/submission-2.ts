class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // // 文字列を小文字数字のみに変換
        // const str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        // let i=0;
        // let j=str.length-1;
        // console.log(j);

        // while(i<j) {
        //     console.log(str[i], str[j]);
        //     if(str[i] !== str[j]){
        //         return false;
        //     }
        //     i++;
        //     j--;
        // }
        // return true;
        let i=0;
        let j=s.length-1;
        const regex = /^[a-zA-z0-9]$/;
        while(i<j) {
            while(!regex.test(s[i]) && i<j){
                i++;
            }
            while(!regex.test(s[j]) && i<j){
                j--;
            }

            console.log(s[i], s[j]);
            if(s[i].toLowerCase() !== s[j].toLowerCase()){
                return false;
            }
            i++;
            j--;
        }
        return true;


    }
}
