class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const cars:number[][] = [];
        const carSpeed:number[]=[];
        for(let i=0;i<position.length;i++) {
            cars.push([position[i], speed[i]]); 
        }
        // positionでsort(降順)
        cars.sort((a, b) => b[0] - a[0]);
        for(const [pos, sp] of cars) {
            const sec = (target - pos) / sp;
            if (sec > (carSpeed.at(-1) ?? 0)) {
                carSpeed.push(sec);
            }
        }
        return carSpeed.length;
    }
}
