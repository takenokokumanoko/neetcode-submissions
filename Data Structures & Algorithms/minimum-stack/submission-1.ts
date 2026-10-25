class MinStack {
    private minStack:number[] = [];
    private stack:number[] = [];
    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);
        const min = Math.min(val, this.minStack.at(-1) ?? val);
        this.minStack.push(min);
        //this.minStack.push(val);
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack.at(-1)!;
    }

    /**
     * @return {number}
     */
    getMin(): number {
        //return Math.min(...this.minStack) ?? undefined;
        return this.minStack.at(-1)!;
    }
}
