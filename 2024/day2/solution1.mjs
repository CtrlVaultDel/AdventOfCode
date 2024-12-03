// To Test: (Need formulahendry.code-runner extension)
// 1. Click in file
// 2. Ctrl + Alt + N
import { getInput, getPerformance, logAnswer } from "../../helpers/commonHelper.mjs";

async function solution(){
    const input = await getInput("2024/day2/input.txt");
    const reports = input.map(report => report.split(" "));
    return reports.reduce((acc, cur) => {
        let initialDif = cur[0] - cur[1];
        let isIncreasing = initialDif > 0 && initialDif <= 3;
        let isDecreasing = initialDif < 0 && initialDif >= -3;
        if (isIncreasing || isDecreasing){
            if(cur.length > 2){
                let isSafeReport = true;
                for(let i = 1; i < cur.length - 1; i++){
                    const dif = cur[i] - cur[i+1];
                    if(isIncreasing && dif <= 0 || dif > 3){
                        isSafeReport = false;
                        break;
                    }
                    else if(isDecreasing && dif >= 0 || dif < -3){
                        isSafeReport = false;
                        break;
                    }
                }
                return isSafeReport ? acc + 1 : acc;
            }
            else{
                return acc + 1;
            }
        }
        else{
            return acc;
        }
    }, 0)
}

logAnswer(solution);
getPerformance(solution);

// Answer should be 246