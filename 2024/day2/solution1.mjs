// To Test: (Need formulahendry.code-runner extension)
// 1. Click in file
// 2. Ctrl + Alt + N
import { getInput, getPerformance, logAnswer } from "../../helpers/commonHelper.mjs";

async function solution(){
    const input = await getInput("2024/day2/input.txt").then(response => response.map(report => report.split(" ")));
    return input.reduce((numSafeReports, report) => {
        const initialDif = report[0] - report[1];

        // Increasing trend and in bounds
        if(validPositives[initialDif]){
            for(let i = 1; i < report.length - 1; i++){
                if(!validPositives[report[i] - report[i + 1]]){
                    return numSafeReports; // Short-circuit
                }
            }
            return numSafeReports + 1;
        }

        // Decreasing trend and in bounds
        else if(validNegatives[initialDif]){
            for(let i = 1; i < report.length - 1; i++){
                if(!validNegatives[report[i] - report[i + 1]]){
                    return numSafeReports; // Short-circuit
                }
            }
            return numSafeReports + 1;
        }

        // Flat trend or exceeded bounds
        else{
            return numSafeReports
        }
    }, 0)
}

const validPositives = {
    '1': true,
    '2': true,
    '3': true,
    _: false
}

const validNegatives = {
    '-1': true,
    '-2': true,
    '-3': true,
    _: false
}

logAnswer(solution);
getPerformance(solution);

// Answer should be 246