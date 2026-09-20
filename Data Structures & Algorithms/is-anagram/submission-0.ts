class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const anagramSMap = new Map<string, number>;
        const anagramTMap = new Map<string, number>;        
        for(let i=0; i<s.length; i++) {
            const word = s.slice(i, i+1);
            if(anagramSMap.has(word)) {
                anagramSMap.set(word, anagramSMap.get(word) + 1);
            }else{
                anagramSMap.set(word, 1);
            }
        }
        for(let j=0; j<t.length; j++) {
            const word = t.slice(j, j+1);
            if(anagramTMap.has(word)) {
                anagramTMap.set(word, anagramTMap.get(word) + 1);
            }else{
                anagramTMap.set(word, 1);
            }
        }
        if(anagramSMap.size !== anagramTMap.size) {
            return false;
        }
        for(const [key, value] of anagramSMap.entries()) {
            if(anagramTMap.has(key)) {
                if(value === anagramTMap.get(key)) {
                    continue;
                }
            }
            return false;
        }
        return true;
    }
}
