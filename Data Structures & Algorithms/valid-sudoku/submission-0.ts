class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        // note: mapのキーに配列を持ってきてはいけない
        const seen: Set<string> = new Set();

        for (let i = 0 ; i < 9 ; i++) {
            for (let j = 0 ; j < 9 ; j++) {
                const val = board[i][j];
                if (val === "."){
                    continue;
                }
                
                const col_key = `col_${i}_${val}`;
                const row_key = `row_${j}_${val}`;
                const boxes_key = `boxes_${Math.floor(i/3)}_${Math.floor(j/3)}_${val}`;
                if (seen.has(col_key) || seen.has(row_key) || seen.has(boxes_key)) {
                    return false;
                }
                seen.add(col_key);
                seen.add(row_key);
                seen.add(boxes_key);
            }
        }
        return true;
    }
}
