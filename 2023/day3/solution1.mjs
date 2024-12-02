// To Test: (Need formulahendry.code-runner extension)
// 1. Click in file
// 2. Ctrl + Alt + N
import { getInput, getPerformance, logAnswer } from "../../helpers/commonHelper.mjs"

async function d3s1(){
    let input = await getInput("2023/day3/input.txt")
    input = input.map(line => line.replace("\r", ""));
    const maxRowIdx = input[0].length - 1;
    const matrix = input.map(line => Array.from(line).map(char => /[\*#\+%&@=$\-/]/g.test(char) ? 'x' : char))
    let sum = 0;
    for(let i = 0; i < matrix.length; i++){
        let idx = 0;
        for(let j = 0; j <= maxRowIdx; j++){
            const curVal = matrix[i][j];
            // Skip if already worked on or is not a number
            if(idx > j || curVal === "x" || curVal  === ".") continue;

            // New number, look for whole number then decide whether or not to add to sum
            else {
                idx = j;
                let numStr = "";
                let coords = [];
                while (!isNaN(matrix[i][idx])){
                    numStr += matrix[i][idx];
                    coords.push(idx);
                    // This will ensure the number is skipped when entering back into loop
                    idx++;
                }
                let start = j - 1 < 0 
                    ? 0 
                    : j - 1;
                let end = idx + 1 > maxRowIdx
                    ? maxRowIdx 
                    : idx + 1;

                // Get row above with one extra on each side
                let rowAbove = matrix[i - 1] ?? [];
                rowAbove = rowAbove.length ? rowAbove.slice(start, end) : []
                // Get row below with one extra on each side
                let rowBelow = matrix[i + 1] ?? []
                rowBelow = rowBelow.length ? rowBelow.slice(start, end) : []
                // Check if there is an x in the row above or below or to either side of the current number.
                if(rowAbove.indexOf("x") !== -1 || rowBelow.indexOf("x") !== -1 || matrix[i][start] === "x" || matrix[i][idx] === "x")
                {
                    sum += Number(numStr)
                }
            }
        }
    }
    return sum;
}
logAnswer(d3s1);
getPerformance(d3s1);