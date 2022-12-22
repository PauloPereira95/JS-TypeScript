/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let sT = s.split('');
    let sS = t.split('');
    let res;
    for (let i = 0; i < sS.length; i++) {
        for (let index = 0; index < sT.length; index++) {   
            if(sS[i]===sT[i]){
                return true
        } else {
            return false
        
        }
    /*
        if(s.length===t.length){
            return true;
        } else {
            return false;
        }
       */
        }
    }
};
console.log(isIsomorphic('eggs','edde'));