// To Test: (Need formulahendry.code-runner extension)
// 1. Click in file
// 2. Ctrl + Alt + N
import { getInput, getPerformance, logAnswer } from "../../helpers/commonHelper.mjs";

async function solution(){
    const input = await getInput("2024/day2/input.txt").then(response => response.map(report => report.split(" ")));
    return input.reduce((numSafeReports, report) => {
        console.log("================================")
        console.log("report", report)
        return numSafeReports + checkIfSafe(report);
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

function checkIfSafe(report, excludeIdx = 0){
    console.log("----------------------------")
    const trimmedReport = report.filter((_,idx) => idx !== excludeIdx)
    console.log("trimmedReport", trimmedReport)
    const initialDif = trimmedReport[0] - trimmedReport[1];
    // Increasing trend and in bounds
    if(validPositives[initialDif]){
        for(let i = 1; i < trimmedReport.length - 1; i++){
            if(!validPositives[trimmedReport[i] - trimmedReport[i + 1]]){
                if(excludeIdx === trimmedReport.length - 1){
                    console.log("Invalid positive, unsafe report")
                    return 0;
                }
                else{
                    console.log("Invalid negative, continuing test")
                    return checkIfSafe(report, excludeIdx + 1);
                }
            }
        }
        console.log("Safe positive report")
        return 1;
    }

    // Decreasing trend and in bounds
    else if(validNegatives[initialDif]){
        for(let i = 1; i < trimmedReport.length - 1; i++){
            if(!validNegatives[trimmedReport[i] - trimmedReport[i + 1]]){
                if(excludeIdx === trimmedReport.length - 1){
                    console.log("Invalid negative, unsafe report")
                    return 0;
                }
                else{
                    console.log("Invalid negative, continuing test")
                    return checkIfSafe(report, excludeIdx + 1);
                }
            }
        }
        console.log("Safe negative report")
        return 1;
    }

    // Flat trend or exceeded bounds
    else{
        if(excludeIdx === trimmedReport.length - 1){
            console.log("initialDif not valid, unsafe report", initialDif)
            return 0;
        }
        else{
            console.log("initialDif not valid, continuing test", initialDif)
            return checkIfSafe(report, excludeIdx + 1)
        }
    }
}

logAnswer(solution);
getPerformance(solution);

// Answer should be 