// To Test: (Need formulahendry.code-runner extension)
// 1. Click in file
// 2. Ctrl + Alt + N
import { getInput, getPerformance, logAnswer } from "../../helpers/commonHelper.mjs"

async function solution(){
    const input = await getInput("2023/day1/input.txt");
    return input.reduce((acc, cur) => {
        const match = cur.match(/[0-9]/g);                                  // 1. Only capture numbers in the string "a,b,c,1,2,3,d,e,f" -> ["1", "2", "3"]
        const num = Number([match[0], match[match.length - 1]].join(""));   // 2. Get the first and last number & join together ["1", "2", "3"] -> 13
        return acc += num;                                                  // 3. Update accumulator with resulting value from prior step
    }, 0)
}

logAnswer(solution);
getPerformance(solution);