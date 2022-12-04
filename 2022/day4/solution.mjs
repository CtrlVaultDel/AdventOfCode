// https://adventofcode.com/2022/day/4

import { input } from "./input.mjs";
import { solutionLabel } from "../../Helpers/solutionLabel.mjs";

const solution = () => {
    // Store assigned pairs as array
    // Each group of pairs is separated by a comma
    const assignedPairs = input
    .split("\n")
    .map(pair => {
        const splitPair = pair.split(',');
        return [splitPair[0], splitPair[1]];
    });

    // ============================================
	// ================= Answer 1 =================
	// ============================================

    // Get the total number of times that one of the pairs in a group encapsulates the other
    const numOfTotalOverlaps_1 = assignedPairs.reduce((totalOverlaps, pairs) => {
        // Split apart the left side of the pair
        const leftPair = pairs[0].split('-'); 
        const leftMin = parseInt(leftPair[0]);
        const leftMax = parseInt(leftPair[1]);

        // Split apart the right side of the pair
        const rightPair = pairs[1].split('-');
        const rightMin = parseInt(rightPair[0]);
        const rightMax = parseInt(rightPair[1]);
     
        // If the min and max of the leftPair are >= the min and max of the right or vice-versa there is an overlap.
        return (leftMin <= rightMin && leftMax >= rightMax || rightMin <= leftMin && rightMax >= leftMax)
            ?   totalOverlaps += 1
            :   totalOverlaps;
    }, 0)

    console.log(`Answer #1: ${numOfTotalOverlaps_1}`);

    // ============================================
	// ================= Answer 2 =================
	// ============================================
    const createArrayFromRange = range => {
        range = range.split("-");
        const newArr = [];
        
        for(let i = parseInt(range[0]); i <= parseInt(range[1]); i++){
            newArr.push(i);
        }
      
        return newArr;
    }

    // Get the total number of times that one of the pairs in a group encapsulates the other
    const numOfTotalOverlaps_2 = assignedPairs.reduce((totalOverlaps, pairs) => {
        // Split apart the left side of the pair
        const leftRange = createArrayFromRange(pairs[0]);
        const rightRange = createArrayFromRange(pairs[1]);

        return leftRange.find(leftVal => rightRange.includes(leftVal))
            ?   totalOverlaps += 1
            :   totalOverlaps
    }, 0)

    console.log(`Answer #2: ${numOfTotalOverlaps_2}`);
}

solutionLabel(solution, 4);