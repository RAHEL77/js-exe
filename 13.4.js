let step;

function symbols(n) {
    console.log(n)
    for (let i = 0; i < n; i++) {
        step = "#";
        for (j = 1; j < n; j++) {
            if (i >= j)
                step += "#";
            else
                step += " ";
        }
        console.log(step);
    }
}
symbols(4)