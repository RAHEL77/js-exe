function calcAverage(arr) {
    var sum;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
calcAverage([85, 90, 92]);

// What is wrong with this code?
// 1. First find the line that contains the problem. Write it
// down.
//--- var sum;
// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// -- has to initialize the sum 
// 4. Fix the code and submit it all.
//-- var sum=0;