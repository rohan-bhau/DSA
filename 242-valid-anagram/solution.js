/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let firstString=[...s].sort().join("")
    let secondString=[...t].sort().join("")
    console.log(firstString)
    console.log(secondString)
    if(firstString==secondString){
        return true
    }else{
        return false
    }
};