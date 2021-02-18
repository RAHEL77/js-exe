function findSmallest(a, b, c) {
    if (a > b > c) {
        return c;
    } else if (a > c > b) {
        return a;
    } else {
        return b;
    }
}
findSmalest(52, 66, 2);

// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down. 
// --we dont have that kind of comparing a>b>c
// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all.
// --if (a>b && b>c)