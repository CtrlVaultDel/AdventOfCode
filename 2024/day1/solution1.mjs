// To Test: (Need formulahendry.code-runner extension)
// 1. Click in file
// 2. Ctrl + Alt + N
import { getInput, getPerformance, logAnswer } from "../../helpers/commonHelper.mjs";

async function solution(){
    const input = await getInput("2024/day1/input.txt");
    const rows = input.map(row => row.split("   "))
    const leftList = rows.map(row => row[0]).sort()
    const rightList = rows.map(row => row[1]).sort()
    return leftList.reduce((acc, cur, idx) => acc + Math.abs(cur - rightList[idx]), 0)
}

logAnswer(solution);
getPerformance(solution);

// Answer should be 1,580,061