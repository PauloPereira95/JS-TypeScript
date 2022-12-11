var twoSum = function(nums, target) {
    let num1;
    let pos1;
    let pos2;
    let num2;
    let temp;
    let res = [];
    for(let i = 0; i< nums.length;i++){
        for (let x = 1; x < nums.length;x++){
            num1 = parseInt(nums[i]);
            num2 = parseInt(nums[x]);
            console.log(num1 + num2);
            temp = num1 + num2;
            if (temp === target){
               pos1 = nums.indexOf(nums[i]);
               pos2 = nums.indexOf(num2[x]);
               res.splice(0,0,pos1,pos2);
            }
            return
        } 
        return res
    }
};
console.log(twoSum([5,7,2,15]));