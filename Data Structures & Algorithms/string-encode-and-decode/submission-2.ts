class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded_string: string = "";
        // 各単語の文字数と区切り文字$を各単語の前に記載する
        for (const str of strs) {
            encoded_string += str.length + "$" + str;
        }
        console.log(encoded_string);
        return encoded_string;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let i = 0;
        const decoded_strs: string[] = [];
        while(i<str.length) {
            let j=i;
            while(str[j] !== "$") {
                j++;
            }
            // 文字数を取得
            const wordNum = parseInt(str.slice(i, j), 10);
            console.log("num:" ,wordNum);
            // 文字を取得
            const word = str.slice(j+1, j+1+wordNum);
            console.log(word);
            decoded_strs.push(word);    
            i = j + 1 + wordNum;
            }
        return decoded_strs;
    }
}
