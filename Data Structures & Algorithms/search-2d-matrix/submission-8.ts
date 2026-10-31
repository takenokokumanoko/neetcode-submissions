class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const rowN = matrix.length;
        const colN = matrix[0].length;
        let l = 0;
        let r = rowN * colN - 1;
        // 一次元の配列とみなして考える
        while(l<=r) {
            let m = Math.floor((l + r)/2);
            
            let row = Math.floor(m/colN);
            let col = m % colN;
            if(target > matrix[row][col]) {
                l = m + 1;
            }else if(target < matrix[row][col]) {
                r = m - 1;
            }else{
                return true;
            }
        }
        return false;

        // let t = matrix.length - 1;
        // let b = 0;
        // let col = 0

        // while(b<t) {
        //     let m = Math.floor((b+t)/2);
        //     if(target > matrix[m][0]) {
        //         b = m + 1;
        //     }else if(target < matrix[m][0]){
        //         t = m - 1;
        //     }else{
        //         return true;
        //     }
        // }
        // if(target > matrix[b][0]) {
        //     col = b;
        // }else if(target < matrix[b][0]){
        //     col = b - 1;
        //     if(col<0) {
        //         return false;
        //     }
        // }else{
        //     return true;
        // }
        // let r = matrix[0].length - 1;
        // let l = 0;
        // while(l<=r) {
        //     let m = Math.floor((r+l)/2);
        //     if(target < matrix[col][m]) {
        //         r = m - 1;
        //     }else if(target > matrix[col][m]) {
        //         l = m + 1;
        //     }else{
        //         return true;
        //     }
        // }
        // return false;
    }
}
