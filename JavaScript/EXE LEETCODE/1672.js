var maximumWealth = function(accounts) {
    let res = 0;
    for (let i = 0; i < accounts.length; i++) {
        let temp = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            temp += accounts[i][j];
        }
        console.log('TEMP: ' + temp);
        res = Math.max(res,temp);
    
    }
    return res;
}
console.log(maximumWealth([[1,5],[7,3],[3,5]]));