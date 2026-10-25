class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let left:number;
        let right:number;
        const num:number[] = [];
        for(const token of tokens) {
            if(token == "+") {
                right = num.pop();
                left = num.pop();
                num.push(left + right);
            }else if(token == "-") {
                right = num.pop();
                left = num.pop();
                num.push(left - right);
            }else if(token == "*") {
                right = num.pop();
                left = num.pop();
                num.push(left * right);
            }else  if(token == "/") {
                right = num.pop();
                left = num.pop();
                num.push(Math.trunc(left / right));
            }else{
                num.push(Number(token));
            }
        }
        return num.pop();
    }
}
