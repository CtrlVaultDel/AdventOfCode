// https://adventofcode.com/2021/day/1

import {input} from "./input.mjs";
import {solutionLabel} from "../../Helpers/solutionLabel.mjs";

const solution = () => {
    const inputArr = input
        .split("\n")
        .map(value => parseInt(value));

    // ============================================
	// ================= Answer 1 =================
	// ============================================
    const performSingleDepthChecks = () => {
        let counter = 0;

        for(let i = 1; i < inputArr.length; i++){
            if(inputArr[i] > inputArr[i - 1]){
                counter++;
            }
        }
        return counter;
    }

    console.log(`Answer #1: ${performSingleDepthChecks()}`);
    
    // ============================================
	// ================= Answer 2 =================
	// ============================================
    const performSlidingDepthChecks = () => {
        const sumArray = (arr, start, end) => arr.slice(start, end).reduce((acc, cur) => acc += cur);

        let counter = 0;
        for(let i = 0; i + 5 <= inputArr.length; i++){
            if(sumArray(inputArr, i, i+3) < sumArray(inputArr, i+3, i+6)){
                counter++;
            }
        }
        return counter
    }
    // length of array is 2000
    console.log(`Answer #2: ${performSlidingDepthChecks()}`)
    // 1806 is too high
}

solutionLabel(solution, 1);