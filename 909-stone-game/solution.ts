function stoneGame(piles: number[]): boolean {

    const n = piles.length;
    const memo: (number | undefined)[][] = Array.from(
        { length: n },
        () => Array(n).fill(undefined)
    );


        function game(beg:number, end:number):number{
            if(beg===end){
                return piles[beg]
            }

            if(memo[beg][end]!==undefined){
                return memo[beg][end]!
            }

            const takenBeg=piles[beg]-game(beg+1, end)
            const takenEnd= piles[end]-game(beg, end-1)

            memo[beg][end]=Math.max(takenBeg,takenEnd)

            return memo[beg][end]!

        }

        return game(0,n-1)>=0

};