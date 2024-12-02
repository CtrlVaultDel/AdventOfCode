// To Test: (Need formulahendry.code-runner extension)
// 1. Click in file
// 2. Ctrl + Alt + N
import { getInput, getPerformance, logAnswer } from "../../helpers/commonHelper.mjs";

async function solution(){
    const input = await getInput("2024/day1/input.txt");
    const rows = input.map(row => row.split("   "))
    const leftList = rows.map(row => row[0]).sort()
    const rightList = rows.map(row => row[1])
    let total = 0;
    let leftMultiplier = 1;
    let rightMultiplier = 0;
    for(let idx = 0; idx < rows.length; idx++){
        const currentId = leftList[idx];
        if(currentId === leftList[idx + 1]){
            leftMultiplier++;
            continue;
        }
        rightMultiplier = rightList.filter(id => id === currentId).length;
        total += currentId * leftMultiplier * rightMultiplier;
        leftMultiplier = 1;
        rightMultiplier = 0;
    }
    return total;
}

logAnswer(solution);
getPerformance(solution);