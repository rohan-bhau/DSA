function groupAnagrams(strs: string[]): string[][] {
        const map= new Map<string, string[]>()

        for(const str of strs){
            const key = str.split("").sort().join("")

            if(!map.has(key)){
                map.set(key,[])
            }
            map.get(key)!.push(str)
        }
        return Array.from(map.values())
};