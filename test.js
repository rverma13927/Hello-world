/*
Given an array of non-negative integers and a value sum,
determine total number of subset with sum 
equal to given sum.
*/
function SubsetSum( array ,sum){
     let dp =[]; // create an dp array where dp[i] denote number of subset with sum equal to i 
     for (var i = 1; i <= sum; i++) {
         dp[i] =0;
     }
     dp[0]=1;  // since sum equal to 0 is always possible with no element in subset

     for (var i = 0; i < array.length; i++) {
           for (var j = sum; j >= array[i]; j--) {
                 if( j-array[i] >= 0){
                    dp[j] += dp[j-array[i]];
                 }
           }
     }
     return dp[sum];
}

function main () {
     var array=[1,1,1,1];
     var sum=2;
     var result = SubsetSum( array , sum);
     console.log( result );
}
main();