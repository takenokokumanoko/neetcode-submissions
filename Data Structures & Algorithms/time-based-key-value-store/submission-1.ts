class TimeMap {
    public keyStore:Map<string, string> = new Map();
    public timestamps:[string, number][] = [];

    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        this.keyStore.set(key + "+" + timestamp.toString(), value);
        this.timestamps.push([key, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        const IntegrationKey = key + "+" + timestamp.toString();
        if(this.keyStore.has(IntegrationKey)){
            return this.keyStore.get(IntegrationKey);
        }else{
            let max:number=-1;
            this.timestamps.forEach((str, num)=>{
                if(str.includes(key)){
                    if(timestamp >= this.timestamps[num][1]) {
                        max = Math.max(max, this.timestamps[num][1])
                    }
                }
            })
            if(max==-1) {
                return "";
            }
            return this.keyStore.get(key + "+" + max.toString());
        }
    }
}
