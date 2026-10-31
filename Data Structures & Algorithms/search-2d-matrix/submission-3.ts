class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let t = 0;
        let b = 0;
        let col = 0

        // while(b<=t) {
        //     let m = Math.floor((b+t)/2);
        //     if(target > matrix[m][0]) {
        //         b = m + 1;
        //     }else if(target < matrix[m][0])
        // }

        for(;col<matrix.length;col++) {
            if(target < matrix[col][0]) {
                if(col == 0){
                    return false;
                }
                break;
            }
        }
        col -= 1;
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

        // for(;row<matrix[col].length;row++) {
        //     if(target < matrix[col][row]) {
        //         return false;
        //     }else if(target == matrix[col][row]) {
        //         return true;
        //     }
        // }
        return false;
    }
}
