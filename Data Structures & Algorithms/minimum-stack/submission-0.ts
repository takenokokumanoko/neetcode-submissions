class MinStack {
    readonly minStack:number[];
    constructor() {
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.minStack.push(val);
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.minStack.at(-1) ?? undefined;
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return Math.min(...this.minStack) ?? undefined;
    }
}
