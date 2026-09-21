class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const strMap : Map<string, string[]> = new Map();
        //for文で配列から値を取り出す 
        for (const str of strs) {
            //文字列を昇順に並び替える
            const sortedStr = str.split("").sort().join("");
            //strMapに存在しない場合、空配列を追加
            if(!strMap.has(sortedStr)) {
                strMap.set(sortedStr, []);
            }
            //元の文字列を追加する
            strMap.get(sortedStr).push(str);
        }
        return [...strMap.values()];

    }
}
