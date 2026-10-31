class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let t = matrix.length - 1;
        let b = 0;
        let col = 0

        while(b<t) {
            let m = Math.floor((b+t)/2);
            if(target > matrix[m][0]) {
                b = m + 1;
            }else if(target < matrix[m][0]){
                t = m - 1;
            }else{
                return true;
            }
        }
        if(target > matrix[b][0]) {
            col = b;
        }else if(target < matrix[b][0]){
            col = b - 1;
            if(col<0) {
                return false;
            }
        }else{
            return true;
        }
        let r = matrix[0].length - 1;
        let l = 0;
        while(l<=r) {
            let m = Math.floor((r+l)/2);
            if(target < matrix[col][m]) {
                r = m - 1;
            }else if(target > matrix[col][m]) {
                l = m + 1;
            }else{
                return true;
            }
        }
        return false;
    }
}
